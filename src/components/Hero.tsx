"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import TerminalHero from './TerminalHero';

const Hero = () => {
  return (
    <section className="pt-28 pb-32 px-6 relative overflow-hidden">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,139,253,0.08),transparent_60%)]" />
      
      <div className="max-w-[800px] mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2.5 border border-drev-border bg-drev-surface/50 px-4 py-1.5 rounded-full text-[12px] font-medium text-drev-text-secondary mb-8 hover:border-drev-border-light transition-colors cursor-pointer group">
            <span className="text-drev-accent group-hover:scale-110 transition-transform">⚡</span>
            <span>Now in public beta — Join the waitlist</span>
            <span className="text-drev-text-muted">→</span>
          </div>
        </motion.div>

        <motion.h1
          className="text-hero-mobile md:text-hero font-bold tracking-tightest leading-[1.08] text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          CI/CD that doesn&apos;t<br />
          <span className="gradient-text">cost a fortune</span>
        </motion.h1>

        <motion.p
          className="text-[17px] md:text-[20px] text-drev-text-secondary max-w-[560px] mx-auto leading-relaxed mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Define pipelines in <code className="text-drev-accent font-mono text-[0.9em]">.drev.yml</code>. Push to GitHub. 
          Watch logs stream live. Starting at <strong className="text-drev-text">$149/month</strong>.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-5"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link 
            href="/pricing" 
            className="btn-primary text-[14px] px-8 py-3.5 w-full sm:w-auto text-center"
          >
            Start free trial
          </Link>
          <Link 
            href="https://github.com/drevci/drev" 
            className="btn-outline text-[14px] px-8 py-3.5 w-full sm:w-auto text-center flex items-center justify-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-drev-text-secondary"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            View on GitHub
          </Link>
        </motion.div>

        <motion.p
          className="text-[11px] text-drev-text-muted font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          No credit card required • MIT open source
        </motion.p>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <TerminalHero />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
