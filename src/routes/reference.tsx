import { createFileRoute } from "@tanstack/react-router";
import { PhotoBlock } from "../components/site/PhotoBlock";
import { Gallery } from "../components/site/Gallery";
import { Section } from "../components/site/Section";
import gasnetLogo from "../assets/gasnet.svg";
import npsumavaLogo from "../assets/npsumava.jpg";
import holzkladeLogo from "../assets/klade-group.png";
import heidelbergLogo from "../assets/heidelberg.png";
import bucoviceLogo from "../assets/bucovice.png";
import sokolniceLogo from "../assets/sokolnice.jpg";
import senetarovLogo from "../assets/senetarov.jpg";
import drnoviceLogo from "../assets/drnovice.png";
import ivanoviceLogo from "../assets/ivanovice.jpg";
import vakLogo from "../assets/vak.png";
import cognorLogo from "../assets/cognor.png";
import rompaLogo from "../assets/rompa.svg";
import mrsLogo from "../assets/mrs.webp";

export const Route = createFileRoute("/reference")({
  head: () => ({
    meta: [
      { title: "Reference: GasNet, NP Šumava, Habsburkové | GOTYŠ" },
      { name: "description", content: "Vybrané realizace: 720 regulačních stanic GasNet, 1 100 stromů v NP Šumava, kácení pro Habsburky v Klagenfurtu." },
      { property: "og:title", content: "Reference | GOTYŠ" },
      { property: "og:url", content: "https://gotys.cz/reference" },
    ],
    links: [{ rel: "canonical", href: "/reference" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "GOTYŠ", item: "https://gotys.cz/" },
            { "@type": "ListItem", position: 2, name: "Reference", item: "https://gotys.cz/reference" },
          ],
        }),
      },
    ],
  }),
  component: References,
});

