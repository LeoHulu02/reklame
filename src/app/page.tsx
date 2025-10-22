import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import PortfolioSection from "@/components/PortfolioSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  const products = [
    {
      id: "reklame-motor",
      title: "Reklame Motor",
      description:
        "Branding armada motor dengan stiker/vinyl premium yang tahan cuaca dan anti gores.",
      features: [
        { label: "Desain presisi sesuai bodi motor" },
        { label: "Material vinyl outdoor berkualitas" },
        { label: "Laminasi matte/glossy anti gores" },
        { label: "Pemasangan rapi oleh profesional" },
      ],
      image: {
        src: "https://images.pexels.com/photos/15014561/pexels-photo-15014561.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1",
        alt: "Reklame Motor",
      },
    },
    {
      id: "reklame-helm",
      title: "Reklame Helm",
      description:
        "Personalisasi helm dengan desain kontur yang tajam, aman, dan berkelas.",
      features: [
        { label: "Kustom desain mengikuti kontur helm" },
        { label: "Bahan vinyl premium tahan cuaca" },
        { label: "Finishing halus: matte atau glossy" },
        { label: "Warna akurat dan awet" },
      ],
      image: {
        src: "https://images.pexels.com/photos/12000109/pexels-photo-12000109.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1",
        alt: "Reklame Helm",
      },
    },
    {
      id: "reklame-mantel",
      title: "Reklame Mantel",
      description:
        "Mantel promosi untuk event atau brand activation dengan bahan kuat dan nyaman.",
      features: [
        { label: "Cetak tajam untuk identitas brand" },
        { label: "Bahan kuat, nyaman dipakai" },
        { label: "Custom ukuran dan jumlah besar" },
        { label: "Lead time cepat dan terukur" },
      ],
      image: {
        src: "https://images.pexels.com/photos/15894619/pexels-photo-15894619.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1",
        alt: "Reklame Mantel",
      },
    },
    {
      id: "papan-merek",
      title: "Papan Merek",
      description:
        "Papan nama toko/brand signage dari material ACP/akrilik dengan opsi LED dan instalasi aman.",
      features: [
        { label: "Material ACP/akrilik berkualitas" },
        { label: "Opsi pencahayaan LED" },
        { label: "Struktur kuat dan tahan lama" },
        { label: "Instalasi aman sesuai standar" },
      ],
      image: {
        src: "https://images.pexels.com/photos/6510373/pexels-photo-6510373.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1",
        alt: "Papan Merek",
      },
    },
  ];

  const portfolioItems = [
    { title: "Armada Motor — Kampanye A", image: "https://images.pexels.com/photos/15014561/pexels-photo-15014561.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1" },
    { title: "Helm — Aktivasi B", image: "https://images.pexels.com/photos/12000109/pexels-photo-12000109.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1" },
    { title: "Mantel — Event C", image: "https://images.pexels.com/photos/15894619/pexels-photo-15894619.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1" },
    { title: "Papan Merek — Toko D", image: "https://images.pexels.com/photos/6510373/pexels-photo-6510373.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1" },
  ];

  const testimonials = [
    { name: "Anugerah Laia", quote: "Pelayanan cepat dan hasil sangat rapi." },
    { name: "Helisia Hulu", quote: "Desain tajam, produksi tepat waktu, recommended!" },
    { name: "Reftalenta Laia", quote: "Responsif dan pengerjaan profesional." },
    { name: "Mercy Laia", quote: "Kualitas bahan bagus, pemasangan rapi." },
    { name: "Mekar Hulu", quote: "Harga bersaing, hasil memuaskan." },
    { name: "Noliana Buulolo", quote: "Proses dari desain hingga pemasangan mulus." },
  ];

  const faqItems = [
    { q: "Berapa lama proses produksi?", a: "Tergantung skala, rata-rata 3–7 hari kerja." },
    { q: "Apakah ada survey lokasi?", a: "Ya, untuk signage/papan merek kami lakukan survey." },
    { q: "Apakah menerima revisi?", a: "Ya, revisi ringan untuk memastikan hasil sesuai harapan." },
    { q: "Bagaimana cara konsultasi?", a: "Hubungi kami via WhatsApp atau isi form di bagian kontak." },
  ];

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <main>
        <Hero />
        {products.map((p) => (
          <ProductSection key={p.id} {...p} />
        ))}
        <PortfolioSection items={portfolioItems} />
        <Testimonials items={testimonials} />
        <FAQ items={faqItems} />
        <ContactForm />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </div>
  );
}
