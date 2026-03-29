import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { MessageCircle, Mail, Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi! I'm ${form.name}. Phone: ${form.email}. ${form.message}`;
    window.open(
      `${import.meta.env.VITE_WHATSAPP_URI}?text=${encodeURIComponent(text)}`,
      "_blank",
    );
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <SectionWrapper id="contact" className="bg-card">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-3 block">
          Contact
        </span>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
          Let's Build Something Great Together
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Ready to turn your idea into a real product? Get in touch and let's
          discuss your project.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {/* Quick links */}
        <div className="flex flex-col gap-4">
          <a
            href={import.meta.env.VITE_WHATSAPP_URI}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-background rounded-2xl p-5 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-emerald-200/50"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
              <MessageCircle size={22} className="text-primary" />
            </div>
            <div>
              <p className="font-display font-bold text-foreground">
                Chat on WhatsApp
              </p>
              <p className="text-sm text-muted-foreground">
                Quick response, usually within an hour
              </p>
            </div>
          </a>
          <a
            href="mailto:nilesh@example.com"
            className="flex items-center gap-4 bg-background rounded-2xl p-5 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-emerald-200/50"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
              <Mail size={22} className="text-primary" />
            </div>
            <div>
              <p className="font-display font-bold text-foreground">
                Send an Email
              </p>
              <p
                className="text-sm text-muted-foreground cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText("nilesh.naik.dev@gmail.com");
                  alert("Email copied!");
                }}
              >
                nilesh.naik.dev@gmail.com
              </p>
            </div>
          </a>
        </div>

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
          />
          <textarea
            placeholder="Tell me about your project..."
            rows={4}
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all resize-none"
          />
          <button
            type="submit"
            className="bg-gradient-emerald text-primary-foreground px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity text-sm"
          >
            Send Message <Send size={16} />
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
