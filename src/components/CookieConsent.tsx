"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 shadow-lg z-50">
      <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          We use cookies to enhance your experience. By continuing to visit this
          site you agree to our use of cookies.
          <a
            href="/privacy-policy"
            className="text-primary hover:text-primary/90 ml-1"
          >
            Learn more
          </a>
        </p>
        <div className="flex gap-4">
          <Button variant="outline" onClick={handleDecline} className="text-sm">
            Decline
          </Button>
          <Button
            onClick={handleAccept}
            className="text-sm bg-primary hover:bg-primary/90"
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
