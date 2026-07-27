import { useState } from "react";
import { Lightbox, type Slide } from "./Lightbox";

interface Props {
  slug: string;
  count: number;
  alt: string;
  video?: string;
  aspect?: string;
  className?: string;
}

export function Gallery({ slug, count, alt, video, aspect = "aspect-[4/3]", className = "" }: Props) {
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState(0);

  const base = import.meta.env.BASE_URL;
  const nums = Array.from({ length: count }, (_, i) => String(i + 1).padStart(2, "0"));

  const slides: Slide[] = [
    ...(video ? [{ type: "video" as const, src: video, thumb: `https://img.youtube.com/vi/${video}/hqdefault.jpg` }] : []),
    ...nums.map((n) => ({
      type: "image" as const,
      src: `${base}reference/${slug}/${n}.jpg`,
      thumb: `${base}reference/${slug}/thumb-${n}.jpg`,
    })),
  ];

  const hasMultiple = slides.length > 1;
  const current = slides[preview];

  const badgeParts = [
    video ? "1 VIDEO" : null,
    count > 0 ? `${count} FOTEK` : null,
  ].filter(Boolean);

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setOpen(true);
        }}
        className={`relative block w-full group overflow-hidden cursor-pointer ${aspect} ${className}`}
      >
        <img
          src={current.thumb}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {current.type === "video" && (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-12 h-12 rounded-full bg-anthracite/60 text-white text-xl flex items-center justify-center">▶</span>
          </span>
        )}
        <span className="absolute inset-0 bg-anthracite/0 group-hover:bg-anthracite/20 transition-colors" />

        {badgeParts.length > 0 && (
          <span className="absolute bottom-2 right-2 bg-anthracite/80 text-white text-xs font-display tracking-wider px-2 py-1">
            {badgeParts.join(" · ")}
          </span>
        )}

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setPreview((i) => (i - 1 + slides.length) % slides.length);
              }}
              aria-label="Předchozí náhled"
              className="opacity-0 group-hover:opacity-100 transition-opacity absolute left-1 top-1/2 -translate-y-1/2 text-white/90 hover:text-white text-2xl w-8 h-8 flex items-center justify-center bg-anthracite/40 hover:bg-anthracite/60"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setPreview((i) => (i + 1) % slides.length);
              }}
              aria-label="Další náhled"
              className="opacity-0 group-hover:opacity-100 transition-opacity absolute right-1 top-1/2 -translate-y-1/2 text-white/90 hover:text-white text-2xl w-8 h-8 flex items-center justify-center bg-anthracite/40 hover:bg-anthracite/60"
            >
              ›
            </button>

            <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute inset-x-0 bottom-0 flex justify-center gap-1 p-2 pt-6 bg-gradient-to-t from-anthracite/85 to-transparent">
              {slides.map((s, i) => (
                <button
                  type="button"
                  key={s.src}
                  onClick={(e) => {
                    e.stopPropagation();
                    setPreview(i);
                  }}
                  aria-label={s.type === "video" ? "Náhled videa" : `Náhled fotky ${i + 1}`}
                  className={`relative w-6 h-6 sm:w-7 sm:h-7 shrink-0 overflow-hidden border transition ${
                    i === preview ? "border-orange-cta" : "border-white/40 opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={s.thumb} alt="" className="w-full h-full object-cover" />
                  {s.type === "video" && (
                    <span className="absolute inset-0 flex items-center justify-center bg-anthracite/30 text-white text-[10px]">▶</span>
                  )}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
      {open && (
        <Lightbox slides={slides} startIndex={preview} alt={alt} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
