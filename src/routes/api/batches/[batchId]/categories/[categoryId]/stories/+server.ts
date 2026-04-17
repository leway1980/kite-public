import type { RequestHandler } from '@sveltejs/kit';
import { error, json } from '@sveltejs/kit';
import { MOCK_BATCH_ID, MOCK_BATCH_TIMESTAMP } from '$lib/server/mockData/batch';
import { findCategoryByUuid } from '$lib/server/mockData/categories';
import { MOCK_STORIES_BY_CATEGORY, collectDomains } from '$lib/server/mockData/stories';
import type { BatchStoriesResponse } from '$lib/types';

/**
 * MVP-v1: return stories for a mock category.
 *
 * The `[categoryId]` param in the route is actually a category UUID
 * (see storiesService.ts which passes `categoryUuid` into this slot).
 * `limit` and `lang` query params are accepted; `limit` is honoured,
 * `lang` is ignored since we only ship zh-Hant content.
 */
export const GET: RequestHandler = async ({ params, url }) => {
	const { batchId, categoryId } = params;

	if (batchId !== MOCK_BATCH_ID) {
		throw error(404, `Batch not found: ${batchId}`);
	}

	const category = findCategoryByUuid(categoryId ?? '');
	if (!category) {
		throw error(404, `Category not found: ${categoryId}`);
	}

	const allStories = MOCK_STORIES_BY_CATEGORY[category.uuid] ?? [];
	const limitParam = url.searchParams.get('limit');
	const limit = limitParam
		? Math.max(0, Number.parseInt(limitParam, 10) || allStories.length)
		: allStories.length;
	const stories = allStories.slice(0, limit);

	const body: BatchStoriesResponse = {
		batchId: MOCK_BATCH_ID,
		categoryId: category.categoryId,
		categoryName: category.categoryName,
		timestamp: MOCK_BATCH_TIMESTAMP,
		stories,
		totalStories: allStories.length,
		domains: collectDomains(allStories),
		readCount: category.readCount,
	};

	return json(body);
};