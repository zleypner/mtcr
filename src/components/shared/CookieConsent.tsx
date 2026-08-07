"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getConsentStatus, setConsentStatus } from "@/lib/cookies";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

interface CookieConsentProps {
  onAccept?: () => void;
  onDecline?: () => void;
}

export function CookieConsent({ onAccept, onDecline }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const status = getConsentStatus();
    if (status === null) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setConsentStatus("accepted");
    setIsVisible(false);
    onAccept?.();
  };

  const handleDecline = () => {
    setConsentStatus("declined");
    setIsVisible(false);
    onDecline?.();
  };

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 p-4",
        "bg-background/95 backdrop-blur-sm border-t border-border",
        "shadow-lg"
      )}
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1">
            <p className="text-sm text-foreground">
              We use cookies to analyze site traffic and improve your experience.
              By clicking &quot;Accept&quot;, you consent to our use of cookies.{" "}
              <Link
                href="/privacy"
                className="text-primary underline underline-offset-2 hover:text-primary/80"
              >
                Learn more
              </Link>
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            <Button variant="outline" size="sm" onClick={handleDecline}>
              Decline
            </Button>
            <Button size="sm" onClick={handleAccept}>
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
