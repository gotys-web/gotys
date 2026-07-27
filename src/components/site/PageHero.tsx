import { Link } from "@tanstack/react-router";
import { PhotoBlock } from "./PhotoBlock";

interface Props {
  eyebrow?: string;
  title: string;
  lead: string;
  photoLabel: string;
  photoSrc?: string;
}

export function PageHero({ eyebrow, title, lead, photoLabel, photoSrc }: Props) {
  return (
    <section>
      <div className="container-12 grid md:grid-cols-2 gap-0 md:gap-10 py-12 md:py-20 items-center">
        <div>
          {eyebrow && (
            <div className="font-display text-xs md:text-sm tracking-[0.3em] text-orange-cta">
              {eyebrow}
            </div>
          )}
          <h1 className={`font-display text-4xl sm:text-5xl md:text-6xl leading-[0.95] ${eyebrow ? "mt-4" : ""}`}>
            {title}
          </h1>
          <p className="mt-6 text-base md:text-lg text-anthracite/80 max-w-xl leading-relaxed">
            {lead}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:+420776155602" className="bg-orange-cta text-white font-display uppercase tracking-widest px-6 py-4">
              ☎ 776 155 602
            </a>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          {photoSrc ? (
            <img
              src={photoSrc}
              alt={photoLabel}
              className="w-full aspect-[4/3] object-cover"
              loading="eager"
              fetchPriority="high"
            />
          ) : (
            <PhotoBlock label={photoLabel} aspect="aspect-[4/3]" />
          )}
        </div>
      </div>
    </section>
  );
}

export { Link };
