import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { YouTubeEmbed } from "../components/site/YouTubeEmbed";
import { Section } from "../components/site/Section";
import { FaqList } from "../components/site/FaqList";

export const Route = createFileRoute("/sekani-svahu")({
  head: () => ({
    meta: [
      { title: "Sekání svahů a těžkého terénu | Vyškov, Brno | GOTYŠ" },
      { name: "description", content: "Profesionální sečení svahů, náspů a těžko dostupného terénu. Křovinořez, speciální technika, bezpečná práce ve sklonech." },
      { property: "og:title", content: "Sekání svahů | GOTYŠ" },
      { property: "og:description", content: "Sečení svahů, náspů a těžkého terénu, kam se běžná technika nedostane." },
      { property: "og:url", content: "https://theyanki1.github.io/gotys/sekani-svahu" },
    ],
    links: [{ rel: "canonical", href: "/sekani-svahu" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Sekání svahů a těžkého terénu",
          name: "Sekání svahů a těžkého terénu",
          description: "Náspy, příkopy, svahy kolem areálů a infrastruktury. Sečení svahů, náspů a těžko dostupného terénu, kam se běžná technika nedostane.",
          areaServed: "Jihomoravský kraj",
          provider: {
            "@type": "LocalBusiness",
            name: "GOTYŠ, Petr Gottvald",
            telephone: "+420776155602",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Kpt. Otakara Jaroše 10",
              addressLocality: "Vyškov",
              postalCode: "682 01",
              addressCountry: "CZ",
            },
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "GOTYŠ", item: "https://theyanki1.github.io/gotys/" },
            { "@type": "ListItem", position: 2, name: "Sekání svahů a těžkého terénu", item: "https://theyanki1.github.io/gotys/sekani-svahu" },
          ],
        }),
      },
    ],
  }),
  component: SekaniSvahu,
});

const faqs = [
  {
    q: "Jaký sklon svahu ještě zvládnete?",
    a: "Křovinořezem prakticky bez omezení. Ve výrazných sklonech pracujeme s jištěním. Rozhodující je přístup a stav porostu, ne sám úhel.",
  },
  {
    q: "Sekáte i náspy podél komunikací a železnic?",
    a: "Ano. Máme zkušenosti s náspy, příkopy a plochami kolem kritické infrastruktury (regulační stanice GasNet).",
  },
  {
    q: "Zvládnete zarostlé svahy s náletem?",
    a: "Ano. Kombinujeme křovinořez s mulčovačem tam, kde je průchod stroje bezpečný. U extrémních svahů volíme ruční zpracování.",
  },
];

function SekaniSvahu() {
  return (
    <>
      <PageHero
        title="Sekání svahů a těžkého terénu"
        lead="Náspy, příkopy, svahy kolem areálů a infrastruktury. Pracujeme tam, kam se běžná technika nedostane."
        photoLabel="Sekání svahu dálkově ovládanou sekačkou, Senetářov"
        photoSrc={`${import.meta.env.BASE_URL}reference/obec-senetarov/01.jpg`}
      />

      <Section title="Technika a přístup">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              t: "Křovinořez",
              d: "Základ pro svahy: bezpečná práce ve sklonech, práce podél oplocení a instalací.",
              p: "od 1 Kč / m² bez DPH",
            },
            {
              t: "Mulčovací technika",
              d: "Pro průchodné svahy s náletem. Tráva a keře rozsekány najednou.",
              p: "dle plochy",
            },
            {
              t: "Ruční dosekávání",
              d: "Detail kolem sloupů, patek, hydrantů a technologií.",
              p: "součást zakázky",
            },
          ].map((c) => (
            <div key={c.t} className="bg-forest/10 p-6">
              <div className="font-display text-xl md:text-2xl">{c.t}</div>
              <p className="mt-3 text-sm text-anthracite/80">{c.d}</p>
              <div className="mt-6 pt-3 font-display text-orange-cta">{c.p}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Video z praxe">
        <div className="grid sm:grid-cols-2 gap-4 max-w-4xl">
          {[
            { id: "Y_AtpS_BMNs", title: "Sekání svahů | GOTYŠ" },
            { id: "6LjthiLKzWM", title: "Sekání svahů, další ukázka | GOTYŠ" },
          ].map((v) => (
            <div key={v.id} className="bg-anthracite">
              <div className="aspect-video">
                <YouTubeEmbed id={v.id} title={v.title} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-forest text-white">
        <div className="container-12 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">
              Svahy kolem<br /><span className="text-orange-cta">infrastruktury</span>
            </h2>
            <p className="mt-6 text-white/85 max-w-xl">
              Náspy podél cest, obvody regulačních stanic, plochy kolem trafostanic a průmyslových areálů.
              Práce v ostrém provozu, bez rizika pro technologii.
            </p>
            <a href="tel:+420776155602" className="mt-8 inline-flex bg-orange-cta text-white font-display uppercase tracking-widest px-6 py-4">
              ☎ 776 155 602
            </a>
          </div>
          <div className="p-8 bg-forest-dark">
            <div className="font-display text-sm tracking-widest text-orange-cta">CO ŘEŠÍME</div>
            <ul className="mt-4 space-y-3 text-white/90">
              {[
                "Sečení svahů ve sklonech s jištěním",
                "Náspy a příkopy podél komunikací",
                "Obvody regulačních stanic (GasNet)",
                "Zarostlé svahy, křovinořez a mulčovač",
              ].map((l) => (
                <li key={l} className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-orange-cta">{l}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FaqList items={faqs} />
    </>
  );
}
