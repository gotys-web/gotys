import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { Gallery } from "../components/site/Gallery";
import { PhotoBlock } from "../components/site/PhotoBlock";
import { YouTubeEmbed } from "../components/site/YouTubeEmbed";

import { Section } from "../components/site/Section";
import { FaqList } from "../components/site/FaqList";

export const Route = createFileRoute("/mulcovani-naletu")({
  head: () => ({
    meta: [
      { title: "Mulčování náletů a čištění pozemků | Vyškov, Brno | GOTYŠ" },
      { name: "description", content: "Zarostlý pozemek vyčistíme mulčovačem bez bagrů, pálení a odvozu odpadu. Vyřezání náletů, likvidace klestí, odlesnění náročných terénů." },
      { property: "og:title", content: "Mulčování náletů a čištění pozemků | GOTYŠ" },
      { property: "og:description", content: "Zarostlý pozemek vyčistíme na jeden průjezd. Bez pálení a odvozu." },
      { property: "og:url", content: "https://theyanki1.github.io/gotys/mulcovani-naletu" },
    ],
    links: [{ rel: "canonical", href: "/mulcovani-naletu" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Mulčování náletů a čištění pozemků",
          name: "Mulčování náletů a čištění pozemků",
          description: "Zarostlý pozemek s nálety vyčistíme mulčovačem bez bagrů, pálení a odvozu odpadu. Dřevní hmota se rozdrtí a zapracuje do půdy.",
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
            { "@type": "ListItem", position: 2, name: "Mulčování náletů a čištění pozemků", item: "https://theyanki1.github.io/gotys/mulcovani-naletu" },
          ],
        }),
      },
    ],
  }),
  component: LesniFreza,
});

const faqs = [
  {
    q: "Jak velké dřeviny fréza zvládne?",
    a: "Fréza si poradí s náletovými dřevinami i většími stromky. Konkrétní limit určíme z fotografií pozemku.",
  },
  {
    q: "Co zůstane po frézování?",
    a: "Dřevní hmota se rozdrtí a zapracuje do půdy. Odpadá pálení i odvoz. Pozemek zůstává upravený a připravený k dalšímu využití.",
  },
  {
    q: "Jak rychle lze pozemek vyčistit?",
    a: "Většinu zarostlých ploch zvládneme na jeden průjezd. Přesný odhad času a ceny vypracujeme z fotografií pozemku.",
  },
];

function LesniFreza() {
  return (
    <>
      <PageHero
        title="Mulčování náletů a čištění pozemků"
        lead="Zarostlý pozemek s nálety vyčistíme mulčovačem bez bagrů, pálení a odvozu odpadu. Dřevní hmota se rozdrtí a zapracuje do půdy."
        photoLabel="Fréza GSD800 v akci na náletech"
        photoSrc={`${import.meta.env.BASE_URL}reference/mulcovani-akce/03.jpg`}
      />

      <Section title="Rozsah prací">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4 text-anthracite/85 leading-relaxed">
            <p>Zarostlý pozemek vyčistíme na jeden průjezd. Bez bagrů, bez pálení, bez odvozu odpadu.</p>
            <p>Dřevní hmota se rozdrtí přímo na místě a zapracuje do půdy.</p>
          </div>
          <div className="bg-forest text-white p-6">
            <div className="font-display text-xs tracking-[0.3em] text-orange-cta">CENA</div>
            <div className="mt-4 font-display text-3xl md:text-4xl">Určíme z fotografií pozemku.</div>
            <p className="mt-4 text-white/80">
              Pošlete fotky ze 2–3 stran. Zaměříme se na hustotu porostu a přístup. Cenu známe do 24 hodin.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Video z praxe">
        <div className="grid sm:grid-cols-2 gap-4 max-w-4xl">
          {[
            { id: "gxm56WmaJxE", title: "Mulčování náletů | GOTYŠ" },
            { id: "L_TNkkOx7hg", title: "Mulčování náletů, další ukázka | GOTYŠ" },
            { id: "hJQX_1dMLII", title: "Odlesnění náročných terénů, Heidelberg | GOTYŠ" },
          ].map((v) => (
            <div key={v.id} className="bg-anthracite">
              <div className="aspect-video">
                <YouTubeEmbed id={v.id} title={v.title} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Galerie">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Gallery slug="mulcovani-akce" count={4} alt="Fréza GSD800 v akci na náletech" aspect="aspect-[16/10]" />
        </div>
      </Section>

      <Section title="Reference">
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { title: "Úprava zeleně, HeidelbergCement Group", gallery: { slug: "heidelberg", count: 7, video: "hJQX_1dMLII" } },
          ].map((p) => (
            <article key={p.title} className="bg-white flex flex-col">
              {p.gallery ? (
                <Gallery slug={p.gallery.slug} count={p.gallery.count} video={p.gallery.video} alt={p.title} aspect="aspect-[4/3]" />
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
              Zarostlý pozemek<br /><span className="text-orange-cta">na jeden průjezd</span>
            </h2>
            <p className="mt-6 text-white/85 max-w-xl">
              Bez bagrů, bez pálení, bez odvozu odpadu. Dřevní hmota se rozdrtí přímo na místě a zapracuje do půdy.
            </p>
            <a href="tel:+420776155602" className="mt-8 inline-flex bg-orange-cta text-white font-display uppercase tracking-widest px-6 py-4">
              ☎ 776 155 602
            </a>
          </div>
          <div className="p-8 bg-forest-dark">
            <div className="font-display text-sm tracking-widest text-orange-cta">CO ŘEŠÍME</div>
            <ul className="mt-4 space-y-3 text-white/90">
              {[
                "Vyřezání náletových dřevin",
                "Likvidace dřevní hmoty a klestí",
                "Chemická likvidace křovin a trávy",
                "Odlesnění náročných terénů",
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
