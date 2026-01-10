"use client";

import React, { useState, useRef, useCallback } from "react";
import {
  Upload,
  Download,
  CheckCircle,
  Image as ImageIcon,
} from "lucide-react";
import JSZip from "jszip";
import { useLanguage } from "@/components/LanguageProvider";

export default function ImageSplitterClient() {
  const { t } = useLanguage();
  const [image, setImage] = useState<string | null>(null);
  const [segments, setSegments] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const processImage = useCallback((img: HTMLImageElement) => {
    setIsProcessing(true);

    // Logic: segmentWidth = img.height * (9/16)
    const segmentWidth = Math.floor(img.height * (9 / 16));
    const totalNeededWidth = segmentWidth * 3;

    // We want to center the 3 segments within the image
    const startX = Math.max(0, Math.floor((img.width - totalNeededWidth) / 2));

    const newSegments: string[] = [];
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      setIsProcessing(false);
      return;
    }

    canvas.width = segmentWidth;
    canvas.height = img.height;

    // Generate 3 segments: Left, Center, Right relative to the calculated window
    for (let i = 0; i < 3; i++) {
      // Clear canvas
      ctx.clearRect(0, 0, segmentWidth, img.height);

      // Calculate source x position
      const sourceX = startX + i * segmentWidth;

      // Draw the slice
      ctx.drawImage(
        img,
        sourceX,
        0,
        segmentWidth,
        img.height,
        0,
        0,
        segmentWidth,
        img.height
      );

      // Export at 0.9 quality
      newSegments.push(canvas.toDataURL("image/jpeg", 0.9));
    }

    setSegments(newSegments);
    setIsProcessing(false);
  }, []);

  const handleFileUpload = (file: File) => {
    if (!file.type.startsWith("image/")) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setImage(result);

      const img = new Image();
      img.onload = () => processImage(img);
      img.src = result;
    };
    reader.readAsDataURL(file);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleDownload = (dataUrl: string, index: number) => {
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = `tiktok-split-part-${index + 1}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadAll = async () => {
    const zip = new JSZip();
    segments.forEach((seg, i) => {
      // Remove data:image/jpeg;base64,
      const data = seg.split(",")[1];
      zip.file(`tiktok-split-part-${i + 1}.jpg`, data, { base64: true });
    });

    const content = await zip.generateAsync({ type: "blob" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(content);
    link.download = "tiktok-split-images.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-12">
      {/* Upload Area */}
      <div
        className="relative bg-white border-4 border-black border-dashed rounded-none p-8 sm:p-16 text-center transition-all hover:bg-yellow-50 cursor-pointer shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-[8px] active:translate-y-[8px] active:shadow-none"
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={(e) =>
            e.target.files && handleFileUpload(e.target.files[0])
          }
        />

        <div className="flex flex-col items-center gap-6">
          <div className="w-20 h-20 bg-pink-400 border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            {isProcessing ? (
              <div className="animate-spin h-10 w-10 border-4 border-black border-t-white" />
            ) : (
              <Upload className="w-10 h-10 text-white" />
            )}
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-black text-black uppercase tracking-tight">
              {image ? t.upload_title : t.upload_placeholder}
            </h3>
            <p className="text-base font-bold text-slate-500 max-w-xs mx-auto border-2 border-black bg-white/50 inline-block px-2 py-1">
              {t.upload_desc}
            </p>
          </div>
        </div>
      </div>

      {/* Results Section */}
      {segments.length > 0 && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b-4 border-black pb-4">
            <h3 className="text-2xl font-black text-black flex items-center gap-3 uppercase">
              <CheckCircle className="w-8 h-8 text-green-500 fill-black" />
              {t.ready_msg}
            </h3>
            <button
              onClick={handleDownloadAll}
              className="hidden sm:flex bg-green-400 hover:bg-green-300 text-black border-2 border-black px-6 py-3 font-bold uppercase tracking-wider items-center gap-3 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
            >
              <Download className="w-5 h-5" />
              {t.download_all}
            </button>
          </div>

          {/* Horizontal Scroll Container */}
          <div className="w-full overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
            {/* Using grid for desktop, flex for mobile swipe */}
            <div className="flex gap-6 sm:grid sm:grid-cols-3 sm:gap-8 min-w-max sm:min-w-0">
              {segments.map((seg, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-4 snap-center w-[280px] sm:w-auto"
                >
                  <div className="relative aspect-[9/16] w-full bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group overflow-hidden">
                    <img
                      src={seg}
                      alt={`Segment ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 left-0 bg-yellow-400 border-b-4 border-r-4 border-black text-black text-sm font-black px-3 py-1 uppercase">
                      {t.part} {i + 1}
                    </div>
                  </div>
                  <button
                    onClick={() => handleDownload(seg, i)}
                    className="w-full bg-cyan-400 hover:bg-cyan-300 text-black border-2 border-black py-3 font-bold uppercase tracking-wide flex items-center justify-center gap-2 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
                  >
                    <Download className="w-5 h-5" />
                    {t.download_part}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Only ZIP Button */}
          <button
            onClick={handleDownloadAll}
            className="w-full sm:hidden bg-green-400 text-black border-4 border-black px-4 py-4 font-black text-lg uppercase flex items-center justify-center gap-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-all"
          >
            <Download className="w-6 h-6" />
            {t.download_zip_mobile}
          </button>
        </div>
      )}
    </div>
  );
}
