"use client";
import Image from "next/image";
import { useReveal } from "@/lib/useReveal";
import { useMemo, useState } from "react";

export type PortfolioItem = {
  title: string;
  image: string;
  href?: string;
  category?: string;
  isVideo?: boolean;
};

export default function PortfolioSection({ items }: { items: PortfolioItem[] }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [activeCategory, setActiveCategory] = useState<string>("Semua");

  const categories = useMemo(() => {
    const set = new Set<string>();
    items.forEach((i) => { if (i.category) set.add(i.category); });
    return Array.from(set);
  }, [items]);

  const filtered = useMemo(() => {
    if (activeCategory === "Semua") return items;
    return items.filter((i) => i.category === activeCategory);
  }, [items, activeCategory]);

  return (
    <section id="portfolio" className="bg-gray-950 text-zinc-100 border-t border-zinc-800/60">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Portfolio</h2>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory("Semua")}
            className={`px-3 py-1 rounded-md border border-zinc-800/60 text-sm ${activeCategory === "Semua" ? "bg-zinc-900 text-zinc-100" : "bg-transparent text-zinc-300 hover:text-zinc-100"}`}
          >
            Semua
          </button>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`px-3 py-1 rounded-md border border-zinc-800/60 text-sm ${activeCategory === c ? "bg-zinc-900 text-zinc-100" : "bg-transparent text-zinc-300 hover:text-zinc-100"}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div
          ref={ref}
          className={`mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
        >
          {filtered.map((item, idx) => (
            <a
              key={idx}
              href={item.href || "#"}
              className="group relative rounded-lg overflow-hidden border border-zinc-800/60 transition-shadow duration-300 hover:shadow-lg"
            >
              {item.isVideo ? (
                <video
                  src={item.image}
                  className="h-56 sm:h-48 lg:h-40 w-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                />
              ) : (
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="h-56 sm:h-48 lg:h-40 w-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4nGP4z8DwHwAFgwJ/lk6cNwAAAABJRU5ErkJggg=="
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 left-2 text-xs text-zinc-200">
                {item.title}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}