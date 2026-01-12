"use client";

import React from "react";
import { Bangers } from "next/font/google";
import { useLanguage } from "@/components/LanguageProvider";

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
});

export default function AboutContent() {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1
          className={`text-4xl sm:text-6xl font-black uppercase layer-text stroke-black text-white ${bangers.className} tracking-widest`}
        >
          {t.about_us_title}
        </h1>
        <div className="inline-block bg-cyan-300 border-2 border-black px-4 py-1 font-bold text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          {t.about_us_tagline}
        </div>
      </div>

      <article className="bg-white border-4 border-black p-8 sm:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        <div className="prose prose-lg prose-slate max-w-none prose-headings:font-black prose-headings:uppercase">
          <p
            className="font-medium text-xl leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t.about_us_intro }}
          />

          <h3>{t.about_mission_title}</h3>
          <p>{t.about_mission_desc}</p>

          <h3>{t.about_why_title}</h3>
          <p>{t.about_why_desc}</p>
          <ul>
            <li>
              <strong>{t.about_why_fast_title}</strong> {t.about_why_fast_desc}
            </li>
            <li>
              <strong>{t.about_why_private_title}</strong>{" "}
              {t.about_why_private_desc}
            </li>
            <li>
              <strong>{t.about_why_free_title}</strong> {t.about_why_free_desc}
            </li>
          </ul>

          <h3>{t.about_meet_creator_title}</h3>
          <div className="not-prose mt-8 flex flex-col sm:flex-row gap-6 items-center bg-slate-100 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="w-24 h-24 bg-yellow-400 rounded-full border-4 border-black flex items-center justify-center text-4xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              👨‍💻
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-black text-2xl uppercase mb-1">hba-dev</h4>
              <p className="font-bold text-slate-500 mb-2">
                {t.about_creator_role}
              </p>
              <p className="text-sm">{t.about_creator_bio}</p>
              <a
                href="mailto:hoangbinhana3@gmail.com"
                className="inline-block mt-4 text-sm font-bold bg-black text-white px-4 py-2 border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-all"
              >
                {t.about_say_hello}
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
