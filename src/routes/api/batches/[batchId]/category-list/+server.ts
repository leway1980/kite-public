import type { RequestHandler } from '@sveltejs/kit';
import { error, json } from '@sveltejs/kit';
import {
	MOCK_BATCH_CREATED_AT,
	MOCK_BATCH_ID,
	MOCK_BATCH_TIMESTAMP,
} from '$lib/server/mockData/batch';
import { MOCK_CATEGORIES } from '$lib/server/mockData/categories';
import type { BatchCategoriesResponse } from '$lib/types';

export const prerender = true;
export const entries = () => [{ batchId: MOCK_BATCH_ID }];

/**
 * MVP-v1: return hard-coded category list for our single mock batch.
 * Non-mock batchIds get 404 (we only have one batch in mock mode).
 */
export const GET: RequestHandler = async ({ params }) => {
	const { batchId } = params;

	if (batchId !== MOCK_BATCH_ID) {
		throw error(404, `Batch not found: ${batchId}`);
	}

	const body: BatchCategoriesResponse = {
		batchId: MOCK_BATCH_ID,
		createdAt: MOCK_BATCH_CREATED_AT,
		hasOnThisDay: false,
		categories: MOCK_CATEGORIES.map((cat) => ({
			id: cat.uuid,
			categoryId: cat.categoryId,
			categoryName: cat.categoryName,
			timestamp: MOCK_BATCH_TIMESTAMP,
			readCount: cat.readCount,
			clusterCount: cat.clusterCount,
		})),
	};

	return json(body);
};