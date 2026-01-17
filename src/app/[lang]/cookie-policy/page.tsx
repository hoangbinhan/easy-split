import React from "react";
import { Metadata } from "next";
import CookiePolicyContent from "./content";
import { cookiePolicy } from "./cookie-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = cookiePolicy[lang] || cookiePolicy["en"];

  const supportedLocales = [
    "en",
    "vi",
    "ko",
    "jp",
    "th",
    "id",
    "es",
    "zh-CN",
    "zh-TW",
    "de",
    "ru",
    "hi",
    "pt-BR",
  ];
  const languages: Record<string, string> = {};
  supportedLocales.forEach((l) => {
    languages[l] = `https://easysplit.click/${l}/cookie-policy`;
  });

  return {
    title: `${t.title} | Easy Split`,
    description: t.intro.substring(0, 160),
    alternates: {
      canonical: `https://easysplit.click/${lang}/cookie-policy`,
      languages: languages,
    },
  };
}

export default function CookiePolicyPage() {
  return <CookiePolicyContent />;
}
