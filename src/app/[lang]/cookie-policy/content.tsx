"use client";

import React from "react";
import { Bangers } from "next/font/google";
import { useLanguage } from "@/components/LanguageProvider";
import { cookiePolicy } from "./cookie-data";

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
});

export default function CookiePolicyContent() {
  const { language } = useLanguage();
  const t = cookiePolicy[language as string] || cookiePolicy["en"];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1
          className={`text-4xl sm:text-6xl font-black uppercase layer-text stroke-black text-white ${bangers.className} tracking-widest`}
        >
          {t.title}
        </h1>
        <div className="inline-block bg-orange-300 border-2 border-black px-4 py-1 font-bold text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          {t.last_updated}
        </div>
      </div>

      <article className="bg-white border-4 border-black p-8 sm:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        <div className="prose prose-lg prose-slate max-w-none prose-headings:font-black prose-headings:uppercase">
          <p className="font-medium text-xl leading-relaxed border-l-8 border-orange-400 pl-6 bg-slate-50 py-4">
            {t.intro}
          </p>

          <h2>{t.what_are_cookies_title}</h2>
          <p>{t.what_are_cookies_desc}</p>

          <h2>{t.how_we_use_title}</h2>
          <p>{t.how_we_use_desc}</p>

          <h2>{t.specific_cookies_title}</h2>
          <ul>
            <li dangerouslySetInnerHTML={{ __html: t.essential_cookies }} />
            <li dangerouslySetInnerHTML={{ __html: t.analytics_cookies }} />
            <li dangerouslySetInnerHTML={{ __html: t.advertising_cookies }} />
          </ul>

          <h2>{t.manage_cookies_title}</h2>
          <p>{t.manage_cookies_desc}</p>

          <section>
            <h2 className="text-2xl font-black uppercase mb-4">
              {t.contact_title}
            </h2>
            <p>
              {t.contact_desc}{" "}
              <a
                href="mailto:hoangbinhan.5398@gmail.com"
                className="font-bold underline hover:text-blue-600"
              >
                hoangbinhan.5398@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
