import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { brand } from "@/lib/config";
import Script from "next/script";

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
  metadataBase: new URL(brand.siteUrl),
  openGraph: {
    title: "Sukaria Makmur — Solusi Reklame Premium",
    description:
      "Jasa reklame premium di Teluk Dalam, Nias Selatan: desain tajam, produksi berkualitas, eksekusi cepat untuk brand berani.",
    url: brand.siteUrl,
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
  const [locality, region] = brand.location.split(",").map((s) => s.trim());
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: brand.name,
    url: brand.siteUrl,
    areaServed: brand.location,
    address: {
      "@type": "PostalAddress",
      addressLocality: locality || brand.location,
      addressRegion: region || undefined,
      addressCountry: "ID",
    },
    sameAs: [brand.whatsappUrl],
  };

  return (
    <html lang="id" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="overflow-x-hidden scroll-smooth">
        {children}
        <FloatingWhatsApp />
        <Script
          id="localbusiness-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
