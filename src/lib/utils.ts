
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { createPageMetadata, defaultViewport } from '@/lib/metadata';

// Existing utility for class names
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Page metadata utilities
interface PageMetadataParams {
  title: string;
  description: string;
  path: string;
}

export function createPageConfig({ title, description, path }: PageMetadataParams) {
  return {
    metadata: createPageMetadata(title, description, path),
    viewport: defaultViewport,
  };
}
