import React from "react";
import { Metadata } from "next";
import BlackAndWhiteClient from "./content";
import { ToolsNavigation } from "@/components/ToolsNavigation";
import { bangers } from "@/app/constants";

export const metadata: Metadata = {
  title: "Black & White Image | Free Online Tool",
  description:
    "Convert your colored images to professional black and white grayscale instantly. Free and private.",
};

export default function BlackAndWhitePage() {
  return (
    <>
      <div className="w-full mb-8">
        <ToolsNavigation />
      </div>
      <div className="pt-8 sm:pt-12 flex flex-col items-center justify-center py-8 w-full">
        <div className="mb-12 text-center space-y-4">
          <div className="inline-block bg-zinc-800 border-4 border-black px-6 py-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -rotate-1 mb-4">
            <span className="font-black text-lg sm:text-l uppercase tracking-widest text-white">
              Classic Filter
            </span>
          </div>
          <h1
            className={`text-4xl sm:text-7xl ${bangers.className} font-black text-black uppercase tracking-widest leading-none stroke-black layer-text`}
          >
            Black & White
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-slate-700 max-w-3xl mx-auto bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Transform your photos into timeless black and white masterpieces.
          </p>
        </div>
        <BlackAndWhiteClient />
      </div>
    </>
  );
}
