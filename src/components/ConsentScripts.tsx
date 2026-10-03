"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { CONSENT_CHANGED, getConsent } from "@/lib/consent";

type GoogleWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  adsbygoogle?: { requestNonPersonalizedAds?: number };
};

export function ConsentScripts() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const sync = () => setAccepted(getConsent() === true);
    sync();
    window.addEventListener(CONSENT_CHANGED, sync);
    return () => window.removeEventListener(CONSENT_CHANGED, sync);
  }, []);

  if (!accepted || process.env.NODE_ENV !== "production") return null;

  return (
    <>
      <Script id="google-consent-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            analytics_storage: 'denied', ad_storage: 'denied',
            ad_user_data: 'denied', ad_personalization: 'denied'
          });
          gtag('consent', 'update', {
            analytics_storage: 'granted', ad_storage: 'granted',
            ad_user_data: 'denied', ad_personalization: 'denied'
          });
          window.adsbygoogle = window.adsbygoogle || [];
          window.adsbygoogle.requestNonPersonalizedAds = 1;
        `}
      </Script>
      <Script
        id="google-analytics-loader"
        src="https://www.googletagmanager.com/gtag/js?id=G-WBG2FZTPRZ"
        strategy="afterInteractive"
        onLoad={() => {
          if (getConsent() !== true) return;
          const googleWindow = window as GoogleWindow;
          googleWindow.gtag?.("js", new Date());
          googleWindow.gtag?.("config", "G-WBG2FZTPRZ", { allow_google_signals: false, allow_ad_personalization_signals: false });
        }}
      />
      <Script
        id="google-adsense-loader"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6546615127998089"
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />
    </>
  );
}
