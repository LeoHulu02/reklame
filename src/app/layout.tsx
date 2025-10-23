import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sukaria Makmur — Solusi Reklame Premium",
  description:
    "Jasa reklame premium di Teluk Dalam, Nias Selatan: desain tajam, produksi berkualitas, eksekusi cepat untuk brand berani.",
  openGraph: {
    title: "Sukaria Makmur — Solusi Reklame Premium",
    description:
      "Jasa reklame premium di Teluk Dalam, Nias Selatan: desain tajam, produksi berkualitas, eksekusi cepat untuk brand berani.",
    url: "https://example.com",
    siteName: "Sukaria Makmur",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sukaria Makmur — Solusi Reklame Premium",
    description:
      "Jasa reklame premium di Teluk Dalam, Nias Selatan: desain tajam, produksi berkualitas, eksekusi cepat untuk brand berani.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="overflow-x-hidden scroll-smooth">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
