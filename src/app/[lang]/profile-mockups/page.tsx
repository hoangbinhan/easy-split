import { MockupContainer } from "@/components/mockups/MockupContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Profile Mockup Generator | Easy Split",
  description:
    "Create and customize social media profile mockups for TikTok and Instagram. Edit text, images, and stats to preview your designs.",
};

export default function ProfileMockupsPage() {
  return (
    <div className="flex flex-col items-center justify-center py-8 w-full">
      <div className="mb-12 text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter layer-text">
          Mockup Generator
        </h1>
        <p className="text-lg md:text-xl font-bold text-gray-700 max-w-2xl mx-auto">
          Create realistic social media profile mockups. Select a platform below
          and start editing!
        </p>
      </div>
      <MockupContainer />
    </div>
  );
}
