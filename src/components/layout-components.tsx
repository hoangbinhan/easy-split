"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { Language } from "@/lib/i18n";
import { Globe, Github, Twitter } from "lucide-react";

export function Header() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b-4 border-black">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-black text-2xl uppercase tracking-tighter hover:-rotate-2 transition-transform"
        >
          <span className="bg-yellow-400 border-2 border-black px-2 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            TikTok
          </span>
          <span className="text-black">Tool Pro</span>
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="hidden sm:flex text-sm font-bold uppercase tracking-wide">
            <Link
              href="/tools/image-splitter"
              className="px-4 py-2 border-2 border-transparent hover:border-black hover:bg-cyan-400 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              {t.nav_splitter}
            </Link>
          </nav>

          {/* Retro Style Language Switcher */}
          <div className="relative group">
            <div className="flex items-center gap-2 border-2 border-black bg-white px-3 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all cursor-pointer">
              <Globe className="w-5 h-5 text-black" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="bg-transparent border-none outline-none text-sm font-black text-black appearance-none cursor-pointer uppercase tracking-wider pr-6 focus:ring-0"
                style={{ fontFamily: "monospace" }}
              >
                <option value="en">ENG</option>
                <option value="vi">VIE</option>
                <option value="ko">KOR</option>
                <option value="jp">JPN</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none border-t-[8px] border-t-black border-x-[5px] border-x-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t-4 border-black bg-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="font-bold text-black text-lg">
            © {new Date().getFullYear()} {t.footer_rights}
          </p>
          <div className="flex gap-4">
            <div className="w-8 h-8 flex items-center justify-center border-2 border-black bg-pink-400 hover:bg-pink-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer transition-all">
              <Github className="w-5 h-5" />
            </div>
            <div className="w-8 h-8 flex items-center justify-center border-2 border-black bg-cyan-400 hover:bg-cyan-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer transition-all">
              <Twitter className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="flex gap-6 text-sm font-black uppercase text-black">
          <Link
            href="/privacy"
            className="hover:underline decoration-4 underline-offset-4 decoration-yellow-400"
          >
            {t.privacy}
          </Link>
          <Link
            href="/terms"
            className="hover:underline decoration-4 underline-offset-4 decoration-pink-400"
          >
            {t.terms}
          </Link>
        </div>
      </div>
    </footer>
  );
}
