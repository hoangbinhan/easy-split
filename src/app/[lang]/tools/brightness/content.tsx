"use client";

import React, { useState, useRef } from "react";
import {
  Upload,
  Download,
  Image as ImageIcon,
  Sun,
  RefreshCw,
  ChevronDown,
  Zap,
  ShieldCheck,
  Smartphone,
  Sliders,
} from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { ToolsNavigation } from "@/components/ToolsNavigation";
import { bangers } from "@/app/constants";

const FeaturesSection = () => {
  const { t } = useLanguage();
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-black" />,
      title: t.br_feature_instant_title,
      desc: t.br_feature_instant_desc,
      color: "bg-yellow-300",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-black" />,
      title: t.br_feature_privacy_title,
      desc: t.br_feature_privacy_desc,
      color: "bg-green-300",
    },
    {
      icon: <Sliders className="w-8 h-8 text-black" />,
      title: t.br_feature_precise_title,
      desc: t.br_feature_precise_desc,
      color: "bg-cyan-300",
    },
    {
      icon: <ImageIcon className="w-8 h-8 text-black" />,
      title: t.br_feature_quality_title,
      desc: t.br_feature_quality_desc,
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
      q: t.br_faq_1_q,
      a: t.br_faq_1_a,
    },
    {
      q: t.br_faq_2_q,
      a: t.br_faq_2_a,
    },
    {
      q: t.br_faq_3_q,
      a: t.br_faq_3_a,
    },
  ];

  return (
    <section className="mb-20 max-w-4xl mx-auto">
      <h2
        className={`text-5xl font-black text-center uppercase mb-10 layer-text text-white ${bangers.className}`}
      >
        {t.br_faq_title}
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
          {t.br_about_title}
        </h2>
        <p className="text-lg font-medium leading-relaxed mb-6">
          <strong>Easy Split</strong> {t.br_about_desc}
        </p>
        <div className="bg-white/10 p-6 border-l-4 border-cyan-400 backdrop-blur-sm">
          <h3 className="font-bold text-cyan-400 uppercase mb-2 text-sm tracking-wider">
            {t.privacy_commitment_title}
          </h3>
          <p className="text-sm text-slate-300">{t.privacy_commitment_desc}</p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-700">
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
        </div>
      </div>
    </section>
  );
};

