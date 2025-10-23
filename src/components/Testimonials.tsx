"use client";
import Image from "next/image";
import { useReveal } from "@/lib/useReveal";
import { useState } from "react";

export type Testimonial = {
  name: string;
  message: string;
  avatar?: string;
};

function getInitial(name: string) {
  const first = name.trim().charAt(0);
  return first ? first.toUpperCase() : "R";
}

export default function Testimonials({ items }: { items: Testimonial[] }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const MAX_LEN = 140;

  return (
    <section id="testimonials" className="bg-gray-950 text-zinc-100 border-t border-zinc-800/60">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Testimonial</h2>
        </div>

        <div
          ref={ref}
          className={`mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
        >
          {items.map((t, idx) => {
            const isLong = t.message.length > MAX_LEN;
            const open = !!expanded[idx];
            const text = open || !isLong ? t.message : `${t.message.slice(0, MAX_LEN)}…`;
            return (
              <div key={idx} className="rounded-lg border border-zinc-800/60 p-4 sm:p-5 bg-zinc-900/40">
                <div className="flex items-center gap-3">
                  {t.avatar ? (
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4nGP4z8DwHwAFgwJ/lk6cNwAAAABJRU5ErkJggg=="
                    />
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 text-zinc-200 text-sm">
                      {getInitial(t.name)}
                    </div>
                  )}
                  <div className="font-medium">{t.name}</div>
                </div>
                <p className="mt-3 text-sm text-zinc-300">
                  {text}
                  {isLong && (
                    <button
                      onClick={() => setExpanded((prev) => ({ ...prev, [idx]: !open }))}
                      className="ml-2 inline text-emerald-400 hover:text-emerald-300 text-xs"
                      aria-expanded={open}
                    >
                      {open ? "Tutup" : "Selengkapnya"}
                    </button>
                  )}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}