import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ImageGalleryModal from "@/components/ImageGalleryModal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { brand } from "@/lib/config";

export const metadata: Metadata = {
  title: "Reklame Mantel — Sukaria Makmur",
  description:
    "Apparel promosi berkualitas: sablon presisi, material nyaman, rapi untuk tim dan event.",
  openGraph: {
    title: "Reklame Mantel — Sukaria Makmur",
    description:
      "Apparel promosi berkualitas: sablon presisi, material nyaman, rapi untuk tim dan event.",
    type: "article",
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <main className="bg-gray-950 text-zinc-100">
        <section className="pt-24 md:pt-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="relative h-60 sm:h-72 md:h-96 rounded-2xl overflow-hidden border border-zinc-800/60 bg-zinc-900">
              <Image
                src="/assest/reklame-motor/bahan-reklame.jpeg"
                alt="Reklame Mantel"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight">Reklame Mantel</h1>
            <p className="mt-3 text-zinc-300 max-w-2xl">Seragam/mantel promosi untuk tim dan event — sablon presisi, material nyaman, rapi. Tampil profesional dan tingkatkan kepercayaan pelanggan.</p>
            <div className="mt-5 flex gap-3">
              <a href={brand.whatsappUrl} className="rounded-md bg-orange-600 hover:bg-orange-500 text-white px-5 py-3">{brand.primaryCtaText}</a>
              <Link href="/#kontak" className="rounded-md border border-zinc-700 text-zinc-100 hover:bg-zinc-900 px-5 py-3">{brand.secondaryCtaText}</Link>
            </div>
          </div>
        </section>

        <section className="border-t border-zinc-800/60">
          <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Keunggulan</h2>
          <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-zinc-300">
              <li>Sablon presisi, warna konsisten</li>
              <li>Material nyaman dan awet</li>
              <li>Ukuran lengkap (S–XXL)</li>
              <li>Lead time cepat dan terukur</li>
            </ul>
          </div>
        </section>

        <section className="border-t border-zinc-800/60">
          <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Galeri</h2>
            <ImageGalleryModal images={Array.from({ length: 6 }, (_, i) => ({ src: "/assest/reklame-motor/bahan-reklame.jpeg", alt: `Mantel ${i + 1}` }))} />
          </div>
        </section>

        <section className="border-t border-zinc-800/60">
          <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Harga</h2>
            <div className="mt-4 space-y-2 text-zinc-300">
              <p><strong>Reklame Mantel:</strong> Rp 10.000 - Rp 400.000</p>
              <p className="text-sm text-zinc-400 mt-3">*Harga tergantung model, ukuran, dan bahan yang dipilih</p>
            </div>
            <a href={brand.whatsappUrl} className="mt-6 inline-block w-full sm:w-auto rounded-md bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 text-center transition-colors touch-manipulation">{brand.primaryCtaText}</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}