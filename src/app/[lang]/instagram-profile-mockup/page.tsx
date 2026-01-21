import { InstagramProfile } from "@/components/mockups/InstagramProfile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instagram Profile Mockup Generator | Easy Split",
  description:
    "Create and customize an Instagram profile mockup. Edit text, images, and stats to preview your profile design.",
};

export default function InstagramMockupPage() {
  return (
    <div className="flex flex-col items-center justify-center py-8 w-full">
      <div className="mb-12 text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter layer-text">
          Instagram Mockup Generator
        </h1>
        <p className="text-lg md:text-xl font-bold text-gray-700 max-w-2xl mx-auto">
          Create realistic Instagram profile mockups for your presentations,
          marketing materials, or just for fun. Click on any element to edit it.
        </p>
      </div>
      <InstagramProfile />
    </div>
  );
}
