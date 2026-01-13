"use client";

import React, { useState } from "react";
import { Bangers } from "next/font/google";
import { useLanguage } from "@/components/LanguageProvider";
import { Mail, Clock, Send, AlertCircle, CheckCircle } from "lucide-react";

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
});

export default function ContactContent() {
  const { t } = useLanguage();
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    setMessage("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Add Access Key directly here (Safe on Free tier, no billing quota to steal)
    const payload = {
      ...data,
      access_key: "dd1e2440-345e-4c49-bb4a-808918fffa25",
      subject: `New Contact from Easy Split: ${data.name}`,
      from_name: "Easy Split Contact Form",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus("success");
        setMessage("Email sent successfully!");
        (e.target as HTMLFormElement).reset();
      } else {
        setFormStatus("error");
        setMessage(result.message || "Something went wrong.");
      }
    } catch (error) {
      setFormStatus("error");
      setMessage("Failed to send email. Please check your connection.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1
          className={`text-4xl sm:text-6xl font-black uppercase layer-text stroke-black text-white ${bangers.className} tracking-widest`}
        >
          {t.contact_title}
        </h1>
        <div className="inline-block bg-pink-300 border-2 border-black px-4 py-1 font-bold text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          {t.contact_subtitle}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-yellow-100 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-black text-xl uppercase mb-2">
                  {t.contact_email_title}
                </h3>
                <p className="mb-2 text-sm">{t.contact_email_desc}</p>
                <a
                  href="mailto:hoangbinhan.5398@gmail.com"
                  className="inline-block font-bold bg-black text-white px-3 py-1 text-sm hover:bg-yellow-400 hover:text-black hover:border-black border-2 border-transparent transition-colors"
                >
                  hoangbinhan.5398@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-green-100 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-black text-xl uppercase mb-2">
                  {t.contact_response_time}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white border-4 border-black p-6 sm:p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] space-y-4"
        >
          {message && (
            <div
              className={`p-4 border-2 border-black font-bold flex gap-2 items-center ${
                formStatus === "success" ? "bg-green-200" : "bg-red-200"
              }`}
            >
              {formStatus === "success" ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <AlertCircle className="w-5 h-5" />
              )}
              {message}
            </div>
          )}

          <div>
            <label
              className="block font-bold text-sm uppercase mb-2"
              htmlFor="name"
            >
              {t.contact_form_name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              disabled={formStatus === "submitting"}
              className="w-full bg-slate-50 border-2 border-black p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] disabled:opacity-50"
            />
          </div>

          <div>
            <label
              className="block font-bold text-sm uppercase mb-2"
              htmlFor="email"
            >
              {t.contact_form_email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              disabled={formStatus === "submitting"}
              className="w-full bg-slate-50 border-2 border-black p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] disabled:opacity-50"
            />
          </div>

          <div>
            <label
              className="block font-bold text-sm uppercase mb-2"
              htmlFor="message"
            >
              {t.contact_form_message}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              disabled={formStatus === "submitting"}
              className="w-full bg-slate-50 border-2 border-black p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] disabled:opacity-50"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={formStatus === "submitting"}
            className="w-full bg-cyan-300 border-2 border-black py-4 font-black uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-cyan-400 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {formStatus === "submitting" ? (
              <>Sending...</>
            ) : (
              <>
                {t.contact_form_submit} <Send className="w-5 h-5" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
