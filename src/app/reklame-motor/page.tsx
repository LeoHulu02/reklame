import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ImageGalleryModal from "@/components/ImageGalleryModal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { brand } from "@/lib/config";
import GalleryToggle from "@/components/GalleryToggle";
import path from "path";
import { promises as fs } from "fs";

export const metadata: Metadata = {
  title: "Reklame Motor — Sukaria Makmur",
  description:
    "Branding armada motor profesional: desain tajam, bahan premium, pemasangan rapi.",
  openGraph: {
    title: "Reklame Motor — Sukaria Makmur",
    description:
      "Branding armada motor profesional: desain tajam, bahan premium, pemasangan rapi.",
    type: "article",
  },
};

export default async function Page() {
  const dir = path.join(process.cwd(), "public", "assest", "reklame-motor");
  let files: string[] = [];
  try {
    files = await fs.readdir(dir);
  } catch (e) {
    files = [];
  }
  const imageExts = new Set([".jpg", ".jpeg", ".png", ".webp"]);
  const images = files
    .filter((name) => imageExts.has(path.extname(name).toLowerCase()))
    .map((name, i) => ({ src: `/assest/reklame-motor/${name}`, alt: `Reklame Motor ${i + 1}` }));

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <main className="bg-gray-950 text-zinc-100">
        {/* Hero */}
        <section className="pt-24 md:pt-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="relative h-60 sm:h-72 md:h-96 rounded-2xl overflow-hidden border border-zinc-800/60 bg-zinc-900">
              <Image
                src="/assest/reklame-motor/hasil-reklame-motor-r15.jpeg"
                alt="Reklame Motor"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight">Reklame Motor</h1>
            <p className="mt-3 text-zinc-300 max-w-2xl">Branding armada motor yang menarik perhatian di jalan—desain tajam, bahan premium, pemasangan rapi.</p>
            <div className="mt-5 flex gap-3">
              <a href={brand.whatsappUrl} className="rounded-md bg-orange-600 hover:bg-orange-500 text-white px-5 py-3">{brand.primaryCtaText}</a>
              <Link href="/#kontak" className="rounded-md border border-zinc-700 text-zinc-100 hover:bg-zinc-900 px-5 py-3">{brand.secondaryCtaText}</Link>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="border-t border-zinc-800/60">
          <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Galeri</h2>
            <GalleryToggle images={images} initialCount={4} />
          </div>
        </section>

        {/* Pricing */}
        <section className="border-t border-zinc-800/60">
          <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Harga</h2>
            <div className="mt-4 space-y-2 text-zinc-300">
              <p><strong>Stiker Motor:</strong> Rp 50.000 - Rp 2.000.000</p>
              <p><strong>Plat Motor:</strong> Rp 50.000 - Rp 380.000</p>
              <p className="text-sm text-zinc-400 mt-3">*Harga tergantung ukuran, desain, dan bahan yang dipilih</p>
            </div>
            <a href={brand.whatsappUrl} className="mt-6 inline-block w-full sm:w-auto rounded-md bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 text-center transition-colors touch-manipulation">{brand.primaryCtaText}</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}