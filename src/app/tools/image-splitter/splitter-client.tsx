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
  SlidersHorizontal,
  ArrowRight,
  Grid3X3,
} from "lucide-react";
import JSZip from "jszip";
import { useLanguage } from "@/components/LanguageProvider";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";

export default function ImageSplitterClient() {
  const { t } = useLanguage();
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [segments, setSegments] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  // Editor State
  const [isEditing, setIsEditing] = useState(false);
  const [segmentCount, setSegmentCount] = useState<number>(3); // Dynamic Segment Count (2-10)
  const cropperRef = useRef<ReactCropperElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Update Cropper aspect ratio when segment count changes
  useEffect(() => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      // Target Aspect Ratio = (Number of Segments * 9) / 16
      // each segment is 9:16 (0.5625). So 3 segments = 27:16 (1.6875)
      const targetRatio = (segmentCount * 9) / 16;
      cropper.setAspectRatio(targetRatio);
    }
  }, [segmentCount]);

  const handleFileUpload = (file: File) => {
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setOriginalImage(result);
      setImage(result);
      setIsEditing(true);
    };
    reader.readAsDataURL(file);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  // The "Process" is now driven by the Crop Result
  const finalizeAndSplit = () => {
    const cropper = cropperRef.current?.cropper;
    if (!cropper) return;

    setIsProcessing(true);

    // Get the cropped canvas. This IS our "Cutting Area" selection.
    // We used a fixed aspect ratio for the crop box, so this canvas
    // corresponds exactly to the total area of the combined segments.
    const croppedCanvas = cropper.getCroppedCanvas();

    if (!croppedCanvas) {
      setIsProcessing(false);
      return;
    }

    const totalWidth = croppedCanvas.width;
    const totalHeight = croppedCanvas.height;

    // Calculate individual segment width
    // Since we forced the aspect ratio, totalWidth / segmentCount should roughly equal totalHeight * (9/16)
    // We use totalWidth / segmentCount to ensure no gaps.
    const segmentWidth = Math.floor(totalWidth / segmentCount);

    const newSegments: string[] = [];
    const splitCanvas = document.createElement("canvas");
    const ctx = splitCanvas.getContext("2d");

    if (!ctx) {
      setIsProcessing(false);
      return;
    }

    // Prepare content for each segment
    // We want the output to be high quality.
    // We can size the output canvas to the exact segment size.
    splitCanvas.width = segmentWidth;
    splitCanvas.height = totalHeight;

    for (let i = 0; i < segmentCount; i++) {
      ctx.clearRect(0, 0, segmentWidth, totalHeight);

      // Source X: Where to start slicing from the cropped image
      const sourceX = i * segmentWidth;

      // Draw slice
      ctx.drawImage(
        croppedCanvas,
        sourceX,
        0,
        segmentWidth,
        totalHeight, // Source
        0,
        0,
        segmentWidth,
        totalHeight // Destination
      );

      newSegments.push(splitCanvas.toDataURL("image/jpeg", 0.9));
    }

    setSegments(newSegments);
    setImage(croppedCanvas.toDataURL("image/jpeg", 0.9)); // Update preview to cropped version
    setIsEditing(false);
    setIsProcessing(false);
  };

  const rotate = () => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) cropper.rotate(90);
  };

  const flipH = () => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      const scaleX = cropper.getData().scaleX ?? 1;
      cropper.scaleX(-scaleX);
    }
  };

  const flipV = () => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      const scaleY = cropper.getData().scaleY ?? 1;
      cropper.scaleY(-scaleY);
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

  // Editor UI
  if (isEditing && originalImage) {
    return (
      <div className="w-full max-w-5xl mx-auto space-y-8 animate-in fade-in zoom-in-95 duration-300">
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-4 sm:p-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 border-b-4 border-black pb-4">
            <h3 className="text-2xl font-black uppercase flex items-center gap-2">
              <SlidersHorizontal className="w-6 h-6" /> Configure Split
            </h3>
            <div className="flex gap-2 w-full md:w-auto">
              <button
                onClick={() => {
                  setIsEditing(false);
                  setSegments([]);
                  setImage(null);
                }}
                className="flex-1 md:flex-none border-2 border-black px-4 py-2 font-bold hover:bg-red-400 transition-colors uppercase"
              >
                Cancel
              </button>
              <button
                onClick={finalizeAndSplit}
                className="flex-1 md:flex-none bg-green-400 border-2 border-black px-4 py-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all uppercase flex items-center justify-center gap-2"
              >
                Split Images <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Tools Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Segment Control (New Dynamic Feature) */}
              <div className="space-y-4 bg-yellow-100 p-4 border-2 border-black">
                <div className="flex items-center justify-between">
                  <span className="font-black text-sm uppercase">Segments</span>
                  <span className="bg-black text-white font-black px-2 py-0.5 text-xs">
                    {segmentCount}x
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Grid3X3 className="w-5 h-5" />
                  <input
                    type="range"
                    min="2"
                    max="10"
                    value={segmentCount}
                    onChange={(e) => setSegmentCount(Number(e.target.value))}
                    className="w-full accent-black h-2 bg-white border border-black rounded-none appearance-none cursor-pointer"
                  />
                </div>
                <div className="text-xs font-bold text-slate-600 leading-tight">
                  Move the crop box on the right to select your {segmentCount}{" "}
                  slides.
                </div>
              </div>

              {/* Transform */}
              <div className="space-y-3">
                <p className="font-black text-sm uppercase bg-cyan-300 inline-block px-1 border border-black">
                  Tools
                </p>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={rotate}
                    className="bg-white border-2 border-black p-2 hover:bg-cyan-200 transition-colors flex justify-center"
                    title="Rotate 90°"
                  >
                    <RotateCw className="w-5 h-5" />
                  </button>
                  <button
                    onClick={flipH}
                    className="bg-white border-2 border-black p-2 hover:bg-cyan-200 transition-colors flex justify-center"
                    title="Flip Horizontal"
                  >
                    <FlipHorizontal className="w-5 h-5" />
                  </button>
                  <button
                    onClick={flipV}
                    className="bg-white border-2 border-black p-2 hover:bg-cyan-200 transition-colors flex justify-center"
                    title="Flip Vertical"
                  >
                    <FlipVertical className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Cropper Area */}
            <div className="lg:col-span-3 bg-slate-100 border-2 border-black h-[400px] sm:h-[500px] relative">
              <Cropper
                src={originalImage}
                style={{ height: "100%", width: "100%" }}
                // Initialize with ratio based on default segment count (3)
                // Ratio = (3 * 9) / 16 = 27 / 16 = 1.6875
                initialAspectRatio={(3 * 9) / 16}
                aspectRatio={(segmentCount * 9) / 16}
                guides={true}
                ref={cropperRef}
                viewMode={1}
                dragMode="move"
                background={false}
                className="confirm-cropper"
              />
              <div className="absolute top-2 right-2 bg-white/90 border-2 border-black px-2 py-1 z-10 font-bold text-xs pointer-events-none">
                PREVIEW AREA
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Standard Render (Upload or Results)
  return (
    <div className="w-full max-w-5xl mx-auto space-y-12">
      {/* Upload Area */}
      {!image && (
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
                {originalImage ? t.upload_title : t.upload_placeholder}
              </h3>
              <p className="text-base font-bold text-slate-500 max-w-xs mx-auto border-2 border-black bg-white/50 inline-block px-2 py-1">
                {t.upload_desc}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Results Section */}
      {image && !isEditing && segments.length > 0 && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Action Bar for Results */}
          <div className="bg-white border-4 border-black p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-2">
              <span className="bg-black text-white px-2 py-1 font-black text-xs uppercase">
                Segments Used
              </span>
              <span className="font-black text-xl">{segmentCount}</span>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setIsEditing(true);
                  setSegments([]);
                }}
                className="text-sm font-bold uppercase border-b-2 border-black hover:bg-yellow-200 px-1 transition-colors flex items-center gap-2"
              >
                <SlidersHorizontal className="w-4 h-4" /> Adjust
              </button>
              <button
                onClick={() => {
                  setImage(null);
                  setOriginalImage(null);
                  setSegments([]);
                  setSegmentCount(3);
                }}
                className="text-sm font-bold uppercase text-red-500 border-b-2 border-red-500 hover:bg-red-50 px-1 transition-colors flex items-center gap-2"
              >
                <X className="w-4 h-4" /> Reset
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b-4 border-black pb-4 mt-8">
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

          <div className="w-full overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
            {/* Grid needs dynamic columns if possible, but standard flex row with snap points is safer for N items */}
            <div className="flex gap-6 min-w-max sm:min-w-0">
              {segments.map((seg, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-4 snap-center w-[200px] sm:w-[240px]"
                >
                  <div className="relative aspect-[9/16] w-full bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group overflow-hidden">
                    <img
                      src={seg}
                      alt={`Segment ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 left-0 bg-yellow-400 border-b-4 border-r-4 border-black text-black text-xs font-black px-2 py-1 uppercase">
                      Part {i + 1} of {segmentCount}
                    </div>
                  </div>
                  <button
                    onClick={() => handleDownload(seg, i)}
                    className="w-full bg-cyan-400 hover:bg-cyan-300 text-black border-2 border-black py-2 text-sm font-bold uppercase tracking-wide flex items-center justify-center gap-2 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
                  >
                    <Download className="w-4 h-4" />
                    Save
                  </button>
                </div>
              ))}
            </div>
          </div>

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
