"use client";

import React from "react";
import { Bangers } from "next/font/google";
import { useLanguage } from "@/components/LanguageProvider";

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
});

export default function PrivacyContent() {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1
          className={`text-4xl sm:text-6xl font-black uppercase layer-text stroke-black text-white ${bangers.className} tracking-widest`}
        >
          {t.privacy_title}
        </h1>
        <div className="inline-block bg-yellow-300 border-2 border-black px-4 py-1 font-bold text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          {t.last_updated}
        </div>
      </div>

      <article className="bg-white border-4 border-black p-8 sm:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        <div className="prose prose-lg prose-slate max-w-none prose-headings:font-black prose-headings:uppercase prose-a:text-pink-500 prose-a:no-underline hover:prose-a:underline">
          <p
            className="font-medium text-xl leading-relaxed border-l-8 border-cyan-400 pl-6 bg-slate-50 py-4"
            dangerouslySetInnerHTML={{ __html: t.privacy_intro }}
          />

          <h3>{t.privacy_info_collect_title}</h3>
          <p>{t.privacy_info_collect_desc}</p>
          <ul>
            <li dangerouslySetInnerHTML={{ __html: t.privacy_usage_data }} />
            <li dangerouslySetInnerHTML={{ __html: t.privacy_cookies }} />
          </ul>

          <h3>{t.privacy_process_files_title}</h3>
          <p
            dangerouslySetInnerHTML={{ __html: t.privacy_process_files_desc }}
          />

          <h3>{t.privacy_ads_title}</h3>
          <p>{t.privacy_ads_desc}</p>
          <ul>
            <li>{t.privacy_ads_point1}</li>
            <li dangerouslySetInnerHTML={{ __html: t.privacy_ads_point2 }} />
          </ul>

          <h3>{t.privacy_links_title}</h3>
          <p>{t.privacy_links_desc}</p>

          <h3>{t.privacy_contact_title}</h3>
          <p>{t.privacy_contact_desc}</p>
          <div className="bg-black text-white p-6 border-4 border-yellow-400 inline-block shadow-[8px_8px_0px_0px_#facc15]">
            <p className="m-0 font-bold uppercase text-sm mb-1 text-yellow-400">
              {t.owner_label}
            </p>
            <p className="m-0 text-xl font-black">hba-dev</p>
            <p className="m-0 text-slate-300 mt-2">hoangbinhana3@gmail.com</p>
          </div>
        </div>
      </article>
    </div>
  );
}
