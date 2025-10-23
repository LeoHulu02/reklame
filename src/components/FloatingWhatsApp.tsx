"use client";
import { brand } from "@/lib/config";

export default function FloatingWhatsApp() {
  return (
    <a
      href={brand.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-green-600 hover:bg-green-500 text-white shadow-lg px-4 py-2 md:px-5 md:py-3 transition-colors"
    >
      <span className="hidden sm:inline">Chat WhatsApp</span>
      <span className="sm:hidden">WhatsApp</span>
    </a>
  );
}