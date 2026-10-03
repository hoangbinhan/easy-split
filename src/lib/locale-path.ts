import { Language } from "./i18n";

/**
 * Build a locale-prefixed path, e.g. localePath("en", "/contact") -> "/en/contact".
 * The English homepage lives at /; other pages keep their locale prefix.
 */
export function localePath(lang: Language | string, path = "") {
  const suffix = path && !path.startsWith("/") ? `/${path}` : path;
  if (lang === "en" && (!suffix || suffix === "/")) return "/";
  return `/${lang}${suffix}`.replace(/\/$/, "") + "/";
}

export function languageTag(lang: string) {
  return lang === "jp" ? "ja" : lang;
}
