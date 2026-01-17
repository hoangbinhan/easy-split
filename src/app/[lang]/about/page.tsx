import React from "react";
import { Metadata } from "next";
import AboutContent from "./content";

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
    languages[l] = `https://easysplit.click/${l}/about`;
  });

  return {
    title: `${t.about_us_title} - Easy Split`,
    description: t.about_mission_desc.substring(0, 160),
    alternates: {
      canonical: `https://easysplit.click/${lang}/about`,
      languages: languages,
    },
  };
}

export default function AboutPage() {
  return <AboutContent />;
}
