import { languageTag, localePath } from "@/lib/locale-path";
import React from "react";
import { Metadata } from "next";
import PrivacyContent from "./content";

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
    languages[languageTag(l)] = `https://easy-split.pages.dev${localePath(l, "/privacy")}`;
  });

  return {
    title: `${t.privacy_title} | Easy Split`,
    description: t.privacy_commitment_desc,
    alternates: {
      canonical: `https://easy-split.pages.dev${localePath(lang, "/privacy")}`,
      languages: languages,
    },
  };
}

export default function PrivacyPage() {
  return <PrivacyContent />;
}
