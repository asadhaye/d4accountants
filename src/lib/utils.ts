
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for class names - this is used throughout the project
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Removed unused function:
// createPageConfig
