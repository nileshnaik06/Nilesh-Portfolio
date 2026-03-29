import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { Globe, Rocket, Layers, Monitor } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Lead Generation Websites",
    desc: "Modern websites designed to attract and convert visitors into leads.",
  },
  {
    icon: Rocket,
    title: "Startup MVP Development",
    desc: "Rapid development of minimum viable products for startups.",
  },
  {
    icon: Layers,
    title: "Full Stack Web Applications",
    desc: "Custom MERN applications with scalable backend systems.",
  },
  {
    icon: Monitor,
    title: "Frontend Development",
    desc: "Responsive UI development using modern React frameworks.",
  },
];

const ServicesSection = () => (
  <SectionWrapper id="services" className="bg-card">
    <div className="text-center mb-16">
      <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-3 block">
        Services
      </span>
      <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
        What I Can Build For You
      </h2>
    </div>
    <div className="grid sm:grid-cols-2 gap-6">
      {services.map((s, i) => (
        <motion.div
          key={s.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="bg-background rounded-3xl p-8 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-emerald-200/50"
        >
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center mb-5">
            <s.icon size={24} className="text-primary" />
          </div>
          <h3 className="font-display font-bold text-xl text-foreground mb-3">
            {s.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default ServicesSection;
