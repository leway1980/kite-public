/**
 * Mock category definitions for MVP-v1.
 *
 * `uuid` is the per-batch category instance id used in the stories URL
 * (`/api/batches/{batchId}/categories/{uuid}/stories`).
 * `categoryId` is the stable category slug used in the category list UI
 * (e.g. "ai-news", "ai-education", "taiwan-edu-policy").
 * `categoryName` is the human-facing label shown in the tab bar.
 */

export interface MockCategory {
	uuid: string;
	categoryId: string;
	categoryName: string;
	clusterCount: number;
	readCount: number;
}

export const MOCK_CATEGORIES: MockCategory[] = [
	{
		uuid: 'c0000001-0000-4000-8000-000000000001',
		categoryId: 'ai-news',
		categoryName: 'AI 動態',
		clusterCount: 4,
		readCount: 0,
	},
	{
		uuid: 'c0000005-0000-4000-8000-000000000005',
		categoryId: 'ai-applications',
		categoryName: 'AI 熱門應用',
		clusterCount: 4,
		readCount: 0,
	},
	{
		uuid: 'c0000002-0000-4000-8000-000000000002',
		categoryId: 'ai-education',
		categoryName: 'AI × 教育',
		clusterCount: 5,
		readCount: 0,
	},
	{
		uuid: 'c0000004-0000-4000-8000-000000000004',
		categoryId: 'ai-classroom',
		categoryName: 'AI 教學實戰',
		clusterCount: 5,
		readCount: 0,
	},
	{
		uuid: 'c0000003-0000-4000-8000-000000000003',
		categoryId: 'taiwan-edu-policy',
		categoryName: '教育政策',
		clusterCount: 5,
		readCount: 0,
	},
];

export function findCategoryByUuid(uuid: string): MockCategory | undefined {
	return MOCK_CATEGORIES.find((c) => c.uuid === uuid);
}
