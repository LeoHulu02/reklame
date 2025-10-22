import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/60 bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-400">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p>
            © {new Date().getFullYear()} Reklame. Semua hak dilindungi.
          </p>
          <div className="flex items-center gap-3 md:gap-4">
            <Link href="#" className="hover:text-zinc-100 transition-colors">
              Kebijakan Privasi
            </Link>
            <Link href="#" className="hover:text-zinc-100 transition-colors">
              Syarat & Ketentuan
            </Link>
            <Link href="#" className="hover:text-zinc-100 transition-colors">
              Kontak
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}