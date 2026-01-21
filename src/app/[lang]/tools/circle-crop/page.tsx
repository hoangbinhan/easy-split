import React from "react";
import { Metadata } from "next";
import CircleCropClient from "./content";

export const metadata: Metadata = {
  title: "Circle Crop Image | Free Online Tool",
  description:
    "Crop your images into a perfect circle instantly. Free, fast, and easy to use.",
};

export default function CircleCropPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12 text-center space-y-4">
        <div className="inline-block bg-green-300 border-4 border-black px-6 py-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -rotate-2 mb-4">
          <span className="font-black text-lg sm:text-l uppercase tracking-widest text-black">
            New Tool
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter layer-text text-white">
          Circle Crop Image
        </h1>
        <p className="text-xl font-medium max-w-2xl mx-auto">
          Upload an image, adjust the circle, and download a transparent PNG
          instantly.
        </p>
      </div>
      <CircleCropClient />
    </div>
  );
}
