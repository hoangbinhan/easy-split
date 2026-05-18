import React from "react";
import { Metadata } from "next";
import ImageSplitterContent from "./content";
import { translations, Language } from "@/lib/i18n";
import { buildToolJsonLd, buildToolMetadata } from "@/lib/seo";

const toolPath = "/tools/split-image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[lang as Language] || translations["en"];

  return buildToolMetadata({
    lang,
    path: toolPath,
    title: t.split_tool_title,
    description: t.split_tool_desc,
  });
}

export default async function ImageSplitterPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = translations[lang as Language] || translations["en"];
  const optionalText = t as typeof translations["en"] &
    Record<string, string | undefined>;

  const jsonLd = buildToolJsonLd({
    lang,
    path: toolPath,
    title: t.split_tool_title,
    description: t.split_tool_desc,
    featureList: [
      "Split images into equal parts",
      "Create TikTok photo slides",
      "Create Instagram carousel images",
      "Client-side image processing",
      "No image upload",
    ],
    faq: [
      { question: t.faq_1_q, answer: t.faq_1_a },
      { question: t.faq_2_q, answer: t.faq_2_a },
      { question: t.faq_3_q, answer: t.faq_3_a },
      { question: t.faq_4_q, answer: t.faq_4_a },
      { question: optionalText.faq_5_q, answer: optionalText.faq_5_a },
      { question: optionalText.faq_6_q, answer: optionalText.faq_6_a },
      { question: optionalText.faq_7_q, answer: optionalText.faq_7_a },
    ],
    howToName: t.article_title,
    howToSteps: [
      { name: "Upload Image", text: t.how_to_1 },
      { name: "Select Segments", text: t.how_to_2 },
      { name: "Adjust Crop", text: t.how_to_3_desc },
      { name: "Split and Download", text: t.how_to_4 },
    ],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ImageSplitterContent />
    </>
  );
}
