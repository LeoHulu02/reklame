"use client";
import { brand } from "@/lib/config";
import Link from "next/link";
import Image from "next/image";
import { useReveal } from "@/lib/useReveal";

export default function Hero() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="home" className="relative bg-gray-950 text-zinc-100 pt-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-10 items-center transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
        >
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              Solusi Reklame Premium untuk Motor, Helm, Mantel & Papan Merek
            </h1>
            <p className="mt-4 text-zinc-300 max-w-xl leading-relaxed">
              Tampil berani dan profesional dengan branding armada,apparel promosi,
              serta signage toko yang tajam dan tahan lama.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href={brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-orange-600 hover:bg-orange-500 text-white text-base px-6 py-3 transition-colors duration-200 text-center touch-manipulation"
              >
                {brand.primaryCtaText}
              </a>
              <Link
                href="#kontak"
                className="rounded-md border border-zinc-700 text-zinc-100 hover:bg-zinc-900 px-6 py-3 text-base transition-colors text-center touch-manipulation"
              >
                {brand.secondaryCtaText}
              </Link>
            </div>
          </div>
          <div className="relative h-52 sm:h-64 md:h-80 rounded-lg bg-zinc-900 overflow-hidden">
            <Image
              src="/assest/reklame-motor/reklame-motor-cbr150.jpeg"
              alt="Reklame Motor"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4nGP4z8DwHwAFgwJ/lk6cNwAAAABJRU5ErkJggg=="
            />
          </div>
        </div>
      </div>
    </section>
  );
}