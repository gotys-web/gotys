import { createFileRoute } from "@tanstack/react-router";

import { Section } from "../components/site/Section";

export const Route = createFileRoute("/cenik")({
  head: () => ({
    meta: [
      { title: "Ceník: rizikové kácení, mulčování náletů, sekání trávy | GOTYŠ" },
      { name: "description", content: "Orientační ceník služeb GOTYŠ. Přesnou cenu určíme z fotografií nezávazně a do 24 hodin." },
      { property: "og:title", content: "Ceník | GOTYŠ" },
      { property: "og:url", content: "https://gotys.cz/cenik" },
    ],
    links: [{ rel: "canonical", href: "/cenik" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "GOTYŠ", item: "https://gotys.cz/" },
            { "@type": "ListItem", position: 2, name: "Ceník", item: "https://gotys.cz/cenik" },
          ],
        }),
      },
    ],
  }),
  component: Cenik,
});

const rows = [
  { s: "Rizikové kácení stromů", d: "Kompletně, z plošiny, jeřábem nebo lezeckou technikou", p: "od 1 500 Kč / strom" },
  { s: "Mulčování náletů a čištění pozemků", d: "Nálety, klestí, drcení na místě", p: "cena dle plochy" },
  { s: "Sekání mulčovací sekačkou", d: "Tráva do 1,5 m, bez úklidu", p: "od 1 Kč / m² bez DPH" },
  { s: "Sekání křovinořezem", d: "Tráva nad 40 cm, těžko přístupné plochy", p: "od 1 Kč / m² bez DPH" },
  { s: "Sekání solárních elektráren (FVE)", d: "Práce mezi řadami panelů, roční kontrakty", p: "od 0,60 Kč / m²" },
  { s: "Likvidace dřevní hmoty a klestí", d: "Štěpkování, odvoz", p: "dle rozsahu" },
];

function Cenik() {
  return (
    <>
      <section>
        <div className="container-12 py-14 md:py-20">
          <h1 className="font-display text-5xl md:text-7xl leading-[0.9] max-w-4xl">
            Ceny od<br />Přesně z fotek
          </h1>
          <p className="mt-6 text-anthracite/80 max-w-2xl">
            Uvedené ceny jsou orientační. Přesnou cenu určíme z fotografií, nezávazně a do 24 hodin.
          </p>
        </div>
      </section>

      <Section>
        <div className="bg-white overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-anthracite text-white font-display tracking-wider">
              <tr>
                <th className="p-4 md:p-5 text-sm md:text-base">Služba</th>
                <th className="p-4 md:p-5 text-sm md:text-base hidden md:table-cell">Popis</th>
                <th className="p-4 md:p-5 text-sm md:text-base text-right">Cena od</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.s} className={i > 0 ? "border-t border-anthracite/20" : ""}>
                  <td className="p-4 md:p-5 font-display uppercase tracking-wide align-top">{r.s}</td>
                  <td className="p-4 md:p-5 text-sm text-anthracite/80 hidden md:table-cell align-top">{r.d}</td>
                  <td className="p-4 md:p-5 text-right font-display text-orange-cta text-lg whitespace-nowrap align-top">{r.p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <section>
        <div className="container-12 py-16 md:py-20 flex flex-wrap items-center justify-between gap-6">
          <h2 className="font-display text-3xl md:text-4xl leading-[0.95]">
            Zavolejte a domluvíme se
          </h2>
          <a href="tel:+420776155602" className="inline-flex bg-orange-cta text-white font-display uppercase tracking-widest px-6 py-4">
            ☎ 776 155 602
          </a>
        </div>
      </section>
    </>
  );
}
