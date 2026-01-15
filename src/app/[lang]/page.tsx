import ImageSplitterContent from "./tools/image-splitter/content";
import { translations, Language } from "@/lib/i18n";

import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[lang as Language] || translations["en"];
  return {
    title: t.title,
    description: t.subtitle,
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = translations[lang as Language] || translations["en"];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Easy Split",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        description: t.subtitle,
        featureList: "Split images, create carousels, TikTok photo mode",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: t.faq_1_q,
            acceptedAnswer: {
              "@type": "Answer",
              text: t.faq_1_a,
            },
          },
          {
            "@type": "Question",
            name: t.faq_2_q,
            acceptedAnswer: {
              "@type": "Answer",
              text: t.faq_2_a,
            },
          },
          {
            "@type": "Question",
            name: t.faq_3_q,
            acceptedAnswer: {
              "@type": "Answer",
              text: t.faq_3_a,
            },
          },
          {
            "@type": "Question",
            name: t.faq_4_q,
            acceptedAnswer: {
              "@type": "Answer",
              text: t.faq_4_a,
            },
          },
        ],
      },
      {
        "@type": "HowTo",
        name: t.article_title,
        step: [
          {
            "@type": "HowToStep",
            name: "Upload Image",
            text: t.how_to_1,
            position: 1,
          },
          {
            "@type": "HowToStep",
            name: "Select Segments",
            text: t.how_to_2,
            position: 2,
          },
          {
            "@type": "HowToStep",
            name: "Adjust Crop",
            text: "Adjust the crop area if needed.",
            position: 3,
          },
          {
            "@type": "HowToStep",
            name: "Split and Download",
            text: t.how_to_3, // Note: how_to_3 in translation includes '...then click Split', how_to_4 is download.
            position: 4,
          },
        ],
      },
    ],
  };

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
