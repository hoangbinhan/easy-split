"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Image from "next/image";
import { X } from "lucide-react";

export function AdBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [liftForCookieBanner, setLiftForCookieBanner] = useState(false);

  useEffect(() => {
    setLiftForCookieBanner(!Cookies.get("cookie_consent"));
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed right-2 sm:right-4 z-40 w-56 sm:w-80 transition-[bottom] duration-300 ${
        liftForCookieBanner ? "bottom-24 sm:bottom-28" : "bottom-2 sm:bottom-4"
      }`}
    >
      <a
        href="https://easykara.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative block border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
      >
        <Image
          src="/easykara.png"
          alt="EasyKara - Create karaoke video easily"
          width={1680}
          height={945}
          className="w-full h-auto block"
          unoptimized
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsVisible(false);
          }}
          aria-label="Close banner"
          className="absolute top-1 right-1 p-0.5 bg-white border-2 border-black hover:bg-red-100 transition-colors cursor-pointer"
        >
          <X className="w-3 h-3" />
        </button>
      </a>
    </div>
  );
}
