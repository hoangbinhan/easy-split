import ProfileMockupsContent from "./content";
import { translations, Language } from "@/lib/i18n";
import { Metadata } from "next";
import { buildToolJsonLd, buildToolMetadata } from "@/lib/seo";

const toolPath = "/tools/profile-mockups";

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
    title: `${t.pm_title} | Easy Split`,
    description: t.pm_subtitle,
  });
}

export default async function ProfileMockupsPage({
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
    title: t.pm_title,
    description: t.pm_subtitle,
    featureList: [
      "Create TikTok profile mockups",
      "Create Instagram profile mockups",
      "Download profile preview images",
      "Client-side mockup generation",
    ],
    faq: [
      { question: t.pm_faq_1_q, answer: t.pm_faq_1_a },
      { question: t.pm_faq_2_q, answer: t.pm_faq_2_a },
      { question: t.pm_faq_3_q, answer: t.pm_faq_3_a },
      { question: t.pm_faq_4_q, answer: t.pm_faq_4_a },
      { question: optionalText.pm_faq_5_q, answer: optionalText.pm_faq_5_a },
    ],
    howToName: t.pm_article_title,
    howToSteps: [
      { name: "Select Platform", text: t.pm_how_to_1 },
      { name: "Edit Profile", text: t.pm_how_to_2 },
      { name: "Customize Options", text: t.pm_how_to_3 },
      { name: "Download", text: t.pm_how_to_4 },
    ],
  });

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
