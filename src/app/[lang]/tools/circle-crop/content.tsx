"use client";

import React, { useState, useRef } from "react";
import {
  Upload,
  Download,
  Image as ImageIcon,
  RotateCw,
  CheckCircle,
  RefreshCw,
} from "lucide-react";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";

export default function CircleCropClient() {
  const [image, setImage] = useState<string | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const cropperRef = useRef<ReactCropperElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (file: File) => {
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target?.result as string);
      setCroppedImage(null);
    };
    reader.readAsDataURL(file);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleCrop = () => {
    const cropper = cropperRef.current?.cropper;
    if (!cropper) return;

    // Get the square cropped canvas first
    const squareCanvas = cropper.getCroppedCanvas();
    if (!squareCanvas) return;

    // Create a new canvas for the circular crop
    const circleCanvas = document.createElement("canvas");
    const size = Math.min(squareCanvas.width, squareCanvas.height);
    circleCanvas.width = size;
    circleCanvas.height = size;
    const ctx = circleCanvas.getContext("2d");

    if (ctx) {
      // Draw circle path
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.clip(); // Clip subsequent drawing to this circle

      // Draw the swuare image into the clipped context
      ctx.drawImage(squareCanvas, 0, 0, size, size);

      setCroppedImage(circleCanvas.toDataURL("image/png"));
    }
  };

  const handleDownload = () => {
    if (!croppedImage) return;
    const link = document.createElement("a");
    link.href = croppedImage;
    link.download = `circle-crop-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleRotate = () => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      cropper.rotate(90);
    }
  };

  const handleReset = () => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      cropper.reset();
    }
    setCroppedImage(null);
  };

  /* Add Grid Layout adjustments for mobile */
  /* This replacement covers the return block to restructure layout */

  const resultRef = useRef<HTMLDivElement>(null);

  const handleCropAndScroll = () => {
    handleCrop();
    // Small timeout to allow state update/render usually, but direct scroll might work if element exists
    setTimeout(() => {
      if (resultRef.current && window.innerWidth < 1024) {
        const el = resultRef.current;
        if (!el) return;

        const y = el.getBoundingClientRect().top + window.scrollY - 120;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  if (!image) {
    return (
      <div
        className="w-full max-w-4xl mx-auto h-[40vh] sm:h-[500px] flex flex-col items-center justify-center relative bg-white border-4 border-black border-dashed p-6 sm:p-10 text-center transition-all hover:bg-green-50 cursor-pointer shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-none"
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
          <div className="w-16 h-16 sm:w-24 sm:h-24 bg-green-400 border-4 border-black flex items-center justify-center rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] animate-bounce">
            <Upload className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h1 className="text-xl sm:text-3xl font-black text-black uppercase tracking-tight">
            Upload Image to Crop
          </h1>
          <p className="font-bold text-xs sm:text-base text-slate-500 bg-white border-2 border-black px-4 py-1">
            Drag & Drop or Click to Upload
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6 sm:space-y-8">
      {/* Hidden Input for "Change Image" */}
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
            <div className="h-[300px] sm:h-[400px] w-full bg-slate-100 border-2 border-black overflow-hidden relative">
              <Cropper
                src={image}
                style={{ height: "100%", width: "100%" }}
                initialAspectRatio={1}
                aspectRatio={1}
                guides={true}
                viewMode={1}
                ref={cropperRef}
                background={false}
                responsive={true}
                autoCropArea={0.8}
                dragMode="move"
                cropBoxMovable={true}
                cropBoxResizable={true}
                toggleDragModeOnDblclick={false}
                className="circle-cropper"
              />
              <style jsx global>{`
                .circle-cropper .cropper-view-box,
                .circle-cropper .cropper-face {
                  border-radius: 50%;
                }
              `}</style>
            </div>
          </div>

          {/* Unified Controls Section */}
          <div className="bg-white border-4 border-black p-2 sm:p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="grid grid-cols-3 gap-2 mb-3">
              <button
                onClick={handleRotate}
                className="bg-white border-2 border-black p-2 sm:p-3 font-bold uppercase text-xs sm:text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-px hover:translate-y-px hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2"
              >
                <RotateCw className="w-4 h-4" /> Rotate
              </button>
              <button
                onClick={handleReset}
                className="bg-white border-2 border-black p-2 sm:p-3 font-bold uppercase text-xs sm:text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-px hover:translate-y-px hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2"
              >
                <RefreshCw className="w-4 h-4" /> Reset
              </button>
              <button
                onClick={() => {
                  fileInputRef.current?.click();
                }}
                className="bg-pink-100 border-2 border-black p-2 sm:p-3 font-bold uppercase text-xs sm:text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-px hover:translate-y-px hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2"
              >
                <Upload className="w-4 h-4" /> New
              </button>
            </div>

            <button
              onClick={handleCropAndScroll}
              className="w-full bg-green-400 border-2 border-black p-3 sm:p-4 font-black uppercase text-lg sm:text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all flex items-center justify-center gap-2 sm:gap-3"
            >
              <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8" /> Crop Circle
            </button>
          </div>
        </div>

        {/* Result Section */}
        <div className="space-y-4" ref={resultRef}>
          <div
            className={`bg-white border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col ${!croppedImage ? "opacity-50" : ""} min-h-[300px] h-full`}
          >
            <h2 className="font-black text-lg sm:text-xl uppercase mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" /> Result
            </h2>

            <div className="flex-1 flex items-center justify-center bg-[url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.G-4iXGg_bU-Nq4yA7_N9nQHaHa%26pid%3DApi&f=1&ipt=b1db241804dfa8df0b5b84c83fa88812c22252479e5306669931751d3883a918&ipo=images')] bg-repeat min-h-[200px]">
              {croppedImage ? (
                <img
                  src={croppedImage}
                  alt="Cropped"
                  className="max-w-full max-h-[300px] sm:max-h-[400px] object-contain"
                />
              ) : (
                <div className="text-slate-400 font-bold uppercase p-6 sm:p-10 text-center bg-white/80 border-2 border-black text-sm sm:text-base">
                  Preview will appear here
                </div>
              )}
            </div>

            {croppedImage && (
              <button
                onClick={handleDownload}
                className="w-full mt-4 bg-yellow-300 border-2 border-black p-3 sm:p-4 font-black uppercase text-lg sm:text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all flex items-center justify-center gap-2 sm:gap-3"
              >
                <Download className="w-6 h-6 sm:w-8 sm:h-8" /> Download PNG
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
