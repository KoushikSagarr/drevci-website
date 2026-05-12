"use client";

import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "We migrated from GitHub Actions to Drev CI in an afternoon. Our monthly CI bill dropped from $2,400 to $149. The real-time log streaming alone was worth the switch.",
    name: "Sarah Chen",
    role: "Staff Engineer",
    company: "Axiom Labs",
    avatar: "SC",
  },
  {
    quote: "The single binary approach is genius. We went from a 3-hour Jenkins setup to a 5-minute Docker run. No more babysitting infrastructure.",
    name: "Marcus Rivera",
    role: "DevOps Lead",
    company: "Quantum Freight",
    avatar: "MR",
  },
  {
    quote: "Drev CI feels like it was built by engineers who actually use CI every day. The YAML config is clean, logs are instant, and the dashboard is beautiful.",
    name: "Aisha Patel",
    role: "CTO",
    company: "Stackwise",
    avatar: "AP",
  },
];

const Testimonials = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-section-mobile md:text-section font-bold text-white mb-4">Loved by engineering teams</h2>
          <p className="text-drev-text-secondary text-[17px]">Teams shipping production code with Drev CI every day.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-drev-bg border border-drev-border rounded-2xl p-8 hover:border-drev-border-light transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-drev-warning">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              
              <p className="text-[14px] text-drev-text-secondary leading-[1.8] mb-8 group-hover:text-drev-text transition-colors">
                &ldquo;{t.quote}&rdquo;
              </p>
              
              <div className="flex items-center gap-3 pt-6 border-t border-drev-border/50">
                <div className="w-9 h-9 rounded-full bg-drev-surface border border-drev-border flex items-center justify-center text-[11px] font-bold text-drev-accent">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-drev-text">{t.name}</p>
                  <p className="text-[11px] text-drev-text-muted">{t.role} at {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
