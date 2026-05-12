"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

interface PricingCardProps {
  tier: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  isPrimary?: boolean;
  badge?: string;
  delay?: number;
}

const PricingCard = ({ tier, price, description, features, cta, ctaHref, isPrimary, badge, delay = 0 }: PricingCardProps) => {
  return (
    <motion.div
      className={`bg-drev-bg border ${isPrimary ? 'border-drev-accent/50 ring-1 ring-drev-accent/20' : 'border-drev-border'} rounded-2xl p-8 flex flex-col h-full relative overflow-hidden`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
    >
      {isPrimary && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,139,253,0.06),transparent_60%)]" />
      )}
      <div className="relative z-10 flex flex-col h-full">
        {badge && (
          <span className={`absolute top-0 right-0 text-[11px] font-semibold rounded-full px-3 py-1 ${isPrimary ? 'bg-drev-accent/15 text-drev-accent' : 'bg-drev-success/15 text-drev-success'}`}>
            {badge}
          </span>
        )}
        
        <h4 className="text-[11px] uppercase tracking-[0.2em] text-drev-text-secondary font-bold mb-6">{tier}</h4>
        <div className="text-[36px] font-bold text-white mb-2">
          {price} {price !== 'Custom' && <span className="text-[14px] text-drev-text-secondary font-normal">/mo</span>}
        </div>
        <p className="text-[13px] text-drev-text-secondary mb-8">{description}</p>
        
        <div className="border-t border-drev-border/50 my-2 mb-6" />
        
        <ul className="space-y-4 mb-10 flex-1">
          {features.map((f, j) => (
            <li key={j} className="flex items-center gap-3 text-[13px] text-drev-text-secondary">
              <span className="text-drev-success">✓</span> {f}
            </li>
          ))}
        </ul>
        
        <Link
          href={ctaHref}
          className={`w-full py-3 rounded-lg text-[13px] font-semibold text-center transition-all block active:scale-[0.98] ${
            isPrimary 
              ? 'bg-drev-accent text-white hover:bg-drev-accent-hover shadow-lg shadow-drev-accent/20' 
              : 'bg-drev-surface text-drev-text hover:bg-drev-card-hover border border-drev-border'
          }`}
        >
          {cta}
        </Link>
      </div>
    </motion.div>
  );
};

export default PricingCard;
