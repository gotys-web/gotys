import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-anthracite text-white mt-24">
      <div className="container-12 py-16 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-display text-3xl tracking-wider text-white">GOTYŠ</div>
          <p className="mt-3 text-sm text-white/70">Petr Gottvald, OSVČ</p>
          <p className="mt-4 text-sm leading-relaxed">
            Kpt. Otakara Jaroše 10<br />
            682 01 Vyškov
          </p>
          <p className="mt-4 text-sm">IČ 68727224 · DIČ CZ7706234690</p>
        </div>

        <div>
          <div className="font-display text-sm tracking-widest text-orange-cta">KONTAKT</div>
          <a href="tel:+420776155602" className="mt-3 block font-display text-2xl">
            ☎ 776 155 602
          </a>
          <a href="mailto:gotys@seznam.cz" className="mt-2 block text-sm underline underline-offset-4">
            gotys@seznam.cz
          </a>
          <p className="mt-4 text-sm text-white/70">
            Působnost: Vyškov, Brno a celá ČR i zahraničí
          </p>
        </div>

        <div>
          <div className="font-display text-sm tracking-widest text-orange-cta">STRÁNKY</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/rizikove-kaceni">Rizikové kácení stromů</Link></li>
            <li><Link to="/mulcovani-naletu">Mulčování náletů</Link></li>
            <li><Link to="/sekani-svahu">Sekání svahů</Link></li>
            <li><Link to="/sekani-travy">Sekání trávy</Link></li>
            <li><Link to="/reference">Reference</Link></li>
            <li><Link to="/cenik">Ceník</Link></li>
            <li><Link to="/kontakt">Kontakt</Link></li>
            <li><Link to="/ochrana-osobnich-udaju" className="text-white/60">Ochrana osobních údajů</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/20">
        <div className="container-12 py-5 text-xs text-white/50 flex flex-wrap items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} GOTYŠ, Petr Gottvald</span>
          <a
            href="https://viewsells.cz/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition"
          >
            <span className="text-[11px]">Tento web dělal</span>
            <svg width="16" height="16" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <path d="M3.5 6.5 L14 22.5 L24.5 6.5" stroke="#ffffff" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9.5 6.5 L14 13.5 L18.5 6.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
            </svg>
            <span className="text-[11px] font-bold text-white">ViewSells.</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
