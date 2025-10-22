import Image from "next/image";

export type PortfolioItem = {
  title: string;
  image: string;
  href?: string;
};

export default function PortfolioSection({ items }: { items: PortfolioItem[] }) {
  return (
    <section id="portfolio" className="bg-gray-950 text-zinc-100 border-t border-zinc-800/60">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Portfolio</h2>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item, idx) => (
            <a
              key={idx}
              href={item.href || "#"}
              className="group relative rounded-lg overflow-hidden border border-zinc-800/60"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="h-48 sm:h-40 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 left-2 text-xs text-zinc-200">
                {item.title}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}