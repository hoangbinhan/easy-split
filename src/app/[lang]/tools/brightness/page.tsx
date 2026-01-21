import React from "react";
import { Metadata } from "next";
import BrightnessClient from "./content";

export const metadata: Metadata = {
  title: "Adjust Image Brightness | Free Online Tool",
  description:
    "Easily adjust the brightness of your photos online. Free, fast, and secure.",
};

export default function BrightnessPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12 text-center space-y-4">
        <div className="inline-block bg-orange-300 border-4 border-black px-6 py-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-1 mb-4">
          <span className="font-black text-lg sm:text-l uppercase tracking-widest text-black">
            Light Control
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter layer-text text-white">
          Image Brightness
        </h1>
        <p className="text-xl font-medium max-w-2xl mx-auto">
          Lighten or darken your images with precision.
        </p>
      </div>
      <BrightnessClient />
    </div>
  );
}
