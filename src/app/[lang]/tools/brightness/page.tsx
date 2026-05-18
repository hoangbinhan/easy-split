import BrightnessClient from "./content";
import { translations, Language } from "@/lib/i18n";
import { Metadata } from "next";
import { buildToolJsonLd, buildToolMetadata } from "@/lib/seo";

const toolPath = "/tools/brightness";

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
    title: `${t.br_title} | Easy Split`,
    description: t.br_subtitle,
  });
}

export default async function BrightnessPage({
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
    title: t.br_title,
    description: t.br_subtitle,
    featureList: [
      "Adjust image brightness",
      "Lighten or darken photos",
      "Client-side image processing",
      "No image upload",
    ],
    faq: [
      { question: t.br_faq_1_q, answer: t.br_faq_1_a },
      { question: t.br_faq_2_q, answer: t.br_faq_2_a },
      { question: t.br_faq_3_q, answer: t.br_faq_3_a },
      { question: optionalText.br_faq_4_q, answer: optionalText.br_faq_4_a },
    ],
    howToName: t.br_article_title,
    howToSteps: [
      { name: "Upload", text: t.br_how_to_1 },
      { name: "Adjust", text: t.br_how_to_2 },
      { name: "Apply", text: t.br_how_to_3 },
      { name: "Download", text: t.br_how_to_4 },
    ],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BrightnessClient />
    </>
  );
}
