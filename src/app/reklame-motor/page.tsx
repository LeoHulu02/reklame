import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

export default function Page() {
  const gallery = [
    "/assest/reklame-motor/reklame-motor-crf.jpeg",
    "/assest/reklame-motor/reklame-motor-cbr150.jpeg",
    "/assest/reklame-motor/hasil-reklame-motor-r15.jpeg",
    "/assest/reklame-motor/reklame-motor-cbr-yellow.jpeg",
    "/assest/reklame-motor/body-spartpart-motor-keren-merah.jpeg",
    "/assest/reklame-motor/body-spartpart-motor-keren-hitam.jpeg",
  ];

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
            <p className="mt-3 text-zinc-300 max-w-2xl">Branding armada motor untuk kampanye dan promosi lapangan, hasil tajam, kuat, dan tahan cuaca.</p>
            <div className="mt-5 flex gap-3">
              <a href="https://wa.me/6282286282676?text=Halo%20Sukaria%20Makmur,%20saya%20tertarik%20Reklame%20Motor." className="rounded-md bg-orange-600 hover:bg-orange-500 text-white px-5 py-3">Chat WhatsApp</a>
              <Link href="/#kontak" className="rounded-md border border-zinc-700 text-zinc-100 hover:bg-zinc-900 px-5 py-3">Konsultasi Gratis</Link>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="border-t border-zinc-800/60">
          <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Galeri</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {gallery.map((src, i) => (
                <div key={i} className="relative h-48 sm:h-40 lg:h-44 rounded-lg bg-zinc-900 overflow-hidden">
                  <Image src={src} alt={`Motor ${i + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
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
            <a href="https://wa.me/6282286282676?text=Halo%20Sukaria%20Makmur,%20mohon%20info%20harga%20Reklame%20Motor." className="mt-6 inline-block w-full sm:w-auto rounded-md bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 text-center transition-colors touch-manipulation">Pesan via WhatsApp</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}