export function TrustBar() {
  const items = [
    { num: "31", label: "LET PRAXE" },
    { num: "3,5 MIL. KČ", label: "POJIŠTĚNÍ VČ. PRACÍ VE VÝŠKÁCH" },
    { num: "720", label: "REGULAČNÍCH STANIC GASNET V ÚDRŽBĚ" },
    { num: "1 100", label: "STROMŮ POKÁCENO V NP ŠUMAVA" },
  ];
  return (
    <section className="bg-anthracite text-white">
      <div className="container-12 py-10 md:py-14 grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-6">
        {items.map((it, i) => (
          <div
            key={i}
            className={`px-4 ${i > 0 ? "md:border-l-[2px] md:border-white/15" : ""}`}
          >
            <div className="font-display text-3xl md:text-5xl text-orange-cta leading-none">
              {it.num}
            </div>
            <div className="mt-2 text-[11px] md:text-xs tracking-widest text-white/80">
              {it.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
