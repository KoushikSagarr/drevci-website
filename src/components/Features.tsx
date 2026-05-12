"use client";

import { motion } from 'framer-motion';

const features = [
  {
    label: "SSE",
    title: "Real-time log streaming",
    desc: "Stdout and stderr stream live as your job runs. No polling, no refresh. Pure Server-Sent Events architecture.",
    span: 2,
  },
  {
    label: "DOCKER",
    title: "Native isolation",
    desc: "Every pipeline step runs in an isolated container. Use any image. Zero host pollution.",
    span: 1,
  },
  {
    label: "HMAC",
    title: "Verified webhooks",
    desc: "HMAC-verified payloads and configurable branch filters for secure, instant pipeline triggers.",
    span: 1,
  },
  {
    label: "SQLITE",
    title: "Zero external dependencies",
    desc: "SQLite for state management. Flat files for logs. No Postgres or Redis required. It just runs.",
    span: 2,
    extra: true,
  },
  {
    label: "YAML",
    title: "Declarative pipelines",
    desc: "Define your entire CI/CD workflow in a single .drev.yml file. Version-controlled, reviewable, reproducible.",
    span: 1,
  },
  {
    label: "NOTIFY",
    title: "Slack & Discord alerts",
    desc: "Get notified on pipeline success, failure, or any custom event. Built-in webhook integration.",
    span: 1,
  },
];

const Features = () => {
  return (
    <section className="bg-drev-surface/20 py-32 px-6" id="features">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          className="max-w-[600px] mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-section-mobile md:text-section font-bold text-white mb-5">Built for serious engineering teams.</h2>
          <p className="text-drev-text-secondary text-[17px]">Every feature is optimized for a friction-less developer experience.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-4 lg:gap-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className={`${f.span === 2 ? 'md:col-span-2' : ''} bg-drev-bg border border-drev-border rounded-xl p-8 hover:border-drev-border-light transition-all duration-300 group relative overflow-hidden`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-drev-accent/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="text-drev-accent text-[12px] font-bold font-mono mb-8 tracking-wider">{f.label}</div>
                <h4 className="text-[17px] font-semibold text-white mb-3">{f.title}</h4>
                <p className="text-[14px] text-drev-text-secondary leading-relaxed">{f.desc}</p>
                {f.extra && (
                  <div className="mt-6 bg-drev-surface border border-drev-border rounded-lg p-4 font-mono text-[11px] text-drev-text-muted inline-block">
                    $ ls -lh drev<br />
                    -rwxr-xr-x 1 root 14M drev
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
