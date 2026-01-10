"use client";

import React, { useState, useRef, useCallback } from "react";
import { Upload, Download, CheckCircle } from "lucide-react";
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
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Upload Area */}
      <div
        className="relative bg-white border-2 border-dashed border-slate-300 rounded-2xl p-8 sm:p-12 text-center transition-all hover:border-indigo-500 hover:bg-slate-50 cursor-pointer"
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

        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
            {isProcessing ? (
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600" />
            ) : (
              <Upload className="w-8 h-8" />
            )}
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-slate-800">
              {image ? t.upload_title : t.upload_placeholder}
            </h3>
            <p className="text-sm text-slate-500 max-w-xs mx-auto">
              {t.upload_desc}
            </p>
          </div>
        </div>
      </div>

      {/* Results Section */}
      {segments.length > 0 && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              {t.ready_msg}
            </h3>
            <button
              onClick={handleDownloadAll}
              className="hidden sm:flex bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium text-sm items-center gap-2 transition-colors shadow-lg shadow-indigo-100"
            >
              <Download className="w-4 h-4" />
              {t.download_all}
            </button>
          </div>

          {/* Horizontal Scroll Container */}
          <div className="w-full overflow-x-auto pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
            <div className="flex gap-4 sm:grid sm:grid-cols-3 sm:gap-6 min-w-max sm:min-w-0">
              {segments.map((seg, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-3 snap-center w-[250px] sm:w-auto"
                >
                  <div className="relative aspect-[9/16] w-full bg-slate-100 rounded-xl overflow-hidden shadow-md border border-slate-200 group">
                    <img
                      src={seg}
                      alt={`Segment ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute top-2 left-2 bg-black/50 backdrop-blur-md text-white/90 text-xs px-2 py-1 rounded-md font-mono">
                      {t.part} {i + 1}
                    </div>
                  </div>
                  <button
                    onClick={() => handleDownload(seg, i)}
                    className="w-full bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    {t.download_part}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Only ZIP Button */}
          <button
            onClick={handleDownloadAll}
            className="w-full sm:hidden bg-indigo-600 active:bg-indigo-700 text-white px-4 py-3.5 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 shadow-xl shadow-indigo-200"
          >
            <Download className="w-5 h-5" />
            {t.download_zip_mobile}
          </button>
        </div>
      )}
    </div>
  );
}
