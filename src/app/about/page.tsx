import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Easy Split",
  description: "Learn more about Easy Split and our mission.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-6xl font-black uppercase layer-text stroke-black text-white">
          About Us
        </h1>
        <div className="inline-block bg-cyan-300 border-2 border-black px-4 py-1 font-bold text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          Empowering Creators Since 2026
        </div>
      </div>

      <article className="bg-white border-4 border-black p-8 sm:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        <div className="prose prose-lg prose-slate max-w-none prose-headings:font-black prose-headings:uppercase">
          <p className="font-medium text-xl leading-relaxed">
            Welcome to <strong>EASY SPLIT</strong>, the simplest and fastest way
            to slice your images for social media.
          </p>

          <h3>Our Mission</h3>
          <p>
            We started Easy Split with a simple goal: to help creators,
            photographers, and storytellers present their work without limits.
            Whether it's a seamless carousel on Instagram or a photo slide on
            TikTok, we believe your panoramic shots deserve to be seen in full
            glory, not cropped into a tiny square.
          </p>

          <h3>Why We Built This</h3>
          <p>
            Existing tools were either too expensive, ridden with ads, or
            required uploading your private photos to a slow server. We wanted
            to build something:
          </p>
          <ul>
            <li>
              <strong>Fast:</strong> Zero upload time. Everything happens in
              your browser.
            </li>
            <li>
              <strong>Private:</strong> Your photos never leave your device.
            </li>
            <li>
              <strong>Free:</strong> Professional tools should be accessible to
              everyone.
            </li>
          </ul>

          <h3>Meet the Creator</h3>
          <div className="not-prose mt-8 flex flex-col sm:flex-row gap-6 items-center bg-slate-100 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="w-24 h-24 bg-yellow-400 rounded-full border-4 border-black flex items-center justify-center text-4xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              👨‍💻
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-black text-2xl uppercase mb-1">
                Hoàng Bình An
              </h4>
              <p className="font-bold text-slate-500 mb-2">
                Fullstack Developer & Creator
              </p>
              <p className="text-sm">
                Passionate about building "neo-brutalist" web apps that are fun,
                fast, and functional.
              </p>
              <a
                href="mailto:hoangbinhana3@gmail.com"
                className="inline-block mt-4 text-sm font-bold bg-black text-white px-4 py-2 border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-all"
              >
                Say Hello →
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
