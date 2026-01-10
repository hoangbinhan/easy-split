import React from "react";
import { Metadata } from "next";
import ImageSplitterContent from "./content";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "TikTok Image Splitter | Free Online Grid Maker",
  description:
    "Split your 16:9 images into 3 perfectly sized 9:16 vertical segments for TikTok carousels. Free, fast, and no quality loss.",
};

export default function ImageSplitterPage() {
  return <ImageSplitterContent />;
}
