/**
 * Format a timeline date for display using Intl.DateTimeFormat.
 *
 * Detects precision from the ISO string:
 * - "YYYY-MM-DD" → day + month (+ year only if different from batch)
 * - "YYYY-MM"    → month (+ year only if different from batch)
 * - "YYYY"       → year always shown
 *
 * Uses day-first ordering for region-agnostic readability
 * (e.g., "12 February 2026" not "February 12, 2026").
 *
 * Falls back to originalDate when dateIso is missing or invalid.
 */
export function formatTimelineDate(
	dateIso: string | undefined,
	originalDate: string,
	locale: string,
	batchYear: number,
): string {
	if (!dateIso) {
		return originalDate;
	}

	const precision = detectPrecision(dateIso);
	if (!precision) {
		return originalDate;
	}

	// Our site defaults language to 'default' (server-rendered zh-Hant). 'default'
	// is not a valid BCP-47 tag, so map it to zh-Hant for Intl.DateTimeFormat.
	const normalizedLocale = !locale || locale === 'default' ? 'zh-Hant' : locale;

	try {
		if (precision === 'year') {
			return dateIso;
		}

		if (precision === 'month') {
			const [year, month] = dateIso.split('-').map(Number);
			const date = new Date(Date.UTC(year, month - 1, 1));
			const showYear = year !== batchYear;
			const monthName = new Intl.DateTimeFormat(normalizedLocale, {
				month: 'long',
				timeZone: 'UTC',
			}).format(date);
			return showYear ? `${monthName} ${year}` : monthName;
		}

		// Full date: YYYY-MM-DD
		const [year, month, day] = dateIso.split('-').map(Number);
		const date = new Date(Date.UTC(year, month - 1, day));
		const showYear = year !== batchYear;
		const formatted = new Intl.DateTimeFormat(normalizedLocale, {
			month: 'long',
			day: 'numeric',
			year: showYear ? 'numeric' : undefined,
			timeZone: 'UTC',
		}).format(date);
		return formatted;
	} catch {
		return originalDate;
	}
}

type Precision = 'full' | 'month' | 'year' | null;

function detectPrecision(dateIso: string): Precision {
	if (/^\d{4}-\d{2}-\d{2}$/.test(dateIso)) return 'full';
	if (/^\d{4}-\d{2}$/.test(dateIso)) return 'month';
	if (/^\d{4}$/.test(dateIso)) return 'year';
	return null;
}
