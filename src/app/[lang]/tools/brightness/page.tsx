import BrightnessClient from "./content";
import { translations, Language } from "@/lib/i18n";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[lang as Language] || translations["en"];
  const languages: Record<string, string> = {};
  (Object.keys(translations) as Language[]).forEach((l) => {
    languages[l] = `https://easysplit.click/${l}/tools/brightness`;
  });

  return {
    title: `${t.br_title} | Easy Split`,
    description: t.br_subtitle,
    alternates: {
      canonical: `https://easysplit.click/${lang}/tools/brightness`,
      languages: languages,
    },
  };
}

export default async function BrightnessPage({
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
        name: t.br_title,
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        description: t.br_subtitle,
        featureList: "Adjust image brightness, Instant processing, No upload",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: t.br_faq_1_q,
            acceptedAnswer: {
              "@type": "Answer",
              text: t.br_faq_1_a,
            },
          },
          {
            "@type": "Question",
            name: t.br_faq_2_q,
            acceptedAnswer: {
              "@type": "Answer",
              text: t.br_faq_2_a,
            },
          },
          {
            "@type": "Question",
            name: t.br_faq_3_q,
            acceptedAnswer: {
              "@type": "Answer",
              text: t.br_faq_3_a,
            },
          },
        ],
      },
      {
        "@type": "HowTo",
        name: t.br_article_title,
        step: [
          {
            "@type": "HowToStep",
            name: "Upload",
            text: t.br_how_to_1,
            position: 1,
          },
          {
            "@type": "HowToStep",
            name: "Adjust",
            text: t.br_how_to_2,
            position: 2,
          },
          {
            "@type": "HowToStep",
            name: "Apply",
            text: t.br_how_to_3,
            position: 3,
          },
          {
            "@type": "HowToStep",
            name: "Download",
            text: t.br_how_to_4,
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
      <BrightnessClient />
    </>
  );
}
