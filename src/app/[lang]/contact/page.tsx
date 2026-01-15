import React from "react";
import { Metadata } from "next";
import ContactContent from "./content";

import { translations, Language } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Language }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[lang] || translations["en"];
  return {
    title: `${t.contact_title} | Easy Split`,
    description: `${t.contact_subtitle} ${t.contact_email_desc}`,
  };
}

export default function ContactPage() {
  return <ContactContent />;
}
