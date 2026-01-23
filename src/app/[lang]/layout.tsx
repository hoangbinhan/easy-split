import { Header, Footer } from "@/components/layout-components";
import { LanguageProvider } from "@/components/LanguageProvider";
import { CookieBanner } from "@/components/CookieBanner";
import { Language } from "@/lib/i18n";

export async function generateStaticParams() {
  return [
    { lang: "en" },
    { lang: "vi" },
    { lang: "ko" },
    { lang: "jp" },
    { lang: "th" },
    { lang: "id" },
    { lang: "es" },
    { lang: "zh-CN" },
    { lang: "zh-TW" },
    { lang: "de" },
    { lang: "ru" },
    { lang: "hi" },
    { lang: "pt-BR" },
  ];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <LanguageProvider initialLocale={lang as Language}>
      <Header />
      <main className="py-4 flex-1 container mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-7xl">
        {children}
      </main>
      <Footer />
      <CookieBanner />
    </LanguageProvider>
  );
}
