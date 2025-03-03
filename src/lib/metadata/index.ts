import type { Metadata } from "next";

interface MetadataConfig {
  title: string;
  description: string;
  keywords: string[];
  authors?: Array<{ name: string; url?: string }>;
  openGraph?: {
    title?: string;
    description?: string;
    images?: string[];
  };
}

const defaultConfig: MetadataConfig = {
  title: "D4 Accountants | Professional Accounting Services",
  description: "Expert accounting, tax planning, and financial advisory services for businesses and individuals.",
  keywords: [
    "accounting",
    "tax planning",
    "financial advisory",
    "business accounting",
    "tax services",
    "UK accountants"
  ],
  authors: [{ name: "D4 Accountants" }],
  openGraph: {
    images: ["/images/logo.png"]
  }
};

export function generateMetadata(
  config: Partial<MetadataConfig> = {}
): Metadata {
  const mergedConfig = {
    ...defaultConfig,
    ...config,
    openGraph: {
      ...defaultConfig.openGraph,
      ...config.openGraph
    }
  };

  return {
    title: mergedConfig.title,
    description: mergedConfig.description,
    keywords: mergedConfig.keywords,
    authors: mergedConfig.authors,
    openGraph: {
      title: mergedConfig.openGraph?.title || mergedConfig.title,
      description: mergedConfig.openGraph?.description || mergedConfig.description,
      images: mergedConfig.openGraph?.images
    },
    twitter: {
      card: "summary_large_image",
      title: mergedConfig.title,
      description: mergedConfig.description
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export function generatePageMetadata(
  pageTitle: string,
  pageDescription?: string
): Metadata {
  return generateMetadata({
    title: `${pageTitle} | D4 Accountants`,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription
    }
  });
}