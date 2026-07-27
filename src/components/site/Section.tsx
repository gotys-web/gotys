import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  children,
  className = "",
  dark = false,
}: {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <section className={`${dark ? "bg-forest text-white" : ""} ${className}`}>
      <div className="container-12 py-16 md:py-20">
        {eyebrow && (
          <div className="font-display text-xs tracking-[0.3em] text-orange-cta">
            {eyebrow}
          </div>
        )}
        {title && (
          <h2 className={`font-display text-3xl md:text-5xl leading-[0.95] max-w-3xl ${eyebrow ? "mt-3" : ""}`}>
            {title}
          </h2>
        )}
        <div className={title || eyebrow ? "mt-10" : ""}>{children}</div>
      </div>
    </section>
  );
}
