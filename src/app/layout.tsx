import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reklame — Solusi Reklame Premium",
  description:
    "Jasa reklame premium: desain tajam, produksi berkualitas, eksekusi cepat untuk brand berani.",
  openGraph: {
    title: "Reklame — Solusi Reklame Premium",
    description:
      "Jasa reklame premium: desain tajam, produksi berkualitas, eksekusi cepat untuk brand berani.",
    url: "https://example.com",
    siteName: "Reklame",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reklame — Solusi Reklame Premium",
    description:
      "Jasa reklame premium: desain tajam, produksi berkualitas, eksekusi cepat untuk brand berani.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-zinc-100 overflow-x-hidden`}
      >
        {/* Navbar akan diimport di page atau dipasang di sini nanti */}
        {children}
        {/* Footer akan diimport di page atau dipasang di sini nanti */}
      </body>
    </html>
  );
}
