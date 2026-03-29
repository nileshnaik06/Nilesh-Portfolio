import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Veloura bakes",
    text: "This is exactly what we needed. A website that actually represents our work properly. Now when we send our link to customers, it builds instant trust.",
  },
  {
    name: "Coach D",
    role: "Fitness trainer",
    text: "The website captures my personality and coaching style perfectly. It’s not just a website it’s helping me convert visitors into actual clients.",
  },
  {
    name: "Nayak Arts",
    role: "Art Gallery",
    text: "Finally, a portfolio that does justice to my work. The layout feels elegant and makes my art stand out without distractions.",
  },
];

const TestimonialsSection = () => (
  <SectionWrapper id="testimonials">
    <div className="text-center mb-16">
      <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-3 block">
        Testimonials
      </span>
      <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
        What Clients Say
      </h2>
    </div>
    <div className="grid md:grid-cols-3 gap-6">
      {testimonials.map((t, i) => (
        <motion.div
          key={t.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="bg-card rounded-3xl p-8 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-emerald-200/50"
        >
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, j) => (
              <Star key={j} size={16} className="fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
            "{t.text}"
          </p>
          <div>
            <p className="font-display font-bold text-foreground">{t.name}</p>
            <p className="text-sm text-muted-foreground">{t.role}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default TestimonialsSection;
