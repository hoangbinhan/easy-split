"use client";

import React from "react";
import { Bangers } from "next/font/google";
import { useLanguage } from "@/components/LanguageProvider";

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
});

export default function TermsContent() {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1
          className={`text-4xl sm:text-6xl font-black uppercase layer-text stroke-black text-white ${bangers.className} tracking-widest`}
        >
          {t.terms_title}
        </h1>
        <div className="inline-block bg-pink-300 border-2 border-black px-4 py-1 font-bold text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          {t.terms_last_updated}
        </div>
      </div>

      <article className="bg-white border-4 border-black p-8 sm:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        <div className="prose prose-lg prose-slate max-w-none prose-headings:font-black prose-headings:uppercase">
          <p
            className="font-medium text-xl leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t.terms_intro }}
          />

          <h3>{t.terms_conditions_title}</h3>
          <p>{t.terms_conditions_desc}</p>

          <h3>{t.terms_ip_title}</h3>
          <p>{t.terms_ip_desc}</p>
          <p>
            <strong>{t.terms_ugc_label}:</strong> {t.terms_ugc_desc}
          </p>

          <h3>{t.terms_acceptable_use_title}</h3>
          <p>{t.terms_acceptable_use_desc}</p>
          <ul>
            <li>{t.terms_use_1}</li>
            <li>{t.terms_use_2}</li>
            <li>{t.terms_use_3}</li>
          </ul>

          <h3>{t.terms_indemnification_title}</h3>
          <p>{t.terms_indemnification_desc}</p>

          <h3>{t.terms_liability_title}</h3>
          <p>{t.terms_liability_desc}</p>

          <h3>{t.terms_contact_title}</h3>
          <p>{t.terms_contact_desc}</p>
          <a
            href="mailto:hoangbinhana3@gmail.com"
            className="inline-block bg-black text-white px-6 py-3 font-bold uppercase border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            hoangbinhana3@gmail.com
          </a>
        </div>
      </article>
    </div>
  );
}
