import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ProductsGrid from "@/components/ProductsGrid";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";
import Script from "next/script";
import { brand } from "@/lib/config";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo.config";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Layanan Reklame — Sukaria Makmur",
    description: "Layanan reklame di Teluk Dalam, Nias Selatan: motor, helm, mantel, dan papan merek.",
    path: "/layanan",
    keywords: ["layanan reklame", "branding", "reklame motor", "papan merek", "Teluk Dalam", "Nias Selatan", "Sumatera Utara"],
    ogImage: "/assest/reklame-papan-merek/Reklame-papan-merek.jpeg",
  });
}

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-950 text-zinc-100">
      <Navbar />
      <main>
        <section className="pt-24 md:pt-32">
          <div className="mx-auto max-w-7xl px-6">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Layanan Reklame</h1>
            <p className="mt-3 text-zinc-300 max-w-2xl">Solusi branding lengkap untuk bisnis di Teluk Dalam, Nias Selatan — kuat secara visual, awet, dan profesional.</p>
          </div>
        </section>
        <ProductsGrid />
        <ProductSection
          id="motor"
          title="Reklame Motor"
          description="Branding armada motor yang menarik perhatian di jalan."
          features={[{ label: "Desain tajam" }, { label: "Bahan premium" }, { label: "Pemasangan rapi" }]}
          image={{ src: "/assest/reklame-motor/reklame-motor-crf.jpeg", alt: "Reklame Motor" }}
        />
        <ProductSection
          id="helm"
          title="Reklame Helm"
          description="Custom helm eye-catching untuk tim dan promosi."
          features={[{ label: "Finishing tajam" }, { label: "Warna awet" }, { label: "Kualitas premium" }]}
          image={{ src: "/assest/reklame-helm/reklame-helm-motor-yellow.jpeg", alt: "Reklame Helm" }}
        />
        <ProductSection
          id="mantel"
          title="Reklame Mantel"
          description="Seragam promosi untuk tim dan event."
          features={[{ label: "Sablon presisi" }, { label: "Material nyaman" }, { label: "Rapi dan profesional" }]}
          image={{ src: "/assest/reklame-motor/bahan-reklame.jpeg", alt: "Reklame Mantel" }}
        />
        <ProductSection
          id="papan-merek"
          title="Papan Merek"
          description="Signage profesional untuk toko, café, dan kantor."
          features={[{ label: "Bahan kuat" }, { label: "Finishing rapi" }, { label: "Tampilan berkelas" }]}
          image={{ src: "/assest/reklame-papan-merek/Reklame-papan-merek.jpeg", alt: "Papan Merek" }}
        />
      </main>
      <Script id="breadcrumbs-layanan" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", item: `${brand.siteUrl}/` }, { name: "Layanan", item: `${brand.siteUrl}/layanan` }])) }} />
      <Footer />
    </div>
  );
}
