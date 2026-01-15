import React from "react";
import { Metadata } from "next";
import ContactContent from "./content";

export const metadata: Metadata = {
  title: "Contact Us | Easy Split",
  description:
    "Get in touch with the Easy Split team for support, feedback, or inquiries.",
};

export default function ContactPage() {
  return <ContactContent />;
}
