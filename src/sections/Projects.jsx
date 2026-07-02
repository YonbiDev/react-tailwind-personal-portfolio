import { useState } from "react";
import {
  ArrowUpRight,
  ExternalLink,
  Eye,
  X,
} from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { useLanguage } from "@/components/language";
import { SectionAmbient } from "@/components/SectionAmbient";

const projects = [
  {
    title: "Korsa",
    subtitle: "Driving school SaaS",
    description:
      "A hosted SaaS-style platform for driving schools, with a polished landing page, multilingual positioning, dark UI, and a product story around planning, AI-assisted reports, and learner tracking.",
    image: "/projects/project2.png",
    imageClassName: "object-cover",
    logo: "/projects/korsa-logo.png",
    logoClassName: "scale-110",
    tags: ["React", "Vercel", "SaaS UI", "Auto-ecole"],
    link: "https://korsaweb.vercel.app/",
    highlights: [
      "Interactive demo with instructor, student and admin roles.",
      "Smart planning, student tracking, AI quiz and objective reports.",
      "Multilingual interface and product-ready SaaS presentation.",
    ],
    screenshots: [
      {
        src: "/projects/project2.png",
        label: "Landing",
      },
      {
        src: "/projects/korsa-demo.png",
        label: "Demo roles",
      },
      {
        src: "/projects/korsa-planning.png",
        label: "Planning",
      },
      {
        src: "/projects/korsa-ai-quiz.png",
        label: "AI quiz",
      },
    ],
  },
  {
    title: "In Another Story: The Lost Friends",
    subtitle: "Published Android game",
    description:
      "A 2D action-platformer on Android. The project highlights Unity gameplay systems, C# scripting, level flow, pixel-art presentation, and the ability to ship a game to a public store.",
    image: "/projects/lost-friends-portal.png",
    imageClassName: "object-cover",
    logo: "/projects/lost-friends-logo.png",
    logoClassName: "scale-[1.18]",
    tags: ["Unity", "C#", "Android", "Game Design"],
    link: "https://play.google.com/store/apps/details?id=com.YonbiDev.InAnotherStory&hl=fr",
    highlights: [
      "Published Android game with real store presence.",
      "Pixel-art platforming, portals, gravity moments and combat encounters.",
      "Built with Unity and C# across gameplay, UI flow and level progression.",
    ],
    screenshots: [
      {
        src: "/projects/lost-friends-portal.png",
        label: "Portal scene",
      },
      {
        src: "/projects/lost-friends-forest.png",
        label: "Forest level",
      },
      {
        src: "/projects/lost-friends-gravity.png",
        label: "Gravity section",
      },
      {
        src: "/projects/lost-friends-combat.png",
        label: "Combat",
      },
    ],
  },
  {
    title: "Game Dev Portfolio",
    subtitle: "Dedicated game showcase",
    description:
      "A dedicated portfolio for game development work, prototypes, visuals, and Unity experiments. It separates the game profile from the software engineering portfolio for a clearer project reading.",
    image: "/projects/project3.png",
    imageClassName: "object-contain bg-white/80 p-2",
    logo: "/projects/yonbi-logo.png",
    logoClassName: "scale-[1.35]",
    tags: ["React", "TypeScript", "Tailwind", "Vercel"],
    link: "https://benamara.vercel.app/home",
  },
  {
    title: "NovaMind RH - Recruitment Platform",
    subtitle: "Spring Boot recruitment product",
    description:
      "An in-progress recruitment platform built with Spring Boot and a Next.js frontend. It covers candidate offers, recruiter dashboards, application pipeline, interviews, and onboarding. Not hosted publicly yet, presented through screenshots only.",
    image: "/projects/project4.png",
    imageClassName: "object-cover",
    logo: "/projects/novamind-logo.svg",
    logoClassName: "scale-105",
    tags: ["Spring Boot", "Next.js", "PostgreSQL", "In Progress"],
    link: "#",
    highlights: [
      "Public offer page, candidate tracking, recruiter dashboard and pipeline.",
      "Onboarding flow with checklist, mentor, progress and document follow-up.",
      "Spring Boot backend connected to a polished Next.js product interface.",
    ],
    screenshots: [
      {
        src: "/projects/project4.png",
        label: "Landing",
      },
      {
        src: "/projects/novamind-careers.png",
        label: "Offers",
      },
      {
        src: "/projects/novamind-dashboard.png",
        label: "Dashboard",
      },
      {
        src: "/projects/novamind-pipeline.png",
        label: "Pipeline",
      },
      {
        src: "/projects/novamind-onboarding.png",
        label: "Onboarding",
      },
      {
        src: "/projects/novamind-candidate.png",
        label: "Candidate",
      },
    ],
  },
];

