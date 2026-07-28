import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "../styles.css?url";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";

function NotFoundComponent() {
  return (
    <>
      <Header />
      <div className="container-12 py-24 text-center">
        <div className="font-display text-orange-cta tracking-widest text-sm">404</div>
        <h1 className="mt-4 font-display text-5xl">Stránka nenalezena</h1>
        <p className="mt-4 text-anthracite/80">Zkuste přejít na úvod nebo nás rovnou kontaktujte.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Link to="/" className="bg-orange-cta text-white font-display uppercase tracking-widest px-6 py-4 border-[2px] border-anthracite">Na úvod</Link>
          <a href="tel:+420776155602" className="bg-white text-anthracite font-display uppercase tracking-widest px-6 py-4 border-[2px] border-anthracite">☎ 776 155 602</a>
        </div>
      </div>
      <Footer />
    </>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md text-center border-[3px] border-anthracite p-8">
        <h1 className="font-display text-2xl">Stránka se nenačetla</h1>
        <p className="mt-2 text-anthracite/70">Zkuste to prosím znovu nebo přejděte na úvod.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="bg-orange-cta text-white font-display uppercase tracking-widest px-4 py-3 border-[2px] border-anthracite"
          >Zkusit znovu</button>
          <a href="/" className="bg-white text-anthracite font-display uppercase tracking-widest px-4 py-3 border-[2px] border-anthracite">Na úvod</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "GOTYŠ: Rizikové kácení, mulčování náletů, sekání trávy | Vyškov, Brno" },
      { name: "description", content: "Řemeslná firma s 31 lety praxe. Rizikové kácení stromů, mulčování náletů, sekání trávy. Vyškov, Brno, Jihomoravský kraj. Pojištění 3,5 mil. Kč." },
      { name: "author", content: "Petr Gottvald, GOTYŠ" },
      { property: "og:title", content: "GOTYŠ: Rizikové kácení, mulčování náletů, sekání trávy" },
      { property: "og:description", content: "31 let praxe. Rizikové kácení, mulčování náletů, sekání a mulčování trávy. Jihomoravský kraj." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "GOTYŠ" },
      { property: "og:url", content: "https://gotys.cz/" },
      { property: "og:locale", content: "cs_CZ" },
      { property: "og:image", content: "https://gotys.cz/reference/np-sumava/01.jpg" },
      { property: "og:image:alt", content: "Rizikové kácení stromů, GOTYŠ" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "GOTYŠ: Rizikové kácení, mulčování náletů, sekání trávy" },
      { name: "twitter:description", content: "31 let praxe. Rizikové kácení, mulčování náletů, sekání a mulčování trávy. Jihomoravský kraj." },
      { name: "twitter:image", content: "https://gotys.cz/reference/np-sumava/01.jpg" },
      { name: "theme-color", content: "#1B3B2F" },
      { name: "geo.region", content: "CZ-64" },
      { name: "geo.placename", content: "Vyškov" },
      { name: "geo.position", content: "49.2748607;17.0072287" },
      { name: "ICBM", content: "49.2748607, 17.0072287" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: `${import.meta.env.BASE_URL}favicon.svg`, type: "image/svg+xml" },
      { rel: "icon", href: `${import.meta.env.BASE_URL}favicon.ico`, sizes: "any" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=Manrope:wght@400;500;600;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://gotys.cz/#business",
          name: "GOTYŠ, Petr Gottvald",
          url: "https://gotys.cz/",
          image: "https://gotys.cz/reference/np-sumava/01.jpg",
          telephone: "+420776155602",
          email: "gotys@seznam.cz",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Kpt. Otakara Jaroše 10",
            addressLocality: "Vyškov",
            postalCode: "682 01",
            addressCountry: "CZ",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 49.2748607,
            longitude: 17.0072287,
          },
          areaServed: "Jihomoravský kraj",
          description: "Rizikové kácení stromů, mulčování náletů, sekání trávy. 31 let praxe.",
          founder: {
            "@type": "Person",
            name: "Petr Gottvald",
          },
          makesOffer: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rizikové kácení stromů", url: "https://gotys.cz/rizikove-kaceni" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mulčování náletů a čištění pozemků", url: "https://gotys.cz/mulcovani-naletu" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sekání svahů a těžkého terénu", url: "https://gotys.cz/sekani-svahu" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sekání a mulčování trávy", url: "https://gotys.cz/sekani-travy" } },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="cs">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
