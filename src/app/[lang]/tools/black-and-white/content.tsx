"use client";

import React, { useState, useRef } from "react";
import {
  Upload,
  Download,
  Image as ImageIcon,
  Wand2,
  RefreshCw,
} from "lucide-react";

export default function BlackAndWhiteClient() {
  const [image, setImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const handleFileUpload = (file: File) => {
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target?.result as string);
      setProcessedImage(null);
    };
    reader.readAsDataURL(file);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const applyBlackAndWhite = () => {
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

      // Convert to grayscale using luminance formula
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        // Luminance formula: 0.299R + 0.587G + 0.114B
        const gray = 0.299 * r + 0.587 * g + 0.114 * b;

        data[i] = gray;
        data[i + 1] = gray;
        data[i + 2] = gray;
        // Alpha (data[i+3]) remains unchanged
      }

      ctx.putImageData(imageData, 0, 0);
      setProcessedImage(canvas.toDataURL("image/png"));

      // Auto scroll to result on mobile
      setTimeout(() => {
        if (resultRef.current && window.innerWidth < 1024) {
          const el = resultRef.current;
          const y = el.getBoundingClientRect().top + window.scrollY - 120;
          window.scrollTo({
            top: y,
            behavior: "smooth",
          });
        }
      }, 100);
    };
  };

  const handleDownload = () => {
    if (!processedImage) return;
    const link = document.createElement("a");
    link.href = processedImage;
    link.download = `bw-result-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!image) {
    return (
      <div className="w-full max-w-6xl mx-auto space-y-6 sm:space-y-8">
        <div
          className="w-full max-w-4xl mx-auto h-[40vh] sm:h-[500px] flex flex-col items-center justify-center relative bg-white border-4 border-black border-dashed p-6 sm:p-10 text-center transition-all hover:bg-zinc-50 cursor-pointer shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-none"
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
            <div className="w-16 h-16 sm:w-24 sm:h-24 bg-zinc-800 border-4 border-black flex items-center justify-center rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] animate-bounce">
              <Upload className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h1 className="text-xl sm:text-3xl font-black text-black uppercase tracking-tight">
              Upload Image
            </h1>
            <p className="font-bold text-xs sm:text-base text-slate-500 bg-white border-2 border-black px-4 py-1">
              Drag & Drop or Click to Upload
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
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
                <ImageIcon className="w-5 h-5 sm:w-6 sm:h-6" /> Original Image
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
              <div className="grid grid-cols-2 gap-2 mb-3">
                <button
                  onClick={() => {
                    setProcessedImage(null);
                  }}
                  className="bg-white border-2 border-black p-2 sm:p-3 font-bold uppercase text-xs sm:text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-px hover:translate-y-px hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2"
                >
                  <RefreshCw className="w-4 h-4" /> Reset
                </button>
                <button
                  onClick={() => {
                    fileInputRef.current?.click();
                  }}
                  className="bg-white border-2 border-black p-2 sm:p-3 font-bold uppercase text-xs sm:text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-px hover:translate-y-px hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2"
                >
                  <Upload className="w-4 h-4" /> New Image
                </button>
              </div>

              <button
                onClick={applyBlackAndWhite}
                className="w-full bg-zinc-800 text-white border-2 border-black p-3 sm:p-4 font-black uppercase text-lg sm:text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all flex items-center justify-center gap-2 sm:gap-3"
              >
                <Wand2 className="w-6 h-6 sm:w-8 sm:h-8" /> Convert to B&W
              </button>
            </div>
          </div>

          {/* Result Section */}
          <div className="space-y-4" ref={resultRef}>
            <div
              className={`bg-white border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col ${!processedImage ? "opacity-50" : ""} min-h-[300px] h-full`}
            >
              <h2 className="font-black text-lg sm:text-xl uppercase mb-4 flex items-center gap-2">
                <Wand2 className="w-5 h-5 sm:w-6 sm:h-6" /> Result
              </h2>

              <div className="flex-1 flex items-center justify-center bg-slate-100 border-2 border-black min-h-[200px]">
                {processedImage ? (
                  <img
                    src={processedImage}
                    alt="Black and White"
                    className="max-w-full max-h-[300px] sm:max-h-[400px] object-contain"
                  />
                ) : (
                  <div className="text-slate-400 font-bold uppercase p-6 sm:p-10 text-center text-sm sm:text-base">
                    Preview will appear here
                  </div>
                )}
              </div>

              {processedImage && (
                <button
                  onClick={handleDownload}
                  className="w-full mt-4 bg-green-400 border-2 border-black p-3 sm:p-4 font-black uppercase text-lg sm:text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all flex items-center justify-center gap-2 sm:gap-3"
                >
                  <Download className="w-6 h-6 sm:w-8 sm:h-8" /> Download Image
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
