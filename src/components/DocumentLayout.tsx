import type { Metadata, Viewport } from "next";
import { ConsentScripts } from "@/components/ConsentScripts";
import { languageTag } from "@/lib/locale-path";
import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://easysplit.click",
  ),
  title: "Easy Split - Split Photos for TikTok & Instagram",
  description:
    "Free tool to split photos into seamless carousel slides for TikTok and Instagram. No watermark, no upload needed.",
  applicationName: "Easy Split",
  other: { "google-adsense-account": "ca-pub-6546615127998089" },

  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "Easy Split",
    statusBarStyle: "default",
  },
  openGraph: {
    title: "Easy Split - Free Image Splitter",
    description: "Split photos into seamless grids/slides instantly.",
    type: "website",
    locale: "en_US",
    siteName: "Easy Split",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  twitter: {
    card: "summary_large_image",
    title: "Easy Split",
    description: "Create seamless photo slides for TikTok/IG.",
  },
  formatDetection: {
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FACC15",
};

export function DocumentLayout({ children, lang }: { children: React.ReactNode; lang: string }) {
  return (
    <html lang={languageTag(lang)}>
      <body className={`${inter.className} min-h-screen flex flex-col bg-[#FFFDF5] text-black antialiased selection:bg-black selection:text-white`}>
        {children}
        <ConsentScripts />
      </body>
    </html>
  );
}
