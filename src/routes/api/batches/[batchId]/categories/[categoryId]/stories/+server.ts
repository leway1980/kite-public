import type { RequestHandler } from '@sveltejs/kit';
import { error, json } from '@sveltejs/kit';
import { MOCK_BATCH_ID, MOCK_BATCH_TIMESTAMP } from '$lib/server/mockData/batch';
import { MOCK_CATEGORIES, findCategoryByUuid } from '$lib/server/mockData/categories';
import { MOCK_STORIES_BY_CATEGORY, collectDomains } from '$lib/server/mockData/stories';
import type { BatchStoriesResponse } from '$lib/types';

export const prerender = true;
export const entries = () =>
	MOCK_CATEGORIES.map((cat) => ({
		batchId: MOCK_BATCH_ID,
		categoryId: cat.uuid,
	}));

/**
 * MVP-v1: return stories for a mock category.
 *
 * The `[categoryId]` param in the route is actually a category UUID
 * (see storiesService.ts which passes `categoryUuid` into this slot).
 *
 * Under adapter-static this endpoint is pre-rendered to JSON at build
 * time, so we can't read `url.searchParams` here — static hosts ignore
 * the query string and serve the same file regardless of `?limit=N`.
 * We always return the full story list; client-side UI caps the count
 * if it needs to.
 */
export const GET: RequestHandler = async ({ params }) => {
	const { batchId, categoryId } = params;

	if (batchId !== MOCK_BATCH_ID) {
		throw error(404, `Batch not found: ${batchId}`);
	}

	const category = findCategoryByUuid(categoryId ?? '');
	if (!category) {
		throw error(404, `Category not found: ${categoryId}`);
	}

	const stories = MOCK_STORIES_BY_CATEGORY[category.uuid] ?? [];

	const body: BatchStoriesResponse = {
		batchId: MOCK_BATCH_ID,
		categoryId: category.categoryId,
		categoryName: category.categoryName,
		timestamp: MOCK_BATCH_TIMESTAMP,
		stories,
		totalStories: stories.length,
		domains: collectDomains(stories),
		readCount: category.readCount,
	};

	return json(body);
};