"use client";
import { useState } from "react";
import { useReveal } from "@/lib/useReveal";

export type FAQItem = {
  q: string;
  a: string;
};

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="faq" className="bg-gray-950 text-zinc-100 border-t border-zinc-800/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 md:py-14">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">FAQ</h2>
        <div
          ref={ref}
          className={`mt-6 divide-y divide-zinc-800/60 border border-zinc-800/60 rounded-md transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
        >
          {items.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div key={idx}>
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full text-left px-4 sm:px-6 py-4 sm:py-5 hover:bg-zinc-900 flex items-center justify-between touch-manipulation"
                >
                  <span className="text-sm sm:text-base text-zinc-200 pr-4">{item.q}</span>
                  <span className="text-zinc-400 text-lg flex-shrink-0">{isOpen ? "−" : "+"}</span>
                </button>
                <div
                  className={`px-4 sm:px-6 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 opacity-100 pb-4 sm:pb-5" : "max-h-0 opacity-0"}`}
                >
                  <div className="text-sm sm:text-base text-zinc-300 leading-relaxed">{item.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}