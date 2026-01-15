"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import {
  Upload,
  CheckCircle,
  RotateCw,
  FlipHorizontal,
  Edit3,
  Grid3X3,
  ArrowRight,
  LayoutTemplate,
  Image as ImageIcon,
} from "lucide-react";
import JSZip from "jszip";
import NextImage from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";

// Aspect Ratio Options
// Value 0 = Free/Original
const ASPECT_RATIOS = [
  { label: "Free", value: 0, icon: "🔓" },
  { label: "TikTok Insta", value: 195.66 / 259.53, icon: "🎵" }, // Approx 0.7539
  { label: "9:16", value: 9 / 16, icon: "📱" },
  { label: "4:5", value: 4 / 5, icon: "🖼️" },
  { label: "1:1", value: 1, icon: "🟦" },
  { label: "16:9", value: 16 / 9, icon: "💻" },
];

export default function ImageSplitterClient() {
  const { t, isLoaded } = useLanguage();

  // Data State
  const [displayImage, setDisplayImage] = useState<string | null>(null);
  const [originalImage, setOriginalImage] = useState<string | null>(null); // Store original for undo
  const [segments, setSegments] = useState<string[]>([]);

  // Settings State
  // Settings State
  const [colCount, setColCount] = useState<number>(2);
  const [rowCount, setRowCount] = useState<number>(1);

  // -- SPLIT TAB RATIO STATE --
  const [splitRatio, setSplitRatio] = useState<number>(0); // Default to 0 (Free mode)
  const [customHW, setCustomHW] = useState({ w: 3, h: 4 });
  const [isCustomRatio, setIsCustomRatio] = useState(false);

  // -- EDIT TAB RATIO STATE --
  const [editRatio, setEditRatio] = useState<number>(0); // Default to 0 (Free mode)
  const [editCustomHW, setEditCustomHW] = useState({ w: 3, h: 4 });
  const [isEditCustomRatio, setIsEditCustomRatio] = useState(false);

  const [activeTab, setActiveTab] = useState<"edit" | "split">("split");
  const [isEditCropMode, setIsEditCropMode] = useState(false);

  // Reset Edit Crop Mode when switching tabs
  useEffect(() => {
    setIsEditCropMode(false);
  }, [activeTab]);

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
      const result = e.target?.result as string;
      setDisplayImage(result);
      setOriginalImage(result);
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
      if (activeTab === "split") {
        if (splitRatio === 0) {
          cropper.setAspectRatio(NaN); // Free mode
        } else {
          // Total Aspect Ratio = (Columns * Single Width) / (Rows * Single Height)
          // Since Single Width / Single Height = ChunkRatio => SW = ChunkRatio * SH
          // Total Aspect Ratio = (Cols * ChunkRatio * SH) / (Rows * SH) = (Cols / Rows) * ChunkRatio
          cropper.setAspectRatio((colCount / rowCount) * splitRatio);
        }
      } else if (activeTab === "edit" && isEditCropMode) {
        // Edit Mode Ratio
        if (editRatio === 0) {
          cropper.setAspectRatio(NaN);
        } else {
          cropper.setAspectRatio(editRatio);
        }
      }
    }
  }, [colCount, rowCount, splitRatio, editRatio, activeTab, isEditCropMode]);
  useEffect(() => {
    const cropper = cropperRef.current?.cropper;
    if (!cropper) return;

    if (activeTab === "edit") {
      if (isEditCropMode) {
        cropper.crop(); // Init/Show box
        cropper.setDragMode("none");
      } else {
        cropper.clear(); // Hide box completely
        cropper.setDragMode("none"); // No interaction
      }
    } else {
      // Split mode
      cropper.crop(); // Ensure box is there
      cropper.setDragMode("none"); // Box exists but locked from creating new one (user drags box edges if allowed, or we lock that too?)
      // In split mode we want the box to exist to define the area. `dragMode: none` means "can't draw NEW box", but existing box is interactable?
      // Actually `dragMode: none` usually allows crop box interaction if it exists.
    }
  }, [activeTab, isEditCropMode]);

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
        display: "block", // Visible
        position: "absolute",
        pointerEvents: "none", // Allow clicks to pass through to cropper
        zIndex: 10,
      });
    }
  };

  // Rotate and Zoom to Fit
  const handleRotate = useCallback(() => {
    const cropper = cropperRef.current?.cropper;
    if (!cropper) return;

    cropper.rotate(90);

    const containerData = cropper.getContainerData();
    const imageData = cropper.getImageData();

    const rotation = Math.abs(imageData.rotate) % 180;
    const isRotated90 = rotation === 90;

    const contentWidth = isRotated90
      ? imageData.naturalHeight
      : imageData.naturalWidth;
    const contentHeight = isRotated90
      ? imageData.naturalWidth
      : imageData.naturalHeight;

    const scaleRatio = Math.min(
      containerData.width / contentWidth,
      containerData.height / contentHeight
    );

    const newWidth = contentWidth * scaleRatio;
    const newHeight = contentHeight * scaleRatio;

    const newLeft = (containerData.width - newWidth) / 2;
    const newTop = (containerData.height - newHeight) / 2;

    cropper.setCanvasData({
      left: newLeft,
      top: newTop,
      width: newWidth,
      height: newHeight,
    });
  }, []);

  // The Split Logic
  const performSplit = useCallback(() => {
    const cropper = cropperRef.current?.cropper;
    if (!cropper) return;

    setIsProcessing(true);

    // Get the cropped data
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

    const newSegments: string[] = [];
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      setIsProcessing(false);
      return;
    }

    const segmentWidth = Math.floor(width / colCount);
    const segmentHeight = Math.floor(height / rowCount);

    canvas.width = segmentWidth;
    canvas.height = segmentHeight;

    // Loop through Rows then Columns (or Columns then Rows?)
    // Typically reading order: Row 0 -> Left to Right, then Row 1...
    for (let r = 0; r < rowCount; r++) {
      for (let c = 0; c < colCount; c++) {
        ctx.clearRect(0, 0, segmentWidth, segmentHeight);
        ctx.drawImage(
          croppedCanvas,
          c * segmentWidth, // source x
          r * segmentHeight, // source y
          segmentWidth, // source w
          segmentHeight, // source h
          0,
          0,
          segmentWidth,
          segmentHeight
        );
        newSegments.push(canvas.toDataURL("image/jpeg", 0.95));
      }
    }

    setSegments(newSegments);
    setIsProcessing(false);
  }, [colCount, rowCount]);

  // Apply Crop (Edit Mode)
  const performCrop = () => {
    const cropper = cropperRef.current?.cropper;
    if (!cropper) return;
    const canvas = cropper.getCroppedCanvas();
    if (canvas) {
      setDisplayImage(canvas.toDataURL());
      // Optionally reset to split mode after crop?
      // setActiveTab("split");
    }
  };

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
        className="w-full max-w-4xl mx-auto h-[50vh] sm:h-[600px] flex flex-col items-center justify-center relative bg-white border-4 border-black border-dashed p-10 sm:p-20 text-center transition-all hover:bg-yellow-50 cursor-pointer shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-none"
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
              e.target.value = ""; // Reset value to allow re-selecting same file
            }
          }}
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
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            handleFileUpload(e.target.files[0]);
            e.target.value = ""; // Reset value to allow re-selecting same file
          }
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
        {/* LEFT: Controls */}
        <div className="lg:col-span-4 space-y-4 sm:space-y-6">
          <div className="bg-white border-4 border-black p-4 sm:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col transition-all">
            {/* TABS */}
            <div className="flex border-b-4 border-black mb-4 sm:mb-6">
              <button
                onClick={() => setActiveTab("edit")}
                className={`flex-1 py-2 sm:py-3 font-black uppercase text-sm flex items-center justify-center gap-2 ${
                  activeTab === "edit"
                    ? "bg-yellow-300 text-black"
                    : "bg-white text-slate-400 hover:bg-slate-50"
                }`}
              >
                <Edit3 className="w-4 h-4" /> {t.tab_edit}
              </button>
              <button
                onClick={() => setActiveTab("split")}
                className={`flex-1 py-2 sm:py-3 font-black uppercase text-sm flex items-center justify-center gap-2 border-l-4 border-black ${
                  activeTab === "split"
                    ? "bg-cyan-300 text-black"
                    : "bg-white text-slate-400 hover:bg-slate-50"
                }`}
              >
                <Grid3X3 className="w-4 h-4" /> {t.tab_split}
              </button>
            </div>

            {/* TAB CONTENT: EDIT */}
            {activeTab === "edit" && (
              <div className="space-y-3 sm:space-y-6 animate-in slide-in-from-left-4 fade-in duration-300">
                <div>
                  <label className="font-bold uppercase text-sm mb-3 block">
                    {t.transform_label}
                  </label>
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <button
                      onClick={handleRotate}
                      className="bg-white border-2 border-black p-2 sm:p-3 hover:bg-yellow-200 transition-colors font-bold uppercase text-xs flex flex-col items-center gap-1 cursor-pointer"
                    >
                      <RotateCw className="w-5 h-5" /> {t.rotate_btn}
                    </button>
                    <button
                      onClick={() =>
                        cropperRef.current?.cropper?.scaleX(
                          -(cropperRef.current?.cropper?.getData().scaleX || 1)
                        )
                      }
                      className="bg-white border-2 border-black p-2 sm:p-3 hover:bg-yellow-200 transition-colors font-bold uppercase text-xs flex flex-col items-center gap-1 cursor-pointer"
                    >
                      <FlipHorizontal className="w-5 h-5" /> {t.flip_h_btn}
                    </button>
                  </div>
                  <button
                    onClick={() => setIsEditCropMode(!isEditCropMode)}
                    className={`w-full border-2 border-black p-2 sm:p-3 transition-all font-bold uppercase text-xs flex items-center justify-center gap-2 cursor-pointer ${
                      isEditCropMode
                        ? "bg-black text-white"
                        : "bg-white hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <LayoutTemplate className="w-5 h-5" />
                      {isEditCropMode ? t.cancel_crop : t.open_crop}
                    </div>
                  </button>

                  {/* Reset/Undo Button - Only show if current image != original */}
                  {displayImage !== originalImage && !isEditCropMode && (
                    <button
                      onClick={() => {
                        if (originalImage) setDisplayImage(originalImage);
                      }}
                      className="w-full mt-2 border-2 border-black p-2 sm:p-3 transition-all font-bold uppercase text-xs flex items-center justify-center gap-2 cursor-pointer bg-white hover:bg-red-50 text-red-600"
                    >
                      <div className="flex flex-col items-center gap-1">
                        <RotateCw className="w-5 h-5 -scale-x-100" />{" "}
                        {/* Flip rotate icon to look like undo */}
                        {t.reset_image}
                      </div>
                    </button>
                  )}
                </div>

                {isEditCropMode && (
                  <div className="animate-in slide-in-from-top-2 fade-in">
                    {/* EDIT MODE CROP RATIO UI */}
                    <div className="mb-4">
                      <label className="font-bold uppercase text-sm mb-3 block">
                        {t.crop_ratio_label}
                      </label>
                      <div className="grid grid-cols-3 sm:grid-cols-2 gap-2">
                        {ASPECT_RATIOS.map((r) => (
                          <button
                            key={r.label}
                            onClick={() => {
                              setEditRatio(r.value);
                              setIsEditCustomRatio(false);
                            }}
                            className={`border-2 border-black p-1 sm:p-2 font-bold text-xs sm:text-sm uppercase flex items-center justify-center gap-1 sm:gap-2 transition-all cursor-pointer ${
                              !isEditCustomRatio &&
                              Math.abs(editRatio - r.value) < 0.001
                                ? "bg-yellow-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] translate-x-px translate-y-px"
                                : "bg-white hover:bg-slate-50 hover:-translate-y-1"
                            }`}
                          >
                            <span className="hidden sm:inline">{r.icon}</span>{" "}
                            {r.value === 0 ? t.ratio_free : r.label}
                          </button>
                        ))}
                        {/* Custom Button for Edit Mode */}
                        <button
                          onClick={() => {
                            setIsEditCustomRatio(true);
                            if (editCustomHW.w > 0 && editCustomHW.h > 0) {
                              setEditRatio(editCustomHW.w / editCustomHW.h);
                            }
                          }}
                          className={`border-2 border-black p-1 sm:p-2 font-bold text-xs sm:text-sm uppercase flex items-center justify-center gap-1 sm:gap-2 transition-all cursor-pointer ${
                            isEditCustomRatio
                              ? "bg-yellow-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] translate-x-px translate-y-px"
                              : "bg-white hover:bg-slate-50 hover:-translate-y-1"
                          }`}
                        >
                          <span className="hidden sm:inline">✏️</span>{" "}
                          {t.custom_ratio}
                        </button>
                      </div>

                      {/* Edit Custom Inputs Panel */}
                      {isEditCustomRatio && (
                        <div className="mt-2 bg-slate-100 border-2 border-dashed border-black p-2 sm:p-3 animate-in slide-in-from-top-2">
                          <div className="flex items-center gap-2">
                            <div className="flex-1">
                              <label className="text-[10px] font-bold uppercase text-slate-500 mb-1 block">
                                {t.width_label}
                              </label>
                              <input
                                type="number"
                                min="1"
                                value={editCustomHW.w}
                                onChange={(e) => {
                                  const w = Number(e.target.value);
                                  setEditCustomHW((p) => ({ ...p, w }));
                                  if (w > 0 && editCustomHW.h > 0)
                                    setEditRatio(w / editCustomHW.h);
                                }}
                                className="w-full border-2 border-black p-1 font-bold text-center text-sm focus:outline-none focus:bg-yellow-100"
                              />
                            </div>
                            <span className="font-black text-xl pt-4">:</span>
                            <div className="flex-1">
                              <label className="text-[10px] font-bold uppercase text-slate-500 mb-1 block">
                                {t.height_label}
                              </label>
                              <input
                                type="number"
                                min="1"
                                value={editCustomHW.h}
                                onChange={(e) => {
                                  const h = Number(e.target.value);
                                  setEditCustomHW((p) => ({ ...p, h }));
                                  if (editCustomHW.w > 0 && h > 0)
                                    setEditRatio(editCustomHW.w / h);
                                }}
                                className="w-full border-2 border-black p-1 font-bold text-center text-sm focus:outline-none focus:bg-yellow-100"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <label className="font-bold uppercase text-sm mb-3 block">
                      {t.actions_label}
                    </label>
                    <button
                      onClick={() => {
                        performCrop();
                        setIsEditCropMode(false); // Close after apply
                      }}
                      className="w-full bg-green-400 border-2 border-black py-3 sm:py-4 font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all flex items-center justify-center gap-2 text-base sm:text-lg cursor-pointer"
                    >
                      <CheckCircle className="w-5 h-5" /> {t.apply_crop}
                    </button>
                    <p className="text-xs text-slate-500 mt-2 font-semibold">
                      {t.overwrite_warning}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* TAB CONTENT: SPLIT */}
            {activeTab === "split" && (
              <div className="space-y-3 sm:space-y-6 animate-in slide-in-from-right-4 fade-in duration-300">
                {/* 1. Columns Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="font-bold uppercase text-sm">
                      {t.split_cols}
                    </label>
                    <span className="bg-black text-white px-2 py-0.5 font-black text-sm">
                      {colCount}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={colCount}
                    onChange={(e) => {
                      setColCount(Number(e.target.value));
                    }}
                    className="w-full h-4 bg-slate-200 border-2 border-black rounded-full appearance-none accent-black cursor-pointer hover:bg-slate-300 transition-colors"
                  />
                  <div className="flex justify-between text-xs font-bold text-slate-400 mt-1 px-1">
                    <span>1</span>
                    <span>10</span>
                  </div>
                </div>

                {/* 2. Rows Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="font-bold uppercase text-sm">
                      {t.split_rows}
                    </label>
                    <span className="bg-black text-white px-2 py-0.5 font-black text-sm">
                      {rowCount}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={rowCount}
                    onChange={(e) => {
                      setRowCount(Number(e.target.value));
                    }}
                    className="w-full h-4 bg-slate-200 border-2 border-black rounded-full appearance-none accent-black cursor-pointer hover:bg-slate-300 transition-colors"
                  />
                  <div className="flex justify-between text-xs font-bold text-slate-400 mt-1 px-1">
                    <span>1</span>
                    <span>10</span>
                  </div>
                </div>

                {/* 2. Ratio Select - OPTIMIZED HEIGHT FOR MOBILE */}
                <div>
                  <label className="font-bold uppercase text-sm mb-3 block">
                    {t.crop_ratio_label}
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-2 gap-2">
                    {" "}
                    {/* Changed to 3 cols on mobile for compact view */}
                    {ASPECT_RATIOS.map((r) => (
                      <button
                        key={r.label}
                        onClick={() => {
                          setSplitRatio(r.value);
                          setIsCustomRatio(false);
                        }}
                        className={`border-2 border-black p-1 sm:p-2 font-bold text-xs sm:text-sm uppercase flex items-center justify-center gap-1 sm:gap-2 transition-all cursor-pointer ${
                          !isCustomRatio &&
                          Math.abs(splitRatio - r.value) < 0.001
                            ? "bg-cyan-400 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] translate-x-px translate-y-px"
                            : "bg-white hover:bg-slate-50 hover:-translate-y-1"
                        }`}
                      >
                        <span className="hidden sm:inline">{r.icon}</span>{" "}
                        {r.value === 0 ? t.ratio_free : r.label}
                      </button>
                    ))}
                    {/* Custom Button */}
                    <button
                      onClick={() => {
                        setIsCustomRatio(true);
                        // If values are valid, apply them, otherwise keep current ratio or def to 3:4?
                        // Actually better to just apply current customHW even if it's 0 (invalid?)
                        // Safe check:
                        if (customHW.w > 0 && customHW.h > 0) {
                          setSplitRatio(customHW.w / customHW.h);
                        }
                      }}
                      className={`border-2 border-black p-1 sm:p-2 font-bold text-xs sm:text-sm uppercase flex items-center justify-center gap-1 sm:gap-2 transition-all cursor-pointer ${
                        isCustomRatio
                          ? "bg-cyan-400 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] translate-x-px translate-y-px"
                          : "bg-white hover:bg-slate-50 hover:-translate-y-1"
                      }`}
                    >
                      <span className="hidden sm:inline">✏️</span>{" "}
                      {t.custom_ratio}
                    </button>
                  </div>

                  {/* Custom Inputs Panel */}
                  {isCustomRatio && (
                    <div className="mt-2 bg-slate-100 border-2 border-dashed border-black p-2 sm:p-3 animate-in slide-in-from-top-2">
                      <div className="flex items-center gap-2">
                        <div className="flex-1">
                          <label className="text-[10px] font-bold uppercase text-slate-500 mb-1 block">
                            {t.width_label}
                          </label>
                          <input
                            type="number"
                            min="1"
                            value={customHW.w}
                            onChange={(e) => {
                              const w = Number(e.target.value);
                              setCustomHW((p) => ({ ...p, w }));
                              if (w > 0 && customHW.h > 0)
                                setSplitRatio(w / customHW.h);
                            }}
                            className="w-full border-2 border-black p-1 font-bold text-center text-sm focus:outline-none focus:bg-yellow-100"
                          />
                        </div>
                        <span className="font-black text-xl pt-4">:</span>
                        <div className="flex-1">
                          <label className="text-[10px] font-bold uppercase text-slate-500 mb-1 block">
                            {t.height_label}
                          </label>
                          <input
                            type="number"
                            min="1"
                            value={customHW.h}
                            onChange={(e) => {
                              const h = Number(e.target.value);
                              setCustomHW((p) => ({ ...p, h }));
                              if (customHW.w > 0 && h > 0)
                                setSplitRatio(customHW.w / h);
                            }}
                            className="w-full border-2 border-black p-1 font-bold text-center text-sm focus:outline-none focus:bg-yellow-100"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3 mt-auto pt-4 sm:pt-6 border-t-4 border-black">
                  <button
                    onClick={performSplit}
                    className="bg-green-400 border-2 border-black py-3 sm:py-4 font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all flex items-center justify-center gap-2 text-base sm:text-lg cursor-pointer"
                  >
                    {isProcessing ? t.processing : t.split_image_btn}{" "}
                    <ArrowRight strokeWidth={3} />
                  </button>
                </div>
              </div>
            )}

            {/* SHARED FOOTER: Global Actions */}
            <div className="mt-8 pt-6 border-t-4 border-black grid grid-cols-2 gap-3">
              <button
                onClick={handleChangeImage}
                className="border-2 border-black py-2 font-bold uppercase hover:bg-yellow-200 text-sm cursor-pointer flex items-center justify-center gap-1"
              >
                <ImageIcon className="w-4 h-4" /> {t.change_img}
              </button>
              <button
                onClick={() => {
                  setDisplayImage(null);
                  setSegments([]);
                }}
                className="border-2 border-black py-2 font-bold uppercase hover:bg-red-200 text-sm cursor-pointer text-red-600"
              >
                {t.reset_all}
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT: Visual Simulation (Cropper as Viewer) */}
        <div className="lg:col-span-8">
          <div className="bg-slate-100 border-4 border-black p-2 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="relative w-full h-[30vh] sm:h-[600px] overflow-hidden">
              <div className="absolute top-2 left-2 z-20 bg-black text-white px-2 py-1 font-black uppercase pointer-events-none text-[9px] sm:text-xs sm:top-4 sm:left-4">
                {activeTab === "edit" ? t.edit_mode : t.interactive_preview}
              </div>

              {/* 
                  React Cropper acts as the "Draggable Cutting Layer". 
                  We customize it to look like a tool, not just an editor.
               */}
              <Cropper
                src={displayImage}
                style={{ height: "100%", width: "100%" }}
                zoomable={false}
                // Use editRatio if in Edit mode and Cropping, otherwise use Split logic (or NaN for Free/Edit non-crop)
                aspectRatio={
                  activeTab === "edit"
                    ? isEditCropMode
                      ? editRatio === 0
                        ? NaN
                        : editRatio
                      : NaN
                    : splitRatio === 0
                    ? NaN
                    : (colCount / rowCount) * splitRatio
                }
                guides={activeTab === "edit" && isEditCropMode} // Enable guides only when cropping in edit mode
                ref={cropperRef}
                viewMode={1} // Restrict crop box to image size
                // "crop" makes new box. "move" moves image behind.
                dragMode={"none"}
                autoCrop={activeTab === "split" || isEditCropMode} // Hide crop box unless in split mode or actively cropping
                autoCropArea={1} // Start full
                background={false}
                highlight={false} // We do our own highlight via overlay logic if needed, but cropper does it well (dim outside)
                crop={onCrop} // Update our custom grid lines on move
                className="cropper-container-custom"
                alt="Image to be split" // Added alt text for accessibility
                ready={() => {
                  // Ensure crop box hidden on initial load if needed?
                  // AutoCrop prop handles this mostly.
                }}
              />

              {/* CUSTOM GRID OVERLAY (Dashed Lines) - Only in Split Mode */}
              {activeTab === "split" && (
                <div style={gridOverlayStyle} className="">
                  {/* Vertical Dividers (Columns) */}
                  {Array.from({ length: colCount - 1 }).map((_, i) => (
                    <div
                      key={`v-line-${i}`}
                      className="absolute top-0 bottom-0 border-l border-dashed border-white/90 -translate-x-1/2"
                      style={{
                        left: `${((i + 1) * 100) / colCount}%`,
                        borderWidth: 1,
                      }}
                    />
                  ))}
                  {/* Horizontal Dividers (Rows) */}
                  {Array.from({ length: rowCount - 1 }).map((_, i) => (
                    <div
                      key={`h-line-${i}`}
                      className="absolute left-0 right-0 border-t border-dashed border-white/90 -translate-y-1/2"
                      style={{
                        top: `${((i + 1) * 100) / rowCount}%`,
                      }}
                    />
                  ))}
                  {/* Cell Numbers */}
                  {Array.from({ length: rowCount }).map((_, r) =>
                    Array.from({ length: colCount }).map((_, c) => (
                      <div
                        key={`cell-${r}-${c}`}
                        className="absolute flex justify-center items-center"
                        style={{
                          left: `${((c + 0.5) * 100) / colCount}%`,
                          top: `${((r + 0.5) * 100) / rowCount}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <span className="bg-black/60 text-white text-[10px] font-bold px-1 rounded backdrop-blur-md">
                          {r * colCount + c + 1}
                        </span>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>

          {/* If Segments Exist - Show Result Below */}
          {segments.length > 0 && (
            <div className="mt-8 animate-in fade-in slide-in-from-bottom-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-black text-xl uppercase bg-yellow-400 inline-block px-2 border-2 border-black transform -rotate-1">
                  {t.results_label}
                </h3>
                <button
                  onClick={handleDownloadAll}
                  className="font-bold underline cursor-pointer hover:text-green-600"
                >
                  {t.download_all}
                </button>
              </div>

              <div
                className={`grid gap-2 sm:gap-4 pb-6 px-1 ${
                  colCount > 1 ? "overflow-x-auto snap-x snap-mandatory" : ""
                }`}
                style={{
                  gridTemplateColumns:
                    colCount === 1
                      ? "1fr"
                      : `repeat(${colCount}, minmax(125px, 1fr))`,
                }}
              >
                {segments.map((seg, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-2 group w-full min-w-0 snap-center"
                  >
                    <div className="bg-slate-200 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden transition-transform group-hover:-translate-y-1">
                      <NextImage
                        src={seg}
                        width={200}
                        height={350}
                        unoptimized
                        className="w-full h-auto block"
                        alt={`Split part ${i + 1}`}
                      />
                      <div className="absolute bottom-0 inset-x-0 bg-black text-white text-center text-xs font-bold py-1 uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                        {t.part} {i + 1}
                      </div>
                    </div>
                    <button
                      onClick={() => handleDownload(seg, i)}
                      className="bg-cyan-300 border-2 border-black py-2 text-xs font-black uppercase hover:bg-cyan-200 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none translate-x-px translate-y-px cursor-pointer"
                    >
                      {t.download_part}
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
