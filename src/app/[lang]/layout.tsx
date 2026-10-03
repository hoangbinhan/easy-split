import { DocumentLayout } from "@/components/DocumentLayout";
export { metadata, viewport } from "@/components/DocumentLayout";
import { SiteLayout } from "@/components/SiteLayout";
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
    <DocumentLayout lang={lang}>
      <SiteLayout lang={lang as Language}>{children}</SiteLayout>
    </DocumentLayout>
  );
}
