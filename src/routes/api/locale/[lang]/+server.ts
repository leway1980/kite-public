import type { RequestHandler } from '@sveltejs/kit';
import { error, json } from '@sveltejs/kit';
import locales from '$lib/locales';

// Pre-render one JSON per supported locale at build time so we can ship
// the whole thing as static files instead of proxying to kite.kagi.com.
export const prerender = true;
export const entries = () => Object.keys(locales).map((lang) => ({ lang }));

export const GET: RequestHandler = async ({ params }) => {
	const { lang } = params;
	const dict = lang ? locales[lang] : undefined;
	if (!dict) {
		throw error(404, `Locale not found: ${lang}`);
	}
	return json({ strings: dict, locale: lang });
};