const ProjectDetailsModal = ({ project, onClose, labels }) => {
  const [activeShot, setActiveShot] = useState(0);
  if (!project) return null;

  const screenshots = project.screenshots ?? [{ src: project.image, label: labels.preview }];
  const currentShot = screenshots[activeShot] ?? screenshots[0];

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center overflow-hidden bg-background/85 p-4 backdrop-blur-xl animate-modal-backdrop">
      <button
        type="button"
        aria-label={labels.close}
        onClick={onClose}
        className="fixed inset-0 cursor-default"
      />

      <div className="relative z-10 max-h-[calc(100vh-2rem)] w-full max-w-6xl overflow-y-auto rounded-2xl border border-primary/30 bg-card shadow-[0_0_80px_rgba(32,178,166,0.18)] animate-modal-panel">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
          <aside className="space-y-6 border-b border-border/60 p-6 lg:border-b-0 lg:border-r">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={project.logo}
                  alt={`${project.title} logo`}
                  className="h-14 w-14 rounded-xl border border-border/70 bg-white object-contain p-2"
                />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-primary">
                    {labels.caseFile}
                  </p>
                  <h3 className="mt-1 text-2xl font-bold">{project.title}</h3>
                </div>
              </div>
              <button
                type="button"
                aria-label={labels.close}
                onClick={onClose}
                className="rounded-full border border-border/70 p-2 text-muted-foreground transition hover:border-primary hover:text-primary"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <p className="text-sm leading-6 text-muted-foreground">
              {project.description}
            </p>

            {project.highlights && (
              <div className="space-y-3">
                {project.highlights.map((item) => (
                  <div key={item} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_14px_var(--color-primary)]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary/90"
              >
                {labels.openLive}
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </aside>

          <div className="space-y-4 p-4 sm:p-6">
            <div className="relative aspect-video overflow-hidden rounded-xl border border-border/60 bg-surface">
              <div className="absolute left-4 top-4 z-10 rounded-full border border-white/20 bg-background/60 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
                {currentShot.label}
              </div>
              <img
                src={currentShot.src}
                alt={`${project.title} - ${currentShot.label}`}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-5">
              {screenshots.map((shot, index) => (
                <button
                  key={shot.src}
                  type="button"
                  onClick={() => setActiveShot(index)}
                  className={`group overflow-hidden rounded-xl border p-1 text-left transition ${
                    index === activeShot
                      ? "border-primary bg-primary/10"
                      : "border-border/70 bg-surface hover:border-primary/50"
                  }`}
                >
                  <img
                    src={shot.src}
                    alt={`${project.title} thumbnail ${shot.label}`}
                    className="aspect-video w-full rounded-lg object-cover"
                  />
                  <span className="mt-2 block truncate px-1 pb-1 text-xs font-medium text-muted-foreground group-hover:text-primary">
                    {shot.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { t } = useLanguage();
  const localizedProjects = projects.map((project, index) => {
    const projectText = t.projects.items[index];

    return {
      ...project,
      ...projectText,
      screenshots: project.screenshots?.map((shot, shotIndex) => ({
        ...shot,
        label: projectText.labels[shotIndex] ?? shot.label,
      })),
    };
  });

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <SectionAmbient variant="projects" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            {t.projects.eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            {t.projects.title}
            <span className="font-serif italic font-normal text-foreground">
              {" "}
              {t.projects.accent}
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            {t.projects.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {localizedProjects.map((project, idx) => (
            <div
              key={project.title}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`h-full w-full transition-transform duration-700 group-hover:scale-105 ${project.imageClassName ?? "object-cover"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent opacity-70" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="rounded-full border border-primary/30 bg-background/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur">
                    {project.subtitle}
                  </span>
                  <div className="flex flex-wrap justify-center gap-3">
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.title}`}
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:bg-primary/90"
                      >
                        {t.projects.live}
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                    {(project.screenshots || project.highlights) && (
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background/60 px-4 py-2 text-sm font-semibold text-foreground backdrop-blur transition hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                      >
                        {t.projects.details}
                        <Eye className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    {project.link !== "#" ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.title}`}
                        className="group/logo flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-border/70 bg-white p-2 shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:border-primary"
                      >
                        <img
                          src={project.logo}
                          alt={`${project.title} logo`}
                          className={`h-full w-full object-contain transition-transform duration-300 ${project.logoClassName}`}
                        />
                      </a>
                    ) : (
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-border/70 bg-white p-2 shadow-lg shadow-black/10">
                        <img
                          src={project.logo}
                          alt={`${project.title} logo`}
                          className={`h-full w-full object-contain ${project.logoClassName}`}
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  {project.link !== "#" && (
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0" />
                  )}
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton href="#contact">
            {t.projects.request}
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>

      <ProjectDetailsModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        labels={t.projects}
      />
    </section>
  );
};
