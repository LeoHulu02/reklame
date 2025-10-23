export const brand = {
  name: "Sukaria Makmur",
  location: "Teluk Dalam, Nias Selatan",
  whatsappUrl:
    process.env.NEXT_PUBLIC_WHATSAPP_URL ||
    "https://wa.me/6282286282676?text=Halo%20Sukaria%20Makmur,%20saya%20tertarik%20dengan%20layanan%20reklame.",
  primaryCtaText: "Chat WhatsApp",
  secondaryCtaText: "Konsultasi Gratis",
  color: {
    background: "#0b1220", // dark gray base
    accent: "#ea580c", // orange-600
    accentSecondary: "#f59e0b", // amber-500
  },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Reklame Motor", href: "/reklame-motor" },
    { label: "Reklame Helm", href: "/reklame-helm" },
    { label: "Reklame Mantel", href: "/reklame-mantel" },
    { label: "Papan Merek", href: "/papan-merek" },
    { label: "Portfolio", href: "/#portfolio" },
    { label: "Testimonial", href: "/#testimonials" },
    { label: "FAQ", href: "/#faq" },
    { label: "Kontak", href: "/#kontak" },
  ],
};