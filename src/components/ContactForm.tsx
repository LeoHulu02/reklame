"use client";
import { useState } from "react";
import { brand } from "@/lib/config";

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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = encodeURIComponent(
      `Halo Reklame, saya ${name}. Layanan: ${service}. Email: ${email}. Pesan: ${message}`
    );
    const url = brand.whatsappUrl.includes("text=")
      ? brand.whatsappUrl
      : `${brand.whatsappUrl}${brand.whatsappUrl.includes("?") ? "&" : "?"}text=${text}`;
    window.open(url, "_blank");
  }

  return (
    <section id="kontak" className="bg-gray-950 text-zinc-100 border-t border-zinc-800/60">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Hubungi Kami
        </h2>
        <form onSubmit={handleSubmit} className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-zinc-300">Nama</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-md bg-zinc-900 border border-zinc-800/60 px-3 py-2 text-zinc-100 text-base"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-zinc-300">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-md bg-zinc-900 border border-zinc-800/60 px-3 py-2 text-zinc-100 text-base"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-zinc-300">Pilihan Jasa</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="mt-1 w-full rounded-md bg-zinc-900 border border-zinc-800/60 px-3 py-2 text-zinc-100 text-base"
              >
                {SERVICES.map((s) => (
                  <option key={s} value={s} className="bg-zinc-900">
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-zinc-300">Pesan</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 w-full min-h-40 rounded-md bg-zinc-900 border border-zinc-800/60 px-3 py-2 text-zinc-100"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              <button
                type="submit"
                className="w-full md:w-auto rounded-md bg-orange-600 hover:bg-orange-500 text-white text-sm px-4 py-2"
              >
                Kirim via WhatsApp
              </button>
              <a
                href={brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto rounded-md border border-zinc-700 text-zinc-100 hover:bg-zinc-900 text-sm px-4 py-2 text-center"
              >
                Chat Langsung
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}