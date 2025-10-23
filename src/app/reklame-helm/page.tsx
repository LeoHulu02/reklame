import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ImageGalleryModal from "@/components/ImageGalleryModal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { brand } from "@/lib/config";

export const metadata: Metadata = {
  title: "Reklame Helm — Sukaria Makmur",
  description:
    "Custom helm untuk tim dan promosi: finishing tajam, bahan premium, warna awet.",
  openGraph: {
    title: "Reklame Helm — Sukaria Makmur",
    description:
      "Custom helm untuk tim dan promosi: finishing tajam, bahan premium, warna awet.",
    type: "article",
  },
};

export default function Page() {
  const gallery = [
    "/assest/reklame-helm/reklame-helm-motor-black.jpeg",
    "/assest/reklame-helm/reklame-helm-motor-full-black.jpeg",
    "/assest/reklame-helm/reklame-helm-motor-hitam.jpeg",
    "/assest/reklame-helm/reklame-helm-motor-yellow.jpeg",
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <main className="bg-gray-950 text-zinc-100">
        <section className="pt-24 md:pt-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="relative h-60 sm:h-72 md:h-96 rounded-2xl overflow-hidden border border-zinc-800/60 bg-zinc-900">
              <Image
                src="/assest/reklame-helm/reklame-helm-motor-full-black.jpeg"
                alt="Reklame Helm"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight">Reklame Helm</h1>
            <p className="mt-3 text-zinc-300 max-w-2xl">Custom helm eye-catching untuk tim dan promosi. Branding kuat, warna awet, siap tampil profesional.</p>
            <div className="mt-5 flex gap-3">
              <a href={brand.whatsappUrl} className="rounded-md bg-orange-600 hover:bg-orange-500 text-white px-5 py-3">{brand.primaryCtaText}</a>
              <Link href="/#kontak" className="rounded-md border border-zinc-700 text-zinc-100 hover:bg-zinc-900 px-5 py-3">{brand.secondaryCtaText}</Link>
            </div>
          </div>
        </section>

        <section className="border-t border-zinc-800/60">
          <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Galeri</h2>
            <ImageGalleryModal images={gallery.map((src, i) => ({ src, alt: `Helm ${i + 1}` }))} />
          </div>
        </section>

        <section className="border-t border-zinc-800/60">
          <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Harga</h2>
            <div className="mt-4 space-y-2 text-zinc-300">
              <p><strong>Reklame Helm:</strong> Rp 80.000 - Rp 3.500.000</p>
              <p className="text-sm text-zinc-400 mt-3">*Harga tergantung model helm, desain, dan finishing yang dipilih</p>
            </div>
            <a href={brand.whatsappUrl} className="mt-6 inline-block w-full sm:w-auto rounded-md bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 text-center transition-colors touch-manipulation">{brand.primaryCtaText}</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}