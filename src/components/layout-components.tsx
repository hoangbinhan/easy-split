"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { Language } from "@/lib/i18n";
import { ChevronDown, WifiOff } from "lucide-react";
import { useEffect, useState } from "react";

import { Bangers } from "next/font/google";

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
});

export function Header() {
  const { language, setLanguage, t, isLoaded } = useLanguage();
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    setIsOnline(navigator.onLine);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Flag mapping (Using images because Windows doesn't support flag emojis)
  const getFlagUrl = (lang: Language) => {
    const codeMap: Record<Language, string> = {
      en: "us",
      vi: "vn",
      ko: "kr",
      jp: "jp",
      th: "th",
      id: "id",
      es: "es",
      "zh-CN": "cn",
      "zh-TW": "tw",
      de: "de",
      ru: "ru",
      hi: "in",
      "pt-BR": "br",
    };
    return `https://flagcdn.com/w40/${codeMap[lang]}.png`;
  };

  const labels: Record<Language, string> = {
    en: "EN",
    vi: "VN",
    ko: "KR",
    jp: "JP",
    th: "TH",
    id: "ID",
    es: "ES",
    "zh-CN": "CN",
    "zh-TW": "TW",
    de: "DE",
    ru: "RU",
    hi: "HI",
    "pt-BR": "BR",
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b-4 border-black">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className={`flex items-center gap-2 font-black text-2xl uppercase tracking-tighter hover:-rotate-2 transition-transform group ${bangers.className}`}
        >
          <span className="bg-yellow-400 border-4 border-black px-2 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:bg-yellow-300 transition-colors">
            Easy
          </span>
          <span className="text-black hidden sm:inline group-hover:underline decoration-4 decoration-cyan-400 underline-offset-4">
            Split
          </span>
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          {!isOnline && (
            <div className="flex items-center gap-2 bg-red-500 border-2 border-black px-3 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-white font-bold text-xs uppercase animate-pulse">
              <WifiOff className="w-4 h-4" />
              <span className="hidden sm:inline">Offline Mode</span>
            </div>
          )}

          <nav className="flex items-center gap-2 sm:gap-4 font-bold uppercase tracking-wide">
            <Link
              href="/"
              className="hidden sm:block px-4 py-2 border-2 border-transparent hover:border-black hover:bg-cyan-400 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              {isLoaded ? t.nav_splitter : "..."}
            </Link>
            <Link
              href="/blog"
              className="px-3 py-2 sm:px-4 sm:py-2 border-2 border-transparent hover:border-black hover:bg-pink-400 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all sm:text-sm text-xs"
            >
              Blog
            </Link>
          </nav>

          {/* Retro Flag Dropdown (Refined) */}
          {isLoaded && (
            <div className="relative group z-50">
              {/* Visual Button */}
              <div className="flex items-center gap-3 border-4 border-black bg-white px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer min-w-[110px]">
                <Image
                  src={getFlagUrl(language)}
                  alt={language}
                  width={24}
                  height={18}
                  unoptimized
                  className="w-6 h-auto border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
                />
                <span className="font-black text-lg">{labels[language]}</span>
                <ChevronDown className="w-5 h-5 ml-auto border-l-4 border-black pl-1" />
              </div>

              {/* Native Select Overlay for Mobile / Click handling */}
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              >
                <option value="en">🇺🇸 English (US)</option>
                <option value="vi">🇻🇳 Tiếng Việt</option>
                <option value="ko">🇰🇷 한국어</option>
                <option value="jp">🇯🇵 日本語</option>
                <option value="th">🇹🇭 ไทย</option>
                <option value="id">🇮🇩 Indonesia</option>
                <option value="es">🇪🇸 Español</option>
                <option value="zh-CN">🇨🇳 中文 (简体)</option>
                <option value="zh-TW">🇹🇼 中文 (繁體)</option>
                <option value="de">🇩🇪 Deutsch</option>
                <option value="ru">🇷🇺 Русский</option>
                <option value="hi">🇮🇳 हिन्दी</option>
                <option value="pt-BR">🇧🇷 Português (BR)</option>
              </select>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  const { t, isLoaded } = useLanguage();
  if (!isLoaded) return null;

  return (
    <footer className="border-t-4 border-black bg-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-red-500 border-2 border-black"></span>
            <span className="w-4 h-4 rounded-full bg-yellow-500 border-2 border-black"></span>
            <span className="w-4 h-4 rounded-full bg-green-500 border-2 border-black"></span>
          </div>
          <p className="font-bold text-black text-lg">
            © {new Date().getFullYear()} {t.footer_rights}
          </p>
        </div>

        <div className="flex gap-6 text-sm font-black uppercase text-black">
          <Link
            href="/privacy"
            className="hover:bg-yellow-300 px-2 transition-colors"
          >
            {t.privacy}
          </Link>
          <Link
            href="/terms"
            className="hover:bg-pink-300 px-2 transition-colors"
          >
            {t.terms}
          </Link>
          <Link
            href="/about"
            className="hover:bg-cyan-300 px-2 transition-colors"
          >
            {t.about}
          </Link>
          <Link
            href="/contact"
            className="hover:bg-green-300 px-2 transition-colors"
          >
            {t.contact_title}
          </Link>
        </div>
      </div>
    </footer>
  );
}
