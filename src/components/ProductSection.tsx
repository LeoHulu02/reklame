"use client";
import Image from "next/image";
import { useReveal } from "@/lib/useReveal";

export type ProductFeature = {
  label: string;
};

export type ProductProps = {
  id: string;
  title: string;
  description: string;
  features: ProductFeature[];
  image?: {
    src: string;
    alt: string;
    href?: string;
    width?: number;
    height?: number;
  };
};

export default function ProductSection({ id, title, description, features, image }: ProductProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id={id} className="bg-gray-950 text-zinc-100 border-t border-zinc-800/60">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-10 items-center transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
            <p className="mt-3 text-zinc-300">{description}</p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((f) => (
                <li
                  key={f.label}
                  className="flex items-center gap-2 text-sm text-zinc-300"
                >
                  <span className="inline-block h-2 w-2 rounded-full bg-orange-600" />
                  {f.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-52 sm:h-64 md:h-80 rounded-lg bg-zinc-900 overflow-hidden transition-transform duration-500 hover:scale-[1.02] hover:shadow-lg">
            {image ? (
              image.href ? (
                <a href={image.href} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4nGP4z8DwHwAFgwJ/lk6cNwAAAABJRU5ErkJggg=="
                  />
                </a>
              ) : (
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4nGP4z8DwHwAFgwJ/lk6cNwAAAABJRU5ErkJggg=="
                />
              )
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-zinc-400">Visual Produk</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}