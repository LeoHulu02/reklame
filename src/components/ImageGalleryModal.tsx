"use client";
import Image from "next/image";
import { useState } from "react";

type GalleryImage = { src: string; alt?: string };

export default function ImageGalleryModal({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => {
    setActiveIndex(null);
  };

  return (
    <>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActiveIndex(i)}
            className="relative h-48 sm:h-40 lg:h-44 rounded-lg bg-zinc-900 overflow-hidden w-full group border border-zinc-800/60"
          >
            <Image src={img.src} alt={img.alt || `Image ${i + 1}`} fill className="object-cover group-hover:scale-105 transition-transform" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" quality={60} />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={close}
          onKeyDown={(e) => {
            if (e.key === "Escape") close();
          }}
          tabIndex={-1}
        >
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative max-h-[80vh] overflow-auto rounded-lg bg-black">
              <Image
                src={images[activeIndex].src}
                alt={images[activeIndex].alt || `Image ${activeIndex + 1}`}
                width={1600}
                height={900}
                className="mx-auto select-none"
                sizes="100vw"
                quality={75}
              />
            </div>

            <div className="mt-3 flex items-center justify-end">
              <button
                type="button"
                onClick={close}
                className="px-4 py-2 rounded-md bg-orange-600 hover:bg-orange-500 text-white"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}