import BlackAndWhiteClient from "./content";
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
    languages[l] = `https://easysplit.click/${l}/tools/black-and-white`;
  });

  return {
    title: `${t.bw_title} | Easy Split`,
    description: t.bw_subtitle,
    alternates: {
      canonical: `https://easysplit.click/${lang}/tools/black-and-white`,
      languages: languages,
    },
  };
}

export default async function BlackAndWhitePage({
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
        name: t.bw_title,
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        description: t.bw_subtitle,
        featureList:
          "Convert color image to black and white, Instant processing, Privacy focused",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: t.bw_faq_1_q,
            acceptedAnswer: {
              "@type": "Answer",
              text: t.bw_faq_1_a,
            },
          },
          {
            "@type": "Question",
            name: t.bw_faq_2_q,
            acceptedAnswer: {
              "@type": "Answer",
              text: t.bw_faq_2_a,
            },
          },
          {
            "@type": "Question",
            name: t.bw_faq_3_q,
            acceptedAnswer: {
              "@type": "Answer",
              text: t.bw_faq_3_a,
            },
          },
        ],
      },
      {
        "@type": "HowTo",
        name: t.bw_article_title,
        step: [
          {
            "@type": "HowToStep",
            name: "Upload",
            text: t.bw_how_to_1,
            position: 1,
          },
          {
            "@type": "HowToStep",
            name: "Preview",
            text: t.bw_how_to_2,
            position: 2,
          },
          {
            "@type": "HowToStep",
            name: "Convert",
            text: t.bw_how_to_3,
            position: 3,
          },
          {
            "@type": "HowToStep",
            name: "Download",
            text: t.bw_how_to_4,
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
      <BlackAndWhiteClient />
    </>
  );
}
