import SectionWrapper from "./SectionWrapper";
import { Code2, Database, Globe, Cpu, Server, Blocks, Rocket } from "lucide-react";

const skills = [
  { label: "React", icon: Code2 },
  { label: "Node.js", icon: Server },
  { label: "MongoDB", icon: Database },
  { label: "Express", icon: Globe },
  { label: "REST APIs", icon: Blocks },
  { label: "AI Integrations", icon: Cpu },
  { label: "MVP Development", icon: Rocket },
];

const AboutSection = () => (
  <SectionWrapper id="about">
    <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
      <div>
        <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-3 block">
          About Me
        </span>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
          Building digital products that{" "}
          <span className="text-gradient">drive results</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed text-base mb-4">
          I am a MERN stack developer I build modern, scalable, and
          user-friendly web applications. I help businesses create fast
          websites, launch MVPs, and build custom web solutions that generate
          real results.
        </p>
        <p className="text-muted-foreground leading-relaxed text-base">
          With a focus on clean code and user experience, every project is
          crafted to help you grow your business and reach your goals faster.
        </p>
      </div>

      <div className="bg-card rounded-3xl p-8 card-shadow">
        <h3 className="font-display font-bold text-lg text-foreground mb-6">
          Skills & Expertise
        </h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-2 bg-background border border-border rounded-full px-4 py-2 text-sm font-medium text-foreground hover:border-primary/30 transition-colors"
            >
              <s.icon size={16} className="text-accent" />
              {s.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
