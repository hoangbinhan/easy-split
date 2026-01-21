"use client";

import { useRef, useState } from "react";
import { TikTokProfile, ProfileRefs } from "./TikTokProfile";
import { InstagramProfile } from "./InstagramProfile";
import { Download } from "lucide-react";
import { toPng } from "html-to-image";

export function MockupContainer() {
  const [platform, setPlatform] = useState<"tiktok" | "instagram">("tiktok");
  const [isDark, setIsDark] = useState(false);
  const profileRef = useRef<ProfileRefs>(null);

  const downloadVisible = async () => {
    if (!profileRef.current?.screenRef || !profileRef.current?.scrollRef)
      return;
    try {
      const element = profileRef.current.screenRef;
      const scrollElement = profileRef.current.scrollRef;
      const currentScroll = scrollElement.scrollTop;
      const scrollHeight = scrollElement.clientHeight;
      const { width, height } = element.getBoundingClientRect();

      const dataUrl = await toPng(element, {
        pixelRatio: 3,
        width: width,
        height: height,
        style: {
          width: `${width}px`,
          height: `${height}px`,
        },
        onClone: (clonedDoc: HTMLElement) => {
          // Force layout dimensions
          clonedDoc.style.width = `${width}px`;
          clonedDoc.style.height = `${height}px`;

          const clonedScroll = clonedDoc.querySelector(
            '[data-mockup-scroll="true"]',
          ) as HTMLElement;

          if (clonedScroll) {
            // Lock the container to the visible area
            clonedScroll.style.height = `${scrollHeight}px`;
            clonedScroll.style.flex = "none";
            clonedScroll.style.overflow = "hidden";
            clonedScroll.style.position = "relative";

            const children = Array.from(clonedScroll.children) as HTMLElement[];
            const header = children.find(
              (child) => child.tagName.toLowerCase() === "header",
            );

            if (header) {
              // Header stays pinned to top
              header.style.position = "absolute";
              header.style.top = "0";
              header.style.left = "0";
              header.style.width = "100%";
              header.style.zIndex = "50";
              // Reset any transform on header if it exists
              header.style.transform = "none";
            }

            // Shift other content up to simulate scroll
            // Since header is now absolute, it takes no space.
            // But originally it was sticky/relative (mostly relative in flow).
            // So content started AFTER header.
            // If header is absolute, content effectively jumps up by header height.
            // We need to push content DOWN by header height, THEN up by scroll?
            // OR we can just keep header relative and translate it 0?
            // "Sticky" means relative behavior until it scrolls off.
            // If we use translate on everything, we don't change flow.

            // Plan B: Keep Header Relative. Translate Header 0. Translate others -scroll.
            // Ensure z-index.
            if (header && currentScroll > 0) {
              header.style.position = "relative";
              header.style.zIndex = "50";
              header.style.transform = "translateY(0px)"; // Header ignores scroll

              // Apply transform to all other siblings
              children.forEach((child) => {
                if (child !== header) {
                  child.style.transform = `translateY(-${currentScroll}px)`;
                }
              });
            } else if (!header && currentScroll > 0) {
              // No header, just shift everything
              children.forEach((child) => {
                child.style.transform = `translateY(-${currentScroll}px)`;
              });
            }
          }
        },
      } as any);
      const link = document.createElement("a");
      link.download = `${platform}-mockup-visible.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Failed to download visible", err);
    }
  };

  const downloadFull = async () => {
    if (!profileRef.current?.screenRef || !profileRef.current?.scrollRef)
      return;
    try {
      const screenEl = profileRef.current.screenRef;
      const scrollEl = profileRef.current.scrollRef;

      // Save original styles
      const originalScreenHeight = screenEl.style.height;
      const originalOverflow = scrollEl.style.overflow;
      const originalScrollHeight = scrollEl.style.height;
      const originalFlex = scrollEl.style.flex;

      // Temporarily expand height to capture full content
      // We expand the scroll container and the screen container
      scrollEl.style.overflow = "visible";
      scrollEl.style.height = "auto";
      scrollEl.style.flex = "none";
      screenEl.style.height = "auto";

      const dataUrl = await toPng(screenEl, {
        pixelRatio: 3,
      });

      // Restore styles
      scrollEl.style.overflow = originalOverflow;
      scrollEl.style.height = originalScrollHeight;
      scrollEl.style.flex = originalFlex;
      screenEl.style.height = originalScreenHeight;

      const link = document.createElement("a");
      link.download = `${platform}-mockup-full.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Failed to download full", err);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Global Controls */}
      <div className="flex flex-col md:flex-row items-center gap-4 p-4 bg-white rounded-xl shadow-lg border-2 border-black w-full max-w-4xl justify-between mb-8">
        <h2 className="text-xl font-black uppercase italic tracking-tighter">
          Mockup Settings
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setIsDark(!isDark)}
            className={`basis-full grow-0 shrink-0 sm:basis-auto sm:grow sm:shrink max-w-[260px] px-4 py-2 font-bold border-2 border-black rounded transition-transform active:scale-95 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${isDark ? "bg-white text-black" : "bg-black text-white"}`}
          >
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
          <div className="w-[2px] h-8 bg-gray-300 mx-2 hidden md:block"></div>
          <button
            onClick={downloadVisible}
            className="flex items-center gap-2 px-4 py-2 font-bold border-2 border-black bg-cyan-300 rounded transition-transform active:scale-95 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-cyan-400"
          >
            <Download className="w-4 h-4" />
            <span className="text-xs uppercase">Viewport</span>
          </button>
          <button
            onClick={downloadFull}
            className="flex items-center gap-2 px-4 py-2 font-bold border-2 border-black bg-green-400 rounded transition-transform active:scale-95 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-green-500"
          >
            <Download className="w-4 h-4" />
            <span className="text-xs uppercase">Full Page</span>
          </button>
        </div>
      </div>

      {/* Platform Selector */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <button
          onClick={() => setPlatform("tiktok")}
          className={`group flex items-center gap-3 px-6 py-3 rounded-xl border-2 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none ${
            platform === "tiktok"
              ? "bg-[#FE2C55] border-black text-white"
              : "bg-white border-black text-black hover:bg-gray-50"
          }`}
        >
          <span className="font-black header-font text-lg uppercase tracking-wide">
            TikTok
          </span>
        </button>

        <button
          onClick={() => setPlatform("instagram")}
          className={`group flex items-center gap-3 px-6 py-3 rounded-xl border-2 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none ${
            platform === "instagram"
              ? "bg-linear-to-tr from-[#FFD600] via-[#FF0169] to-[#D300C5] border-black text-white"
              : "bg-white border-black text-black hover:bg-gray-50"
          }`}
        >
          <span className="font-black header-font text-lg uppercase tracking-wide">
            Instagram
          </span>
        </button>
      </div>

      <div className="w-full">
        {platform === "tiktok" ? (
          <TikTokProfile ref={profileRef} isDark={isDark} />
        ) : (
          <InstagramProfile ref={profileRef} isDark={isDark} />
        )}
      </div>
    </div>
  );
}
