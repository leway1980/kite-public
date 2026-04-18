export interface CategoryMetadata {
	categoryId: string;
	categoryType: 'core' | 'community';
	isCore: boolean; // True if maintained by Kagi team
	displayName: string;
	displayNames?: Record<string, string>;
	sourceLanguage?: string;
}

export interface CategoriesMetadataResponse {
	categories: CategoryMetadata[];
}

export interface GroupedCategories {
	core: CategoryMetadata[];
	community: CategoryMetadata[];
}

export interface CategoryGroup {
	type: keyof GroupedCategories;
	title: string;
	categories: CategoryMetadata[];
}

class CategoryMetadataService {
	private cache: CategoryMetadata[] | null = null;

	/**
	 * Fetch category metadata from the API.
	 * Under adapter-static we don't ship /api/categories/metadata — this
	 * endpoint was part of upstream Kagi's contribute/curation flow which
	 * we don't expose. Return empty array so the contribute UI renders a
	 * no-op state instead of spamming the console with fetch errors.
	 */
	async loadMetadata(): Promise<CategoryMetadata[]> {
		if (this.cache) {
			return this.cache;
		}
		this.cache = [];
		return this.cache;
	}

	/**
	 * Group categories by type (core vs community)
	 */
	groupCategories(categories: CategoryMetadata[]): GroupedCategories {
		return {
			core: categories.filter((c) => c.isCore),
			community: categories.filter((c) => !c.isCore),
		};
	}

	/**
	 * Get category groups with metadata for UI display
	 */
	getCategoryGroups(categories: CategoryMetadata[]): CategoryGroup[] {
		const grouped = this.groupCategories(categories);

		const groups: CategoryGroup[] = [
			{
				type: 'core',
				title: 'Kagi Curated',
				categories: grouped.core,
			},
			{
				type: 'community',
				title: 'Community',
				categories: grouped.community,
			},
		];

		return groups.filter((group) => group.categories.length > 0);
	}

	/**
	 * Group categories alphabetically by first letter
	 */
	groupCategoriesAlphabetically(categories: CategoryMetadata[]): Map<string, CategoryMetadata[]> {
		const grouped = new Map<string, CategoryMetadata[]>();

		// Sort categories alphabetically first
		const sorted = [...categories].sort((a, b) => a.displayName.localeCompare(b.displayName));

		for (const category of sorted) {
			const firstLetter = category.displayName.charAt(0).toUpperCase();
			// Handle non-alphabetic characters
			const key = /[A-Z]/.test(firstLetter) ? firstLetter : '#';

			if (!grouped.has(key)) {
				grouped.set(key, []);
			}
			grouped.get(key)!.push(category);
		}

		return grouped;
	}

	/**
	 * Find category metadata by ID
	 */
	findCategoryById(
		categories: CategoryMetadata[],
		categoryId: string,
	): CategoryMetadata | undefined {
		return categories.find((c) => c.categoryId === categoryId.toLowerCase());
	}

	/**
	 * Clear cache (useful for testing or manual refresh)
	 */
	clearCache() {
		this.cache = null;
	}
}

// Export singleton instance
export const categoryMetadataService = new CategoryMetadataService();
