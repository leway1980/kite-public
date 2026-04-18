/**
 * Kagi Translate API Service
 *
 * Uses the Kagi Translate API to simplify story content by "translating"
 * from source language to same language with a simpler reading level.
 */

// User-friendly reading level options
export type ReadingLevel = 'very-simple' | 'simple' | 'normal';

export interface TranslateResponse {
	success: boolean;
	translation?: string;
	error?: string;
}

// A simplified story has the same structure as a regular story
export interface SimplifiedStory {
	headline: string;
	summary: string;
	tldr: string;
	[key: string]: unknown;
}

export interface SimplifyStoryResponse {
	success: boolean;
	simplifiedStory?: SimplifiedStory;
	error?: string;
}

// Fields that should NOT be simplified (URLs, metadata, IDs, etc.)
const BLACKLIST = [
	'id',
	'cluster_number',
	'unique_domains',
	'number_of_titles',
	'sourceLanguage',
	'selectedLanguage',
	'category',
	'emoji',
	'articles',
	'domains',
	'primary_image',
	'secondary_image',
];

// Nested fields that contain URLs or metadata (exclude from simplification)
const NESTED_BLACKLIST = [
	'url',
	'link',
	'domain',
	'favicon',
	'sources',
	'date',
	'image',
	'image_caption',
	'credit',
];

// Type for JSON-like values used in simplification
type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue };

/**
 * Recursively filter out blacklisted fields, keeping only user-facing text content
 */
function filterForSimplification(obj: JsonValue, path: string = ''): JsonValue {
	if (typeof obj === 'string') {
		return obj;
	}

	if (Array.isArray(obj)) {
		return obj.map((item, idx) => filterForSimplification(item, `${path}[${idx}]`));
	}

	if (obj && typeof obj === 'object') {
		const filtered: Record<string, JsonValue> = {};
		for (const [key, value] of Object.entries(obj)) {
			// Skip blacklisted top-level fields
			if (path === '' && BLACKLIST.includes(key)) {
				continue;
			}
			// Skip nested URL/metadata fields
			if (NESTED_BLACKLIST.includes(key)) {
				continue;
			}
			filtered[key] = filterForSimplification(value, path ? `${path}.${key}` : key);
		}
		return filtered;
	}

	return obj;
}

/**
 * Recursively merge simplified content back into original structure
 */
function mergeSimplified(original: JsonValue, simplified: JsonValue): JsonValue {
	if (typeof simplified === 'string') {
		return simplified;
	}

	if (Array.isArray(original) && Array.isArray(simplified)) {
		return original.map((item, idx) =>
			simplified[idx] !== undefined ? mergeSimplified(item, simplified[idx]) : item,
		);
	}

	if (original && typeof original === 'object' && simplified && typeof simplified === 'object') {
		const origObj = original as Record<string, JsonValue>;
		const simpObj = simplified as Record<string, JsonValue>;
		const result = { ...origObj };
		for (const key of Object.keys(simpObj)) {
			if (key in origObj) {
				result[key] = mergeSimplified(origObj[key], simpObj[key]);
			}
		}
		return result;
	}

	return original;
}

/**
 * Simplify an entire story by filtering out metadata, simplifying text, and merging back
 * Browser automatically sends session cookies with the request
 */
export async function simplifyStory(
	_story: Record<string, unknown>,
	_languageCode: string,
	_readingLevel: ReadingLevel,
): Promise<SimplifyStoryResponse> {
	// Static build has no /api/simplify server. The feature is gated behind
	// `isSubscriber` in the UI so this is unreachable in practice — fail fast
	// instead of firing a 404 fetch if it's ever triggered.
	return {
		success: false,
		error: 'Simplification is not available in this static build.',
	};
}

/**
 * Map user-friendly reading level to CEFR language complexity level
 * - very-simple: A2 (elementary)
 * - simple: B1 (intermediate)
 * - normal: B2 (upper intermediate)
 */
function mapReadingLevel(readingLevel: ReadingLevel): 'a2' | 'b1' | 'b2' {
	switch (readingLevel) {
		case 'very-simple':
			return 'a2';
		case 'simple':
			return 'b1';
		case 'normal':
			return 'b2';
		default:
			return 'b1'; // Default to simple/intermediate
	}
}
