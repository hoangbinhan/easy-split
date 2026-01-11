import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Easy Split",
  description: "Terms and conditions for using Easy Split.",
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-6xl font-black uppercase layer-text stroke-black text-white">
          Terms of Service
        </h1>
        <div className="inline-block bg-pink-300 border-2 border-black px-4 py-1 font-bold text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          Last Updated: January 11, 2026
        </div>
      </div>

      <article className="bg-white border-4 border-black p-8 sm:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        <div className="prose prose-lg prose-slate max-w-none prose-headings:font-black prose-headings:uppercase">
          <p className="font-medium text-xl leading-relaxed">
            Please read these terms of service ("Terms", "Terms of Service")
            carefully before using the <strong>Easy Split</strong> website
            operated by <strong>Hoàng Bình An</strong> ("us", "we", or "our").
          </p>

          <h3>1. Conditions of Use</h3>
          <p>
            By using this website, you certify that you have read and reviewed
            this Agreement and that you agree to comply with its terms. If you
            do not want to be bound by the terms of this Agreement, you are
            advised to stop using the website accordingly.
          </p>

          <h3>2. Intellectual Property</h3>
          <p>
            You agree that all materials, products, and services provided on
            this website are the property of the website owner, its affiliates,
            directors, officers, employees, agents, suppliers, or licensors
            including all copyrights, trade secrets, trademarks, patents, and
            other intellectual property. You also agree that you will not
            reproduce or redistribute the intellectual property in any way,
            including electronic, digital, or new trademark registrations.
          </p>
          <p>
            <strong>User Generated Content:</strong> You retain full ownership
            of any images or content you process using our tools. Since we do
            not store your files, you are solely responsible for your own
            content.
          </p>

          <h3>3. Acceptable Use</h3>
          <p>
            You agree not to use our specific tools for any unlawful purpose or
            any purpose prohibited under this clause. You agree not to use our
            services to:
          </p>
          <ul>
            <li>Harass, abuse, or threaten others.</li>
            <li>Violate the rights of others.</li>
            <li>Perpetrate any fraud or distribute malware or viruses.</li>
          </ul>

          <h3>4. Indemnification</h3>
          <p>
            You agree to indemnify the website owner and its affiliates and hold
            us harmless against legal claims and demands that may arise from
            your use or misuse of our services.
          </p>

          <h3>5. Limitation on Liability</h3>
          <p>
            We are not liable for any damages that may occur to you as a result
            of your misuse of our website. We reserve the right to edit, modify,
            and change this Agreement at any time.
          </p>

          <h3>6. Contact</h3>
          <p>For any questions regarding these Terms, please contact us at:</p>
          <a
            href="mailto:hoangbinhana3@gmail.com"
            className="inline-block bg-black text-white px-6 py-3 font-bold uppercase border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            hoangbinhana3@gmail.com
          </a>
        </div>
      </article>
    </div>
  );
}
