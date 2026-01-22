import React from "react";
import { Metadata } from "next";
import CircleCropClient from "./content";
import { ToolsNavigation } from "@/components/ToolsNavigation";
import { bangers } from "@/app/constants";

export const metadata: Metadata = {
  title: "Circle Crop Image | Free Online Tool",
  description:
    "Crop your images into a perfect circle instantly. Free, fast, and easy to use.",
};

export default function CircleCropPage() {
  return (
    <div className="space-y-20">
      <ToolsNavigation />
      <div className="mb-12 text-center space-y-6 pt-8 sm:pt-12">
        <div className="inline-block bg-green-300 border-4 border-black px-6 py-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -rotate-2 mb-4">
          <span className="font-black text-lg sm:text-l uppercase tracking-widest text-black">
            New Tool
          </span>
        </div>
        <h1
          className={`text-4xl sm:text-7xl ${bangers.className} font-black text-black uppercase tracking-widest leading-none stroke-black layer-text`}
        >
          Circle Crop Image
        </h1>
        <p className="text-xl sm:text-2xl font-bold text-slate-700 max-w-3xl mx-auto bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          Upload an image, adjust the circle, and download a transparent PNG
          instantly.
        </p>
      </div>
      <CircleCropClient />
    </div>
  );
}
