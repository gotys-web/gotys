import { useEffect, useState } from "react";

export type Slide =
  | { type: "image"; src: string; thumb: string }
  | { type: "video"; src: string; thumb: string };

interface Props {
  slides: Slide[];
  startIndex: number;
  alt: string;
  onClose: () => void;
}

export function Lightbox({ slides, startIndex, alt, onClose }: Props) {
  const [index, setIndex] = useState(startIndex);
  const hasMultiple = slides.length > 1;
  const slide = slides[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + slides.length) % slides.length);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % slides.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [slides.length, onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-anthracite/95 flex flex-col" onClick={onClose}>
      <button
        type="button"
        onClick={onClose}
        aria-label="Zavřít"
        className="absolute top-4 right-4 md:top-6 md:right-6 z-10 text-white/80 hover:text-white text-3xl leading-none w-11 h-11 flex items-center justify-center"
      >
        ✕
      </button>

      <div
        className="flex-1 min-h-0 flex items-center justify-center px-4 md:px-20 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {hasMultiple && (
          <button
            type="button"
            onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
            aria-label="Předchozí"
            className="absolute left-1 md:left-6 text-white/70 hover:text-white text-4xl md:text-5xl w-12 h-12 flex items-center justify-center z-10"
          >
            ‹
          </button>
        )}

        {slide.type === "video" ? (
          <div className="w-full max-w-4xl aspect-video">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${slide.src}`}
              title={`${alt} ${index + 1} / ${slides.length}`}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <a
            href={slide.src}
            target="_blank"
            rel="noopener noreferrer"
            className="max-h-[65vh] md:max-h-[75vh] max-w-full cursor-zoom-in"
            title="Otevřít fotku v plné velikosti"
          >
            <img
              src={slide.src}
              alt={`${alt} ${index + 1} / ${slides.length}`}
              className="max-h-[65vh] md:max-h-[75vh] max-w-full object-contain"
            />
          </a>
        )}

        {hasMultiple && (
          <button
            type="button"
            onClick={() => setIndex((i) => (i + 1) % slides.length)}
            aria-label="Další"
            className="absolute right-1 md:right-6 text-white/70 hover:text-white text-4xl md:text-5xl w-12 h-12 flex items-center justify-center z-10"
          >
            ›
          </button>
        )}
      </div>

      <div className="pb-2 text-center text-white/50 text-xs font-display tracking-wider">
        {index + 1} / {slides.length} · {slide.type === "video" ? "VIDEO" : "KLIKNUTÍM NA FOTKU ZVĚTŠÍTE"}
      </div>

      {hasMultiple && (
        <div className="pb-6 md:pb-8 pt-3 flex justify-center" onClick={(e) => e.stopPropagation()}>
          <div className="flex gap-2 px-4 overflow-x-auto max-w-full">
            {slides.map((s, i) => (
              <button
                type="button"
                key={s.src}
                onClick={() => setIndex(i)}
                aria-label={s.type === "video" ? "Video" : `Fotka ${i + 1}`}
                className={`relative shrink-0 w-14 h-14 md:w-16 md:h-16 overflow-hidden border-2 transition ${
                  i === index ? "border-orange-cta" : "border-white/20 opacity-60 hover:opacity-100"
                }`}
              >
                <img src={s.thumb} alt="" className="w-full h-full object-cover" />
                {s.type === "video" && (
                  <span className="absolute inset-0 flex items-center justify-center bg-anthracite/30 text-white text-lg">▶</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
