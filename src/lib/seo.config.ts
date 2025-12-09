import type { Metadata } from "next";
import { brand } from "./config";

export const seoDefaults = {
  siteName: brand.name,
  baseUrl: brand.siteUrl,
  locale: "id_ID",
};

export function canonical(path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${seoDefaults.baseUrl}${p}`;
}

export function buildMetadata(opts: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
}): Metadata {
  return {
    metadataBase: new URL(seoDefaults.baseUrl),
    title: opts.title,
    description: opts.description,
    keywords: opts.keywords,
    alternates: { canonical: canonical(opts.path) },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url: canonical(opts.path),
      siteName: seoDefaults.siteName,
      locale: seoDefaults.locale,
      type: "website",
      images: opts.ogImage ? [{ url: opts.ogImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: opts.ogImage ? [opts.ogImage] : undefined,
    },
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.item,
    })),
  };
}

export function serviceJsonLd(opts: {
  name: string;
  description: string;
  url: string;
  priceRange?: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    areaServed: brand.location,
    serviceType: opts.serviceType,
    provider: {
      "@type": "LocalBusiness",
      name: brand.name,
      areaServed: brand.location,
      url: brand.siteUrl,
      sameAs: [brand.whatsappUrl, brand.mapsUrl].filter(Boolean),
      hasMap: brand.mapsUrl,
    },
    offers: opts.priceRange
      ? { "@type": "Offer", priceCurrency: "IDR", priceSpecification: { "@type": "PriceSpecification", price: opts.priceRange } }
      : undefined,
  };
}

export function altFromSrc(src: string, fallbackLabel?: string) {
  const base = src.split("/").pop() || fallbackLabel || "Gambar";
  const name = base.replace(/[-_]+/g, " ").replace(/\.[a-zA-Z0-9]+$/, "");
  return `${name} ${brand.location}`;
}
