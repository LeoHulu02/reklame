"use client";
import { useState } from "react";
import { brand } from "@/lib/config";
import { useReveal } from "@/lib/useReveal";

const SERVICES = [
  "Desain Reklame",
  "Produksi & Cetak",
  "Pemasangan",
  "Konsultasi Branding",
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(SERVICES[0]);
  const [message, setMessage] = useState("");
  const { ref, visible } = useReveal<HTMLDivElement>();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // susun template pesan berbasis input user dengan baris terstruktur
    const lines = [
      `Halo ${brand.name},`,
      `Saya: ${name}`,
      `Layanan: ${service}`,
      email ? `Email: ${email}` : null,
      message ? `Pesan: ${message}` : null,
      `— dikirim dari Form Kontak Website`,
    ].filter(Boolean) as string[];
    const text = encodeURIComponent(lines.join("\n"));
    const url = brand.whatsappUrl.includes("text=")
      ? brand.whatsappUrl
      : `${brand.whatsappUrl}${brand.whatsappUrl.includes("?") ? "&" : "?"}text=${text}`;
    window.open(url, "_blank");
  }

  return (
    <section id="kontak" className="bg-gray-950 text-zinc-100 border-t border-zinc-800/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 md:py-14">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Dapatkan Penawaran & Konsultasi
        </h2>
        <div
          ref={ref}
          className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
        >
          <form onSubmit={handleSubmit} className="mt-6 grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-5">
              <div>
                <label className="block text-sm sm:text-base text-zinc-300 mb-2">Nama</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-md bg-zinc-900 border border-zinc-800/60 px-4 py-3 text-zinc-100 text-base focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm sm:text-base text-zinc-300 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md bg-zinc-900 border border-zinc-800/60 px-4 py-3 text-zinc-100 text-base focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm sm:text-base text-zinc-300 mb-2">Pilihan Jasa</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full rounded-md bg-zinc-900 border border-zinc-800/60 px-4 py-3 text-zinc-100 text-base focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                >
                  {SERVICES.map((s) => (
                    <option key={s} value={s} className="bg-zinc-900">
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="space-y-5">
              <div>
                <label className="block text-sm sm:text-base text-zinc-300 mb-2">Pesan</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full min-h-40 sm:min-h-48 rounded-md bg-zinc-900 border border-zinc-800/60 px-4 py-3 text-zinc-100 text-base focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors resize-y"
                  placeholder="Tuliskan kebutuhan Anda (produk, ukuran, jumlah, deadline)."
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto rounded-md bg-orange-600 hover:bg-orange-500 text-white text-base px-6 py-3 transition-colors duration-200 touch-manipulation"
                >
                  Dapatkan Penawaran via WhatsApp
                </button>
                <a
                  href={brand.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto rounded-md border border-zinc-700 text-zinc-100 hover:bg-zinc-900 text-base px-6 py-3 text-center transition-colors duration-200 touch-manipulation"
                >
                  Chat Langsung di WhatsApp
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}