"use client";

import { motion } from 'framer-motion';

const ComparisonTable = () => {
  const oldWay = [
    "GitHub Actions bills climb to $2,000+/month with a team of 20",
    "Jenkins needs a dedicated engineer just to stay online",
    "Logs arrive 30 seconds late — after the job is already dead",
    "Jobs sit in shared queue behind everyone else's tests",
  ];

  const drevWay = [
    "Flat pricing from $149/month — scales to 50 engineers without surprises",
    "One binary, running in under 5 minutes",
    "Logs stream live via SSE — character by character, as it happens",
    "Your workers, your queue — no contention, ever",
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          className="max-w-[600px] mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-section-mobile md:text-section font-bold text-white mb-5 leading-tight">CI/CD shouldn&apos;t be your bottleneck</h2>
          <p className="text-[16px] text-drev-text-secondary leading-relaxed">
            Modern CI tools were built for a world where minutes didn&apos;t matter. 
            We built Drev for a world where milliseconds do.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left: The Old Way */}
          <motion.div
            className="bg-drev-bg border border-drev-border rounded-2xl p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-[11px] uppercase text-drev-text-secondary tracking-widest font-bold mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-drev-danger/60"></span> THE OLD WAY
            </h3>
            <div className="space-y-5">
              {oldWay.map((text, i) => (
                <motion.div 
                  key={i} 
                  className="flex gap-4 items-start group"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <span className="text-drev-danger/70 font-bold mt-0.5 group-hover:text-drev-danger transition-colors text-[14px]">✗</span>
                  <p className="text-[14px] text-drev-text-secondary leading-snug group-hover:text-drev-text transition-colors">{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Drev CI */}
          <motion.div
            className="bg-drev-surface/30 border border-drev-accent/20 rounded-2xl p-8 relative overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(56,139,253,0.05),transparent_60%)]" />
            <div className="relative z-10">
              <h3 className="text-[11px] uppercase text-drev-accent tracking-widest font-bold mb-8 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-drev-accent animate-pulse"></span> DREV CI
              </h3>
              <div className="space-y-5">
                {drevWay.map((text, i) => (
                  <motion.div 
                    key={i} 
                    className="flex gap-4 items-start group"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <span className="text-drev-success font-bold mt-0.5 text-[14px]">✓</span>
                    <p className="text-[14px] text-drev-text leading-snug group-hover:text-white transition-colors">{text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
