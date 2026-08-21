import { Language } from "./i18n";

/**
 * Build a locale-prefixed path, e.g. localePath("en", "/contact") -> "/en/contact".
 * Static export only emits pages under /[lang]/..., so any internal link
 * must include this prefix or it will 404 on production.
 */
export function localePath(lang: Language | string, path = "") {
  const suffix = path && !path.startsWith("/") ? `/${path}` : path;
  return `/${lang}${suffix}`;
}
