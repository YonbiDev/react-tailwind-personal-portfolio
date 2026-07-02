const variants = {
  hero: {
    count: 30,
    seed: 37,
    symbols: ["diamond", "triangle"],
    colors: ["#20B2A6", "#2563eb", "#f5a623"],
  },
  projects: {
    count: 12,
    seed: 31,
    symbols: ["diamond", "zigzag", "yaz"],
    colors: ["#20B2A6", "#7c3aed", "#f5a623"],
  },
  experience: {
    count: 11,
    seed: 43,
    symbols: ["yaz", "diamond", "zigzag"],
    colors: ["#20B2A6", "#0ea5e9", "#f5a623"],
  },
  impact: {
    count: 10,
    seed: 53,
    symbols: ["triangle", "zigzag", "diamond"],
    colors: ["#20B2A6", "#3b82f6", "#f5a623"],
  },
  contact: {
    count: 10,
    seed: 61,
    symbols: ["yaz", "triangle", "diamond"],
    colors: ["#20B2A6", "#14b8a6", "#f5a623"],
  },
};

const buildItems = (variant) => {
  const config = variants[variant] ?? variants.hero;

  return Array.from({ length: config.count }, (_, index) => ({
    id: index,
    left: `${(index * config.seed + 3) % 100}%`,
    top: `${(index * (config.seed + 24) + 5) % 100}%`,
    size: 8 + ((index * 11) % 30),
    delay: `${(index * 0.37) % 5}s`,
    duration: `${14 + ((index * 7) % 19)}s`,
    color: config.colors[index % config.colors.length],
    type:
      variant === "hero"
        ? index % 4 === 0
          ? config.symbols[index % config.symbols.length]
          : "bubble"
        : index % 5 === 0
          ? "bubble"
          : config.symbols[index % config.symbols.length],
  }));
};

export const SectionAmbient = ({ variant = "hero", className = "" }) => {
  const items = buildItems(variant);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden section-ambient section-ambient-${variant} ${className}`}
    >
      {variant !== "hero" && (
        <>
          <span className="section-kabyle-band section-kabyle-band-a" />
          <span className="section-kabyle-band section-kabyle-band-b" />
          <span className="section-kabyle-mark" />
        </>
      )}
      {items.map((item) => (
        <span
          key={`ambient-${item.id}`}
          className={`absolute ${
            item.type === "bubble"
              ? "section-bubble"
              : `section-symbol section-symbol-${item.type}`
          }`}
          style={{
            left: item.left,
            top: item.top,
            width: item.size,
            height: item.size,
            color: item.color,
            animationDelay: item.delay,
            animationDuration: item.duration,
          }}
        />
      ))}
    </div>
  );
};
