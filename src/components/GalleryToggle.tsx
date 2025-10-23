"use client";

import { useState } from "react";
import ImageGalleryModal from "@/components/ImageGalleryModal";

type GalleryImage = { src: string; alt?: string };

type Props = {
  images: GalleryImage[];
  initialCount?: number;
  buttonLabel?: string;
};

export default function GalleryToggle({
  images,
  initialCount = 4,
  buttonLabel = "Lihat Selengkapnya",
}: Props) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? images : images.slice(0, initialCount);
  const hasMore = images.length > initialCount;

  return (
    <div>
      <ImageGalleryModal
        images={visible.map((img, i) => ({
          src: img.src,
          alt: img.alt ?? `Gambar ${i + 1}`,
        }))}
      />

      {hasMore && !expanded && (
        <button
          onClick={() => setExpanded(true)}
          className="mt-6 inline-block rounded-md border border-zinc-700 text-zinc-100 hover:bg-zinc-900 px-6 py-3 transition-colors touch-manipulation"
        >
          {buttonLabel}
        </button>
      )}
    </div>
  );
}