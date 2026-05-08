import type { LocalizerFunction } from '$lib/types';

export function localizeOr(
	localizer: LocalizerFunction,
	key: string,
	fallback: string,
	view?: Record<string, string>,
): string {
	const value = localizer(key, view);
	return value && value !== key ? value : fallback;
}
