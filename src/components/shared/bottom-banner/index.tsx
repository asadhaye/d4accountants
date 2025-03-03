"use client";

import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { slideUp } from "@/lib/animations/animations";

interface BottomBannerProps {
  isVisible: boolean;
  onAction: () => void;
  actionLabel: string;
  children: ReactNode;
}

export function BottomBanner({ isVisible, onAction, actionLabel, children }: BottomBannerProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={slideUp}
          className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm">
                {children}
              </div>
              <Button size="sm" onClick={onAction}>
                {actionLabel}
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}