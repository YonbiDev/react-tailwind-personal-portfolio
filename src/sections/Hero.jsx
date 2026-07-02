import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Download,
  Gamepad2,
  Github,
  Linkedin,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { useLanguage } from "@/components/language";
import { useTheme } from "@/components/theme";
import { SectionAmbient } from "@/components/SectionAmbient";

const skills = [
  "C#",
  ".NET",
  "ASP.NET Core",
  "SQL Server",
  "Azure",
  "Business Central",
  "Dynamics NAV",
  "API REST",
  "Entity Framework",
  "PowerShell",
  "SharePoint",
  "IIS",
  "Docker",
  "GitHub",
  "React",
  "Next.js",
  "TypeScript",
  "Unity",
  "UML",
];

const socialLinks = [
  { icon: Github, href: "https://github.com/YonbiDev", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/fouad-benamara/",
    label: "LinkedIn",
  },
  {
    icon: Gamepad2,
    href: "https://benamara.vercel.app/home",
    label: "Game dev portfolio",
  },
];

export const Hero = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={`relative flex min-h-screen items-center overflow-hidden ${
        isDark ? "text-white" : "text-[#07131a]"
      }`}
    >
      <div className="absolute inset-0">
        <img
          src={isDark ? "/hero-kabyle-dark.svg" : "/hero-kabyle-light.svg"}
          alt="Kabyle-inspired futuristic background"
          className="h-full w-full object-cover"
        />
        <div
          className={`absolute inset-0 ${
            isDark
              ? "bg-linear-to-r from-[#02060a]/88 via-[#07131a]/58 to-[#08111c]/68"
              : "bg-linear-to-r from-white/92 via-white/72 to-white/48"
          }`}
        />
        <div
          className={`absolute inset-0 ${
            isDark
              ? "bg-linear-to-b from-[#02060a]/10 via-transparent to-background"
              : "bg-linear-to-b from-white/35 via-transparent to-background"
          }`}
        />
      </div>

      <SectionAmbient variant="hero" />

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                {t.hero.badge}
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                {t.hero.titleA}{" "}
                <span className="text-primary glow-text">{t.hero.useful}</span>
                <br />
                {t.hero.titleB}
                <br />
                <span
                  className={`font-serif italic font-normal ${
                    isDark ? "text-slate-100" : "text-[#0f172a]"
                  }`}
                >
                  {t.hero.titleC}
                </span>
              </h1>
              <p
                className={`max-w-lg text-lg animate-fade-in animation-delay-200 ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                {t.hero.intro}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg" href="#projects">
                {t.hero.projects} <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton
                href="/Fouad_Benamara_CV.pdf"
                download="Fouad_Benamara_CV.pdf"
              >
                <Download className="w-5 h-5" />
                {t.hero.cv}
              </AnimatedBorderButton>
            </div>

            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className={`text-sm ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                {t.hero.follow}
              </span>
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.jpg"
                  alt="Fouad Benamara"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />

                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      {t.hero.open}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 animate-fade-in animation-delay-600">
          <p
            className={`mb-6 text-center text-sm ${
              isDark ? "text-slate-300" : "text-slate-700"
            }`}
          >
            {t.hero.tech}
          </p>
          <div className="relative overflow-hidden">
            <div
              className={`absolute bottom-0 left-0 top-0 z-10 w-32 bg-linear-to-r ${
                isDark ? "from-[#05070a]" : "from-white"
              } to-transparent`}
            />
            <div
              className={`absolute bottom-0 right-0 top-0 z-10 w-32 bg-linear-to-l ${
                isDark ? "from-[#05070a]" : "from-white"
              } to-transparent`}
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span
                    className={`text-xl font-semibold transition-colors ${
                      isDark
                        ? "text-slate-400/70 hover:text-slate-100"
                        : "text-slate-500/80 hover:text-slate-900"
                    }`}
                  >
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#projects"
          className={`flex flex-col items-center gap-2 transition-colors hover:text-primary ${
            isDark ? "text-slate-300" : "text-slate-700"
          }`}
        >
          <span className="text-xs uppercase tracking-wider">{t.hero.scroll}</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
