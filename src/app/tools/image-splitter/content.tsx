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
import { Bangers } from "next/font/google";

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
});

const FeaturesSection = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-black" />,
      title: "100% Client-Side",
      desc: "Your photos never leave your device. All processing happens right in your browser for maximum privacy.",
      color: "bg-green-300",
    },
    {
      icon: <Zap className="w-8 h-8 text-black" />,
      title: "Instant Split",
      desc: "No upload wait times. Splitting happens instantly thanks to optimized browser-based canvas technology.",
      color: "bg-yellow-300",
    },
    {
      icon: <ImageIcon className="w-8 h-8 text-black" />,
      title: "No Quality Loss",
      desc: "We prioritize high-fidelity export settings to ensure your TikTok carousel looks crisp and professional.",
      color: "bg-cyan-300",
    },
    {
      icon: <Wallet className="w-8 h-8 text-black" />,
      title: "Free Forever",
      desc: "No subscriptions, no watermarks, no hidden fees. Just a simple tool for creators.",
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
  const faqs = [
    {
      q: "How do I make a seamless carousel for TikTok?",
      a: "Upload your panoramic image, select '3 Segments' (or more), and use our tool to split it. When posting to TikTok, select 'Photo Mode' and upload the images in order. The result will be a swipeable, seamless panorama.",
    },
    {
      q: "Is it safe to upload my photos here?",
      a: "Yes! In fact, you aren't 'uploading' them anywhere. This tool runs entirely in your browser. Your images are never sent to a server, ensuring 100% privacy.",
    },
    {
      q: "What is the best size for TikTok slides?",
      a: "TikTok recommends a 9:16 aspect ratio (1080x1920 pixels). Our tool automatically sets this ratio for you when using standard settings.",
    },
    {
      q: "Can I split images for Instagram too?",
      a: "Absolutely! While designed for TikTok, the split images work perfectly for Instagram Carousels (Swipeable Posts). Just choose the 4:5 or 1:1 ratio option.",
    },
  ];

  return (
    <section className="mb-20 max-w-4xl mx-auto">
      <h2 className="text-4xl font-black text-center uppercase mb-10 layer-text text-white">
        Frequently Asked Questions
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

const AboutSection = () => (
  <section className="bg-slate-900 text-white border-4 border-black p-8 sm:p-12 shadow-[12px_12px_0px_0px_#22d3ee] mb-12 max-w-5xl mx-auto relative overflow-hidden">
    <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500 rounded-full blur-[80px] opacity-50 pointer-events-none"></div>
    <div className="relative z-10">
      <h2 className="text-3xl font-black uppercase mb-6 text-yellow-400">
        About This Tool
      </h2>
      <p className="text-lg font-medium leading-relaxed mb-6">
        <strong>TikTok Tools</strong> is a suite of creative utilities designed
        for modern content creators. We believe in building tools that are fast,
        free, and respect user privacy.
      </p>
      <div className="bg-white/10 p-6 border-l-4 border-cyan-400 backdrop-blur-sm">
        <h3 className="font-bold text-cyan-400 uppercase mb-2 text-sm tracking-wider">
          Privacy Commitment
        </h3>
        <p className="text-sm text-slate-300">
          This Image Splitter operates strictly client-side. We do not store,
          view, or transmit your images. The &quot;Download&quot; logic simply
          saves the processed canvas data directly from your browser&apos;s
          memory to your disk.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-700">
        <div>
          <h4 className="font-bold text-pink-400 uppercase text-xs tracking-widest mb-1">
            Created By
          </h4>
          <p className="font-black text-xl">Hoàng Bình An</p>
        </div>
        <div>
          <h4 className="font-bold text-pink-400 uppercase text-xs tracking-widest mb-1">
            Contact
          </h4>
          <a
            href="mailto:hoangbinhana3@gmail.com"
            className="font-medium text-slate-300 hover:text-white transition-colors"
          >
            hoangbinhana3@gmail.com
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default function ImageSplitterContent() {
  const { t } = useLanguage();

  return (
    <div className="space-y-20">
      <section className="text-center space-y-6 pt-8 sm:pt-12">
        <div className="inline-block bg-yellow-400 border-4 border-black px-6 py-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-2 mb-6">
          <span className="font-black text-lg sm:text-xl uppercase tracking-widest text-black">
            New: Dynamic Split
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
      </section>

      <ImageSplitterClient />

      <FeaturesSection />

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
                )
              )}
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
                <div className="font-bold text-lg">
                  Use the <strong>Segments Slider</strong> to choose between 2
                  to 10 slides.
                </div>
              </li>
              <li className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex gap-4 items-center hover:translate-x-1 transition-transform">
                <div className="font-black text-2xl text-slate-300">03</div>
                <div className="font-bold text-lg">
                  Adjust the crop box to select the perfect area for your story.
                </div>
              </li>
              <li className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex gap-4 items-center hover:translate-x-1 transition-transform">
                <div className="font-black text-2xl text-slate-300">04</div>
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
