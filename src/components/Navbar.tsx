"use client";
import Link from "next/link";
import { brand } from "@/lib/config";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/60 bg-gray-950/85 backdrop-blur supports-[backdrop-filter]:bg-gray-950/75">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="#" className="text-zinc-100 font-semibold tracking-tight">
          {brand.name}
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {brand.navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-zinc-300 hover:text-zinc-100 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            href={brand.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-orange-600 hover:bg-orange-500 text-white text-sm px-3 py-2"
          >
            {brand.primaryCtaText}
          </a>
        </div>
      </nav>
    </header>
  );
}