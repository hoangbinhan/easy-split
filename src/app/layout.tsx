import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Header, Footer } from "@/components/layout-components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Easy Split - Free Image Splitter Tool",
  description: "Free professional tools for TikTok creators.",
  applicationName: "TikTok Tool Pro",
  appleWebApp: {
    capable: true,
    title: "TikTok Tool Pro",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#FACC15",
};

import { cookies } from "next/headers";
import { Language } from "@/lib/i18n";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const locale = (cookieStore.get("NEXT_LOCALE")?.value as Language) || "en";

  return (
    <html lang={locale}>
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-[#FFFDF5] text-black antialiased selection:bg-black selection:text-white`}
      >
        <LanguageProvider initialLocale={locale}>
          <Header />
          <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full max-w-7xl">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
