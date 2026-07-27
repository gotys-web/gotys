import { createFileRoute, Link } from "@tanstack/react-router";
import { PhotoBlock } from "../components/site/PhotoBlock";
import { Gallery } from "../components/site/Gallery";
import { YouTubeEmbed } from "../components/site/YouTubeEmbed";
import petrPhoto from "../assets/petr-gottvald.jpg";
import heroMulcovani from "../assets/hero-mulcovani.jpg";
import heroSvahy from "../assets/hero-svahy.jpg";
import heroTrava from "../assets/hero-trava.jpg";
import heroKaceni from "../assets/hero-kaceni.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GOTYŠ, Petr Gottvald | Rizikové kácení, mulčování náletů, sekání trávy" },
      { name: "description", content: "31 let praxe. Rizikové kácení stromů, mulčování náletů, sekání trávy. Vyškov, Brno, Jihomoravský kraj." },
      { property: "og:url", content: "https://theyanki1.github.io/gotys/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const banners = [
  { to: "/mulcovani-naletu", title: "mulčování náletů", sub: "Zarostlé pozemky na jeden průjezd.", img: heroMulcovani },
  { to: "/sekani-svahu", title: "sekání svahů", sub: "Profesionální sečení svahů i těžkého terénu.", img: heroSvahy },
  { to: "/sekani-travy", title: "sekání trávy", sub: "Obce, areály, fotovoltaické elektrárny.", img: heroTrava },
  { to: "/rizikove-kaceni", title: "rizikové kácení stromů", sub: "Stromy u budov, vedení a nad stezkami.", img: heroKaceni },
] as const;

function Index() {
  return (
    <>
      {/* FULL-SCREEN HERO */}
      <section className="group/hero relative">
        <div className="flex flex-col md:flex-row w-full h-[calc(100svh-4rem)] md:h-[calc(100vh-5rem)] min-h-[560px]">
          {banners.map((b) => (
            <Link
              key={b.to}
              to={b.to}
              className={[
                "relative block overflow-hidden bg-forest-dark text-white",
                "flex-1 basis-0 min-w-0 transition-[flex-grow,filter] duration-500 ease-out",
                "md:hover:flex-[1.3] md:hover:z-10",
                "md:group-hover/hero:brightness-[0.75]",
                "md:hover:!brightness-100",
              ].join(" ")}
            >
              <img src={b.img} alt={b.title} className="absolute inset-0 w-full h-full object-cover" loading="eager" fetchPriority="high" />
              <div className="absolute inset-0 bg-gradient-to-t from-anthracite/90 via-anthracite/30 to-anthracite/40" />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 md:p-5 lg:p-6 bg-gradient-to-t from-anthracite/95 via-anthracite/40 to-transparent">
                <div className="font-display text-3xl sm:text-4xl md:text-lg lg:text-lg xl:text-lg leading-[0.95] uppercase tracking-wide whitespace-nowrap">
                  {b.title}
                </div>
                <div className="mt-3 text-sm md:text-base text-white/70 max-w-none">
                  {b.sub}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Medailonek */}
      <section>
        <div className="container-12 py-16 md:py-24">
          <h1 className="font-display text-4xl md:text-6xl leading-[0.95] mb-10 md:mb-14">
            Řemeslo,<br />ne marketing
          </h1>
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-5">
              <img
                src={petrPhoto}
                alt="Petr Gottvald, GOTYŠ"
                className="w-full aspect-square object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="md:col-span-7 space-y-5 text-anthracite/85 leading-relaxed text-base md:text-lg max-w-3xl">
              <p>
                Jmenuji se <strong>Petr Gottvald</strong>. Od roku 1995 se věnuji rizikovému kácení stromů,
                údržbě zeleně a práci v terénu, kam se běžná technika nedostane. Začínal jsem u lesa,
                dnes pracuji pro obce, průmyslové areály, národní parky i soukromníky.
              </p>
              <p>
                Kácíme stromy z plošiny, jeřábem i lezeckou technikou po částech od koruny. Vždy volíme
                tu nejlevnější variantu, která je bezpečná. Pod dozorem Strážní služby jsme v NP Šumava
                pokáceli přes 1 100 rizikových stromů, pro <strong>GasNet</strong> udržujeme 720 regulačních stanic,
                v rakouském Klagenfurtu jsme káceli přesílené stromy pro Habsburky.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reference */}
      <section className="bg-anthracite text-white">
        <div className="container-12 py-16 md:py-24">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">Kde jsme pracovali</h2>
            <Link to="/reference" className="font-display text-sm tracking-[0.3em] text-orange-cta">
              VŠECHNY REFERENCE →
            </Link>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "GasNet", line: "720 regulačních stanic, oblast Morava 1 a Jihlava.", photo: "Regulační stanice GasNet", gallery: { slug: "gasnet", count: 13 } },
              { title: "NP Šumava, Povydří", line: "1 100 rizikových stromů nad turistickými stezkami.", photo: "NP Šumava, Povydří", gallery: { slug: "np-sumava", count: 5 } },
              { title: "Klagenfurt · HOLZ-KLADE", line: "Přesílené stromy pro Habsburky, obsluha lanovky.", photo: "Kácení pro Habsburky, Klagenfurt", gallery: { slug: "klagenfurt-habsburk", count: 3 } },
            ].map((r) => (
              <div key={r.title}>
                {r.gallery ? (
                  <Gallery slug={r.gallery.slug} count={r.gallery.count} alt={r.photo} aspect="aspect-[4/3]" />
                ) : (
                  <PhotoBlock label={r.photo} aspect="aspect-[4/3]" />
                )}
                <div className="mt-5 font-display text-2xl md:text-3xl">{r.title}</div>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">{r.line}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Videa */}
      <section>
        <div className="container-12 py-16 md:py-24">
          <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">Práce v terénu</h2>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {[
              { id: "s2xfKx4GgYs", title: "Rizikové kácení | GOTYŠ" },
              { id: "gxm56WmaJxE", title: "Mulčování náletů | GOTYŠ" },
              { id: "Q94rG-9MK90", title: "Sekání trávy | GOTYŠ" },
              { id: "Y_AtpS_BMNs", title: "Sekání svahů | GOTYŠ" },
            ].map((v) => (
              <div key={v.id} className="bg-anthracite">
                <div className="aspect-video">
                  <YouTubeEmbed id={v.id} title={v.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
