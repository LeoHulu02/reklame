"use client";
import Image from "next/image";
import { useReveal } from "@/lib/useReveal";
import { useMemo, useState, useEffect } from "react";

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
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [expanded, setExpanded] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});
  const [loadedVideo, setLoadedVideo] = useState<Record<number, boolean>>({});
  const baseCount = 4;

  const openModal = (idx: number) => {
    setModalIndex(idx);
  };

  const closeModal = () => {
    setModalIndex(null);
  };

  const categories = useMemo(() => {
    const set = new Set<string>();
    items.forEach((i) => { if (i.category) set.add(i.category); });
    return Array.from(set);
  }, [items]);

  const filtered = useMemo(() => {
    if (activeCategory === "Semua") return items;
    return items.filter((i) => i.category === activeCategory);
  }, [items, activeCategory]);

  // Reset tampilan ke 4 item saat kategori berubah
  useEffect(() => {
    setExpanded(false);
  }, [activeCategory]);

  const visibleItems = useMemo(() => {
    return expanded ? filtered : filtered.slice(0, baseCount);
  }, [filtered, expanded]);

  const currentItem = modalIndex !== null ? filtered[modalIndex] : null;

  return (
    <section id="portfolio" className="bg-gray-950 text-zinc-100 border-t border-zinc-800/60">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Portfolio</h2>
            <p className="mt-1 text-sm text-zinc-400">Kumpulan karya terbaru dengan kualitas terbaik.</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory("Semua")}
            className={`px-3 py-1 rounded-full border border-zinc-800/60 text-sm transition-colors ${activeCategory === "Semua" ? "bg-gradient-to-r from-orange-600 to-pink-600 text-white" : "bg-transparent text-zinc-300 hover:text-zinc-100"}`}
          >
            Semua
          </button>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`px-3 py-1 rounded-full border border-zinc-800/60 text-sm transition-colors ${activeCategory === c ? "bg-gradient-to-r from-orange-600 to-pink-600 text-white" : "bg-transparent text-zinc-300 hover:text-zinc-100"}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div
          ref={ref}
          className={`mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
        >
          {visibleItems.map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => openModal(idx)}
              className="group relative rounded-xl overflow-hidden border border-zinc-800/60 ring-1 ring-white/5 transition-all duration-300 hover:ring-white/10 hover:shadow-lg w-full text-left bg-zinc-900/30"
            >
              {item.isVideo ? (
                <div className="relative">
                  <video
                    src={item.image}
                    className="h-56 sm:h-48 lg:h-40 w-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => e.currentTarget.pause()}
                    onLoadedData={() => setLoadedVideo((p) => ({ ...p, [idx]: true }))}
                  />
                  <div className={`absolute inset-0 transition-opacity duration-300 ${loadedVideo[idx] ? "opacity-0" : "opacity-100"} bg-zinc-800/40 animate-pulse`} />
                </div>
              ) : (
                <div className="relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="h-56 sm:h-48 lg:h-40 w-full object-cover transform transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    quality={60}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4nGP4z8DwHwAFgwJ/lk6cNwAAAABJRU5ErkJggg=="
                    onLoadingComplete={() => setLoaded((p) => ({ ...p, [idx]: true }))}
                  />
                  <div className={`absolute inset-0 transition-opacity duration-300 ${loaded[idx] ? "opacity-0" : "opacity-100"} bg-zinc-800/40 animate-pulse`} />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 left-2 text-xs text-zinc-200">
                {item.title}
              </div>
            </button>
          ))}
        </div>

        {filtered.length > baseCount && (
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((e) => !e)}
              className="px-4 py-2 rounded-full border border-zinc-700 text-zinc-100 hover:bg-zinc-900 transition-colors"
            >
              {expanded ? "Lebih sedikit" : "Selengkapnya"}
            </button>
          </div>
        )}

        {currentItem && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeModal}
            onKeyDown={(e) => {
              if (e.key === "Escape") closeModal();
              if (e.key === "ArrowLeft" && modalIndex !== null) setModalIndex((i) => (i! > 0 ? i! - 1 : filtered.length - 1));
              if (e.key === "ArrowRight" && modalIndex !== null) setModalIndex((i) => (i! < filtered.length - 1 ? i! + 1 : 0));
            }}
            tabIndex={-1}
          >
            <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
              {/* Close button */}
              <button
                type="button"
                aria-label="Tutup"
                onClick={closeModal}
                className="absolute -top-3 -right-3 z-10 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-white w-9 h-9 flex items-center justify-center shadow ring-1 ring-white/10"
              >
                ×
              </button>

              {/* Content */}
              {currentItem.isVideo ? (
                <video
                  src={currentItem.image}
                  controls
                  className="w-full max-h-[80vh] rounded-lg bg-black"
                  preload="metadata"
                />
              ) : (
                <div className="relative max-h-[80vh] overflow-auto rounded-lg bg-black">
                  <Image
                    src={currentItem.image}
                    alt={currentItem.title}
                    width={1600}
                    height={900}
                    className="mx-auto select-none"
                    sizes="100vw"
                    quality={75}
                  />
                </div>
              )}

              {/* Nav buttons */}
              <div className="mt-3 flex items-center justify-between">
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setModalIndex((i) => (i! > 0 ? i! - 1 : filtered.length - 1))}
                    className="px-4 py-2 rounded-md border border-zinc-700 text-zinc-100 hover:bg-zinc-900"
                  >
                    Sebelumnya
                  </button>
                  <button
                    type="button"
                    onClick={() => setModalIndex((i) => (i! < filtered.length - 1 ? i! + 1 : 0))}
                    className="px-4 py-2 rounded-md border border-zinc-700 text-zinc-100 hover:bg-zinc-900"
                  >
                    Berikutnya
                  </button>
                </div>
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 rounded-md bg-orange-600 hover:bg-orange-500 text-white"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}