import { Brain, BrickWall, Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "Clean Logic",
    description:
      "Simple, readable, maintainable solutions.",
  },
  {
    icon: BrickWall,
    title: "Foundations First",
    description:
      "Strong basics before advanced abstractions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Curiosity",
    description:
      "Always learning, always improving.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden glow-border animate-fade-in animation-delay-200 " >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Learning deeply. 
              <span className="font-serif italic font-normal text-foreground">
                {" "}
                Building steadily.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a software engineering student with a strong interest in game development, web technologies, and information systems. 
                I combine academic rigor with real-world experience through my apprenticeship as an ERP Project Assistant.
              </p>
              <p>
                My background covers both technical development and project-oriented thinking: understanding needs, 
                structuring solutions, and delivering something usable. I value clarity over complexity and fundamentals over hype.
              </p>
              <p>
              
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
              My goal is simple: build useful software, improve continuously, and move toward complex systems with confidence.
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          
          <div className="grid sm:grid-cols-2 gap-6   " >
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in   "
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
