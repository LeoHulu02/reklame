"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { brand } from "@/lib/config";
import { usePathname } from "next/navigation";


function Icon({ name }: { name: string }) {
  const common = "w-5 h-5 text-zinc-400 group-hover:text-zinc-200 transition-colors";
  switch (name) {
    case "Home":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5 10.5V21h14V10.5" />
        </svg>
      );
    case "Produk":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 7h18v13H3z" />
          <path d="M3 7l3-4h12l3 4" />
        </svg>
      );
    case "Portfolio":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z" />
        </svg>
      );
    case "Testimonial":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="8" cy="8" r="4" />
          <path d="M14 14h7M14 18h7" />
        </svg>
      );
    case "FAQ":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" />
          <path d="M9.5 9.5a3.5 3.5 0 117 0c0 1.5-1 2.2-2.2 2.8-.8.4-1.3.9-1.3 1.7v1" />
          <circle cx="12" cy="17.5" r=".8" />
        </svg>
      );
    case "Kontak":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 5h18v14H3z" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Navbar() {
  const [activeHref, setActiveHref] = useState<string>("#home");
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = `#${entry.target.id}`;
            setActiveHref(id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.1 }
    );

    brand.navLinks.forEach((l) => {
      if (l.href.startsWith("#")) {
        const el = document.querySelector(l.href);
        if (el) observer.observe(el as Element);
      }
    });

    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onEsc);

    return () => {
      observer.disconnect();
      window.removeEventListener("keydown", onEsc);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/60 bg-gray-950/85 backdrop-blur supports-[backdrop-filter]:bg-gray-950/70">
        <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight text-zinc-100">Reklame</Link>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-5">
            {brand.navLinks.map((l) => {
              const isActive = l.href.startsWith("#")
                ? activeHref === l.href
                : l.href === "/"
                ? pathname === "/"
                : pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`${isActive ? "text-emerald-400 underline underline-offset-8" : "text-zinc-200 hover:text-white"} transition-colors pb-1`}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>

          {/* Hamburger button (mobile) */}
          <button
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 border border-zinc-700 text-zinc-200 hover:bg-zinc-800 transition-colors"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="7" x2="20" y2="7" className={`transition-all ${isOpen ? "opacity-0" : "opacity-100"}`} />
              <line x1="4" y1="12" x2="20" y2="12" className={`transition-all ${isOpen ? "translate-x-1 -translate-y-1 rotate-45" : "translate-x-0 translate-y-0 rotate-0"}`} />
              <line x1="4" y1="17" x2="20" y2="17" className={`transition-all ${isOpen ? "-translate-x-1 translate-y-1 -rotate-45" : "translate-x-0 translate-y-0 rotate-0"}`} />
            </svg>
          </button>
        </div>
      </nav>

      {/* Full-screen sheet for mobile */}
      <div
        className={`${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"} fixed inset-0 z-50 transition-all duration-300`}
      >
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        />

        <div className="relative z-10 mx-auto h-full w-full max-w-sm sm:max-w-md">
          <div className="flex h-full flex-col bg-black/95 ring-1 ring-zinc-800 sm:rounded-l-xl sm:ml-auto">
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-zinc-800">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="font-semibold text-zinc-100"
              >
                Reklame
              </Link>
              <button
                aria-label="Tutup menu"
                onClick={() => setIsOpen(false)}
                className="rounded-md p-2 text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800/60 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                >
                  <path d="M6 6l12 12M18 6l-12 12" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <nav className="px-6 py-4 flex-1 overflow-auto">
              {brand.navLinks.map((l) => {
                const isActive = l.href.startsWith("#")
                  ? activeHref === l.href
                  : l.href === "/"
                  ? pathname === "/"
                  : pathname === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setIsOpen(false)}
                    className={`group flex items-center gap-3 py-3 ${
                      isActive ? "text-emerald-400" : "text-zinc-300 hover:text-zinc-100"
                    } text-lg transition-colors`}
                  >
                    <Icon name={l.label} />
                    <span>{l.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Bottom actions */}
            <div className="px-6 pb-7 pt-3 border-t border-zinc-800 bg-black/90">
              <a
                href={brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-base px-5 py-3 transition-colors"
              >
                Chat WhatsApp
              </a>
              <div className="mt-3">
                <Link
                  href="#kontak"
                  onClick={() => setIsOpen(false)}
                  className="block w-full rounded-md border border-zinc-700 text-zinc-100 hover:bg-zinc-900 text-base px-5 py-3 transition-colors"
                >
                  Konsultasi Gratis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}