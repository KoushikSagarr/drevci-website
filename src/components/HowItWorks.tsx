"use client";

import { motion } from 'framer-motion';

const steps = [
  {
    num: "1",
    title: "Define your pipeline",
    desc: (
      <>Add a <code className="text-drev-accent font-mono text-[0.9em]">.drev.yml</code> file to the root of your repo.</>
    ),
    code: `pipeline:
  jobs:
    test:
      image: golang:1.22
      run: go test ./...
    build:
      image: golang:1.22
      needs: [test]
      run: go build -o dist/app .`,
  },
  {
    num: "2",
    title: "Connect GitHub",
    desc: "Paste your webhook URL from the dashboard into GitHub repo settings. One click, no complex OAuth flow.",
    code: null,
  },
  {
    num: "3",
    title: "Watch it run",
    desc: "Logs stream live in the dashboard. No more manual refreshing to see if your build passed.",
    code: null,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-32 px-6 border-y border-drev-border/30">
      <div className="max-w-[1000px] mx-auto">
        <motion.h2
          className="text-section-mobile md:text-section font-bold text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Up and running in 5 minutes
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 relative">
          {/* Connection line on desktop */}
          <div className="hidden md:block absolute top-5 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-drev-border to-transparent" />
          
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="flex flex-col gap-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="w-10 h-10 rounded-lg bg-drev-surface border border-drev-border flex items-center justify-center font-bold text-drev-accent text-[14px] relative z-10">
                {step.num}
              </div>
              <div>
                <h4 className="text-[18px] font-semibold text-white mb-3">{step.title}</h4>
                <p className="text-[14px] text-drev-text-secondary leading-relaxed mb-6">{step.desc}</p>
                {step.code && (
                  <div className="bg-drev-surface border border-drev-border rounded-lg p-5 font-mono text-[11px] text-drev-text-secondary overflow-x-auto shadow-inner">
                    <pre>{step.code}</pre>
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

export default HowItWorks;
