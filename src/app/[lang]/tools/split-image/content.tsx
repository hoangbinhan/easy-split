"use client";

import React from "react";
import ImageSplitterClient from "./splitter-client";
import { useLanguage } from "@/components/LanguageProvider";
import {
  ShieldCheck,
  Zap,
  Image as ImageIcon,
  Wallet,
  ChevronDown,
} from "lucide-react";

const FeaturesSection = () => {
  const { t } = useLanguage();
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-black" />,
      title: t.feature_client_side_title,
      desc: t.feature_client_side_desc,
      color: "bg-green-300",
    },
    {
      icon: <Zap className="w-8 h-8 text-black" />,
      title: t.feature_instant_title,
      desc: t.feature_instant_desc,
      color: "bg-yellow-300",
    },
    {
      icon: <ImageIcon className="w-8 h-8 text-black" />,
      title: t.feature_quality_title,
      desc: t.feature_quality_desc,
      color: "bg-cyan-300",
    },
    {
      icon: <Wallet className="w-8 h-8 text-black" />,
      title: t.feature_free_title,
      desc: t.feature_free_desc,
      color: "bg-pink-300",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
      {features.map((f, i) => (
        <div
          key={i}
          className={`${f.color} border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform`}
        >
          <div className="mb-4 bg-white border-2 border-black w-14 h-14 flex items-center justify-center rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            {f.icon}
          </div>
          <h3 className="font-black text-xl uppercase mb-2">{f.title}</h3>
          <p className="font-bold text-sm leading-relaxed opacity-90">
            {f.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

const FAQSection = () => {
  const { t } = useLanguage();
  const faqs = [
    {
      q: t.faq_1_q,
      a: t.faq_1_a,
    },
    {
      q: t.faq_2_q,
      a: t.faq_2_a,
    },
    {
      q: t.faq_3_q,
      a: t.faq_3_a,
    },
    {
      q: t.faq_4_q,
      a: t.faq_4_a,
    },
    {
      q: t.faq_5_q,
      a: t.faq_5_a,
    },
    {
      q: t.faq_6_q,
      a: t.faq_6_a,
    },
    {
      q: t.faq_7_q,
      a: t.faq_7_a,
    },
  ].filter((item) => item.q && item.a);

  return (
    <section className="mb-20 max-w-4xl mx-auto">
      <h2
        className={`text-5xl font-black text-center uppercase mb-10 layer-text text-white ${bangers.className}`}
      >
        {t.faq_title}
      </h2>
      <div className="space-y-4">
        {faqs.map((item, i) => (
          <details
            key={i}
            className="group bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] open:bg-yellow-50 transition-colors"
          >
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
              <span className="font-black text-lg uppercase">{item.q}</span>
              <ChevronDown className="w-6 h-6 transition-transform group-open:rotate-180 border-2 border-black rounded-full bg-white" />
            </summary>
            <div className="px-6 pb-6 pt-0 font-medium text-slate-700 leading-relaxed border-t-2 border-black/10 mt-2">
              <p className="pt-4">{item.a}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

const AboutSection = () => {
  const { t } = useLanguage();
  return (
    <section className="bg-slate-900 text-white border-4 border-black p-8 sm:p-12 shadow-[12px_12px_0px_0px_#22d3ee] mb-12 max-w-5xl mx-auto relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500 rounded-full blur-[80px] opacity-50 pointer-events-none"></div>
      <div className="relative z-10">
        <h2 className="text-3xl font-black uppercase mb-6 text-yellow-400">
          {t.about_tool_title}
        </h2>
        <p className="text-lg font-medium leading-relaxed mb-6">
          <strong>Easy Split</strong>{" "}
          {t.about_tool_desc.replace("Easy Split", "")}
        </p>
        <div className="bg-white/10 p-6 border-l-4 border-cyan-400 backdrop-blur-sm">
          <h3 className="font-bold text-cyan-400 uppercase mb-2 text-sm tracking-wider">
            {t.privacy_commitment_title}
          </h3>
          <p className="text-sm text-slate-300">{t.privacy_commitment_desc}</p>
        </div>

        {/* <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-700">
          <div>
            <h4 className="font-bold text-pink-400 uppercase text-xs tracking-widest mb-1">
              {t.created_by}
            </h4>
            <p className="font-black text-xl">hba-dev</p>
          </div>
          <div>
            <h4 className="font-bold text-pink-400 uppercase text-xs tracking-widest mb-1">
              {t.contact}
            </h4>
            <a
              href="mailto:hoangbinhan.5398@gmail.com"
              className="font-medium text-slate-300 hover:text-white transition-colors"
            >
              hoangbinhan.5398@gmail.com
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

import { ToolsNavigation } from "@/components/ToolsNavigation";
import { bangers } from "@/app/constants";

export default function ImageSplitterContent() {
  const { t } = useLanguage();

  return (
    <div className="space-y-20">
      <ToolsNavigation />
      <section className="text-center space-y-6 pt-8 sm:pt-12">
        <div className="inline-block bg-yellow-400 border-4 border-black px-6 py-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-2 mb-6">
          <span className="font-black text-lg sm:text-xl uppercase tracking-widest text-black">
            {t.new_dynamic_split}
          </span>
        </div>
        <h1
          className={`text-4xl sm:text-7xl ${bangers.className} font-black text-black uppercase tracking-widest leading-none stroke-black layer-text`}
        >
          {t.title}
        </h1>
        <p className="text-xl sm:text-2xl font-bold text-slate-700 max-w-3xl mx-auto bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          {t.subtitle}
        </p>
        <p className="max-w-3xl mx-auto text-base sm:text-lg font-semibold leading-relaxed text-slate-800">
          {t.aeo_intro || t.subtitle}
        </p>
      </section>

      <ImageSplitterClient />

      <FeaturesSection />

      <section className="max-w-4xl mx-auto mb-20">
        <div className="bg-orange-300 border-4 border-black p-8 sm:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative">
          <div className="absolute -top-6 right-4 md:-right-6 bg-white border-4 border-black px-4 py-2 rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="font-black text-xl uppercase text-red-500">
              Hot!
            </span>
          </div>

          <h2
            className={`text-4xl font-black uppercase mb-8 layer-text stroke-black text-white ${bangers.className}`}
          >
            {t.tips_title}
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: t.tips_1_title, desc: t.tips_1_desc, bg: "bg-white" },
              { title: t.tips_2_title, desc: t.tips_2_desc, bg: "bg-white" },
              { title: t.tips_3_title, desc: t.tips_3_desc, bg: "bg-white" },
            ].map((tip, i) => (
              <div
                key={i}
                className={`${tip.bg} border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform`}
              >
                <div className="text-4xl mb-2">
                  {i === 0 ? "📖" : i === 1 ? "💎" : "🎣"}
                </div>
                <h3 className="font-black text-xl uppercase mb-2">
                  {tip.title}
                </h3>
                <p className="font-medium text-sm leading-relaxed text-slate-700">
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto">
        <article className="bg-white border-4 border-black p-8 sm:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-12">
          <h2 className="text-3xl font-black text-black uppercase mb-6 border-b-4 border-black pb-4 inline-block transform -rotate-1">
            {t.article_title}
          </h2>
          <div className="prose prose-lg prose-slate prose-headings:font-black prose-headings:uppercase prose-strong:bg-yellow-200 prose-strong:px-1 prose-strong:border border-black max-w-none text-black">
            <p className="font-medium text-lg border-l-4 border-black pl-4 bg-gray-50 py-2">
              {t.article_intro}
            </p>

            <h3 className="text-2xl mt-8 bg-black text-white px-4 py-2 inline-block transform rotate-1">
              {t.article_why_title}
            </h3>
            <ul className="list-none pl-0 space-y-4 mt-6">
              {[t.article_why_1, t.article_why_2, t.article_why_3].map(
                (item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="shrink-0 w-8 h-8 bg-cyan-400 border-2 border-black flex items-center justify-center font-bold text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      {i + 1}
                    </span>
                    <span className="font-medium text-lg leading-relaxed">
                      <strong>{item.split(":")[0]}:</strong>{" "}
                      {item.split(":")[1]}
                    </span>
                  </li>
                ),
              )}
            </ul>

            <h3 className="text-2xl mt-12 bg-pink-400 text-black border-2 border-black px-4 py-2 inline-block transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              {t.how_to_title}
            </h3>
            <ol className="list-none pl-0 space-y-4 mt-6">
              {/* Updated dynamic instructions */}
              <li className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex gap-4 items-center hover:translate-x-1 transition-transform">
                <div className="font-black text-2x">01</div>
                <div className="font-bold text-lg">{t.how_to_1}</div>
              </li>
              <li className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex gap-4 items-center hover:translate-x-1 transition-transform">
                <div className="font-black text-2x">02</div>
                <div className="font-bold text-lg">{t.how_to_2}</div>
              </li>
              <li className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex gap-4 items-center hover:translate-x-1 transition-transform">
                <div className="font-black text-2x">03</div>
                <div className="font-bold text-lg">{t.how_to_3_desc}</div>
              </li>
              <li className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex gap-4 items-center hover:translate-x-1 transition-transform">
                <div className="font-black text-2x">04</div>
                <div className="font-bold text-lg">{t.how_to_3}</div>
              </li>
            </ol>
          </div>
        </article>
      </div>

      <FAQSection />
      <AboutSection />
    </div>
  );
}
