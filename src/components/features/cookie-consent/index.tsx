"use client";

import { BottomBanner } from "@/components/shared/bottom-banner";
import { useBannerState } from "@/hooks/use-banner-state";

export function CookieConsent() {
  const { isVisible, hide } = useBannerState("cookie-consent");

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    hide();
  };

  return (
    <BottomBanner
      isVisible={isVisible}
      onAction={acceptCookies}
      actionLabel="Accept"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <p className="font-semibold mb-4">Services</p>
          <p className="text-muted-foreground">
            By continuing to use our website, you agree to our cookies policy.
          </p>
        </div>
      </div>
    </BottomBanner>
  );
}
