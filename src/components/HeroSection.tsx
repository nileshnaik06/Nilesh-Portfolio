import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const HeroSection = () => (
  <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
    {/* Background gradient mesh */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-stone-200/60 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-emerald-50/50 rounded-full blur-2xl animate-float" />
    </div>

    <div className="max-w-4xl mx-auto text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-block bg-emerald-50 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-emerald-200/50">
          MERN Stack Developer
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-foreground mb-6"
      >
        Websites & MVPs That Turn Ideas Into{" "}
        <span className="text-gradient">Real Products</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
      >
        I help businesses and founders build modern web applications, MVPs, and
        lead-generating websites using the MERN stack.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a
          href="#projects"
          className="bg-gradient-emerald text-primary-foreground px-8 py-3.5 rounded-full font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity text-base"
        >
          View Projects <ArrowRight size={18} />
        </a>
        <a
          href={import.meta.env.VITE_WHATSAPP_URI}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-border bg-background text-foreground px-8 py-3.5 rounded-full font-semibold flex items-center gap-2 hover:border-primary/30 transition-colors text-base"
        >
          <MessageCircle size={18} /> Chat on WhatsApp
        </a>
      </motion.div>
    </div>
  </div>
);

export default HeroSection;
