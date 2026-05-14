import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { URL } from 'node:url';

const root = process.cwd();
const storiesPath = path.join(root, 'src/lib/server/mockData/stories.ts');
const categoriesPath = path.join(root, 'src/lib/server/mockData/categories.ts');
const batchPath = path.join(root, 'src/lib/server/mockData/batch.ts');
const outputPath = path.join(root, 'static/data/story-source-index.latest.json');

function runLooseTsObjectModule(filePath, transform) {
	const source = fs.readFileSync(filePath, 'utf8');
	const code = `${transform(source)}\nresult = __EXPORT__;`;
	const context = {};
	vm.createContext(context);
	vm.runInContext(code, context, { filename: filePath });
	return context.result;
}

function loadStoriesByCategoryUuid() {
	return runLooseTsObjectModule(storiesPath, (source) => {
		return source
			.replace(/^import type .*;\r?\n/gm, '')
			.replace(/const (\w+): Story\[\] =/g, 'const $1 =')
			.replace(
				/export const MOCK_STORIES_BY_CATEGORY: Record<string, Story\[]> =/,
				'const MOCK_STORIES_BY_CATEGORY =',
			)
			.replace(/export function collectDomains[\s\S]*$/m, '')
			.concat('\nconst __EXPORT__ = MOCK_STORIES_BY_CATEGORY;');
	});
}

function loadCategories() {
	return runLooseTsObjectModule(categoriesPath, (source) => {
		return source
			.replace(/export interface MockCategory[\s\S]*?\n}\r?\n/m, '')
			.replace(/export const MOCK_CATEGORIES: MockCategory\[] =/, 'const MOCK_CATEGORIES =')
			.replace(/export function findCategoryByUuid[\s\S]*$/m, '')
			.concat('\nconst __EXPORT__ = MOCK_CATEGORIES;');
	});
}

function getStringConst(source, name) {
	const re = new RegExp(`export const ${name} = '([^']*)'`);
	return source.match(re)?.[1] ?? '';
}

function getNumberField(source, name) {
	const re = new RegExp(`${name}:\\s*(\\d+)`);
	return Number(source.match(re)?.[1] ?? 0);
}

function loadBatchMeta() {
	const source = fs.readFileSync(batchPath, 'utf8');
	return {
		id: getStringConst(source, 'MOCK_BATCH_ID'),
		createdAt: getStringConst(source, 'MOCK_BATCH_CREATED_AT'),
		dateSlug: getStringConst(source, 'MOCK_BATCH_DATE_SLUG'),
		totalCategories: getNumberField(source, 'totalCategories'),
		totalClusters: getNumberField(source, 'totalClusters'),
		totalArticles: getNumberField(source, 'totalArticles'),
	};
}

function sourceDomain(url, fallback = '') {
	if (fallback) return fallback;
	try {
		return new URL(url).hostname.toLowerCase().replace(/^www\./, '');
	} catch {
		return '';
	}
}

function addSource(sources, seen, role, url, title = '', domain = '', date = '') {
	if (!url) return;
	const existing = seen.get(url);
	if (existing) {
		if (!existing.roles.includes(role)) existing.roles.push(role);
		if (!existing.title && title) existing.title = title;
		if (!existing.domain) existing.domain = sourceDomain(url, domain);
		if (!existing.date && date) existing.date = date;
		return;
	}

	const item = {
		roles: [role],
		title,
		url,
		domain: sourceDomain(url, domain),
		date,
	};
	seen.set(url, item);
	sources.push(item);
}

function uniqueNonEmpty(values) {
	const seen = new Set();
	const out = [];
	for (const value of values) {
		const text = String(value ?? '').trim();
		if (!text || seen.has(text)) continue;
		seen.add(text);
		out.push(text);
	}
	return out;
}

function buildIndex() {
	const storiesByUuid = loadStoriesByCategoryUuid();
	const categories = loadCategories();
	const batch = loadBatchMeta();
	const categoryByUuid = new Map(categories.map((cat) => [cat.uuid, cat]));
	const stories = [];

	for (const [categoryUuid, categoryStories] of Object.entries(storiesByUuid)) {
		const category = categoryByUuid.get(categoryUuid) ?? {};
		for (const story of categoryStories) {
			const sources = [];
			const seenSources = new Map();

			for (const article of story.articles ?? []) {
				addSource(
					sources,
					seenSources,
					'article',
					article.link,
					article.title,
					article.domain,
					article.date,
				);
			}

			for (const perspective of story.perspectives ?? []) {
				for (const source of perspective.sources ?? []) {
					addSource(sources, seenSources, 'perspective', source.url, source.name);
				}
			}

			addSource(
				sources,
				seenSources,
				'quote',
				story.quote_source_url,
				story.quote_attribution,
				story.quote_source_domain,
			);

			stories.push({
				story_id: story.id ?? '',
				title: story.title ?? '',
				category_uuid: categoryUuid,
				category_id: category.categoryId ?? '',
				category_name: story.category ?? category.categoryName ?? '',
				editorial_lens: story.editorial_lens ?? '',
				cluster_number: story.cluster_number ?? null,
				source_count: sources.length,
				search_terms: uniqueNonEmpty([
					story.id,
					story.title,
					category.categoryId,
					story.category,
					category.categoryName,
					story.editorial_lens,
					...(story.domains ?? []).map((domain) => domain.name),
					...sources.map((source) => source.title),
					...sources.map((source) => source.domain),
				]),
				sources,
			});
		}
	}

	return {
		schema: 'ai-edu-weekly.story-source-index.v1',
		description:
			'Cross-repo lookup index for public AI 教育週報 stories. Search by story title, story_id, category, domain, or source title.',
		generated_at: new Date().toISOString(),
		batch,
		lookup_keywords: [
			'story-source-index',
			'source index',
			'sources',
			'citations',
			'evidence',
			'來源',
			'引用',
			'出處',
			'原文',
			'報導來源',
		],
		source_roles: {
			article: '原始聚類文章來源',
			perspective: '觀點段落引用來源',
			quote: '引述來源',
		},
		stories,
	};
}

const index = buildIndex();
if (index.stories.length === 0) {
	throw new Error('No stories found; refusing to write an empty source index.');
}

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(index, null, 2)}\n`, 'utf8');
console.log(`wrote ${path.relative(root, outputPath)} (${index.stories.length} stories)`);
