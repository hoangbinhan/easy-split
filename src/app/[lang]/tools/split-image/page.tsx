import React from "react";
import { Metadata } from "next";
import ImageSplitterContent from "./content";
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
    languages[l] = `https://easysplit.click/${l}/tools/split-image`;
  });

  return {
    title: t.split_tool_title,
    description: t.split_tool_desc,
    alternates: {
      canonical: `https://easysplit.click/${lang}/tools/split-image`,
      languages: languages,
    },
  };
}

export default function ImageSplitterPage() {
  return <ImageSplitterContent />;
}
