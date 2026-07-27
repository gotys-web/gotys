interface Faq { q: string; a: string; }

export function FaqList({ items, title = "Časté otázky" }: { items: Faq[]; title?: string }) {
  return (
    <section>
      <div className="container-12 py-16 md:py-20 grid md:grid-cols-3 gap-10">
        <h2 className="font-display text-3xl md:text-4xl">{title}</h2>
        <div className="md:col-span-2">
          {items.map((it, i) => (
            <details key={i} className="group py-5 border-b border-anthracite/20">
              <summary className="cursor-pointer font-display text-base md:text-lg tracking-wider uppercase flex justify-between gap-4">
                <span>{it.q}</span>
                <span className="text-orange-cta group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-anthracite/80 leading-relaxed">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((it) => ({
              "@type": "Question",
              name: it.q,
              acceptedAnswer: { "@type": "Answer", text: it.a },
            })),
          }),
        }}
      />
    </section>
  );
}
