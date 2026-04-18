import locales from "$lib/locales";
import type { LayoutServerLoad } from "./$types";

export const prerender = true;

export const load: LayoutServerLoad = async () => {
  return {
    locale: "zh-Hant",
    strings: locales["zh-Hant"],
  };
};