export default function BrightnessClient() {
  const { t } = useLanguage();
  const [image, setImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [brightness, setBrightness] = useState<number>(0); // -100 to 100
  const fileInputRef = useRef<HTMLInputElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  // Debounce and auto-apply
  React.useEffect(() => {
    if (image) {
      const timer = setTimeout(() => {
        applyBrightness();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [brightness, image]);

  const handleFileUpload = (file: File) => {
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target?.result as string);
      setProcessedImage(null);
      setBrightness(0);
    };
    reader.readAsDataURL(file);

    // Auto scroll
    setTimeout(() => {
      if (resultRef.current && window.innerWidth < 1024) {
        const el = resultRef.current;
        const y = el.getBoundingClientRect().top + window.scrollY - 300;
        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }
    }, 200);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const applyBrightness = () => {
    if (!image) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = image;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      const adjustment = brightness;

      for (let i = 0; i < data.length; i += 4) {
        data[i] = Math.max(0, Math.min(255, data[i] + adjustment)); // R
        data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + adjustment)); // G
        data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + adjustment)); // B
      }

      ctx.putImageData(imageData, 0, 0);
      setProcessedImage(canvas.toDataURL("image/png"));

      // Auto scroll
      setTimeout(() => {
        if (resultRef.current && window.innerWidth < 1024) {
          // Skip auto-scroll on brightness adjustment for smoother UX
        }
      }, 100);
    };
  };

  const handleDownload = () => {
    if (!processedImage) return;
    const link = document.createElement("a");
    link.href = processedImage;
    link.download = `brightness-adjusted-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-20">
      <ToolsNavigation />

      <section className="text-center space-y-6 pt-8 sm:pt-12">
        <div className="inline-block bg-orange-300 border-4 border-black px-6 py-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-1 mb-4">
          <span className="font-black text-lg sm:text-l uppercase tracking-widest text-black">
            {t.br_new_tool}
          </span>
        </div>
        <h1
          className={`text-4xl sm:text-7xl ${bangers.className} font-black text-black uppercase tracking-widest leading-none stroke-black layer-text`}
        >
          {t.br_title}
        </h1>
        <p className="text-xl sm:text-2xl font-bold text-slate-700 max-w-3xl mx-auto bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          {t.br_subtitle}
        </p>
      </section>

      {!image ? (
        <div className="w-full max-w-6xl mx-auto space-y-6 sm:space-y-8">
          <div
            className="w-full max-w-4xl mx-auto h-[40vh] sm:h-[500px] flex flex-col items-center justify-center relative bg-white border-4 border-black border-dashed p-6 sm:p-10 text-center transition-all hover:bg-orange-50 cursor-pointer shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-none"
            onDragOver={(e) => e.preventDefault()}
            onDrop={onDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  handleFileUpload(e.target.files[0]);
                  e.target.value = "";
                }
              }}
            />
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              <div className="w-16 h-16 sm:w-24 sm:h-24 bg-orange-400 border-4 border-black flex items-center justify-center rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] animate-bounce">
                <Upload className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h2 className="text-xl sm:text-3xl font-black text-black uppercase tracking-tight">
                {t.br_upload_title}
              </h2>
              <p className="font-bold text-xs sm:text-base text-slate-500 bg-white border-2 border-black px-4 py-1">
                {t.br_drag_drop}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-6xl mx-auto space-y-6 sm:space-y-8">
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handleFileUpload(e.target.files[0]);
                e.target.value = "";
              }
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Editor Section */}
            <div className="space-y-4">
              <div className="bg-white border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="font-black text-lg sm:text-xl uppercase mb-4 flex items-center gap-2">
                  <ImageIcon className="w-5 h-5 sm:w-6 sm:h-6" />{" "}
                  {t.br_original_image}
                </h2>
                <div className="h-[300px] sm:h-[400px] w-full bg-slate-100 border-2 border-black overflow-hidden relative flex items-center justify-center">
                  <img
                    src={image}
                    className="max-w-full max-h-full object-contain"
                    alt="Original"
                  />
                </div>
              </div>

              {/* Controls */}
              <div className="bg-white border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <label className="font-bold uppercase text-sm">
                      {t.br_level_label}
                    </label>
                    <span className="font-black bg-black text-white px-2 text-sm">
                      {brightness > 0 ? "+" : ""}
                      {brightness}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="-100"
                    max="100"
                    step="1"
                    value={brightness}
                    onChange={(e) => setBrightness(parseInt(e.target.value))}
                    className="w-full h-4 bg-slate-200 border-2 border-black rounded-full appearance-none accent-black cursor-pointer hover:bg-slate-300 transition-colors"
                  />
                  <div className="flex justify-between text-xs font-bold text-slate-400 mt-1">
                    <span>{t.br_darker}</span>
                    <span>{t.br_brighter}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-3">
                  <button
                    onClick={() => {
                      setBrightness(0);
                      setProcessedImage(null);
                    }}
                    className="bg-white border-2 border-black p-2 sm:p-3 font-bold uppercase text-xs sm:text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-px hover:translate-y-px hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2"
                  >
                    <RefreshCw className="w-4 h-4" /> {t.br_reset}
                  </button>
                  <button
                    onClick={() => {
                      fileInputRef.current?.click();
                    }}
                    className="bg-white border-2 border-black p-2 sm:p-3 font-bold uppercase text-xs sm:text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-px hover:translate-y-px hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2"
                  >
                    <Upload className="w-4 h-4" /> {t.br_new_image}
                  </button>
                </div>
              </div>
            </div>

            {/* Result Section */}
            <div className="space-y-4" ref={resultRef}>
              <div
                className={`bg-white border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col ${
                  !processedImage ? "opacity-50" : ""
                } min-h-[300px] h-full`}
              >
                <h2 className="font-black text-lg sm:text-xl uppercase mb-4 flex items-center gap-2">
                  <Sun className="w-5 h-5 sm:w-6 sm:h-6" /> {t.br_result}
                </h2>

                <div className="flex-1 flex items-center justify-center bg-slate-100 border-2 border-black min-h-[200px]">
                  {processedImage ? (
                    <img
                      src={processedImage}
                      alt="Processed"
                      className="max-w-full max-h-[300px] sm:max-h-[400px] object-contain"
                    />
                  ) : (
                    <div className="text-slate-400 font-bold uppercase p-6 sm:p-10 text-center text-sm sm:text-base">
                      {t.br_preview_text}
                    </div>
                  )}
                </div>

                {processedImage && (
                  <button
                    onClick={handleDownload}
                    className="w-full mt-4 bg-green-400 border-2 border-black p-3 sm:p-4 font-black uppercase text-lg sm:text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all flex items-center justify-center gap-2 sm:gap-3"
                  >
                    <Download className="w-6 h-6 sm:w-8 sm:h-8" />{" "}
                    {t.br_download_btn}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <FeaturesSection />

      <div className="max-w-4xl mx-auto">
        <article className="bg-white border-4 border-black p-8 sm:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-12">
          <h2 className="text-3xl font-black text-black uppercase mb-6 border-b-4 border-black pb-4 inline-block transform -rotate-1">
            {t.br_article_title}
          </h2>
          <div className="prose prose-lg prose-slate prose-headings:font-black prose-headings:uppercase prose-strong:bg-yellow-200 prose-strong:px-1 prose-strong:border border-black max-w-none text-black">
            <p className="font-medium text-lg border-l-4 border-black pl-4 bg-gray-50 py-2">
              {t.br_article_intro}
            </p>

            <h3 className="text-2xl mt-12 bg-pink-400 text-black border-2 border-black px-4 py-2 inline-block transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              {t.br_how_to_title}
            </h3>
            <ol className="list-none pl-0 space-y-4 mt-6">
              {[t.br_how_to_1, t.br_how_to_2, t.br_how_to_3, t.br_how_to_4].map(
                (step, i) => (
                  <li
                    key={i}
                    className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex gap-4 items-center hover:translate-x-1 transition-transform"
                  >
                    <div className="font-black text-2xl">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="font-bold text-lg">{step}</div>
                  </li>
                ),
              )}
            </ol>
          </div>
        </article>
      </div>

      <FAQSection />
      <AboutSection />
    </div>
  );
}
