import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { Gallery } from "../components/site/Gallery";
import { PhotoBlock } from "../components/site/PhotoBlock";
import { YouTubeEmbed } from "../components/site/YouTubeEmbed";

import { Section } from "../components/site/Section";
import { FaqList } from "../components/site/FaqList";

export const Route = createFileRoute("/rizikove-kaceni")({
  head: () => ({
    meta: [
      { title: "Rizikové kácení stromů Vyškov, Brno | 31 let praxe | GOTYŠ" },
      { name: "description", content: "Rizikové kácení stromů u budov, elektrického vedení a na hřbitovech. Lezecká technika, plošina, jeřáb. Cena od 1 500 Kč/strom." },
      { property: "og:title", content: "Rizikové kácení stromů | GOTYŠ" },
      { property: "og:description", content: "Kácíme stromy, na které si nikdo jiný netroufne. 31 let praxe, pojištění 3,5 mil. Kč." },
      { property: "og:url", content: "https://gotys.cz/rizikove-kaceni" },
    ],
    links: [{ rel: "canonical", href: "/rizikove-kaceni" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Rizikové kácení stromů",
          name: "Rizikové kácení stromů",
          description: "Kácení stromů v blízkosti budov, elektrického vedení, na hřbitovech a všude, kde běžný postup nepřipadá v úvahu. Lezecká technika, plošina, jeřáb.",
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
          offers: {
            "@type": "Offer",
            priceCurrency: "CZK",
            price: "1500",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "1500",
              priceCurrency: "CZK",
              unitText: "strom",
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
            { "@type": "ListItem", position: 1, name: "GOTYŠ", item: "https://gotys.cz/" },
            { "@type": "ListItem", position: 2, name: "Rizikové kácení stromů", item: "https://gotys.cz/rizikove-kaceni" },
          ],
        }),
      },
    ],
  }),
  component: RizikoveKaceni,
});

const faqs = [
  {
    q: "Kdy potřebuji povolení ke kácení?",
    a: "Pro strom s obvodem kmene nad 80 cm ve výšce 130 cm nad zemí je nutné povolení orgánu ochrany přírody (zákon č. 114/1992 Sb.). Ovocné stromy na zahradě lze kácet bez povolení. V havarijním stavu lze kácet kdykoli.",
  },
  {
    q: "Kdy se smí kácet?",
    a: "Standardní kácení probíhá ve vegetačním klidu, tedy od 1. října do 31. března. Při havarijním stavu stromu lze kácet kdykoli po celý rok.",
  },
  {
    q: "Co je rizikové kácení?",
    a: "Kácení stromů v místech, kde běžný postup nepřipadá v úvahu, tedy v blízkosti budov, elektrického vedení, na hřbitovech nebo nad komunikacemi. Používáme lezeckou techniku, plošinu, nebo jeřáb.",
  },
  {
    q: "Odvezete dřevo a větve?",
    a: "Ano, řešíme likvidaci dřevní hmoty a klestí, včetně štěpkování na místě.",
  },
];

function RizikoveKaceni() {
  return (
    <>
      <PageHero
        title="Rizikové kácení stromů"
        lead="Kácíme stromy v blízkosti budov, elektrického vedení, na hřbitovech a všude, kde běžné kácení nepřipadá v úvahu."
        photoLabel="Rizikové kácení, NP Šumava"
        photoSrc={`${import.meta.env.BASE_URL}reference/np-sumava/01.jpg`}
      />

      <Section title="Vždy nejlevnější varianta, která je bezpečná">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-5 text-anthracite/85 leading-relaxed">
            <p>
              Pokud to prostor dovolí, kácíme strom celý, protože je to vždy nejlevnější varianta.
              Kde to nejde, kácíme <strong>z plošiny</strong>, <strong>jeřábem</strong>, nebo
              strom rozebíráme <strong>po částech od koruny lezeckou technikou</strong>.
            </p>
            <p>
              Pracujeme v ostrém provozu kolem kritické infrastruktury i turistických stezek.
              V NP Šumava jsme pokáceli 1 100 rizikových stromů pod dozorem Strážní služby.
            </p>
          </div>
          <div className="bg-forest text-white p-6">
            <div className="font-display text-xs tracking-[0.3em] text-orange-cta">JAK URČÍME CENU</div>
            <ol className="mt-4 space-y-3 font-display text-lg tracking-wide">
              <li><span className="text-orange-cta">01.</span> Vyfoťte strom z několika stran.</li>
              <li><span className="text-orange-cta">02.</span> Zavolejte nebo napište.</li>
              <li><span className="text-orange-cta">03.</span> Do 24 hodin znáte cenu.</li>
            </ol>
            <div className="mt-6 pt-4">
              <div className="font-display text-sm tracking-widest">CENA OD</div>
              <div className="font-display text-4xl text-orange-cta mt-1">1 500 Kč / strom</div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Video z praxe">
        <div className="grid sm:grid-cols-2 gap-4 max-w-4xl">
          {[
            { id: "s2xfKx4GgYs", title: "Rizikové kácení stromů | GOTYŠ" },
            { id: "vV4B7iGcrGo", title: "Rizikové kácení stromů, další ukázka | GOTYŠ" },
          ].map((v) => (
            <div key={v.id} className="bg-anthracite">
              <div className="aspect-video">
                <YouTubeEmbed id={v.id} title={v.title} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Kde už jsme káceli">
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { title: "NP Šumava, 1 100 rizikových stromů, Povydří", gallery: { slug: "np-sumava", count: 5 } },
            { title: "Klagenfurt (AT), Habsburkové, přesílené stromy", gallery: { slug: "klagenfurt-habsburk", count: 3 } },
          ].map((p) => (
            <article key={p.title} className="bg-white flex flex-col">
              {p.gallery ? (
                <Gallery slug={p.gallery.slug} count={p.gallery.count} alt={p.title} aspect="aspect-[4/3]" />
              ) : (
                <PhotoBlock label={p.title} aspect="aspect-[4/3]" />
              )}
              <div className="p-5 md:p-6">
                <h3 className="font-display text-lg leading-tight">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <section className="bg-forest text-white">
        <div className="container-12 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">
              Kácíme stromy,<br /><span className="text-orange-cta">na které si nikdo netroufne</span>
            </h2>
            <p className="mt-6 text-white/85 max-w-xl">
              31 let praxe, pojištění 3,5 mil. Kč. Pracujeme v ostrém provozu kolem kritické infrastruktury i turistických stezek.
            </p>
            <a href="tel:+420776155602" className="mt-8 inline-flex bg-orange-cta text-white font-display uppercase tracking-widest px-6 py-4">
              ☎ 776 155 602
            </a>
          </div>
          <div className="p-8 bg-forest-dark">
            <div className="font-display text-sm tracking-widest text-orange-cta">CO ŘEŠÍME</div>
            <ul className="mt-4 space-y-3 text-white/90">
              {[
                "Kácení vcelku, je-li to nejlevnější a nejbezpečnější varianta",
                "Kácení z plošiny nebo jeřábem",
                "Kácení po částech od koruny lezeckou technikou",
                "Práce kolem kritické infrastruktury i turistických stezek",
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
