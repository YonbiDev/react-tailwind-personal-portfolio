import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language";
import { useTheme } from "@/components/theme";

const navLinks = [
  { href: "#projects", labelKey: "projects" },
  { href: "#experience", labelKey: "experience" },
  { href: "#testimonials", labelKey: "proof" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled
          ? "glass-strong py-3"
          : `bg-transparent py-5 ${theme === "dark" ? "text-white" : "text-[#07131a]"}`
      }  z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          Fouad BENAMARA<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {t.nav[link.labelKey]}
              </a>
            ))}
          </div>

          <button
            onClick={toggleLanguage}
            className="rounded-full border border-border bg-surface px-3 py-2 text-xs font-semibold text-foreground transition hover:border-primary hover:text-primary"
            aria-label="Toggle language"
          >
            {language === "en" ? "FR" : "EN"}
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full glass hover:bg-surface transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun size={20} className="text-yellow-500 transition-transform duration-300 hover:rotate-12" />
            ) : (
              <Moon size={20} className="text-blue-500 transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <AnimatedBorderButton
            size="sm"
            variant="solid"
            href="#contact"
            className="min-w-32"
          >
            {t.nav.contact}
          </AnimatedBorderButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {t.nav[link.labelKey]}
              </a>
            ))}

            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
              aria-label="Toggle language"
            >
              {language === "en" ? "Francais" : "English"}
            </button>

            {/* Theme Toggle Button Mobile */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 p-2 rounded-full glass hover:bg-surface transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <>
                  <Sun size={20} className="text-yellow-500 transition-transform duration-300 hover:rotate-12" />
                  {t.nav.light}
                </>
              ) : (
                <>
                  <Moon size={20} className="text-blue-500 transition-transform duration-300 hover:-rotate-12" />
                  {t.nav.dark}
                </>
              )}
            </button>

            <AnimatedBorderButton
              href="#contact"
              variant="solid"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full"
            >
              {t.nav.contact}
            </AnimatedBorderButton>
          </div>
        </div>
      )}
    </header>
  );
};
