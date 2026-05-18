import {
  staticRoutes,
  baseUrl,
  languages,
  lastModified,
} from "@/lib/sitemap-constants";

export const dynamic = "force-static";

export function generateStaticParams() {
  return languages.map((lang) => ({ id: `${lang}.xml` }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const lang = id.endsWith(".xml") ? id.replace(".xml", "") : id;

  if (!languages.includes(lang)) {
    return new Response(`Not Found: ${lang}`, { status: 404 });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticRoutes
    .map((route) => {
      return `
  <url>
    <loc>${baseUrl}/${lang}${route}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${route === "" ? "daily" : "weekly"}</changefreq>
    <priority>${route === "" ? "1.0" : "0.8"}</priority>
  </url>`;
    })
    .join("")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
