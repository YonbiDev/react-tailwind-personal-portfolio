import { useEffect, useRef, useState } from "react";
import { LanguageContext } from "@/components/language";

const getInitialLanguage = () => localStorage.getItem("language") || "en";

const copy = {
  en: {
    nav: {
      projects: "Projects",
      about: "About",
      experience: "Experience",
      proof: "Proof",
      contact: "Contact Me",
      light: "Light Mode",
      dark: "Dark Mode",
    },
    projects: {
      eyebrow: "Featured Work",
      title: "Projects with",
      accent: "proof behind them.",
      intro:
        "A focused selection of shipped, hosted, and in-progress work across web applications, Unity games, and product interfaces.",
      caseFile: "Case File",
      openLive: "Open live project",
      live: "Live",
      details: "Détails",
      preview: "Preview",
      close: "Close project details",
      request: "Download CV / Discuss Projects",
      items: [
        {
          title: "Korsa",
          subtitle: "Driving school SaaS",
          description:
            "A hosted SaaS-style platform for driving schools, with a polished landing page, multilingual positioning, dark UI, and a product story around planning, AI-assisted reports, and learner tracking.",
          highlights: [
            "Interactive demo with instructor, student and admin roles.",
            "Smart planning, student tracking, AI quiz and objective reports.",
            "Multilingual interface and product-ready SaaS presentation.",
          ],
          labels: ["Landing", "Demo roles", "Planning", "AI quiz"],
        },
        {
          title: "In Another Story: The Lost Friends",
          subtitle: "Published Android game",
          description:
            "A 2D action-platformer on Android. The project highlights Unity gameplay systems, C# scripting, level flow, pixel-art presentation, and the ability to ship a game to a public store.",
          highlights: [
            "Published Android game with real store presence.",
            "Pixel-art platforming, portals, gravity moments and combat encounters.",
            "Built with Unity and C# across gameplay, UI flow and level progression.",
          ],
          labels: ["Portal scene", "Forest level", "Gravity section", "Combat"],
        },
        {
          title: "Game Dev Portfolio",
          subtitle: "Dedicated game showcase",
          description:
            "A dedicated web showcase for game projects, prototypes, visuals and playable work. Built as a separate product-style portfolio for a cleaner presentation.",
          highlights: [],
          labels: [],
        },
        {
          title: "NovaMind RH - Recruitment Platform",
          subtitle: "Spring Boot recruitment product",
          description:
            "An in-progress recruitment platform built with Spring Boot and a Next.js frontend. It covers candidate offers, recruiter dashboards, application pipeline, interviews, and onboarding. Not hosted publicly yet, presented through screenshots only.",
          highlights: [
            "Public offer page, candidate tracking, recruiter dashboard and pipeline.",
            "Onboarding flow with checklist, mentor, progress and document follow-up.",
            "Spring Boot backend connected to a polished Next.js product interface.",
          ],
          labels: ["Landing", "Offers", "Dashboard", "Pipeline", "Onboarding", "Candidate"],
        },
      ],
    },
    hero: {
      badge: "Software Developer - Product, Web & Games",
      titleA: "I build",
      useful: "useful",
      titleB: "digital products,",
      titleC: "from idea to polished experience.",
      intro:
        "I am Fouad Benamara, a final-year MIAGE master's student and software developer. I design and build clear, reliable digital experiences across business tools, web interfaces, APIs and interactive projects.",
      projects: "See Projects",
      cv: "Download CV",
      follow: "Follow me:",
      open: "Project portfolio",
      tech: "Software & product stack",
      scroll: "Scroll",
    },
    about: {
      eyebrow: "About Me",
      title: "A developer profile built on",
      accent: "concrete work.",
      p1:
        "I am a software engineering student with a strong interest in web technologies, information systems, and game development. My MIAGE path helps me connect technical execution with product needs, business constraints, and project structure.",
      p2:
        "My work includes a hosted web project, an Android Unity game, a dedicated game-dev portfolio, and NovaMind RH, an in-progress Spring Boot recruitment platform shown through screenshots. I value clarity over complexity and prefer projects that can be explained, tested, and improved.",
      p3:
        "I use this portfolio to present concrete projects, technical choices, shipped products and the way I approach real software problems.",
      quote:
        "My goal is simple: build useful software, keep improving, and turn ideas into products that users can understand quickly.",
      cards: [
        ["Clean Logic", "Readable code, clear flows, and maintainable decisions."],
        ["Strong Foundations", "Solid fundamentals in Java, PHP, databases, and software design."],
        ["Shipping Mindset", "Hosted web apps, Android release, and visible progress."],
        ["Business Context", "MIAGE profile: technical delivery with management awareness."],
      ],
    },
    experience: {
      eyebrow: "Professional Experience",
      title: "Building software across",
      accent: "business systems and interactive products.",
      intro:
        "From enterprise information systems to web applications and Unity games, each step strengthened my ability to connect technical delivery with real user needs.",
      items: [
        [
          "Since September 2024",
          "ERP Project Assistant Apprentice / C# Developer",
          "Groupe Lingenheld - Strasbourg",
          "Contributing to the Microsoft Dynamics NAV to Business Central migration: process analysis, testing, data consistency checks, deployment support, C# internal tools, APIs, DLL integration, documentation and user support.",
        ],
        [
          "2024 - 2026",
          "Master MIAGE Student",
          "Universite de Haute-Alsace",
          "Building a hybrid software engineering and information systems profile across development, databases, project management, business analysis and management-oriented IT.",
        ],
        [
          "May 2023 - August 2023",
          "ASP.NET Web Developer Intern",
          "Roval Cosmetique - Flers",
          "Developed an ASP.NET C# web application for business data entry, tracking and traceability, with SQL Server data structure, Azure migration preparation, cloud deployment and Crystal Reports usage.",
        ],
        [
          "January 2021 - August 2023",
          "Unity Game Developer",
          "Freelance / Auto-entrepreneur",
          "Created Unity/C# mobile games, integrated Google Ads, in-app purchases and external APIs, managed testing, optimization, production builds and publication through Google Play Console.",
        ],
      ],
    },
    proof: {
      eyebrow: "Project Impact",
      title: "What the projects",
      accent: "show in practice.",
      previous: "Previous proof point",
      next: "Next proof point",
      show: "Show proof point",
      open: "Open",
      items: [
        [
          "Korsa started from a simple idea: make communication between driving instructors and students easier. The name comes from the road and driving universe, and the product became a SaaS-style interface with planning, reports, roles and a live demo.",
          "Korsa",
          "Driving school SaaS",
        ],
        [
          "The Lost Friends is special to me because it was my very first serious project. I published it on Google Play, it reached more than 2,000 players and received 250+ ratings. It is still one of the projects I am most proud of.",
          "The Lost Friends",
          "Published Unity game",
        ],
        [
          "The game-dev portfolio keeps my Unity work visible without mixing it with enterprise software projects. It gives a quick way to see the visual and gameplay side of my work.",
          "Game Dev Portfolio",
          "Game showcase",
        ],
        [
          "NovaMind RH came from a real business observation: many recruiters still handle candidates with scattered emails, files and spreadsheets. I designed it as a clearer way to publish offers, follow candidates, manage the pipeline and prepare onboarding.",
          "NovaMind RH",
          "Recruitment platform",
        ],
      ],
    },
    contact: {
      eyebrow: "Get In Touch",
      title: "Let us talk about",
      accent: "a technical topic.",
      intro:
        "For a project discussion, technical exchange, portfolio question or CV request, send a message and I will get back to you with the right details.",
      name: "Name",
      namePlaceholder: "Your name...",
      email: "Email",
      message: "Message",
      messagePlaceholder: "Your message...",
      sending: "Sending...",
      send: "Send Message",
      success: "Message sent successfully! I'll get back to you soon.",
      mailtoSuccess: "Your email app has been opened with a pre-filled message.",
      error: "Failed to send message. Please try again later.",
      missingEmailJs:
        "EmailJS configuration is missing. Please check your environment variables.",
      infoTitle: "Contact Information",
      available: "Direct contact",
      status: "Status",
      statusValue: "Portfolio and project discussions",
      location: "Location",
      currently: "Professional contact",
      availableText:
        "This portfolio presents my software projects, Microsoft/.NET stack, Unity work and product-oriented approach. I am available for serious technical discussions and professional contact.",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  fr: {
    nav: {
      projects: "Projets",
      about: "Profil",
      experience: "Parcours",
      proof: "Preuves",
      contact: "Me contacter",
      light: "Mode clair",
      dark: "Mode sombre",
    },
    projects: {
      eyebrow: "Projets sélectionnés",
      title: "Des projets avec",
      accent: "des preuves concrètes.",
      intro:
        "Une sélection ciblée de projets livrés, hébergés ou en cours : solutions métier, interfaces produit et jeux Unity.",
      caseFile: "Dossier projet",
      openLive: "Ouvrir le projet",
      live: "Live",
      details: "Détails",
      preview: "Aperçu",
      close: "Fermer les détails du projet",
      request: "Télécharger le CV / Discuter projets",
      items: [
        {
          title: "Korsa",
          subtitle: "SaaS pour auto-écoles",
          description:
            "Une plateforme SaaS hébergée pour auto-écoles, avec landing page soignée, positionnement multilingue, interface dark et présentation produit autour du planning, des rapports assistés par IA et du suivi élève.",
          highlights: [
            "Démo interactive avec rôles moniteur, élève et administrateur.",
            "Planning intelligent, suivi élèves, quiz IA et rapports objectifs.",
            "Interface multilingue et présentation SaaS claire pour une lecture produit.",
          ],
          labels: ["Landing", "Démo rôles", "Planning", "Quiz IA"],
        },
        {
          title: "In Another Story: The Lost Friends",
          subtitle: "Jeu Android publié",
          description:
            "Un action-platformer 2D sur Android. Le projet montre des systèmes gameplay Unity, du scripting C#, du level flow, une présentation pixel-art et la capacité à publier un jeu sur un store public.",
          highlights: [
            "Jeu Android publié avec vraie présence store.",
            "Platforming pixel-art, portails, gravité et combats.",
            "Réalisé avec Unity et C# sur gameplay, UI et progression de niveaux.",
          ],
          labels: ["Portail", "Forêt", "Gravité", "Combat"],
        },
        {
          title: "Game Dev Portfolio",
          subtitle: "Showcase dédié au jeu",
          description:
            "Un showcase web dédié aux projets jeux, prototypes, visuels et expériences jouables. Il présente la partie game dev comme un produit séparé, avec une lecture plus claire.",
          highlights: [],
          labels: [],
        },
        {
          title: "NovaMind RH - Plateforme de recrutement",
          subtitle: "Produit recrutement Spring Boot",
          description:
            "Une plateforme de recrutement en cours réalisée avec Spring Boot et une interface Next.js. Elle couvre les offres candidat, dashboards recruteur, pipeline de candidatures, entretiens et onboarding. Non hébergée publiquement, présentée par captures.",
          highlights: [
            "Page d'offres publique, suivi candidat, dashboard recruteur et pipeline.",
            "Onboarding avec checklist, mentor, progression et suivi documents.",
            "Backend Spring Boot connecté à une interface produit Next.js soignée.",
          ],
          labels: ["Landing", "Offres", "Dashboard", "Pipeline", "Onboarding", "Candidat"],
        },
      ],
    },
    hero: {
      badge: "Développeur logiciel - Produit, Web & Jeux",
      titleA: "Je crée des",
      useful: "expériences",
      titleB: "digitales utiles,",
      titleC: "de l'idée au produit soigné.",
      intro:
        "Je suis Fouad Benamara, étudiant en fin de Master MIAGE et développeur logiciel. Je conçois et développe des expériences digitales claires et fiables : outils métier, interfaces web, APIs et projets interactifs.",
      projects: "Voir les projets",
      cv: "Télécharger le CV",
      follow: "Me suivre :",
      open: "Portfolio projets",
      tech: "Stack logiciel & produit",
      scroll: "Défiler",
    },
    about: {
      eyebrow: "À propos",
      title: "Un profil développeur construit sur du",
      accent: "travail concret.",
      p1:
        "Je suis étudiant en génie logiciel avec un fort intérêt pour les systèmes d'information, les environnements Microsoft, les solutions métier et le développement de jeux. Mon parcours MIAGE me permet de relier exécution technique, besoins produit, contraintes métier et structure projet.",
      p2:
        "Mes projets incluent Korsa, une solution SaaS pour auto-écoles, un jeu Unity publié sur Android, un portfolio dédié au game dev, et NovaMind RH, une plateforme de recrutement Spring Boot en cours présentée avec des captures. Je privilégie la clarté plutôt que la complexité.",
      p3:
        "J'utilise ce portfolio pour présenter des projets concrets, des choix techniques, des produits publiés et ma façon d'aborder des problématiques logicielles réelles.",
      quote:
        "Mon objectif est simple : construire des logiciels utiles, progresser en continu, et transformer les idées en produits que les utilisateurs comprennent rapidement.",
      cards: [
        ["Logique claire", "Code lisible, flux simples et décisions maintenables."],
        ["Bases solides", "Fondamentaux en Java, PHP, bases de données et conception logicielle."],
        ["Culture de livraison", "Solutions hébergées, publication Android et progression visible."],
        ["Contexte métier", "Profil MIAGE : exécution technique avec vision management."],
      ],
    },
    experience: {
      eyebrow: "Expérience professionnelle",
      title: "Construire des solutions entre",
      accent: "systèmes métier et produits interactifs.",
      intro:
        "De l'informatique d'entreprise aux solutions logicielles et aux jeux Unity, chaque expérience renforce ma capacité à relier besoin utilisateur, logique métier et livraison technique.",
      items: [
        [
          "Depuis septembre 2024",
          "Apprenti Assistant chef de projet ERP / Développeur C#",
          "Groupe Lingenheld - Strasbourg",
          "Participation à la migration Microsoft Dynamics NAV vers Business Central : analyse des processus, tests, contrôle de cohérence, support au déploiement, outils internes C#, intégration APIs/DLL, documentation et support utilisateurs.",
        ],
        [
          "2024 - 2026",
          "Étudiant Master MIAGE",
          "Université de Haute-Alsace",
          "Construction d'un profil hybride entre génie logiciel, systèmes d'information, bases de données, gestion de projet, analyse métier et management appliqué à l'informatique.",
        ],
        [
          "Mai 2023 - août 2023",
          "Stage Développeur ASP.NET",
          "Roval Cosmétique - Flers",
          "Développement d'une solution ASP.NET C# pour la saisie, le suivi et la traçabilité de données métier, avec SQL Server, préparation migration Azure, déploiement cloud et Crystal Reports.",
        ],
        [
          "Janvier 2021 - août 2023",
          "Développeur Jeux Vidéo Unity",
          "Freelance / Auto-entrepreneur",
          "Création de jeux mobiles Unity/C#, intégration Google Ads, achats intégrés et APIs externes, tests, optimisation, builds de production et publication via Google Play Console.",
        ],
      ],
    },
    proof: {
      eyebrow: "Impact des projets",
      title: "Ce que les projets",
      accent: "racontent vraiment.",
      previous: "Preuve précédente",
      next: "Preuve suivante",
      show: "Afficher la preuve",
      open: "Ouvrir",
      items: [
        [
          "Korsa vient de l'univers de la route et de la conduite. L'idée était de simplifier le lien entre élèves, moniteurs et auto-écoles : planning, suivi, rapports et démo par rôle dans une interface claire.",
          "Korsa",
          "SaaS pour auto-écoles",
        ],
        [
          "The Lost Friends est mon tout premier vrai projet. Je l'ai publié sur Google Play, il a dépassé 2 000 joueurs et reçu plus de 250 avis. C'est un projet dont je suis encore fier, parce qu'il m'a appris toute la boucle : gameplay, build, publication et retours utilisateurs.",
          "The Lost Friends",
          "Jeu Unity publié",
        ],
        [
          "J'ai créé ce portfolio séparé pour que mes projets Unity ne soient pas noyés dans mon profil logiciel. Il montre mon côté créatif : prototypes, visuels, gameplay et univers de jeu.",
          "Game Dev Portfolio",
          "Showcase jeu",
        ],
        [
          "NovaMind part d'un constat simple : beaucoup de recruteurs gèrent encore les candidats avec des mails, fichiers et tableaux dispersés. J'ai imaginé une plateforme pour centraliser les offres, suivre les candidatures, organiser le pipeline et préparer l'onboarding.",
          "NovaMind RH",
          "Plateforme recrutement",
        ],
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Parlons de",
      accent: "technique et projets.",
      intro:
        "Pour une discussion projet, un échange technique, une question sur le portfolio ou une demande de CV, envoyez un message et je reviendrai vers vous avec les bonnes informations.",
      name: "Nom",
      namePlaceholder: "Votre nom...",
      email: "Email",
      message: "Message",
      messagePlaceholder: "Votre message...",
      sending: "Envoi...",
      send: "Envoyer",
      success: "Message envoyé avec succès. Je reviens vers vous rapidement.",
      mailtoSuccess: "Votre application email s'est ouverte avec un message prérempli.",
      error: "L'envoi a échoué. Veuillez réessayer plus tard.",
      missingEmailJs:
        "La configuration EmailJS est manquante. Vérifiez les variables d'environnement.",
      infoTitle: "Informations de contact",
      available: "Contact direct",
      status: "Statut",
      statusValue: "Portfolio et discussions projet",
      location: "Localisation",
      currently: "Contact professionnel",
      availableText:
        "Ce portfolio présente mes projets logiciels, ma stack Microsoft/.NET, mon travail Unity et mon approche produit. Je reste joignable pour des échanges techniques sérieux et des contacts professionnels.",
    },
    footer: {
      rights: "Tous droits réservés.",
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getInitialLanguage);
  const [languageSplash, setLanguageSplash] = useState(null);
  const splashTimers = useRef([]);

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem("language", language);
  }, [language]);

  useEffect(
    () => () => {
      splashTimers.current.forEach(clearTimeout);
    },
    []
  );

  const toggleLanguage = () => {
    const nextLanguage = language === "en" ? "fr" : "en";

    splashTimers.current.forEach(clearTimeout);
    setLanguageSplash(nextLanguage);

    splashTimers.current = [
      setTimeout(() => {
        setLanguage(nextLanguage);
      }, 320),
      setTimeout(() => {
        setLanguageSplash(null);
      }, 1000),
    ];
  };

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, t: copy[language] }}
    >
      {children}
      {languageSplash && (
        <div className="language-splash" role="status" aria-live="polite">
          <div className="language-splash-orbit" />
          <div className="language-splash-card">
            <span className="language-splash-kabyle" />
            <span className="language-splash-label">
              {languageSplash === "fr" ? "FR" : "EN"}
            </span>
            <span className="language-splash-text">
              {languageSplash === "fr" ? "Version française" : "English version"}
            </span>
          </div>
        </div>
      )}
    </LanguageContext.Provider>
  );
};
