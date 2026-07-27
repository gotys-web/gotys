import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ochrana-osobnich-udaju")({
  head: () => ({
    meta: [
      { title: "Ochrana osobních údajů | GOTYŠ" },
      { name: "description", content: "Zásady zpracování osobních údajů GOTYŠ, Petr Gottvald, Vyškov." },
      { property: "og:url", content: "https://theyanki1.github.io/gotys/ochrana-osobnich-udaju" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/ochrana-osobnich-udaju" }],
  }),
  component: Gdpr,
});

function Gdpr() {
  return (
    <section>
      <div className="container-12 py-14 md:py-20 max-w-3xl">
        <h1 className="font-display text-4xl md:text-6xl leading-[0.95]">Ochrana osobních údajů</h1>

        <div className="mt-10 space-y-8 text-anthracite/85 leading-relaxed">
          <div>
            <h2 className="font-display text-xl">1. Správce údajů</h2>
            <p className="mt-2">
              Petr Gottvald, GOTYŠ, IČ 68727224, DIČ CZ7706234690, se sídlem Kpt. Otakara Jaroše 10, 682 01 Vyškov (dále „správce“).
              Kontakt: gotys@seznam.cz, tel. 776 155 602.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl">2. Rozsah zpracovávaných údajů</h2>
            <p className="mt-2">Zpracováváme pouze údaje, které nám sdělíte při komunikaci:</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>jméno a příjmení,</li>
              <li>telefonní číslo,</li>
              <li>e-mailová adresa (pokud ji uvedete),</li>
              <li>obec a popis zakázky,</li>
              <li>fotografie stromu či pozemku, které nám zašlete.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl">3. Účel zpracování</h2>
            <p className="mt-2">Údaje zpracováváme za účelem vyřízení poptávky, přípravy cenové nabídky, uzavření a plnění smlouvy a následné komunikace. Právním základem je plnění smlouvy nebo opatření přijatá před uzavřením smlouvy (čl. 6 odst. 1 písm. b) GDPR), případně oprávněný zájem správce.</p>
          </div>

          <div>
            <h2 className="font-display text-xl">4. Doba uchování</h2>
            <p className="mt-2">Údaje uchováváme po dobu nezbytnou k vyřízení poptávky a dále po dobu vyžadovanou zákonem (zejména účetní a daňové předpisy, zpravidla 10 let).</p>
          </div>

          <div>
            <h2 className="font-display text-xl">5. Předávání údajů</h2>
            <p className="mt-2">Údaje nepředáváme třetím stranám kromě případů vyžadovaných zákonem nebo nezbytných k realizaci zakázky (např. partnerská firma u větších zakázek).</p>
          </div>

          <div>
            <h2 className="font-display text-xl">6. Vaše práva</h2>
            <p className="mt-2">Máte právo na přístup k údajům, jejich opravu, výmaz, omezení zpracování, přenositelnost, právo vznést námitku a podat stížnost u Úřadu pro ochranu osobních údajů (uoou.cz).</p>
          </div>

          <div>
            <h2 className="font-display text-xl">7. Cookies</h2>
            <p className="mt-2">Web nepoužívá analytické ani reklamní cookies. Využívány jsou pouze technicky nezbytné cookies pro chod stránek.</p>
          </div>

          <p className="text-xs text-anthracite/50">Poslední aktualizace: {new Date().toLocaleDateString("cs-CZ")}.</p>
        </div>
      </div>
    </section>
  );
}
