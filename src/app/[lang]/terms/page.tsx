import React from "react";
import { Metadata } from "next";
import TermsContent from "./content";

export const metadata: Metadata = {
  title: "Terms of Service | Easy Split",
  description: "Terms and conditions for using Easy Split.",
};

export default function TermsPage() {
  return <TermsContent />;
}
