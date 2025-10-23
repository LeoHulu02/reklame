"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    title: "Reklame Motor",
    href: "/reklame-motor",
    image: "/assest/reklame-motor/reklame-motor-crf.jpeg",
    desc: "Branding armada motor profesional untuk kampanye dan promosi."
  },
  {
    title: "Reklame Helm",
    href: "/reklame-helm",
    image: "/assest/reklame-helm/reklame-helm-motor-yellow.jpeg",
    desc: "Custom helm dengan finishing tajam dan tahan lama."
  },
  {
    title: "Reklame Mantel",
    href: "/reklame-mantel",
    image: "/assest/reklame-motor/bahan-reklame.jpeg",
    desc: "Apparel promosi untuk tim dan event, rapi dan berkelas."
  },
  {
    title: "Papan Merek",
    href: "/papan-merek",
    image: "/assest/reklame-papan-merek/Reklame-papan-merek.jpeg",
    desc: "Signage toko yang mencolok dengan material berkualitas."
  },
];

export default function ProductsGrid() {
  return (
    <section className="bg-gray-950 text-zinc-100 border-t border-zinc-800/60" aria-labelledby="produk-heading">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <h2 id="produk-heading" className="text-2xl md:text-3xl font-semibold tracking-tight">Produk Unggulan</h2>
        <p className="mt-2 text-zinc-300">Empat layanan utama untuk kebutuhan branding lokal Anda.</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-2xl overflow-hidden border border-zinc-800/60 bg-zinc-900 hover:bg-zinc-800/80 transition-colors"
            >
              <Link href={p.href} className="block">
                <div className="relative h-40">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width:1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-zinc-300">{p.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}