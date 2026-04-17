import type { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import { buildBatchMeta } from '$lib/server/mockData/batch';

/**
 * MVP-v1: return hard-coded latest batch metadata from mockData instead
 * of proxying to kite.kagi.com. The `lang` query param is accepted but
 * ignored — we only ship zh-Hant content right now.
 */
export const GET: RequestHandler = async () => {
	return json(buildBatchMeta());
};