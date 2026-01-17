import React from "react";
import { Metadata } from "next";
import TermsContent from "./content";

import { translations, Language } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[lang as Language] || translations["en"];
  const languages: Record<string, string> = {};
  (Object.keys(translations) as Language[]).forEach((l) => {
    languages[l] = `https://easysplit.click/${l}/terms`;
  });

  return {
    title: `${t.terms_title} | Easy Split`,
    description: t.terms_conditions_desc.substring(0, 160),
    alternates: {
      canonical: `https://easysplit.click/${lang}/terms`,
      languages: languages,
    },
  };
}

export default function TermsPage() {
  return <TermsContent />;
}
