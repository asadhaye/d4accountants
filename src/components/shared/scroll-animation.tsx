"use client";

import { motion, useScroll } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { scrollFadeUp, scrollScale } from "@/lib/animations/animations";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  animation?: "fadeUp" | "scale";
  index?: number;
}

export function ScrollAnimation({ 
  children, 
  className = "", 
  animation = "fadeUp",
  index = 0 
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Since we're not using scrollYProgress directly, we can just call useScroll
  useScroll({
    target: ref,
    offset: ["0 1", "1 1"]
  });

  const variants = animation === "fadeUp" ? scrollFadeUp : scrollScale;

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      custom={index}
      className={className}
    >
      {children}
    </motion.div>
  );
}
