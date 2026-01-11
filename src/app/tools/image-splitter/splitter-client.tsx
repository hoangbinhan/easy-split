"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import {
  Upload,
  Download,
  CheckCircle,
  RotateCw,
  FlipHorizontal,
  FlipVertical,
  X,
  Edit3,
  Grid3X3,
  ArrowRight,
  LayoutTemplate,
  Image as ImageIcon,
  SlidersVertical,
} from "lucide-react";
import JSZip from "jszip";
import { useLanguage } from "@/components/LanguageProvider";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";

// Aspect Ratio Options
// Value 0 = Free/Original
const ASPECT_RATIOS = [
  { label: "Free", value: 0, icon: "🔓" },
  { label: "9:16", value: 9 / 16, icon: "📱" },
  { label: "4:5", value: 4 / 5, icon: "🖼️" },
  { label: "1:1", value: 1, icon: "🟦" },
  { label: "16:9", value: 16 / 9, icon: "💻" },
];

export default function ImageSplitterClient() {
  const { t, isLoaded } = useLanguage();

  // Data State
  const [displayImage, setDisplayImage] = useState<string | null>(null);
  const [segments, setSegments] = useState<string[]>([]);

  // Settings State
  const [segmentCount, setSegmentCount] = useState<number>(2);
  const [chunkRatio, setChunkRatio] = useState<number>(0); // Default to 0 (Free mode)

  // UI State
  const [isProcessing, setIsProcessing] = useState(false);
  const [gridOverlayStyle, setGridOverlayStyle] = useState<React.CSSProperties>(
    { display: "none" }
  );

  // Refs
  const cropperRef = useRef<ReactCropperElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // --- Handlers ---

  const handleFileUpload = (file: File) => {
    // Basic check, but accept attribute on input handles most
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      setDisplayImage(e.target?.result as string);
      setSegments([]);
    };
    reader.readAsDataURL(file);
  };

  const handleChangeImage = () => {
    fileInputRef.current?.click();
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  // Sync Aspect Ratio when settings change
  useEffect(() => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      if (chunkRatio === 0) {
        cropper.setAspectRatio(NaN); // Free mode
      } else {
        // Total Aspect Ratio = Segments * (Single Segment Ratio)
        cropper.setAspectRatio(segmentCount * chunkRatio);
      }
    }
  }, [segmentCount, chunkRatio]);

  // Update Grid Overlay Position on Crop
  const onCrop = () => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      const boxData = cropper.getCropBoxData();
      // Position the overlay exactly over the CSS crop box
      setGridOverlayStyle({
        top: boxData.top,
        left: boxData.left,
        width: boxData.width,
        height: boxData.height,
        display: "flex", // Visible
        position: "absolute",
        pointerEvents: "none", // Allow clicks to pass through to cropper
        zIndex: 10,
      });
    }
  };

  // The Split Logic
  const performSplit = useCallback(() => {
    const cropper = cropperRef.current?.cropper;
    if (!cropper) return;

    setIsProcessing(true);

    // Get the cropped data (what the user sees in the box)
    const croppedCanvas = cropper.getCroppedCanvas({
      minWidth: 100,
      minHeight: 100,
    });

    if (!croppedCanvas) {
      setIsProcessing(false);
      return;
    }

    const width = croppedCanvas.width;
    const height = croppedCanvas.height;

    // Divide width by segments
    const segmentWidth = Math.floor(width / segmentCount);

    const newSegments: string[] = [];
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      setIsProcessing(false);
      return;
    }

    canvas.width = segmentWidth;
    canvas.height = height;

    for (let i = 0; i < segmentCount; i++) {
      ctx.clearRect(0, 0, segmentWidth, height);
      ctx.drawImage(
        croppedCanvas,
        i * segmentWidth,
        0,
        segmentWidth,
        height, // Source Slice
        0,
        0,
        segmentWidth,
        height // Dest
      );
      newSegments.push(canvas.toDataURL("image/jpeg", 0.95));
    }

    setSegments(newSegments);
    setIsProcessing(false);
  }, [segmentCount]);

  const handleDownload = (dataUrl: string, index: number) => {
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = `snap-part-${index + 1}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadAll = async () => {
    const zip = new JSZip();
    segments.forEach((seg, i) =>
      zip.file(`snap-part-${i + 1}.jpg`, seg.split(",")[1], { base64: true })
    );
    const content = await zip.generateAsync({ type: "blob" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(content);
    link.download = "snap-bundle.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  };

  if (!isLoaded)
    return (
      <div className="h-64 flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-black border-t-transparent" />
      </div>
    );

  // -- Render: Upload Mode --
  if (!displayImage) {
    return (
      <div
        className="w-full max-w-4xl mx-auto relative bg-white border-4 border-black border-dashed p-10 sm:p-20 text-center transition-all hover:bg-yellow-50 cursor-pointer shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-none"
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/png, image/jpeg, image/jpg, image/webp, image/avif, image/bmp"
          onChange={(e) =>
            e.target.files && handleFileUpload(e.target.files[0])
          }
        />
        <div className="flex flex-col items-center gap-6">
          <div className="w-24 h-24 bg-pink-400 border-4 border-black flex items-center justify-center rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] animate-bounce">
            <Upload className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-3xl font-black text-black uppercase tracking-tight">
            {t.upload_placeholder}
          </h3>
          <p className="font-bold text-slate-500 bg-white border-2 border-black px-4 py-1">
            {t.upload_desc}
          </p>
        </div>
      </div>
    );
  }

  // -- Render: Main Workbench --
  return (
    <div className="w-full max-w-7xl mx-auto space-y-8">
      {/* Hidden Input for "Change Image" */}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/png, image/jpeg, image/jpg, image/webp, image/avif, image/bmp"
        onChange={(e) => e.target.files && handleFileUpload(e.target.files[0])}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* LEFT: Controls */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col">
            <h3 className="font-black uppercase text-xl border-b-4 border-black pb-4 mb-6 flex items-center gap-2">
              <SlidersVertical className="w-5 h-5" /> Config
            </h3>

            {/* 1. Segments Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <label className="font-bold uppercase text-sm">
                  Segments (Slides)
                </label>
                <span className="bg-black text-white px-2 py-0.5 font-black text-sm">
                  {segmentCount}
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="10"
                value={segmentCount}
                onChange={(e) => {
                  setSegmentCount(Number(e.target.value));
                }}
                className="w-full h-4 bg-slate-200 border-2 border-black rounded-full appearance-none accent-black cursor-pointer hover:bg-slate-300 transition-colors"
              />
              <div className="flex justify-between text-xs font-bold text-slate-400 mt-1 px-1">
                <span>2</span>
                <span>10</span>
              </div>
            </div>

            {/* 2. Ratio Select */}
            <div className="mb-8">
              <label className="font-bold uppercase text-sm mb-3 block">
                Crop Ratio
              </label>
              <div className="grid grid-cols-2 gap-2">
                {ASPECT_RATIOS.map((r) => (
                  <button
                    key={r.label}
                    onClick={() => setChunkRatio(r.value)}
                    className={`border-2 border-black p-2 font-bold text-sm uppercase flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      Math.abs(chunkRatio - r.value) < 0.001
                        ? "bg-cyan-400 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] translate-x-[1px] translate-y-[1px]"
                        : "bg-white hover:bg-slate-50 hover:-translate-y-1"
                    }`}
                  >
                    <span>{r.icon}</span> {r.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Transform Tools */}
            <div className="mb-8">
              <label className="font-bold uppercase text-sm mb-3 block">
                Edit
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => cropperRef.current?.cropper?.rotate(90)}
                  className="flex-1 bg-white border-2 border-black p-2 hover:bg-yellow-200 transition-colors font-bold uppercase text-xs flex flex-col items-center gap-1 cursor-pointer"
                >
                  <RotateCw className="w-4 h-4" /> Rotate
                </button>
                <button
                  onClick={() =>
                    cropperRef.current?.cropper?.scaleX(
                      -(cropperRef.current?.cropper?.getData().scaleX || 1)
                    )
                  }
                  className="flex-1 bg-white border-2 border-black p-2 hover:bg-yellow-200 transition-colors font-bold uppercase text-xs flex flex-col items-center gap-1 cursor-pointer"
                >
                  <FlipHorizontal className="w-4 h-4" /> Flip H
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 mt-auto pt-6 border-t-4 border-black">
              <button
                onClick={performSplit}
                className="bg-green-400 border-2 border-black py-4 font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all flex items-center justify-center gap-2 text-lg cursor-pointer"
              >
                {isProcessing ? "Processing..." : "Split Image"}{" "}
                <ArrowRight strokeWidth={3} />
              </button>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleChangeImage}
                  className="border-2 border-black py-2 font-bold uppercase hover:bg-yellow-200 text-sm cursor-pointer flex items-center justify-center gap-1"
                >
                  <ImageIcon className="w-4 h-4" /> Change Img
                </button>
                <button
                  onClick={() => {
                    setDisplayImage(null);
                    setSegments([]);
                  }}
                  className="border-2 border-black py-2 font-bold uppercase hover:bg-red-200 text-sm cursor-pointer text-red-600"
                >
                  Reset All
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Visual Simulation (Cropper as Viewer) */}
        <div className="lg:col-span-8">
          <div className="bg-slate-100 border-4 border-black p-2 sm:p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="relative w-full h-[60vh] sm:h-[600px]">
              <div className="absolute top-4 left-4 z-20 bg-black text-white px-2 py-1 text-xs font-black uppercase pointer-events-none">
                Interactive Preview
              </div>

              {/* 
                  React Cropper acts as the "Draggable Cutting Layer". 
                  We customize it to look like a tool, not just an editor.
               */}
              <Cropper
                src={displayImage}
                style={{ height: "100%", width: "100%" }}
                // If chunkRatio is 0 (Free), we pass NaN to allow free resize.
                aspectRatio={chunkRatio === 0 ? NaN : segmentCount * chunkRatio}
                guides={false} // Disable standard 3x3 guides
                ref={cropperRef}
                viewMode={1} // Restrict crop box to image size
                // "crop" makes new box. "move" moves image behind.
                // User wants "Drag the entire Split Overlay". 'move' logic in cropperjs usually means panning image.
                // We want to drag the CROP BOX.
                // To only drag crop box, dragMode should be 'crop'. But we want to prevent drawing NEW boxes.
                // 'none' allows interaction with crop box if it exists.
                dragMode="none"
                autoCropArea={1} // Start full
                background={false}
                highlight={false} // We do our own highlight via overlay logic if needed, but cropper does it well (dim outside)
                crop={onCrop} // Update our custom grid lines on move
                className="cropper-container-custom"
                alt="Image to be split" // Added alt text for accessibility
              />

              {/* CUSTOM GRID OVERLAY (Dashed Lines) */}
              {/* This sits exactly on top of the Crop Box */}
              <div style={gridOverlayStyle} className="">
                {/* Dividers */}
                {Array.from({ length: segmentCount - 1 }).map((_, i) => (
                  <div
                    key={`line-${i}`}
                    className="absolute top-0 bottom-0 border-l border-dashed border-white/90 -translate-x-1/2"
                    style={{ left: `${((i + 1) * 100) / segmentCount}%` }}
                  />
                ))}
                {/* Number Labels */}
                {Array.from({ length: segmentCount }).map((_, i) => (
                  <div
                    key={`num-${i}`}
                    className="absolute top-1/2 -translate-y-1/2 flex justify-center w-0"
                    style={{ left: `${((i + 0.5) * 100) / segmentCount}%` }}
                  >
                    <span className="bg-black/60 text-white text-[10px] font-bold px-1 rounded backdrop-blur-md">
                      {i + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* If Segments Exist - Show Result Below */}
          {segments.length > 0 && (
            <div className="mt-8 animate-in fade-in slide-in-from-bottom-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-black text-xl uppercase bg-yellow-400 inline-block px-2 border-2 border-black transform -rotate-1">
                  Results
                </h3>
                <button
                  onClick={handleDownloadAll}
                  className="font-bold underline cursor-pointer hover:text-green-600"
                >
                  Download All (ZIP)
                </button>
              </div>

              <div className="flex gap-4 overflow-x-auto pb-6 snap-x px-1">
                {segments.map((seg, i) => (
                  <div
                    key={i}
                    className="min-w-[140px] flex flex-col gap-2 snap-center group"
                  >
                    <div className="bg-slate-200 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden transition-transform group-hover:-translate-y-1">
                      <img
                        src={seg}
                        className="w-full h-auto block"
                        alt={`Split part ${i + 1}`}
                      />
                      <div className="absolute bottom-0 inset-x-0 bg-black text-white text-center text-xs font-bold py-1 uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                        Part {i + 1}
                      </div>
                    </div>
                    <button
                      onClick={() => handleDownload(seg, i)}
                      className="bg-cyan-300 border-2 border-black py-2 text-xs font-black uppercase hover:bg-cyan-200 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none translate-x-[1px] translate-y-[1px] cursor-pointer"
                    >
                      Save
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
