import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const supportedLocales = [
  "en",
  "vi",
  "ko",
  "jp",
  "th",
  "id",
  "es",
  "zh-CN",
  "zh-TW",
  "de",
  "ru",
  "hi",
  "pt-BR",
];
const defaultLocale = "en";

// Get the preferred locale from the request
function getLocale(request: NextRequest): string {
  // Check cookie first
  const localeCookie = request.cookies.get("NEXT_LOCALE")?.value;
  if (localeCookie && supportedLocales.includes(localeCookie)) {
    return localeCookie;
  }

  // Check accept-language header
  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    // Simple check for now, can be improved with parsing
    const preferred = acceptLanguage.split(",")[0].split("-")[0]; // e.g., "vi-VN" -> "vi"
    if (supportedLocales.includes(preferred)) {
      return preferred;
    }
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 1. Skip public files and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    pathname.includes(".") // Files like sw.js, icon.png, etc.
  ) {
    return;
  }

  // 2. Check if pathname already has a locale
  const pathnameIsMissingLocale = supportedLocales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // Construct the new URL
    const newUrl = new URL(
      `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
      request.url
    );

    // Redirect
    return NextResponse.redirect(newUrl);
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
  ],
};
