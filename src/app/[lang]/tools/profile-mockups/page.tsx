import ProfileMockupsContent from "./content";
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
    languages[l] = `https://easysplit.click/${l}/tools/profile-mockups`;
  });

  return {
    title: `${t.pm_title} | Easy Split`,
    description: t.pm_subtitle,
    alternates: {
      canonical: `https://easysplit.click/${lang}/tools/profile-mockups`,
      languages: languages,
    },
  };
}

export default async function ProfileMockupsPage({
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
        name: t.pm_title,
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        description: t.pm_subtitle,
        featureList: "Create fake TikTok profile, Instagram mockup generator",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: t.pm_faq_1_q,
            acceptedAnswer: {
              "@type": "Answer",
              text: t.pm_faq_1_a,
            },
          },
          {
            "@type": "Question",
            name: t.pm_faq_2_q,
            acceptedAnswer: {
              "@type": "Answer",
              text: t.pm_faq_2_a,
            },
          },
          {
            "@type": "Question",
            name: t.pm_faq_3_q,
            acceptedAnswer: {
              "@type": "Answer",
              text: t.pm_faq_3_a,
            },
          },
          {
            "@type": "Question",
            name: t.pm_faq_4_q,
            acceptedAnswer: {
              "@type": "Answer",
              text: t.pm_faq_4_a,
            },
          },
        ],
      },
      {
        "@type": "HowTo",
        name: t.pm_article_title,
        step: [
          {
            "@type": "HowToStep",
            name: "Select Platform",
            text: t.pm_how_to_1,
            position: 1,
          },
          {
            "@type": "HowToStep",
            name: "Edit Profile",
            text: t.pm_how_to_2,
            position: 2,
          },
          {
            "@type": "HowToStep",
            name: "Customize Options",
            text: t.pm_how_to_3,
            position: 3,
          },
          {
            "@type": "HowToStep",
            name: "Download",
            text: t.pm_how_to_4,
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
      <ProfileMockupsContent />
    </>
  );
}
