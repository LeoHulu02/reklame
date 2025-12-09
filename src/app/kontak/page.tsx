import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Script from "next/script";
import { brand } from "@/lib/config";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo.config";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Kontak — Sukaria Makmur",
    description: "Hubungi kami di Teluk Dalam, Nias Selatan untuk penawaran dan konsultasi reklame.",
    path: "/kontak",
    keywords: ["kontak reklame", "penawaran reklame", "konsultasi branding", "Teluk Dalam", "Nias Selatan", "Sumatera Utara"],
    ogImage: "/assest/reklame-motor/reklame-motor-cbr150.jpeg",
  });
}

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-950 text-zinc-100">
      <Navbar />
      <main>
        <section className="pt-24 md:pt-32">
          <div className="mx-auto max-w-7xl px-6">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Kontak</h1>
            <p className="mt-3 text-zinc-300 max-w-2xl">Konsultasi gratis dan penawaran cepat via WhatsApp untuk area Teluk Dalam, Nias Selatan.</p>
            <p className="mt-2 text-sm text-zinc-400">
              <a href={brand.mapsUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-zinc-200">Lihat lokasi di Google Maps</a>
            </p>
          </div>
        </section>
        <ContactForm />
      </main>
      <Script id="breadcrumbs-kontak" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", item: `${brand.siteUrl}/` }, { name: "Kontak", item: `${brand.siteUrl}/kontak` }])) }} />
      <Footer />
    </div>
  );
}
