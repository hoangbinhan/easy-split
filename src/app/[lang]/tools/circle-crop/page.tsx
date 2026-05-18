import CircleCropClient from "./content";
import { translations, Language } from "@/lib/i18n";
import { Metadata } from "next";
import { buildToolJsonLd, buildToolMetadata } from "@/lib/seo";

const toolPath = "/tools/circle-crop";

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
    title: `${t.cc_title} | Easy Split`,
    description: t.cc_subtitle,
  });
}

export default async function CircleCropPage({
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
    title: t.cc_title,
    description: t.cc_subtitle,
    featureList: [
      "Crop images into circles",
      "Download transparent PNG",
      "Client-side image processing",
      "No image upload",
    ],
    faq: [
      { question: t.cc_faq_1_q, answer: t.cc_faq_1_a },
      { question: t.cc_faq_2_q, answer: t.cc_faq_2_a },
      { question: t.cc_faq_3_q, answer: t.cc_faq_3_a },
      { question: optionalText.cc_faq_4_q, answer: optionalText.cc_faq_4_a },
      { question: optionalText.cc_faq_5_q, answer: optionalText.cc_faq_5_a },
    ],
    howToName: t.cc_article_title,
    howToSteps: [
      { name: "Upload", text: t.cc_how_to_1 },
      { name: "Adjust", text: t.cc_how_to_2 },
      { name: "Crop", text: t.cc_how_to_3 },
      { name: "Download", text: t.cc_how_to_4 },
    ],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CircleCropClient />
    </>
  );
}
