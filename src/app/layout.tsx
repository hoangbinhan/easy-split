import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const NODE_ENV = process.env.NODE_ENV;

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://easysplit.click",
  ),
  title: "Easy Split - Split Photos for TikTok & Instagram",
  description:
    "Free tool to split photos into seamless carousel slides for TikTok and Instagram. No watermark, no upload needed.",
  applicationName: "Easy Split",

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5915469150707514"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-[#FFFDF5] text-black antialiased selection:bg-black selection:text-white`}
      >
        {children}
        {NODE_ENV === "production" && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-WBG2FZTPRZ"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-WBG2FZTPRZ');
          `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
