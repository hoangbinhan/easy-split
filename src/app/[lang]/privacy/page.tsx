import React from "react";
import { Metadata } from "next";
import PrivacyContent from "./content";

export const metadata: Metadata = {
  title: "Privacy Policy | Easy Split",
  description:
    "Privacy Policy for Easy Split. We prioritize your privacy with client-side processing.",
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
