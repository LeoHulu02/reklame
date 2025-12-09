import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PortfolioSection from "@/components/PortfolioSection";
import Footer from "@/components/Footer";
import Script from "next/script";
import { brand } from "@/lib/config";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo.config";
import path from "path";
import { promises as fs } from "fs";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Galeri — Sukaria Makmur",
    description: "Kumpulan karya reklame di Teluk Dalam, Nias Selatan: motor, helm, mantel, dan papan merek.",
    path: "/gallery",
    keywords: ["galeri reklame", "portfolio reklame", "branding", "Teluk Dalam", "Nias Selatan", "Sumatera Utara"],
    ogImage: "/assest/reklame-motor/hasil-reklame-motor-r15.jpeg",
  });
}

async function loadGallery() {
  const baseDir = path.join(process.cwd(), "public", "assest");
  const sets = [
    { dir: "reklame-motor", category: "Motor" },
    { dir: "reklame-helm", category: "Helm" },
    { dir: "reklame-papan-merek", category: "Papan Merek" },
  ];
  const exts = new Set([".jpg", ".jpeg", ".png", ".webp"]);
  const items: { title: string; image: string; category: string }[] = [];
  for (const s of sets) {
    try {
      const files = await fs.readdir(path.join(baseDir, s.dir));
      files
        .filter((f) => exts.has(path.extname(f).toLowerCase()))
        .forEach((f) => {
          const title = f.replace(/[-_]+/g, " ").replace(/\.[a-zA-Z0-9]+$/, "");
          items.push({ title, image: `/assest/${s.dir}/${f}`, category: s.category });
        });
    } catch {}
  }
  return items;
}

export default async function Page() {
  const items = await loadGallery();
  return (
    <div className="min-h-screen bg-gray-950 text-zinc-100">
      <Navbar />
      <main>
        <section className="pt-24 md:pt-32">
          <div className="mx-auto max-w-7xl px-6">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Galeri</h1>
            <p className="mt-3 text-zinc-300 max-w-2xl">Kumpulan karya terbaru kami untuk menginspirasi brand Anda.</p>
          </div>
        </section>
        <PortfolioSection items={items} />
      </main>
      <Script id="breadcrumbs-gallery" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", item: `${brand.siteUrl}/` }, { name: "Galeri", item: `${brand.siteUrl}/gallery` }])) }} />
      <Footer />
    </div>
  );
}
