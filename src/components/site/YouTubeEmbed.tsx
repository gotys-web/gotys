import { useState } from "react";

interface Props {
  id: string;
  title: string;
}

export function YouTubeEmbed({ id, title }: Props) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${id}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      aria-label={`Přehrát video: ${title}`}
      className="relative w-full h-full group"
    >
      <img
        src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <span className="absolute inset-0 bg-anthracite/25 group-hover:bg-anthracite/10 transition-colors" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-orange-cta/90 group-hover:bg-orange-cta text-white flex items-center justify-center text-xl md:text-2xl transition-colors">
          ▶
        </span>
      </span>
    </button>
  );
}
