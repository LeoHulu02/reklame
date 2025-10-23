import type { MetadataRoute } from "next";
import { brand } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = brand.siteUrl;
  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    { url: `${base}/reklame-motor`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/reklame-helm`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/reklame-mantel`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/papan-merek`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}