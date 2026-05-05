/**
 * Mock batch metadata for MVP-v1.
 *
 * In real deployment this would come from the weekly pipeline.
 * For now we hard-code a single "latest" batch so the UI has
 * something to render.
 */

export const MOCK_BATCH_ID = 'b1a7e2c0-0000-4000-8000-000000000002';
export const MOCK_BATCH_CREATED_AT = '2026-05-05T05:34:14.000Z';
export const MOCK_BATCH_DATE_SLUG = '2026-04-18.1';
// Unix timestamp (seconds) for the stories' timestamp field
export const MOCK_BATCH_TIMESTAMP = Math.floor(
	new Date(MOCK_BATCH_CREATED_AT).getTime() / 1000,
);

export interface MockBatchMeta {
	id: string;
	createdAt: string;
	dateSlug: string;
	language: string;
	totalCategories: number;
	totalClusters: number;
	totalArticles: number;
	totalReadCount: number;
}

/**
 * Shape returned by `/api/batches/latest` and `/api/batches/{batchId}`.
 * Matches the fields the client actually reads (see DataLoader.svelte,
 * batchService.ts, TimeTravel.svelte).
 */
export function buildBatchMeta(): MockBatchMeta {
	return {
		id: MOCK_BATCH_ID,
		createdAt: MOCK_BATCH_CREATED_AT,
		dateSlug: MOCK_BATCH_DATE_SLUG,
		language: 'zh-Hant',
		totalCategories: 5,
		totalClusters: 23,
		totalArticles: 204,
		totalReadCount: 0,
	};
}
