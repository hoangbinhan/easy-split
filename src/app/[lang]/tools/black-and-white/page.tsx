import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Black & White Image | Free Online Tool",
  description:
    "Convert your images to black and white instantly. Free, fast, and easy to use.",
};

export default function BlackAndWhitePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-black mb-4 uppercase">
        Black & White Image
      </h1>
      <p className="text-lg mb-8">Upload an image to convert to grayscale.</p>
      <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
        <p className="font-bold text-gray-500">Feature Coming Soon...</p>
      </div>
    </div>
  );
}
