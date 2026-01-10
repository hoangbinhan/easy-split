'use client';

import React from 'react';
import ImageSplitterClient from './splitter-client';
import { useLanguage } from '@/components/LanguageProvider';

export default function ImageSplitterContent() {
  const { t } = useLanguage();
  
  return (
    <div className="space-y-20">
      <section className="text-center space-y-6 pt-8 sm:pt-12">
        <div className="inline-block bg-yellow-400 border-4 border-black px-6 py-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg] mb-6">
           <span className="font-black text-lg sm:text-xl uppercase tracking-widest text-black">New: Dynamic Split</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-black uppercase tracking-tighter leading-none stroke-black layer-text">
          {t.title}
        </h1>
        <p className="text-xl sm:text-2xl font-bold text-slate-700 max-w-3xl mx-auto bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          {t.subtitle}
        </p>
      </section>

      <ImageSplitterClient />

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
              {[t.article_why_1, t.article_why_2, t.article_why_3].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-cyan-400 border-2 border-black flex items-center justify-center font-bold text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    {i + 1}
                  </span>
                  <span className="font-medium text-lg leading-relaxed">
                    <strong>{item.split(':')[0]}:</strong> {item.split(':')[1]}
                  </span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl mt-12 bg-pink-400 text-black border-2 border-black px-4 py-2 inline-block transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              {t.how_to_title}
            </h3>
            <ol className="list-none pl-0 space-y-4 mt-6">
               {/* Updated dynamic instructions */}
               <li className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex gap-4 items-center hover:translate-x-1 transition-transform">
                  <div className="font-black text-2xl text-slate-300">01</div>
                  <div className="font-bold text-lg">{t.how_to_1}</div>
               </li>
               <li className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex gap-4 items-center hover:translate-x-1 transition-transform">
                  <div className="font-black text-2xl text-slate-300">02</div>
                  <div className="font-bold text-lg">Use the <strong>Segments Slider</strong> to choose between 2 to 10 slides.</div>
               </li>
               <li className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex gap-4 items-center hover:translate-x-1 transition-transform">
                  <div className="font-black text-2xl text-slate-300">03</div>
                  <div className="font-bold text-lg">Adjust the crop box to select the perfect area for your story.</div>
               </li>
               <li className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex gap-4 items-center hover:translate-x-1 transition-transform">
                  <div className="font-black text-2xl text-slate-300">04</div>
                  <div className="font-bold text-lg">{t.how_to_3}</div>
               </li>
            </ol>
          </div>
        </article>
      </div>
    </div>
  );
}
