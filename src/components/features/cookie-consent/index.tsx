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
      <div className="text-sm">
        <p className="font-semibold">We respect your privacy</p>
        <p className="text-muted-foreground">
          By continuing to use our website, you agree to our cookies policy.
        </p>
      </div>
    </BottomBanner>
  );
}
