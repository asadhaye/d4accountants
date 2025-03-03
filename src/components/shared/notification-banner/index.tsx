"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface NotificationBannerProps {
  id: string;
  title: string;
  description: string;
  acceptLabel: string;
  declineLabel?: string;
  onAccept: () => void;
  onDecline?: () => void;
}

export function NotificationBanner({
  id,
  title,
  description,
  acceptLabel,
  declineLabel,
  onAccept,
  onDecline
}: NotificationBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const storageKey = `notification-${id}`;

  useEffect(() => {
    const hasInteracted = localStorage.getItem(storageKey);
    if (!hasInteracted) {
      setIsVisible(true);
    }
  }, [storageKey]);

  const handleAccept = () => {
    localStorage.setItem(storageKey, "accepted");
    setIsVisible(false);
    onAccept();
  };

  const handleDecline = () => {
    localStorage.setItem(storageKey, "declined");
    setIsVisible(false);
    onDecline?.();
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-sm border-t z-50"
    >
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="flex gap-2">
          {declineLabel && (
            <Button variant="outline" onClick={handleDecline}>
              {declineLabel}
            </Button>
          )}
          <Button onClick={handleAccept}>{acceptLabel}</Button>
        </div>
      </div>
    </motion.div>
  );
}