const references = [
  {
    title: "GasNet",
    logo: gasnetLogo,
    logoAlt: "GasNet",
    photo: "Regulační stanice GasNet",
    gallery: { slug: "gasnet", count: 13 },
    lines: [
      "Kompletní údržba plynovodů a 720 regulačních stanic.",
      "Oblast Morava 1 a Jihlava.",
      "Práce v ostrém provozu kolem kritické infrastruktury.",
    ],
  },
  {
    title: "NP Šumava, Povydří",
    logo: npsumavaLogo,
    logoAlt: "Národní park Šumava",
    photo: "Kácení nad turistickou stezkou",
    gallery: { slug: "np-sumava", count: 5 },
    lines: [
      "1 100 rizikových stromů hrozících pádem na turistické stezky.",
      "Stromy spadené do řeky rozřezány, aby netvořily hráze.",
      "Pařezy tvarovány jako přírodní zlom. Pod dozorem Strážní služby NP.",
    ],
  },
  {
    title: "Klagenfurt · HOLZ-KLADE",
    logo: holzkladeLogo,
    logoAlt: "HOLZ-KLADE",
    photo: "Kácení pro Habsburky, Klagenfurt",
    gallery: { slug: "klagenfurt-habsburk", count: 3 },
    lines: [
      "Klagenfurt: kácení přesílených stromů pro šlechtickou rodinu Habsburků.",
      "HOLZ-KLADE: roční kontrakt na obsluhu lanovky na přibližování dřeva.",
    ],
  },
  {
    title: "VaK Vyškov",
    logo: vakLogo,
    logoAlt: "VAK Vyškov",
    photo: "Areály VaK Vyškov",
    gallery: { slug: "vak-vyskov", count: 4 },
    lines: [
      "Vyškovsko.",
      "Sekání a údržba areálů.",
    ],
  },
  {
    title: "Město Bučovice",
    logo: bucoviceLogo,
    logoAlt: "Znak města Bučovice",
    photo: "Údržba zeleně Bučovice",
    gallery: { slug: "bucovice", count: 4 },
    lines: [
      "Bučovice.",
      "Údržba zeleně.",
    ],
  },
  {
    title: "Obec Sokolnice",
    logo: sokolniceLogo,
    logoAlt: "Znak obce Sokolnice",
    photo: "Sekání trávy Sokolnice",
    gallery: { slug: "sokolnice", count: 5 },
    lines: [
      "Sokolnice.",
      "Sekání trávy.",
    ],
  },
  {
    title: "Obec Senetářov",
    logo: senetarovLogo,
    logoAlt: "Znak obce Senetářov",
    photo: "Sekání trávy Senetářov",
    gallery: { slug: "obec-senetarov", count: 3 },
    lines: [
      "Senetářov.",
      "Sekání trávy.",
    ],
  },
  {
    title: "Obec Drnovice",
    logo: drnoviceLogo,
    logoAlt: "Znak obce Drnovice",
    photo: "Sekání trávy Drnovice",
    gallery: { slug: "obec-drnovice", count: 5 },
    lines: [
      "Drnovice.",
      "Sekání trávy.",
    ],
  },
  {
    title: "VHP Ivanovice",
    logo: ivanoviceLogo,
    logoAlt: "Znak Ivanovic na Hané",
    photo: "Údržba zeleně Ivanovice",
    gallery: { slug: "vhp-ivanovice", count: 4 },
    lines: [
      "Ivanovice na Hané.",
      "Údržba zeleně.",
    ],
  },
  {
    title: "HeidelbergCement Group",
    logo: heidelbergLogo,
    logoAlt: "Heidelberg Materials",
    photo: "Kamenolomy",
    gallery: { slug: "heidelberg", count: 7, video: "hJQX_1dMLII" },
    lines: [
      "Kamenolomy.",
      "Úprava zeleně, odlesnění náročných terénů.",
    ],
  },
  {
    title: "COGNOR Stahlhandel",
    logo: cognorLogo,
    logoAlt: "COGNOR",
    photo: "Areál COGNOR",
    gallery: { slug: "cognor", count: 3 },
    lines: [
      "Sekání a údržba areálu.",
    ],
  },
  {
    title: "Van Leeuwen",
    logo: null,
    photo: "Údržba zeleně Van Leeuwen",
    gallery: { slug: "van-leeuwen", count: 4 },
    lines: [
      "Údržba zeleně.",
    ],
  },
  {
    title: "Rompa",
    logo: rompaLogo,
    logoAlt: "Rompa Group",
    photo: "Areál Rompa Vyškov",
    gallery: { slug: "rompa", count: 3 },
    lines: [
      "Vyškov.",
      "Údržba areálu.",
    ],
  },
  {
    title: "Moravský rybářský svaz",
    logo: mrsLogo,
    logoAlt: "Moravský rybářský svaz",
    photo: "Sekání a údržba MRS",
    gallery: { slug: "mrs", count: 4 },
    lines: [
      "Sekání a údržba.",
    ],
  },
];


function References() {
  return (
    <>
      <section>
        <div className="container-12 py-14 md:py-20">
          <h1 className="font-display text-5xl md:text-7xl leading-[0.9] max-w-4xl">
            Kritická infrastruktura,<br />národní park, zahraničí
          </h1>
        </div>
      </section>

      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {references.map((ref) => (
            <article key={ref.title} className="bg-white flex flex-col">
              {ref.gallery ? (
                <Gallery slug={ref.gallery.slug} count={ref.gallery.count} video={ref.gallery.video} alt={ref.photo} aspect="aspect-[4/3]" />
              ) : (
                <PhotoBlock label={ref.photo} aspect="aspect-[4/3]" />
              )}
              <div className="p-5 md:p-6 flex-1">
                {ref.logo && (
                  <img
                    src={ref.logo}
                    alt={ref.logoAlt || ref.title}
                    className="h-8 md:h-10 w-auto object-contain object-left"
                    loading="lazy"
                  />
                )}
                <h2 className="font-display text-2xl leading-tight mt-4">{ref.title}</h2>
                <ul className="mt-4 space-y-2 text-sm text-anthracite/85">
                  {ref.lines.map((l) => (
                    <li key={l} className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-orange-cta">{l}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

    </>
  );
}
