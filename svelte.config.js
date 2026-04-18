import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// Supported locales — must match filenames in src/lib/locales/*.json.
const LOCALES = [
	'ar',
	'de',
	'en',
	'es',
	'et',
	'fr',
	'he',
	'hi',
	'it',
	'ja',
	'nl',
	'pt',
	'ru',
	'uk',
	'zh-Hans',
	'zh-Hant',
];

// ⚠️ Must stay in sync with src/lib/server/mockData/batch.ts + categories.ts.
// Any synthesis agent that bumps MOCK_BATCH_ID (e.g. to signal a new batch)
// MUST update this value too, otherwise the prerender entries will produce
// 404s on the static site.
const MOCK_BATCH_ID = 'b1a7e2c0-0000-4000-8000-000000000002';
const MOCK_CATEGORY_UUIDS = [
	'c0000001-0000-4000-8000-000000000001',
	'c0000002-0000-4000-8000-000000000002',
	'c0000003-0000-4000-8000-000000000003',
	'c0000004-0000-4000-8000-000000000004',
	'c0000005-0000-4000-8000-000000000005',
];

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '200.html',
			precompress: false,
			strict: false,
		}),
		paths: {
			// GitHub Pages serves from /kite-public subpath.
			// Workflow sets BASE_PATH=/kite-public; local build leaves it empty.
			base: process.env.BASE_PATH ?? '',
		},
		prerender: {
			entries: [
				'*',
				'/api/batches/latest',
				`/api/batches/${MOCK_BATCH_ID}/category-list`,
				...MOCK_CATEGORY_UUIDS.map(
					(uuid) => `/api/batches/${MOCK_BATCH_ID}/categories/${uuid}/stories`,
				),
				...LOCALES.map((lang) => `/api/locale/${lang}`),
			],
			handleHttpError: 'warn',
			handleMissingId: 'warn',
			handleUnseenRoutes: 'warn',
		},
		csrf: {
			trustedOrigins: ['*'],
		},
	},
};

export default config;
