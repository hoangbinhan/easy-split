import SharpenImageClient from "./content";
import { translations, Language } from "@/lib/i18n";
import { Metadata } from "next";
import { buildToolJsonLd, buildToolMetadata } from "@/lib/seo";

const toolPath = "/tools/sharpen-image";

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
    title: `${t.si_title} | Easy Split`,
    description: t.si_subtitle,
  });
}

export default async function SharpenImagePage({
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
    title: t.si_title,
    description: t.si_subtitle,
    featureList: [
      "Sharpen blurry images",
      "Adjust sharpening intensity",
      "Client-side image processing",
      "No image upload",
    ],
    faq: [
      { question: t.si_faq_1_q, answer: t.si_faq_1_a },
      { question: t.si_faq_2_q, answer: t.si_faq_2_a },
      { question: t.si_faq_3_q, answer: t.si_faq_3_a },
      { question: optionalText.si_faq_4_q, answer: optionalText.si_faq_4_a },
    ],
    howToName: t.si_article_title,
    howToSteps: [
      { name: "Upload", text: t.si_how_to_1 },
      { name: "Adjust Intensity", text: t.si_how_to_2 },
      { name: "Apply Sharpen", text: t.si_how_to_3 },
      { name: "Download", text: t.si_how_to_4 },
    ],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SharpenImageClient />
    </>
  );
}
