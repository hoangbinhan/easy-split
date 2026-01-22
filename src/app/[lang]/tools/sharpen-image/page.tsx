import SharpenImageClient from "./content";
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
    languages[l] = `https://easysplit.click/${l}/tools/sharpen-image`;
  });

  return {
    title: `${t.si_title} | Easy Split`,
    description: t.si_subtitle,
    alternates: {
      canonical: `https://easysplit.click/${lang}/tools/sharpen-image`,
      languages: languages,
    },
  };
}

export default async function SharpenImagePage({
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
        name: t.si_title,
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        description: t.si_subtitle,
        featureList:
          "Sharpen blurry images, adjust intensity, instant download",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: t.si_faq_1_q,
            acceptedAnswer: {
              "@type": "Answer",
              text: t.si_faq_1_a,
            },
          },
          {
            "@type": "Question",
            name: t.si_faq_2_q,
            acceptedAnswer: {
              "@type": "Answer",
              text: t.si_faq_2_a,
            },
          },
          {
            "@type": "Question",
            name: t.si_faq_3_q,
            acceptedAnswer: {
              "@type": "Answer",
              text: t.si_faq_3_a,
            },
          },
        ],
      },
      {
        "@type": "HowTo",
        name: t.si_article_title,
        step: [
          {
            "@type": "HowToStep",
            name: "Upload",
            text: t.si_how_to_1,
            position: 1,
          },
          {
            "@type": "HowToStep",
            name: "Adjust Intensity",
            text: t.si_how_to_2,
            position: 2,
          },
          {
            "@type": "HowToStep",
            name: "Apply Sharpen",
            text: t.si_how_to_3,
            position: 3,
          },
          {
            "@type": "HowToStep",
            name: "Download",
            text: t.si_how_to_4,
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
      <SharpenImageClient />
    </>
  );
}
