import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { Lightbulb, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  { icon: Lightbulb, title: "Understanding", desc: "Deep-dive into your idea, goals, and audience." },
  { icon: PenTool, title: "Designing", desc: "Wireframes and UI design tailored to your brand." },
  { icon: Code2, title: "Development", desc: "Clean, tested code with regular progress updates." },
  { icon: Rocket, title: "Launch & Support", desc: "Deploy, optimize, and provide ongoing support." },
];

const ProcessSection = () => (
  <SectionWrapper id="process" className="bg-card">
    <div className="text-center mb-16">
      <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-3 block">
        Process
      </span>
      <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
        How I Work
      </h2>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {steps.map((s, i) => (
        <motion.div
          key={s.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
          className="text-center"
        >
          <div className="relative mx-auto mb-5">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mx-auto">
              <s.icon size={28} className="text-primary" />
            </div>
            <span className="absolute -top-2 -right-2 w-7 h-7 bg-gradient-emerald text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
              {i + 1}
            </span>
          </div>
          <h3 className="font-display font-bold text-lg text-foreground mb-2">
            {s.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {s.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default ProcessSection;
