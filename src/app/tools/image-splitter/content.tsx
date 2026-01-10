"use client";

import React from "react";
import ImageSplitterClient from "./splitter-client";
import { useLanguage } from "@/components/LanguageProvider";

export default function ImageSplitterContent() {
  const { t } = useLanguage();

  return (
    <div className="space-y-16">
      <section className="text-center space-y-4 pt-4 sm:pt-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          {t.title}
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t.subtitle}</p>
      </section>

      <ImageSplitterClient />

      <article className="prose prose-slate lg:prose-lg mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-900">{t.article_title}</h2>
        <p>{t.article_intro}</p>

        <h3 className="text-xl font-semibold text-slate-800 mt-6">
          {t.article_why_title}
        </h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>{t.article_why_1.split(":")[0]}:</strong>{" "}
            {t.article_why_1.split(":")[1]}
          </li>
          <li>
            <strong>{t.article_why_2.split(":")[0]}:</strong>{" "}
            {t.article_why_2.split(":")[1]}
          </li>
          <li>
            <strong>{t.article_why_3.split(":")[0]}:</strong>{" "}
            {t.article_why_3.split(":")[1]}
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-slate-800 mt-6">
          {t.how_to_title}
        </h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>{t.how_to_1}</li>
          <li>{t.how_to_2}</li>
          <li>{t.how_to_3}</li>
          <li>{t.how_to_4}</li>
        </ol>
      </article>
    </div>
  );
}
