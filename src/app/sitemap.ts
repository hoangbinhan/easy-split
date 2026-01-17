import { MetadataRoute } from "next";

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

const routes = [
  "",
  "/tools/image-splitter",
  "/about",
  "/privacy",
  "/terms",
  "/cookie-policy",
  "/contact",
  "/blog",
  "/blog/seamless-slide-guide",
  "/blog/tiktok-grid-guide",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://easysplit.click";
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Generate entries for each language
  languages.forEach((lang) => {
    routes.forEach((route) => {
      const url = `${baseUrl}/${lang}${route}`;

      // Determine priority and change frequency based on route
      let priority = 0.5;
      let changeFrequency: "daily" | "weekly" | "monthly" | "yearly" =
        "monthly";

      if (route === "") {
        priority = 1;
        changeFrequency = "daily";
      } else if (route === "/tools/image-splitter") {
        priority = 0.9;
        changeFrequency = "weekly";
      } else if (route.startsWith("/blog")) {
        priority = 0.8;
        changeFrequency = "weekly";
      } else if (route === "/contact" || route === "/about") {
        priority = 0.7;
        changeFrequency = "monthly";
      } else if (
        route === "/privacy" ||
        route === "/terms" ||
        route === "/cookie-policy"
      ) {
        priority = 0.3;
        changeFrequency = "yearly";
      }

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency,
        priority,
      });
    });
  });

  return sitemapEntries;
}
