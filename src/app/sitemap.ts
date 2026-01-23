import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://easysplit.click";

const languages = [
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

const staticRoutes = [
  "",
  "/tools/split-image",
  "/tools/circle-crop",
  "/tools/sharpen-image",
  "/tools/black-and-white",
  "/tools/brightness",
  "/tools/profile-mockups",
  "/instagram-profile-mockup",
  "/tiktok-profile-mockup",
  "/blog",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/cookie-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  // Add root route (redirects usually, but good to have)
  routes.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1,
  });

  // Add localized routes
  languages.forEach((lang) => {
    staticRoutes.forEach((route) => {
      routes.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "daily" : "weekly",
        priority: route === "" ? 1 : 0.8,
      });
    });
  });

  return routes;
}
