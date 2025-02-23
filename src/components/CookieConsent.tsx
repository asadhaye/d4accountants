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

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 shadow-lg z-50">
      <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          <p className="font-semibold mb-1">We respect your privacy</p>
          <p>By continuing to use our website, you agree to our cookies policy.</p>
        </div>
        <Button
          onClick={handleAccept}
          className="text-sm bg-primary hover:bg-primary/90"
        >
          Accept
        </Button>
      </div>
    </div>
  );
}
