interface Props {
  label: string;
  className?: string;
  aspect?: string;
}

export function PhotoBlock({ label, className = "", aspect = "aspect-[4/3]" }: Props) {
  return (
    <div
      className={`bg-forest text-white flex items-center justify-center p-6 relative ${aspect} ${className}`}
    >
      <div className="absolute inset-3 border border-white/20" />
      <div className="relative text-center">
        <div className="font-display text-sm md:text-base tracking-wider uppercase text-white/90">
          {label}
        </div>
      </div>
    </div>
  );
}
