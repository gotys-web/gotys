import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

const services = [
  { to: "/rizikove-kaceni", label: "Rizikové kácení stromů" },
  { to: "/mulcovani-naletu", label: "Mulčování náletů" },
  { to: "/sekani-svahu", label: "Sekání svahů" },
  { to: "/sekani-travy", label: "Sekání trávy" },
] as const;

const primary = [
  { to: "/", label: "Úvod" },
  { to: "/reference", label: "Reference" },
  { to: "/cenik", label: "Ceník" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const svcRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!svcOpen) return;
    const onClick = (e: MouseEvent) => {
      if (svcRef.current && !svcRef.current.contains(e.target as Node)) setSvcOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [svcOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-anthracite/15">
        <div className="container-12 flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="font-display text-2xl md:text-3xl tracking-wider text-forest">
            GOTYŠ
          </Link>

          <nav className="hidden lg:flex items-center gap-6 font-display text-sm">
            <Link to="/" className="uppercase tracking-wider">Úvod</Link>

            <div className="relative" ref={svcRef}>
              <button
                onClick={() => setSvcOpen((v) => !v)}
                className="uppercase tracking-wider inline-flex items-center gap-2"
                aria-expanded={svcOpen}
              >
                Služby <span className="text-xs">▾</span>
              </button>
              {svcOpen && (
                <div className="absolute top-full left-0 mt-2 min-w-[240px] bg-white border border-anthracite/15 shadow-lg">
                  {services.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      onClick={() => setSvcOpen(false)}
                      className="block px-5 py-3 uppercase tracking-wider text-sm border-b border-anthracite/10 last:border-b-0 hover:bg-forest hover:text-white"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/reference" className="uppercase tracking-wider">Reference</Link>
            <Link to="/cenik" className="uppercase tracking-wider">Ceník</Link>
            <Link to="/kontakt" className="uppercase tracking-wider">Kontakt</Link>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+420776155602"
              className="hidden sm:inline-flex items-center gap-2 bg-orange-cta text-white font-display uppercase tracking-wider px-4 py-3 text-sm md:text-base"
            >
              ☎ 776 155 602
            </a>
            <a
              href="tel:+420776155602"
              className="sm:hidden text-anthracite font-display px-2 py-2"
              aria-label="Zavolat"
            >
              ☎
            </a>
            <button
              className="lg:hidden text-anthracite px-2 py-2 font-display text-2xl leading-none"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              aria-expanded={open}
            >
              {open ? "×" : "≡"}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen mobile overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-forest-dark text-white transition-opacity duration-300 overflow-y-auto overscroll-contain ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="min-h-full flex flex-col">
          <div className="h-16 md:h-20 shrink-0" />
          <nav className="flex flex-col items-stretch px-6 py-6">
            <Link to="/" onClick={() => setOpen(false)} className="block text-center py-4 font-display uppercase tracking-[0.2em] text-xl border-b border-white/10">
              Úvod
            </Link>

            <div className="border-b border-white/10 py-4">
              <div className="text-center font-display uppercase tracking-[0.2em] text-xl text-white/60 mb-3">
                Služby
              </div>
              <div className="flex flex-col">
                {services.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    onClick={() => setOpen(false)}
                    className="block text-center py-3 font-display uppercase tracking-wider text-base text-white/90"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>

            {primary.slice(1).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block text-center py-4 font-display uppercase tracking-[0.2em] text-xl border-b border-white/10"
              >
                {l.label}
              </Link>
            ))}

            <a
              href="tel:+420776155602"
              className="mt-8 mb-10 self-center inline-flex items-center gap-2 bg-orange-cta text-white font-display uppercase tracking-wider px-6 py-4 text-lg"
            >
              ☎ 776 155 602
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
