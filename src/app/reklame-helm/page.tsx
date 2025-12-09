import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ImageGalleryModal from "@/components/ImageGalleryModal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { brand } from "@/lib/config";
import Script from "next/script";
import { buildMetadata, breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo.config";
import FAQ from "@/components/FAQ";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Reklame Helm — Sukaria Makmur",
    description: "Custom helm untuk tim dan promosi: finishing tajam, bahan premium, warna awet.",
    path: "/reklame-helm",
    keywords: ["reklame helm", "custom helm", "branding helm", "Nias Selatan"],
    ogImage: "/assest/reklame-helm/reklame-helm-motor-full-black.jpeg",
  });
}

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
            <p className="mt-3 text-zinc-300 max-w-2xl">Custom helm untuk tim/komunitas—branding kuat, warna awet, finishing presisi. Siap tampil profesional.</p>
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

        <section className="border-t border-zinc-800/60">
          <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">FAQ Singkat</h2>
            <FAQ
              items={[
                { q: "Bahan tahan lama?", a: "Kami gunakan bahan premium dengan warna awet dan finishing presisi." },
                { q: "Order satuan atau banyak?", a: "Bisa keduanya—untuk tim/komunitas maupun personal." },
                { q: "Desain bisa kami bantu?", a: "Bisa, kami bantu desain hingga cocok dan siap produksi." },
              ]}
            />
          </div>
        </section>
      </main>
      <Script id="breadcrumbs-reklame-helm" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", item: `${brand.siteUrl}/` }, { name: "Reklame Helm", item: `${brand.siteUrl}/reklame-helm` }])) }} />
      <Script id="service-reklame-helm" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd({ name: "Reklame Helm", description: "Custom helm eye-catching untuk tim dan promosi.", url: `${brand.siteUrl}/reklame-helm`, priceRange: "80000-3500000", serviceType: "Branding helm" })) }} />
      <Footer />
    </div>
  );
}
