import { useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollAnimationOptions {
  threshold?: number;
  once?: boolean;
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: options.once ?? true,
    amount: options.threshold ?? 0.3,
  });

  return { ref, isInView };
}