import type { MetadataRoute } from "next";
import { brand } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = brand.siteUrl;
  const now = new Date();
  const links = new Set<string>(["/", "/reklame-motor", "/reklame-helm", "/reklame-mantel", "/papan-merek", "/layanan", "/kontak", "/gallery"]);
  (brand.navLinks || []).forEach((l) => {
    if (l.href && l.href.startsWith("/") && !l.href.includes("#")) links.add(l.href);
  });
  return Array.from(links).map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: p === "/" ? "weekly" : "monthly",
    priority: p === "/" ? 1 : 0.7,
  }));
}
