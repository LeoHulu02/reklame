import { brand } from "@/lib/config";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gray-950 text-zinc-100 pt-24 md:pt-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              Solusi Reklame Premium untuk Motor, Helm, Mantel & Papan Merek
            </h1>
            <p className="mt-4 text-zinc-300 max-w-xl leading-relaxed">
              Tampil berani dan profesional dengan branding armada,apparel promosi,
              serta signage toko yang tajam dan tahan lama.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-orange-600 hover:bg-orange-500 text-white text-sm px-4 py-2"
              >
                {brand.primaryCtaText}
              </a>
              <Link
                href="#kontak"
                className="rounded-md border border-zinc-700 text-zinc-100 hover:bg-zinc-900 text-sm px-4 py-2"
              >
                {brand.secondaryCtaText}
              </Link>
            </div>
          </div>
          <div className="relative h-56 sm:h-64 md:h-80 rounded-lg overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/6510373/pexels-photo-6510373.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1"
              alt="Signage toko dengan papan merek menyala"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}