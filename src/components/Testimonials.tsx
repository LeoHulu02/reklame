export type Testimonial = {
  name: string;
  role?: string;
  quote: string;
};

export default function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <section id="testimonials" className="bg-gray-950 text-zinc-100 border-t border-zinc-800/60">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Testimonial</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {items.map((t, idx) => (
            <figure key={idx} className="rounded-lg border border-zinc-800/60 p-6">
              <blockquote className="text-sm text-zinc-300">“{t.quote}”</blockquote>
              <figcaption className="mt-3 text-xs text-zinc-400">
                {t.name} {t.role ? `— ${t.role}` : ""}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}