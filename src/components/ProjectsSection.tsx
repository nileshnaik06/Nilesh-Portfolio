import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Naina from "@/assets/Naina.png";
import coachD from "@/assets/Caoch.png";
import nayakarts from "@/assets/nayakarts.png";
import veloura from "@/assets/velora.png";

const projects = [
  {
    title: "Website for influencer",
    subtitle: "Online presence ",
    desc: "Landing page for an AI model influencer",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: Naina,
    link: "https://naina-avtr.vercel.app/",
  },
  {
    title: "Gym Trainer Website",
    subtitle: "Service & Appointments",
    desc: "lead generation and personal brandig website for a fitness trainer",
    tech: ["React", "Tailwind", "Framer"],
    image: coachD,
    link: "https://dcoach.netlify.app/",
  },
  {
    title: "Art gallery",
    subtitle: "Art gallery",
    desc: "Simple art gallery with admin login and product management feature",
    tech: ["MERN Stack", "JWT Auth", "MongoDB"],
    image: nayakarts,
    link: "https://nayak-arts.vercel.app/",
  },
  {
    title: "Product Landing Page",
    subtitle: "Conversion Focused",
    desc: "Modern landing page designed to convert visitors into customers.",
    tech: ["React", "Tailwind", "Animations"],
    image: veloura,
    link: "https://velourabakes.netlify.app/",
  },
];

const ProjectsSection = () => (
  <SectionWrapper id="projects">
    <div className="text-center mb-16">
      <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-3 block">
        Projects
      </span>
      <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
        Recent Work
      </h2>
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="bg-card rounded-3xl overflow-hidden card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 group border border-transparent hover:border-emerald-200/50"
        >
          {/* Browser chrome */}
          <div className="bg-muted px-4 py-2.5 flex items-center gap-2 border-b border-border">
            <div className="w-3 h-3 rounded-full bg-red-400/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
            <div className="w-3 h-3 rounded-full bg-green-400/60" />
            <div className="flex-1 bg-background rounded-md h-5 ml-2" />
          </div>
          <div className="overflow-hidden">
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-52 object-cover cursor-pointer object-center group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div className="p-6">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">
              {p.subtitle}
            </p>
            <h3 className="font-display font-bold text-xl text-foreground mb-2">
              {p.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="bg-emerald-50 text-primary text-xs font-medium px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={p.link}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors"
            >
              Live Demo <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default ProjectsSection;
