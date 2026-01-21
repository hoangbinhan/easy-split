"use client";

import React, { useState, useRef } from "react";
import {
  Upload,
  Download,
  Image as ImageIcon,
  Zap,
  RefreshCw,
} from "lucide-react";

export default function SharpenImageClient() {
  const [image, setImage] = useState<string | null>(null);
  const [sharpenedImage, setSharpenedImage] = useState<string | null>(null);
  const [amount, setAmount] = useState<number>(0.5); // 0 to 1 intensities
  const fileInputRef = useRef<HTMLInputElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const handleFileUpload = (file: File) => {
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target?.result as string);
      setSharpenedImage(null);
    };
    reader.readAsDataURL(file);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const applySharpen = () => {
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
      const width = imageData.width;
      const height = imageData.height;

      // Simple implementation of a sharpen convolution matrix
      // Kernel:
      //  0 -1  0
      // -1  5 -1
      //  0 -1  0

      // We mix original image with this kernel based on "amount"
      // Wait, a standard sharpen kernel is:
      //  0 -1  0
      // -1  5 -1
      //  0 -1  0
      // This increases contrast at edges.
      // Let's implement convolution.

      // We'll create a copy of data to read from
      const inputData = new Uint8ClampedArray(data);

      // We need offset for 4 neighbors (up, down, left, right)
      // Index = (y * width + x) * 4

      for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
          const i = (y * width + x) * 4;

          // Neighbors
          const up = ((y - 1) * width + x) * 4;
          const down = ((y + 1) * width + x) * 4;
          const left = (y * width + (x - 1)) * 4;
          const right = (y * width + (x + 1)) * 4;

          // Apply kernel for R, G, B. Alpha (i+3) stays same.
          for (let c = 0; c < 3; c++) {
            const val = inputData[i + c];
            const neighbors =
              inputData[up + c] +
              inputData[down + c] +
              inputData[left + c] +
              inputData[right + c];

            // Classic sharpen logic: 5*center - neighbors
            // But we want adjustable amount.
            // Let's us Unsharp Mask approach logic roughly:
            // Detail = Original - Blurred. Sharpened = Original + Amount * Detail.
            // The kernel method [0,-1,0; -1,5,-1; 0,-1,0] effectively does Original + (Original - AverageNeighbors).
            // So (5*C - N) = C + 4*(C - N/4).

            // Let's parameterize: Output = C + amount * (4*C - Neighbors)
            // If amount is 0, we just want C?
            // Actually let's interpret slider 'amount' (0.1 to 2.0).
            // When amount is high, we apply strong kernel.

            const laplacian = 4 * val - neighbors; // This detects edges
            const sharpened = val + amount * laplacian;

            data[i + c] = Math.min(255, Math.max(0, sharpened));
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);
      setSharpenedImage(canvas.toDataURL("image/jpeg", 0.95));

      // Auto scroll
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
    if (!sharpenedImage) return;
    const link = document.createElement("a");
    link.href = sharpenedImage;
    link.download = `sharpen-result-${Date.now()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!image) {
    return (
      <div
        className="w-full max-w-4xl mx-auto h-[40vh] sm:h-[500px] flex flex-col items-center justify-center relative bg-white border-4 border-black border-dashed p-6 sm:p-10 text-center transition-all hover:bg-yellow-50 cursor-pointer shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-none"
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
          <div className="w-16 h-16 sm:w-24 sm:h-24 bg-yellow-400 border-4 border-black flex items-center justify-center rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] animate-bounce">
            <Upload className="w-8 h-8 sm:w-10 sm:h-10 text-black" />
          </div>
          <h1 className="text-xl sm:text-3xl font-black text-black uppercase tracking-tight">
            Upload Image to Sharpen
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
            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <label className="font-bold uppercase text-sm">
                  Sharpen Amount
                </label>
                <span className="font-black bg-black text-white px-2 text-sm">
                  {amount.toFixed(1)}
                </span>
              </div>
              <input
                type="range"
                min="0.1"
                max="10.0"
                step="0.1"
                value={amount}
                onChange={(e) => setAmount(parseFloat(e.target.value))}
                className="w-full h-4 bg-slate-200 border-2 border-black rounded-full appearance-none accent-black cursor-pointer hover:bg-slate-300 transition-colors"
              />
              <div className="flex justify-between text-xs font-bold text-slate-400 mt-1">
                <span>Mild</span>
                <span>Extreme</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-3">
              <button
                onClick={() => {
                  setAmount(0.5);
                  setSharpenedImage(null);
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
              onClick={applySharpen}
              className="w-full bg-yellow-400 border-2 border-black p-3 sm:p-4 font-black uppercase text-lg sm:text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all flex items-center justify-center gap-2 sm:gap-3"
            >
              <Zap className="w-6 h-6 sm:w-8 sm:h-8" /> Apply Sharpen
            </button>
          </div>
        </div>

        {/* Result Section */}
        <div className="space-y-4" ref={resultRef}>
          <div
            className={`bg-white border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col ${!sharpenedImage ? "opacity-50" : ""} min-h-[300px] h-full`}
          >
            <h2 className="font-black text-lg sm:text-xl uppercase mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6" /> Result
            </h2>

            <div className="flex-1 flex items-center justify-center bg-slate-100 border-2 border-black min-h-[200px]">
              {sharpenedImage ? (
                <img
                  src={sharpenedImage}
                  alt="Sharpened"
                  className="max-w-full max-h-[300px] sm:max-h-[400px] object-contain"
                />
              ) : (
                <div className="text-slate-400 font-bold uppercase p-6 sm:p-10 text-center text-sm sm:text-base">
                  Preview will appear here
                </div>
              )}
            </div>

            {sharpenedImage && (
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
  );
}
