"use client";

import Link from 'next/link';
import Hero from '@/components/Hero';
import ComparisonTable from '@/components/ComparisonTable';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import PipelineDemo from '@/components/PipelineDemo';
import Testimonials from '@/components/Testimonials';
import PricingCard from '@/components/PricingCard';
import WaitlistForm from '@/components/WaitlistForm';
import BackToTop from '@/components/BackToTop';
import { motion } from 'framer-motion';

const plans = [
  { 
    tier: "Free", price: "$0", desc: "For side projects", 
    feat: ["1 worker", "Self-hosted", "Community support"], 
    cta: "Download", ctaHref: "https://github.com/KoushikSagarr/drevci",
    badge: "Forever free"
  },
  { 
    tier: "Team", price: "$149", desc: "For scaling teams", 
    feat: ["3 workers", "Slack + Discord", "Email support"], 
    cta: "Start trial", ctaHref: "/pricing", isPrimary: true,
    badge: "Most popular"
  },
  { 
    tier: "Business", price: "$499", desc: "Advanced features", 
    feat: ["10 workers", "RBAC", "Priority support"], 
    cta: "Start trial", ctaHref: "/pricing"
  },
  { 
    tier: "Enterprise", price: "Custom", desc: "Maximum security", 
    feat: ["Unlimited", "SSO/SAML", "Dedicated support"], 
    cta: "Talk to us", ctaHref: "/pricing"
  },
];

const logos = ["Go", "Docker", "Rust", "Node.js", "Python", "GitHub", "Kubernetes", "TypeScript"];

export default function Home() {
  return (
    <div className="bg-drev-bg">
      
      {/* SECTION 1: HERO */}
      <Hero />

      {/* SECTION 2: LOGO BAR - Animated marquee */}
      <section className="py-14 border-y border-drev-border/20 overflow-hidden">
        <p className="text-[11px] text-drev-text-muted text-center mb-8 uppercase tracking-[0.2em] font-bold">Trusted by teams shipping with</p>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-drev-bg to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-drev-bg to-transparent z-10" />
          <div className="flex animate-marquee whitespace-nowrap">
            {[...logos, ...logos].map((name, i) => (
              <span key={i} className="font-bold text-[20px] md:text-[24px] text-drev-text/20 hover:text-drev-text/40 tracking-tightest mx-8 md:mx-12 transition-colors cursor-default select-none">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Glow divider */}
      <div className="section-glow-divider" />

      {/* SECTION 3: COMPARISON */}
      <ComparisonTable />

      <div className="section-glow-divider" />

      {/* SECTION 4: FEATURES */}
      <Features />

      <div className="section-glow-divider" />

      {/* SECTION 5: HOW IT WORKS */}
      <HowItWorks />

      {/* SECTION 6: PIPELINE DEMO */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-section-mobile md:text-section font-bold mb-4">Pipeline Observability</h2>
            <p className="text-drev-text-secondary text-[17px]">Visualize every stage of your deployment process in real-time.</p>
          </motion.div>
          <PipelineDemo />
        </div>
      </section>

      <div className="section-glow-divider" />

      {/* SECTION 7: TESTIMONIALS */}
      <Testimonials />

      <div className="section-glow-divider" />

      {/* SECTION 8: PRICING PREVIEW */}
      <section className="py-32 px-6 bg-drev-surface/10">
        <motion.div
          className="max-w-[1200px] mx-auto mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-section-mobile md:text-section font-bold text-white mb-4">Transparent, predictable pricing</h2>
          <p className="text-drev-text-secondary text-[17px]">No per-seat fees. You pay for execution power, not headcount.</p>
        </motion.div>

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan, i) => (
            <PricingCard
              key={i}
              tier={plan.tier}
              price={plan.price}
              description={plan.desc}
              features={plan.feat}
              cta={plan.cta}
              ctaHref={plan.ctaHref}
              isPrimary={plan.isPrimary}
              badge={plan.badge}
              delay={i * 0.08}
            />
          ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/pricing" className="text-[14px] text-drev-accent hover:text-drev-accent-hover font-medium transition-colors group">
            Compare all plans <motion.span className="inline-block" animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
          </Link>
        </motion.div>
      </section>

      {/* SECTION 9: WAITLIST / CTA */}
      <WaitlistForm />

      {/* Back to top */}
      <BackToTop />

    </div>
  );
}
