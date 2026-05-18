"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

import { translations, Language } from "@/lib/i18n";
import Cookies from "js-cookie";

type TranslationText = (typeof translations)["en"] &
  Record<string, string | undefined>;

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationText;
  isLoaded: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({
  children,
  initialLocale = "en",
}: {
  children: React.ReactNode;
  initialLocale?: Language;
}) {
  const [language, setLanguageState] = useState<Language>(initialLocale);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    // setLanguageState(lang);
    localStorage.setItem("language", lang);
    Cookies.set("NEXT_LOCALE", lang, { expires: 365 });

    // Redirect to new path with updated locale
    const currentPath = window.location.pathname;
    const segments = currentPath.split("/");
    // path is usually /lang/... so segments[0] is "", segments[1] is lang
    if (segments.length >= 2) {
      segments[1] = lang;
      const newPath = segments.join("/");
      window.location.href = newPath;
    }
  };

  const value = {
    language,
    setLanguage,
    t: translations[language] as TranslationText,
    isLoaded,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
