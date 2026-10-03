import { Header, Footer } from "@/components/layout-components";
import { LanguageProvider } from "@/components/LanguageProvider";
import { CookieBanner } from "@/components/CookieBanner";
import { AdBanner } from "@/components/AdBanner";
import type { Language } from "@/lib/i18n";

export function SiteLayout({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: Language;
}) {
  return (
    <LanguageProvider initialLocale={lang}>
      <Header />
      <main className="py-4 flex-1 container mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-7xl">
        {children}
      </main>
      <Footer />
      <CookieBanner />
      <AdBanner />
    </LanguageProvider>
  );
}
