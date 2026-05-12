"use client";

import Link from 'next/link';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import TerminalHero from './TerminalHero';

// Animated counter component
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, target, { duration: 2, ease: "easeOut" });
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return () => { controls.stop(); unsub(); };
  }, [count, rounded, target]);

  return <>{display}{suffix}</>;
}

// Floating particles
function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-drev-accent/30"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}
    </div>
  );
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

const Hero = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setInView(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pt-28 pb-32 px-6 relative overflow-hidden" ref={ref}>
      {/* Animated gradient mesh */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,139,253,0.1),transparent_50%)]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(56,139,253,0.04),transparent_70%)]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(63,185,80,0.03),transparent_70%)]" />
      </div>

      <Particles />
      
      <motion.div
        className="max-w-[800px] mx-auto text-center relative z-10"
        variants={stagger}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={fadeUp}>
          <div className="inline-flex items-center gap-2.5 border border-drev-border bg-drev-surface/50 px-4 py-1.5 rounded-full text-[12px] font-medium text-drev-text-secondary mb-8 hover:border-drev-accent/40 transition-all cursor-pointer group animate-shimmer">
            <motion.span
              className="text-drev-accent"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >⚡</motion.span>
            <span>Now in public beta — Join the waitlist</span>
            <motion.span
              className="text-drev-text-muted"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >→</motion.span>
          </div>
        </motion.div>

        <motion.h1
          className="text-hero-mobile md:text-hero font-bold tracking-tightest leading-[1.08] text-white mb-8"
          variants={fadeUp}
        >
          CI/CD that doesn&apos;t<br />
          <span className="gradient-text">cost a fortune</span>
        </motion.h1>

        <motion.p
          className="text-[17px] md:text-[20px] text-drev-text-secondary max-w-[560px] mx-auto leading-relaxed mb-10"
          variants={fadeUp}
        >
          Define pipelines in <code className="text-drev-accent font-mono text-[0.9em] bg-drev-accent/5 px-1.5 py-0.5 rounded">.drev.yml</code>. Push to GitHub. 
          Watch logs stream live. Starting at <strong className="text-drev-text">$149/month</strong>.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-5"
          variants={fadeUp}
        >
          <Link 
            href="/pricing" 
            className="btn-primary text-[14px] px-8 py-3.5 w-full sm:w-auto text-center group"
          >
            <span className="flex items-center justify-center gap-2">
              Start free trial
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >→</motion.span>
            </span>
          </Link>
          <Link 
            href="https://github.com/KoushikSagarr/drevci" 
            className="btn-outline text-[14px] px-8 py-3.5 w-full sm:w-auto text-center flex items-center justify-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-drev-text-secondary"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            View on GitHub
          </Link>
        </motion.div>

        <motion.p
          className="text-[11px] text-drev-text-muted font-medium mb-6"
          variants={fadeUp}
        >
          No credit card required • MIT open source
        </motion.p>

        {/* Stats row */}
        <motion.div
          className="flex items-center justify-center gap-8 md:gap-12 mb-16"
          variants={fadeUp}
        >
          {[
            { value: 9.1, suffix: "s", label: "Avg pipeline" },
            { value: 70, suffix: "%", label: "Cost savings" },
            { value: 247, suffix: "+", label: "Teams waiting" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-[24px] md:text-[28px] font-bold text-white tracking-tight">
                {inView && <AnimatedCounter target={stat.value} suffix={stat.suffix} />}
              </div>
              <div className="text-[11px] text-drev-text-muted uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <TerminalHero />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
