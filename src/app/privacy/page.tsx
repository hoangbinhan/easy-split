import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Easy Split",
  description:
    "Privacy Policy for Easy Split. We prioritize your privacy with client-side processing.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-6xl font-black uppercase layer-text stroke-black text-white">
          Privacy Policy
        </h1>
        <div className="inline-block bg-yellow-300 border-2 border-black px-4 py-1 font-bold text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          Last Updated: January 11, 2026
        </div>
      </div>

      <article className="bg-white border-4 border-black p-8 sm:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        <div className="prose prose-lg prose-slate max-w-none prose-headings:font-black prose-headings:uppercase prose-a:text-pink-500 prose-a:no-underline hover:prose-a:underline">
          <p className="font-medium text-xl leading-relaxed border-l-8 border-cyan-400 pl-6 bg-slate-50 py-4">
            At <strong>Easy Split</strong>, we believe in privacy by design. Our
            tools are built to run <strong>client-side</strong>, meaning your
            data (images, files) stays on your device and is never uploaded to
            our servers.
          </p>

          <h3>1. Information We Collect</h3>
          <p>
            Since we do not require user accounts and process files locally, we
            collect minimal data:
          </p>
          <ul>
            <li>
              <strong>Usage Data:</strong> We may use third-party analytics
              (like Google Analytics) to understand how users navigate our site.
              This data is anonymized and does not include personal files.
            </li>
            <li>
              <strong>Cookies:</strong> We use essential cookies to remember
              your preferences (like language settings).
            </li>
          </ul>

          <h3>2. How We Process Your Files</h3>
          <p>
            When you use tools like our <strong>Image Splitter</strong>, all
            image manipulation happens inside your web browser using HTML5
            Canvas technology.{" "}
            <strong>We do not see, store, or transmit your images.</strong>
          </p>

          <h3>3. Advertising (Google AdSense)</h3>
          <p>
            We use third-party vendors, including Google, to serve ads based on
            a user's prior visits to our website or other websites.
          </p>
          <ul>
            <li>
              Google's use of advertising cookies enables it and its partners to
              serve ads to your users based on their visit to your sites and/or
              other sites on the Internet.
            </li>
            <li>
              Users may opt out of personalized advertising by visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="nofollow noreferrer"
              >
                Google Ads Settings
              </a>
              .
            </li>
          </ul>

          <h3>4. Third-Party Links</h3>
          <p>
            Our website may contain links to restricted other websites. If you
            click on a third-party link, you will be directed to that site. Note
            that these external sites are not operated by us. Therefore, we
            strongly advise you to review the Privacy Policy of these websites.
          </p>

          <h3>5. Contact Us</h3>
          <p>
            If you have any questions or suggestions about our Privacy Policy,
            do not hesitate to contact us.
          </p>
          <div className="bg-black text-white p-6 border-4 border-yellow-400 inline-block shadow-[8px_8px_0px_0px_#facc15]">
            <p className="m-0 font-bold uppercase text-sm mb-1 text-yellow-400">
              Owner
            </p>
            <p className="m-0 text-xl font-black">Hoàng Bình An</p>
            <p className="m-0 text-slate-300 mt-2">hoangbinhana3@gmail.com</p>
          </div>
        </div>
      </article>
    </div>
  );
}
