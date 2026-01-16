import Link from "next/link";
import { Header, Footer } from "@/components/layout-components";
import { LanguageProvider } from "@/components/LanguageProvider";
import { translations, Language } from "@/lib/i18n";
import { cookies } from "next/headers";

export const runtime = "edge";

export default async function NotFound() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("NEXT_LOCALE")?.value as Language) || "en";
  // Fallback to English if translation key is missing for the language
  const tSource = translations[lang] || translations["en"];

  // Cast to English type to ensure type safety for keys
  const t = tSource as (typeof translations)["en"];

  // Safe fallback values using the translation keys
  const title = t.not_found_title || "404 - Page Not Found";
  const desc =
    t.not_found_desc || "The page you are looking for does not exist.";
  const home = t.not_found_home || "Return Home";

  return (
    <LanguageProvider initialLocale={lang}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full max-w-7xl flex flex-col items-center justify-center text-center">
          <div className="bg-white border-4 border-black p-8 sm:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-2xl w-full relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-bl-full border-l-4 border-b-4 border-black -mr-4 -mt-4 z-0"></div>

            <div className="relative z-10">
              <h1 className="text-8xl sm:text-9xl font-black mb-4 tracking-tighter text-black">
                404
              </h1>
              <h2 className="text-2xl sm:text-4xl font-black mb-6 uppercase tracking-tight bg-black text-white inline-block px-4 py-2 transform -rotate-1">
                {title}
              </h2>
              <p className="text-lg sm:text-xl font-bold mb-10 text-gray-800 max-w-md mx-auto">
                {desc}
              </p>

              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#FF4D4D] border-4 border-black text-white font-black text-xl uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#FF3333] transition-all"
              >
                {home}
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
