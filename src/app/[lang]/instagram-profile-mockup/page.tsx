import { InstagramProfile } from "@/components/mockups/InstagramProfile";
import { Metadata } from "next";
import { translations, Language } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[lang as Language] || translations["en"];
  const languages: Record<string, string> = {};
  (Object.keys(translations) as Language[]).forEach((l) => {
    languages[l] = `https://easysplit.click/${l}/instagram-profile-mockup`;
  });

  return {
    title: t.instagram_mockup_title,
    description: t.instagram_mockup_desc,
    alternates: {
      canonical: `https://easysplit.click/${lang}/instagram-profile-mockup`,
      languages: languages,
    },
  };
}

export default function InstagramMockupPage() {
  return (
    <div className="flex flex-col items-center justify-center py-8 w-full">
      <div className="mb-12 text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter layer-text">
          Instagram Mockup Generator
        </h1>
        <p className="text-lg md:text-xl font-bold text-gray-700 max-w-2xl mx-auto">
          Create realistic Instagram profile mockups for your presentations,
          marketing materials, or just for fun. Click on any element to edit it.
        </p>
      </div>
      <InstagramProfile isDark={false} />
    </div>
  );
}
