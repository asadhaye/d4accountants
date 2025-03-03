"use client";

import { useState, useEffect } from 'react';

interface FloatingElement {
  x: number;
  y: number;
  scale: number;
}

export function useFloatingElements(count: number = 20) {
  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    setFloatingElements(
      [...Array(count)].map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        scale: Math.random() * 0.5 + 0.5,
      }))
    );
  }, [count]);

  return floatingElements;
}