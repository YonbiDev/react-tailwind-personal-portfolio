import { Gamepad2, Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/components/language";

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

const footerLinks = [
  { href: "#projects", labelKey: "projects" },
  { href: "#experience", labelKey: "experience" },
  { href: "#contact", labelKey: "contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              FB<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              (c) {currentYear} Fouad Benamara. {t.footer.rights}
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.labelKey ? t.nav[link.labelKey] : link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
