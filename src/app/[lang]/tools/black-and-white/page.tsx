import BlackAndWhiteClient from "./content";
import { translations, Language } from "@/lib/i18n";
import { Metadata } from "next";
import { buildToolJsonLd, buildToolMetadata } from "@/lib/seo";

const toolPath = "/tools/black-and-white";

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
    title: `${t.bw_title} | Easy Split`,
    description: t.bw_subtitle,
  });
}

export default async function BlackAndWhitePage({
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
    title: t.bw_title,
    description: t.bw_subtitle,
    featureList: [
      "Convert images to black and white",
      "Preserve original resolution",
      "Client-side image processing",
      "No image upload",
    ],
    faq: [
      { question: t.bw_faq_1_q, answer: t.bw_faq_1_a },
      { question: t.bw_faq_2_q, answer: t.bw_faq_2_a },
      { question: t.bw_faq_3_q, answer: t.bw_faq_3_a },
      { question: optionalText.bw_faq_4_q, answer: optionalText.bw_faq_4_a },
    ],
    howToName: t.bw_article_title,
    howToSteps: [
      { name: "Upload", text: t.bw_how_to_1 },
      { name: "Preview", text: t.bw_how_to_2 },
      { name: "Convert", text: t.bw_how_to_3 },
      { name: "Download", text: t.bw_how_to_4 },
    ],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlackAndWhiteClient />
    </>
  );
}
