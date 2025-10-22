"use client";
import { useState } from "react";

export type FAQItem = {
  q: string;
  a: string;
};

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="bg-gray-950 text-zinc-100 border-t border-zinc-800/60">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">FAQ</h2>
        <div className="mt-6 divide-y divide-zinc-800/60 border border-zinc-800/60 rounded-md">
          {items.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div key={idx}>
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full text-left px-4 py-4 hover:bg-zinc-900 flex items-center justify-between"
                >
                  <span className="text-base md:text-sm text-zinc-200">{item.q}</span>
                  <span className="text-zinc-400">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-sm text-zinc-300">{item.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}