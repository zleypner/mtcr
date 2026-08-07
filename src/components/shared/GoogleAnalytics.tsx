"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { hasConsent, getConsentStatus } from "@/lib/cookies";
import { CookieConsent } from "./CookieConsent";

const GA_MEASUREMENT_ID = "G-F2HQDQYQ7B";

export function GoogleAnalytics() {
  const [consentGiven, setConsentGiven] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (hasConsent()) {
      setConsentGiven(true);
    }
  }, []);

  const handleAccept = () => {
    setConsentGiven(true);
  };

  const handleDecline = () => {
    setConsentGiven(false);
  };

  return (
    <>
      {consentGiven && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
            onLoad={() => setIsLoaded(true)}
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                anonymize_ip: true
              });
            `}
          </Script>
        </>
      )}
      <CookieConsent onAccept={handleAccept} onDecline={handleDecline} />
    </>
  );
}
