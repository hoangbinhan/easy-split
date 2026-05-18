import type { Metadata } from "next";
import { baseUrl, languages } from "@/lib/sitemap-constants";

type FaqItem = {
  question?: string;
  answer?: string;
};

type HowToStep = {
  name: string;
  text: string;
};

type ToolSeoInput = {
  lang: string;
  path: string;
  title: string;
  description: string;
  featureList: string[];
  faq: FaqItem[];
  howToName: string;
  howToSteps: HowToStep[];
};

const absoluteUrl = (path: string) => `${baseUrl}${path}`;

export function buildLanguageAlternates(path: string) {
  return languages.reduce<Record<string, string>>((acc, lang) => {
    acc[lang] = absoluteUrl(`/${lang}${path}`);
    return acc;
  }, {});
}

export function buildToolMetadata({
  lang,
  path,
  title,
  description,
}: Pick<ToolSeoInput, "lang" | "path" | "title" | "description">): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(`/${lang}${path}`),
      languages: buildLanguageAlternates(path),
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(`/${lang}${path}`),
      type: "website",
      siteName: "Easy Split",
      images: ["/opengraph-image.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function buildToolJsonLd({
  lang,
  path,
  title,
  description,
  featureList,
  faq,
  howToName,
  howToSteps,
}: ToolSeoInput) {
  const url = absoluteUrl(`/${lang}${path}`);
  const faqItems = faq.filter((item) => item.question && item.answer);
  const steps = howToSteps.filter((step) => step.name && step.text);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": `${url}#app`,
        name: title,
        url,
        inLanguage: lang,
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Web",
        isAccessibleForFree: true,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        description,
        featureList,
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        inLanguage: lang,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "HowTo",
        "@id": `${url}#howto`,
        name: howToName,
        inLanguage: lang,
        step: steps.map((step, index) => ({
          "@type": "HowToStep",
          name: step.name,
          text: step.text,
          position: index + 1,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Easy Split",
            item: absoluteUrl(`/${lang}`),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Tools",
            item: absoluteUrl(`/${lang}/tools`),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: title,
            item: url,
          },
        ],
      },
    ],
  };
}
