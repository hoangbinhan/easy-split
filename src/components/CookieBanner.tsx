"use client";

import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useLanguage } from "./LanguageProvider";
import { Cookie } from "lucide-react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    // Check if user has already consented
    const consent = Cookies.get("cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookie_consent", "true", { expires: 365 });
    setIsVisible(false);
  };

  const handleDecline = () => {
    Cookies.set("cookie_consent", "false", { expires: 365 });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 z-50 animate-in slide-in-from-bottom duration-300">
      <div className="max-w-4xl mx-auto bg-white border-4 border-black p-4 sm:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <div className="flex items-start gap-4">
          <div className="hidden sm:flex p-2 bg-yellow-300 border-2 border-black shrink-0">
            <Cookie className="w-6 h-6" />
          </div>
          <p className="font-medium text-sm sm:text-base pr-8 sm:pr-0">
            {t.cookie_banner_msg}
          </p>
        </div>

        <div className="flex gap-3 w-full sm:w-auto">
          <button
            onClick={handleDecline}
            className="flex-1 sm:flex-none px-4 py-2 border-2 border-black font-bold uppercase hover:bg-red-100 transition-colors text-sm cursor-pointer w-max"
          >
            {t.cookie_decline_btn}
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 sm:flex-none px-6 py-2 bg-black text-white border-2 border-transparent hover:bg-white hover:text-black hover:border-black font-bold uppercase transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-sm cursor-pointer w-max"
          >
            {t.cookie_accept_btn}
          </button>
        </div>
      </div>
    </div>
  );
}
