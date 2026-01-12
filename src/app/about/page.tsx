import React from "react";
import { Metadata } from "next";
import AboutContent from "./content";

export const metadata: Metadata = {
  title: "About Us | Easy Split",
  description: "Learn more about Easy Split and our mission.",
};

export default function AboutPage() {
  return <AboutContent />;
}
