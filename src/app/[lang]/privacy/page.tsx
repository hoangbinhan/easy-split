import React from "react";
import { Metadata } from "next";
import PrivacyContent from "./content";

import { translations, Language } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Language }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[lang] || translations["en"];
  return {
    title: `${t.privacy_title} | Easy Split`,
    description: t.privacy_commitment_desc,
  };
}

export default function PrivacyPage() {
  return <PrivacyContent />;
}
