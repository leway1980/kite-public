import type { RequestHandler } from '@sveltejs/kit';
import { error, json } from '@sveltejs/kit';
import { MOCK_BATCH_ID, buildBatchMeta } from '$lib/server/mockData/batch';

/**
 * MVP-v1: return the single mock batch if asked by id.
 * Used by DataLoader.svelte for time-travel parity checks.
 */
export const GET: RequestHandler = async ({ params }) => {
	if (params.batchId !== MOCK_BATCH_ID) {
		throw error(404, `Batch not found: ${params.batchId}`);
	}
	return json(buildBatchMeta());
};