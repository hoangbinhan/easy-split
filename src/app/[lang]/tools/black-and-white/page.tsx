import React from "react";
import { Metadata } from "next";
import BlackAndWhiteClient from "./content";

export const metadata: Metadata = {
  title: "Black & White Image | Free Online Tool",
  description:
    "Convert your colored images to professional black and white grayscale instantly. Free and private.",
};

export default function BlackAndWhitePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12 text-center space-y-4">
        <div className="inline-block bg-zinc-800 border-4 border-black px-6 py-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -rotate-1 mb-4">
          <span className="font-black text-lg sm:text-l uppercase tracking-widest text-white">
            Classic Filter
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter layer-text text-white">
          Black & White
        </h1>
        <p className="text-xl font-medium max-w-2xl mx-auto">
          Transform your photos into timeless black and white masterpieces.
        </p>
      </div>
      <BlackAndWhiteClient />
    </div>
  );
}
