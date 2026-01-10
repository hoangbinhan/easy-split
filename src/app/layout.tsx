import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TikTok Tool Pro - Advanced Image & Video Tools",
  description:
    "Free professional tools for TikTok creators. Split images, edit videos, and more.",
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
  themeColor: "#6366f1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased`}
      >
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-xl">
          <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              TikTok Tool Pro
            </Link>
            <nav className="flex gap-4 text-sm font-medium text-slate-600">
              <Link
                href="/tools/image-splitter"
                className="hover:text-indigo-600 transition-colors"
              >
                Image Splitter
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full max-w-7xl">
          {children}
        </main>

        <footer className="border-t border-slate-200 bg-white py-8">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} TikTok Tool Pro. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm font-medium text-slate-600">
              <Link
                href="/privacy"
                className="hover:text-indigo-600 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-indigo-600 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
