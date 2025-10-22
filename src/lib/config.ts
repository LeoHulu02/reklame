export const brand = {
  name: "Reklame",
  whatsappUrl:
    process.env.NEXT_PUBLIC_WHATSAPP_URL ||
    "https://wa.me/6282286282676",
  primaryCtaText: "Chat WhatsApp",
  secondaryCtaText: "Hubungi Kami",
  navLinks: [
    { label: "Reklame Motor", href: "#reklame-motor" },
    { label: "Reklame Helm", href: "#reklame-helm" },
    { label: "Reklame Mantel", href: "#reklame-mantel" },
    { label: "Papan Merek", href: "#papan-merek" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Testimonial", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontak", href: "#kontak" },
  ],
};