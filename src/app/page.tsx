import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductsGrid from "@/components/ProductsGrid";
import PortfolioSection from "@/components/PortfolioSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Page() {
  const products = [
    {
      id: "reklame-motor",
      title: "Reklame Motor",
      description:
        "Branding armada motor untuk promosi dan kampanye — hasil tajam dan tahan cuaca.",
      features: [
        { label: "Desain tajam dan presisi" },
        { label: "Bahan premium & kuat" },
        { label: "Finishing rapi" },
      ],
      image: {
        src: "/assest/reklame-motor/reklame-motor-crf.jpeg",
        alt: "Reklame Motor",
        href: "/reklame-motor",
      },
    },
    {
      id: "reklame-helm",
      title: "Reklame Helm",
      description:
        "Custom helm untuk tim dan promosi — warna awet, finishing halus dan presisi.",
      features: [
        { label: "Warna awet & kuat" },
        { label: "Detail tajam" },
        { label: "Bahan premium" },
      ],
      image: {
        src: "/assest/reklame-helm/reklame-helm-motor-black.jpeg",
        alt: "Reklame Helm",
        href: "/reklame-helm",
      },
    },
    {
      id: "reklame-mantel",
      title: "Reklame Mantel",
      description:
        "Apparel promosi untuk tim dan komunitas — nyaman, rapi, dan berkelas.",
      features: [
        { label: "Sablon presisi" },
        { label: "Material nyaman" },
        { label: "Ukuran lengkap" },
      ],
      image: {
        src: "/assest/reklame-motor/bahan-reklame.jpeg",
        alt: "Reklame Mantel",
        href: "/reklame-mantel",
      },
    },
    {
      id: "papan-merek",
      title: "Papan Merek",
      description:
        "Signage toko premium, material kuat dan finishing presisi untuk tampilan mencolok.",
      features: [
        { label: "Akrilik / ACP / LED opsional" },
        { label: "Survey & pemasangan" },
        { label: "Desain sesuai fasad" },
      ],
      image: {
        src: "/assest/reklame-papan-merek/Reklame-papan-merek.jpeg",
        alt: "Papan Merek",
        href: "/papan-merek",
      },
    },
  ];

  const portfolioItems = [
    // Reklame Motor - Images
    { title: "Reklame Motor CBR150", image: "/assest/reklame-motor/reklame-motor-cbr150.jpeg", href: "/reklame-motor", category: "Motor" },
    { title: "Reklame Motor CBR Yellow", image: "/assest/reklame-motor/reklame-motor-cbr-yellow.jpeg", href: "/reklame-motor", category: "Motor" },
    { title: "Reklame Motor CRF", image: "/assest/reklame-motor/reklame-motor-crf.jpeg", href: "/reklame-motor", category: "Motor" },
    { title: "Reklame Motor Hijau", image: "/assest/reklame-motor/reklame-motor-hijau.jpeg", href: "/reklame-motor", category: "Motor" },
    { title: "Reklame Motor Megapro", image: "/assest/reklame-motor/reklame-motor-megapro.jpeg", href: "/reklame-motor", category: "Motor" },
    { title: "Hasil Reklame Motor R15", image: "/assest/reklame-motor/hasil-reklame-motor-r15.jpeg", href: "/reklame-motor", category: "Motor" },
    { title: "Design Reklame Motor", image: "/assest/reklame-motor/design-reklame-motor.jpeg", href: "/reklame-motor", category: "Motor" },
    { title: "Body Spartpart Motor Biru", image: "/assest/reklame-motor/body-spartpart-motor-keren-biru.jpeg", href: "/reklame-motor", category: "Motor" },
    { title: "Body Spartpart Motor Hitam", image: "/assest/reklame-motor/body-spartpart-motor-keren-hitam.jpeg", href: "/reklame-motor", category: "Motor" },
    { title: "Body Spartpart Motor Kuning", image: "/assest/reklame-motor/body-spartpart-motor-keren-kuning.jpeg", href: "/reklame-motor", category: "Motor" },
    { title: "Body Spartpart Motor Merah", image: "/assest/reklame-motor/body-spartpart-motor-keren-merah.jpeg", href: "/reklame-motor", category: "Motor" },
    { title: "Body Spartpart Full Biru", image: "/assest/reklame-motor/nody-spartpart-motor-keren-full-biru.jpeg", href: "/reklame-motor", category: "Motor" },
    { title: "Reklame Kulit Jok Motor", image: "/assest/reklame-motor/reklame-kulit-jok-motor.jpeg", href: "/reklame-motor", category: "Motor" },
    { title: "Grip Motor Keren", image: "/assest/reklame-motor/grip-motor-keren.jpeg", href: "/reklame-motor", category: "Motor" },
    { title: "Kaca Spion Keren", image: "/assest/reklame-motor/kaca-spion-keren.jpeg", href: "/reklame-motor", category: "Motor" },
    { title: "Bahan Reklame", image: "/assest/reklame-motor/bahan-reklame.jpeg", href: "/reklame-motor", category: "Motor" },
    { title: "Aksesoris Motor", image: "/assest/reklame-motor/accesoriss-motor.jpeg", href: "/reklame-motor", category: "Motor" },
    { title: "Aksesoris Motor 2", image: "/assest/reklame-motor/accesesoris-motor-2.jpeg", href: "/reklame-motor", category: "Motor" },
    { title: "Aksesoris Motor 3", image: "/assest/reklame-motor/accsesoris-motor-3.jpeg", href: "/reklame-motor", category: "Motor" },
    { title: "Aksesoris Motor 4", image: "/assest/reklame-motor/accesoris-motor-4.jpeg", href: "/reklame-motor", category: "Motor" },
    { title: "Aksesoris Motor 5", image: "/assest/reklame-motor/accesoris-motor-5.jpeg", href: "/reklame-motor", category: "Motor" },
    
    // Reklame Motor - Videos
    { title: "Video Motor Beat ESP", image: "/assest/reklame-motor/video-motor-beat-esp.mp4", href: "/reklame-motor", category: "Motor", isVideo: true },
    { title: "Video Motor Beat", image: "/assest/reklame-motor/video-motor-beat.mp4", href: "/reklame-motor", category: "Motor", isVideo: true },
    { title: "Video Motor Satria", image: "/assest/reklame-motor/video-motor-satria.mp4", href: "/reklame-motor", category: "Motor", isVideo: true },
    { title: "Video Motor Vario", image: "/assest/reklame-motor/video-motor-vario.mp4", href: "/reklame-motor", category: "Motor", isVideo: true },
    
    // Reklame Helm
    { title: "Reklame Helm Motor Black", image: "/assest/reklame-helm/reklame-helm-motor-black.jpeg", href: "/reklame-helm", category: "Helm" },
    { title: "Reklame Helm Motor Full Black", image: "/assest/reklame-helm/reklame-helm-motor-full-black.jpeg", href: "/reklame-helm", category: "Helm" },
    { title: "Reklame Helm Motor Hitam", image: "/assest/reklame-helm/reklame-helm-motor-hitam.jpeg", href: "/reklame-helm", category: "Helm" },
    { title: "Reklame Helm Motor Yellow", image: "/assest/reklame-helm/reklame-helm-motor-yellow.jpeg", href: "/reklame-helm", category: "Helm" },
    
    // Reklame Papan Merek
    { title: "Reklame Papan Merek", image: "/assest/reklame-papan-merek/Reklame-papan-merek.jpeg", href: "/papan-merek", category: "Papan Merek" },
    { title: "Kerangka Reklame Papan Merek", image: "/assest/reklame-papan-merek/kerangka-reklame-papan-merek.jpeg", href: "/papan-merek", category: "Papan Merek" },
    { title: "Kerangka Reklame Papan Merek 2", image: "/assest/reklame-papan-merek/kerangka-reklame-papan-merek-2.jpeg", href: "/papan-merek", category: "Papan Merek" },
    { title: "Image Desain Reklame Motor", image: "/assest/reklame-papan-merek/image-desain-reklame-motor.jpeg", href: "/papan-merek", category: "Papan Merek" },
  ];

  const faqItems = [
    { 
      q: "🚀 Berapa lama lead time untuk custom design?", 
      a: "Fast track! Design approval dalam 24 jam, produksi 3-7 hari kerja. Untuk rush order, bisa same day atau next day dengan additional cost." 
    },
    { 
      q: "💳 Payment method apa aja yang diterima?", 
      a: "Fleksibel banget! Cash, transfer bank, e-wallet (OVO, DANA, GoPay), bahkan bisa cicilan 0% untuk project besar. Digital payment era!" 
    },
    { 
      q: "📱 Bisa konsultasi via online dulu gak?", 
      a: "Absolutely! WhatsApp, video call, atau kirim foto via DM Instagram. Kita provide mockup digital dulu sebelum produksi. No worry!" 
    },
    { 
      q: "🎨 Desain sendiri atau ada template ready?", 
      a: "Both! Punya desain sendiri? Send aja file AI/PSD/PNG. Butuh bantuan design? Tim kreatif kita siap bikin yang aesthetic dan eye-catching!" 
    },
    { 
      q: "🌧️ Tahan cuaca ekstrem Nias gak?", 
      a: "Weather-proof guaranteed! Material premium anti-fade, waterproof, dan UV resistant. Cocok untuk iklim tropis Nias yang unpredictable." 
    },
    { 
      q: "📦 Delivery sampai ke daerah terpencil?", 
      a: "Nationwide delivery! Pakai ekspedisi terpercaya, tracking real-time. Khusus Nias Selatan, ada special rate dan handling extra care." 
    },
    { 
      q: "🔄 Garansi dan after-sales gimana?", 
      a: "1 tahun warranty untuk material defect! Plus free maintenance tips via WhatsApp group eksklusif customer. Customer satisfaction is our priority!" 
    },
    { 
      q: "💡 Bisa request fitur smart/digital gak?", 
      a: "Innovation mode ON! LED programmable, QR code integration, bahkan IoT-enabled signage. Kita always up-to-date dengan tech trends!" 
    }
  ];

  return (
    <div className="bg-gray-950 text-zinc-100 min-h-screen">
      <Navbar />
      <Hero />
      <ProductsGrid />
      <PortfolioSection items={portfolioItems} />
      <Testimonials
        items={[
          { name: "Bapak Telaumbanua", message: "Ya'ahowu! Reklame motor saya bagus sekali, warna cerah dan tahan lama. Terima kasih sudah membantu usaha bengkel saya di Telukdalam." },
          { name: "Ibu Waruwu", message: "Papan merek warung saya sekarang kelihatan menarik! Banyak pelanggan yang bilang bagus. Harga juga masuk akal untuk kualitas sebagus ini." },
          { name: "Ama Zebua", message: "Stiker helm anak-anak saya keren banget! Mereka senang sekali pakai helm dengan desain yang unik. Pelayanannya juga ramah dan cepat." },
          { name: "Bapak Lase", message: "Sudah 2 tahun pakai reklame dari sini untuk toko kelontong, masih awet dan tidak pudar. Recommended untuk saudara-saudara di Nias Selatan!" },
          { name: "Ina Dakhi", message: "Mantel hujan dengan logo usaha saya terlihat profesional. Cocok untuk iklim Nias yang sering hujan. Kualitas bahan bagus dan nyaman dipakai." },
          { name: "Ama Hulu", message: "Neon box untuk cafe saya bikin tempat jadi lebih menarik di malam hari. Banyak anak muda yang datang karena tertarik dengan tampilannya yang modern." },
        ]}
      />
      <FAQ items={faqItems} />
      <ContactForm />
      <Footer />
    </div>
  );
}
