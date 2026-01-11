"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Language } from "@/lib/i18n";
import Cookies from "js-cookie";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (typeof translations)["en"];
  isLoaded: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
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

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    Cookies.set("NEXT_LOCALE", lang, { expires: 365 });
  };

  const value = {
    language,
    setLanguage,
    t: translations[language],
    isLoaded,
  };

  // Prevent hydration mismatch by initially rendering children only after mount
  // or accepting that the initial server render (Default EN) might differ from Client.
  // A common pattern is to render the children immediately but allow the language to switch
  // rapidly on mount. However, for a "provider" that wraps the whole app,
  // holding back rendering can cause a blank screen.
  // Best practice for Next.js app dir is often to accept the default, then switch.
  // But to avoid "Text content does not match server-rendered HTML", we can use `isLoaded`.
  // If we return null when !isLoaded, we get a white flash.

  // Strategy: We render with default 'en'. If the user's lang is different, it updates in useEffect.
  // To suppress hydration warnings for text that *will* change, we can suppressHydrationWarning on specific elements,
  // but that's manual.
  // Since this is a specialized tool, we will just render.

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
