import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { YouTubeEmbed } from "../components/site/YouTubeEmbed";

import { Section } from "../components/site/Section";
import { FaqList } from "../components/site/FaqList";

export const Route = createFileRoute("/sekani-travy")({
  head: () => ({
    meta: [
      { title: "Sekání a mulčování trávy: obce, firmy, FVE | Vyškov, Brno | GOTYŠ" },
      { name: "description", content: "Sekání trávy pro obce, firmy a solární elektrárny. Mulčovací sekačka, křovinořez, pojezdová sekačka. FVE od 0,60 Kč/m²." },
      { property: "og:title", content: "Sekání trávy: obce, firmy, FVE | GOTYŠ" },
      { property: "og:description", content: "Od obecních trávníků po solární elektrárny. 720 regulačních stanic GasNet." },
      { property: "og:url", content: "https://theyanki1.github.io/gotys/sekani-travy" },
    ],
    links: [{ rel: "canonical", href: "/sekani-travy" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Sekání a mulčování trávy",
          name: "Sekání a mulčování trávy",
          description: "Údržba zeleně v obcích a firemních areálech. Mulčovací sekačka, křovinořez, pojezdová sekačka. Sekání solárních elektráren (FVE).",
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
            { "@type": "ListItem", position: 2, name: "Sekání a mulčování trávy", item: "https://theyanki1.github.io/gotys/sekani-travy" },
          ],
        }),
      },
    ],
  }),
  component: SekaniTravy,
});

const faqs = [
  {
    q: "Do jaké výšky trávy zvládnete sekat?",
    a: "Mulčovací sekačkou zvládneme trávu až do 1,5 m bez nutnosti úklidu, protože ji rozsekáme na drobné kousky. Rákos běžně 2,5 m.",
  },
  {
    q: "Sekáte i solární elektrárny?",
    a: "Ano. Sekání FVE od 0,60 Kč/m² podle plochy a četnosti. Pravidelné sekání se elektrárně vrátí, protože tráva stíní panely a snižuje výkon.",
  },
  {
    q: "Jak často doporučujete sekat?",
    a: "Podle typu plochy: obecní trávníky 4–6× za sezónu, FVE typicky 3–4× za sezónu, křoviny a nálety podle stavu porostu.",
  },
];

function SekaniTravy() {
  return (
    <>
      <PageHero
        title="Sekání a mulčování trávy"
        lead="Údržba zeleně v obcích a firemních areálech. Mulčovací sekačka, křovinořez, pojezdová sekačka pro udržované plochy."
        photoLabel="Areál VaK Vyškov po posečení"
        photoSrc={`${import.meta.env.BASE_URL}reference/vak-vyskov/01.jpg`}
      />

      <Section title="Technika">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              t: "Mulčovací sekačka",
              d: "Tráva až 1,5 m. Bez nutnosti úklidu, rozsekána na drobné kousky.",
              p: "od 1 Kč / m² bez DPH",
            },
            {
              t: "Křovinořez",
              d: "Pro trávu nad 40 cm a v místech nepřístupných sekačce.",
              p: "od 1 Kč / m² bez DPH",
            },
            {
              t: "Pojezdová sekačka",
              d: "Udržované plochy, obecní trávníky, firemní areály.",
              p: "cena dle plochy",
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

      <Section title="Rákos 2,5 m? Není problém">
        <div className="grid sm:grid-cols-2 gap-4 max-w-4xl">
          {[
            { id: "Q94rG-9MK90", title: "Sekání trávy | GOTYŠ" },
            { id: "tpJorHoJaCc", title: "Sekání trávy, další ukázka | GOTYŠ" },
          ].map((v) => (
            <div key={v.id} className="bg-anthracite">
              <div className="aspect-video">
                <YouTubeEmbed id={v.id} title={v.title} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Kde sekáme pravidelně">
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            "GasNet, 720 regulačních stanic, Morava 1 + Jihlava",
            "COGNOR Stahlhandel, VaK Vyškov",
            "Obec Sokolnice, Senetářov, Drnovice, Bučovice",
            "Moravský rybářský svaz",
          ].map((r) => (
            <li key={r} className="bg-forest/10 p-4 font-display uppercase tracking-wider text-sm">
              — {r}
            </li>
          ))}
        </ul>
      </Section>

      <section className="bg-forest text-white">
        <div className="container-12 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">
              Sekání FVE<br /><span className="text-orange-cta">od 0,60 Kč / m²</span>
            </h2>
            <p className="mt-6 text-white/85 max-w-xl">
              Tráva stíní panely a snižuje výkon. Pravidelné sekání se elektrárně vrátí.
              Cena podle plochy a četnosti.
            </p>
            <a href="tel:+420776155602" className="mt-8 inline-flex bg-orange-cta text-white font-display uppercase tracking-widest px-6 py-4">
              ☎ 776 155 602
            </a>
          </div>
          <div className="p-8 bg-forest-dark">
            <div className="font-display text-sm tracking-widest text-orange-cta">CO ŘEŠÍME</div>
            <ul className="mt-4 space-y-3 text-white/90">
              {[
                "Pravidelný cyklus sekání celé sezóny",
                "Práce mezi řadami panelů bez rizika poškození",
                "Roční kontrakty pro provozovatele FVE",
                "Kombinace mulčování a křovinořezu",
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
