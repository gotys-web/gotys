import { createFileRoute } from "@tanstack/react-router";



export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt: Petr Gottvald, GOTYŠ Vyškov" },
      { name: "description", content: "Petr Gottvald, GOTYŠ, Kpt. Otakara Jaroše 10, 682 01 Vyškov. GSM 776 155 602. E-mail gotys@seznam.cz. IČ 68727224." },
      { property: "og:title", content: "Kontakt | GOTYŠ" },
      { property: "og:url", content: "https://gotys.cz/kontakt" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "GOTYŠ", item: "https://gotys.cz/" },
            { "@type": "ListItem", position: 2, name: "Kontakt", item: "https://gotys.cz/kontakt" },
          ],
        }),
      },
    ],
  }),
  component: Kontakt,
});

function Kontakt() {
  return (
    <>
      <section>
        <div className="container-12 py-14 md:py-20 grid md:grid-cols-2 gap-10">
          <div>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.9]">
              Petr Gottvald<br />GOTYŠ
            </h1>
            <div className="mt-8 pt-6 grid gap-6">
              <div>
                <div className="font-display text-xs tracking-widest text-anthracite/60">TELEFON</div>
                <a href="tel:+420776155602" className="font-display text-3xl md:text-4xl">☎ 776 155 602</a>
              </div>
              <div>
                <div className="font-display text-xs tracking-widest text-anthracite/60">E-MAIL</div>
                <a href="mailto:gotys@seznam.cz" className="font-display text-2xl underline underline-offset-4">gotys@seznam.cz</a>
              </div>
              <div>
                <div className="font-display text-xs tracking-widest text-anthracite/60">ADRESA</div>
                <address className="not-italic font-display text-lg">
                  Kpt. Otakara Jaroše 10<br />682 01 Vyškov
                </address>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="font-display text-xs tracking-widest text-anthracite/60">IČ</div>
                  <div className="font-display text-lg">68727224</div>
                </div>
                <div>
                  <div className="font-display text-xs tracking-widest text-anthracite/60">DIČ</div>
                  <div className="font-display text-lg">CZ7706234690</div>
                </div>
              </div>
              <div>
                <div className="font-display text-xs tracking-widest text-anthracite/60">PŮSOBNOST</div>
                <div className="font-display text-lg">Vyškov, Brno a celá ČR i zahraničí</div>
              </div>
            </div>
          </div>

          <div>
            <div className="overflow-hidden bg-white">
              <iframe
                title="Mapa: Vyškov, Kpt. Otakara Jaroše 10"
                src="https://www.openstreetmap.org/export/embed.html?bbox=16.9872%2C49.2649%2C17.0272%2C49.2849&layer=mapnik&marker=49.2749%2C17.0072"
                className="w-full aspect-[4/3]"
                loading="lazy"
              />
            </div>
            <div className="mt-6 bg-forest text-white p-6">
              <p className="leading-relaxed text-white/90">
                Jsem OSVČ, zakázky realizuji osobně; větší zakázky s osvědčenými partnerskými firmami.
                Používáme kvalitní techniku a bezpečnostní vybavení. Pojištění 3,5 mil. Kč včetně prací ve výškách.
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
