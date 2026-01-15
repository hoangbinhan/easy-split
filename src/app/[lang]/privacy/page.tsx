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
  return {
    title: `${t.privacy_title} | Easy Split`,
    description: t.privacy_commitment_desc,
  };
}

export default function PrivacyPage() {
  return <PrivacyContent />;
}
