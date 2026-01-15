import React from "react";
import { Metadata } from "next";
import TermsContent from "./content";

import { translations, Language } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Language }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[lang] || translations["en"];
  return {
    title: `${t.terms_title} | Easy Split`,
    description: t.terms_conditions_desc.substring(0, 160),
  };
}

export default function TermsPage() {
  return <TermsContent />;
}
