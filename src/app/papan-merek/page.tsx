import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ImageGalleryModal from "@/components/ImageGalleryModal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { brand } from "@/lib/config";

export const metadata: Metadata = {
  title: "Papan Merek — Sukaria Makmur",
  description:
    "Papan merek dan signage profesional: bahan kuat, finishing rapi, tampilan berkelas.",
  openGraph: {
    title: "Papan Merek — Sukaria Makmur",
    description:
      "Papan merek dan signage profesional: bahan kuat, finishing rapi, tampilan berkelas.",
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
                src="/assest/reklame-papan-merek/Reklame-papan-merek.jpeg"
                alt="Papan Merek"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight">Papan Merek</h1>
            <p className="mt-3 text-zinc-300 max-w-2xl">Signage dan papan merek untuk toko, café, dan kantor — tampilan profesional yang menarik perhatian pelanggan. Bahan kuat, finishing rapi, dan awet.</p>
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
              <li>Bahan kuat dan tahan cuaca</li>
              <li>Finishing rapi dan presisi</li>
              <li>Desain custom sesuai kebutuhan</li>
              <li>Instalasi profesional</li>
            </ul>
          </div>
        </section>

        <section className="border-t border-zinc-800/60">
          <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Galeri</h2>
            <ImageGalleryModal images={[
              "/assest/reklame-papan-merek/kerangka-reklame-papan-merek.jpeg",
              "/assest/reklame-papan-merek/kerangka-reklame-papan-merek-2.jpeg",
              "/assest/reklame-papan-merek/Reklame-papan-merek.jpeg",
              "/assest/reklame-papan-merek/Reklame-papan-merek.jpeg",
              "/assest/reklame-papan-merek/kerangka-reklame-papan-merek-2.jpeg",
              "/assest/reklame-papan-merek/kerangka-reklame-papan-merek.jpeg",
            ].map((src, i) => ({ src, alt: `Papan Merek ${i + 1}` }))} />
          </div>
        </section>

        <section className="border-t border-zinc-800/60">
          <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Harga</h2>
            <p className="mt-3 text-zinc-300">Mulai dari Rp 450.000 (tergantung ukuran dan bahan). Hubungi kami untuk penawaran.</p>
            <a href={brand.whatsappUrl} className="mt-6 inline-block w-full sm:w-auto rounded-md bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 text-center transition-colors touch-manipulation">{brand.primaryCtaText}</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}