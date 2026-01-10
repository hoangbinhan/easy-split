"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { Language } from "@/lib/i18n";
import { Globe } from "lucide-react";

export function Header() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl text-indigo-600 hover:text-indigo-700 transition-colors"
        >
          {t.nav_home}
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="hidden sm:flex text-sm font-medium text-slate-600">
            <Link
              href="/tools/image-splitter"
              className="hover:text-indigo-600 transition-colors"
            >
              {t.nav_splitter}
            </Link>
          </nav>

          {/* Retro Style Language Switcher */}
          <div className="relative group">
            <div className="flex items-center gap-2 border-2 border-slate-900 bg-white px-2 py-1 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all cursor-pointer">
              <Globe className="w-4 h-4 text-slate-900" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="bg-transparent border-none outline-none text-xs font-bold text-slate-900 appearance-none cursor-pointer uppercase tracking-wider pr-4"
                style={{ fontFamily: "monospace" }}
              >
                <option value="en">ENG</option>
                <option value="vi">VIE</option>
                <option value="ko">KOR</option>
                <option value="jp">JPN</option>
              </select>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none border-t-[6px] border-t-slate-900 border-x-[4px] border-x-transparent"></div>
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
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 gap-4">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {t.footer_rights}
        </p>
        <div className="flex gap-6 text-sm font-medium text-slate-600">
          <Link
            href="/privacy"
            className="hover:text-indigo-600 transition-colors"
          >
            {t.privacy}
          </Link>
          <Link
            href="/terms"
            className="hover:text-indigo-600 transition-colors"
          >
            {t.terms}
          </Link>
        </div>
      </div>
    </footer>
  );
}
