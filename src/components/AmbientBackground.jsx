import { useEffect, useState } from "react";

const ambientItems = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${(index * 29 + 7) % 100}%`,
  top: `${(index * 47 + 11) % 100}%`,
  size: 18 + ((index * 13) % 34),
  delay: `${(index * 0.8) % 7}s`,
  duration: `${16 + ((index * 5) % 18)}s`,
  type: index % 3 === 0 ? "symbol" : "bubble",
  depth: 0.12 + (index % 6) * 0.035,
}));

export const AmbientBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(32,178,166,0.08),transparent_28%),radial-gradient(circle_at_86%_24%,rgba(245,166,35,0.07),transparent_22%),radial-gradient(circle_at_72%_82%,rgba(59,130,246,0.06),transparent_26%)]"
        style={{ transform: `translate3d(0, ${scrollY * -0.03}px, 0)` }}
      />
      {ambientItems.map((item) => (
        <div
          key={item.id}
          className={`absolute ${
            item.type === "symbol" ? "ambient-amazigh" : "ambient-bubble"
          }`}
          style={{
            left: item.left,
            top: item.top,
            width: item.size,
            height: item.size,
            "--scroll-shift": `${scrollY * item.depth}px`,
            animationDelay: item.delay,
            animationDuration: item.duration,
          }}
        />
      ))}
    </div>
  );
};
