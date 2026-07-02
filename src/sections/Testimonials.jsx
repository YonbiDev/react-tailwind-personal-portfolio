import { ChevronLeft, ChevronRight, ExternalLink, Quote } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/components/language";
import { SectionAmbient } from "@/components/SectionAmbient";

const proofPoints = [
  {
    href: "https://korsaweb.vercel.app/",
    logo: "/projects/korsa-logo.png",
    logoClassName: "scale-110",
  },
  {
    href: "https://play.google.com/store/apps/details?id=com.YonbiDev.InAnotherStory&hl=fr",
    logo: "/projects/lost-friends-logo.png",
    logoClassName: "scale-110",
  },
  {
    href: "https://benamara.vercel.app/home",
    logo: "/projects/yonbi-logo.png",
    logoClassName: "scale-125",
  },
  {
    href: "#projects",
    logo: "/projects/novamind-logo.svg",
    logoClassName: "scale-105",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = proofPoints[activeIdx];
  const { t } = useLanguage();
  const [quote, author, role] = t.proof.items[activeIdx];

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % proofPoints.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + proofPoints.length) % proofPoints.length
    );
  };

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <SectionAmbient variant="impact" />
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            {t.proof.eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            {t.proof.title}{" "}
            <span className="font-serif italic font-normal text-foreground">
              {t.proof.accent}
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-6 left-8 flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-border/70 bg-white p-2 shadow-lg shadow-black/15">
                <img
                  src={active.logo}
                  alt={`${author} logo`}
                  className={`h-full w-full object-contain ${active.logoClassName}`}
                />
              </div>

              <blockquote className="mb-8 pt-8 text-xl font-medium leading-relaxed md:text-2xl">
                "{quote}"
              </blockquote>

              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="font-semibold">{author}</div>
                  <div className="text-sm text-muted-foreground">
                    {role}
                  </div>
                </div>
                <a
                  href={active.href}
                  target={active.href.startsWith("http") ? "_blank" : undefined}
                  rel={active.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={`${t.proof.open} ${author}`}
                  className="flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary/90"
                >
                  {t.proof.open}
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
                aria-label={t.proof.previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {proofPoints.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    aria-label={`${t.proof.show} ${idx + 1}`}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                aria-label={t.proof.next}
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
