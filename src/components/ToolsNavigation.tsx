"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { usePathname } from "next/navigation";
import { Scissors, UserCircle, Crop, Zap, Wand2, Sun } from "lucide-react";

export const ToolsNavigation = () => {
  const { language } = useLanguage();
  const pathname = usePathname();

  const tools = [
    {
      name: "Split Image",
      href: `/${language}/tools/split-image`,
      icon: <Scissors className="w-5 h-5" />,
      color: "bg-purple-300",
    },
    {
      name: "Profile Mockups",
      href: `/${language}/tools/profile-mockups`,
      icon: <UserCircle className="w-5 h-5" />,
      color: "bg-cyan-300",
    },
    {
      name: "Circle Crop",
      href: `/${language}/tools/circle-crop`,
      icon: <Crop className="w-5 h-5" />,
      color: "bg-green-300",
    },
    {
      name: "Sharpen Image",
      href: `/${language}/tools/sharpen-image`,
      icon: <Zap className="w-5 h-5" />,
      color: "bg-yellow-300",
    },
    {
      name: "Black & White",
      href: `/${language}/tools/black-and-white`,
      icon: <Wand2 className="w-5 h-5" />,
      color: "bg-white",
    },
    {
      name: "Brightness",
      href: `/${language}/tools/brightness`,
      icon: <Sun className="w-5 h-5" />,
      color: "bg-orange-300",
    },
  ];

  return (
    <div className="w-full py-0 mb-0 top-0 sm:py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {tools.map((tool) => {
            const isActive =
              pathname === tool.href ||
              (tool.href.endsWith("/split-image") &&
                pathname === `/${language}`);

            if (isActive) return null;

            return (
              <Link
                key={tool.name}
                href={tool.href}
                className={`inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-bold text-sm uppercase tracking-wider ${tool.color} rounded-lg`}
                title={tool.name}
              >
                {tool.icon}
                <span className="hidden sm:inline">{tool.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
