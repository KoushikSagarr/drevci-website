import React from 'react';
import PricingCard from '@/components/PricingCard';

export default function PricingPage() {
  const plans = [
    {
      tier: "Open Source",
      price: "$0",
      desc: "For public repositories and side projects.",
      badge: "Forever free",
      features: ["1 worker", "Unlimited pipelines", "7-day log retention", "Community support", "Self-hosted only"],
      cta: "Download free",
      ctaHref: "https://github.com/KoushikSagarr/drevci",
    },
    {
      tier: "Team",
      price: "$149",
      desc: "Billed annually: $1,500/year (save 15%)",
      badge: "Most popular",
      isPrimary: true,
      features: ["3 concurrent workers", "Unlimited pipelines", "90-day log retention", "Email support", "GitHub + GitLab + Bitbucket", "Slack + Discord notifications", "99.5% uptime SLA"],
      cta: "Start free trial",
      ctaHref: "#",
    },
    {
      tier: "Business",
      price: "$499",
      desc: "Advanced features for growing organizations.",
      features: ["10 concurrent workers", "Unlimited pipelines", "180-day log retention", "Priority support (Slack)", "Secret management", "RBAC", "99.9% uptime SLA"],
      cta: "Start free trial",
      ctaHref: "#",
    },
    {
      tier: "Enterprise",
      price: "Custom",
      desc: "Maximum scale, security, and support.",
      features: ["Unlimited workers", "SSO / SAML", "RBAC + audit logs", "On-premises option", "Dedicated support engineer", "Custom SLA"],
      cta: "Talk to us",
      ctaHref: "#",
    },
  ];

  const faqs = [
    {
      q: "Can I self-host for free?",
      a: "Yes. Drev CI is open core (MIT license). You can host it yourself for free forever for open source projects or personal use with up to 1 concurrent worker."
    },
    {
      q: "How does the per-worker pricing work?",
      a: "Unlike other tools that charge per user, we charge per concurrent worker. A worker is a single execution agent that runs your jobs. If you have 3 workers, you can run 3 pipelines simultaneously."
    },
    {
      q: "Is there a limit on pipelines or logs?",
      a: "We don't limit the number of pipelines you can create. Log retention is limited based on your plan (7 days for Free, 90 days for Team, 180 days for Business)."
    },
    {
      q: "Do you offer an on-premises enterprise version?",
      a: "Yes. Our Enterprise tier includes a dedicated on-premises version with SSO/SAML, audit logs, and premium support."
    },
    {
      q: "What's the 'single binary' all about?",
      a: "Drev CI is compiled into a single static binary. It includes the server, the scheduler, and the dashboard. No complex dependencies or installation steps required."
    }
  ];

  return (
    <div className="bg-drev-bg min-h-screen pt-24 pb-32 px-4">
      <div className="max-w-[1200px] mx-auto text-center mb-24">
        <div className="inline-flex items-center gap-2 border border-drev-border bg-drev-surface/50 px-4 py-1.5 rounded-full text-[12px] mb-8">
          <span className="text-drev-accent">⚡</span>
          <span className="text-drev-text-secondary">Simple pricing</span>
        </div>
        <h1 className="text-[36px] md:text-[56px] font-bold tracking-tightest leading-[1.1] text-white mb-6">
          Pay for what you use.
        </h1>
        <p className="text-[18px] text-drev-text-secondary max-w-[480px] mx-auto leading-[1.7]">
          No per-seat fees. No surprise bills. Flat monthly pricing.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-32">
        {plans.map((plan, i) => (
          <PricingCard
            key={i}
            tier={plan.tier}
            price={plan.price}
            description={plan.desc}
            features={plan.features}
            cta={plan.cta}
            ctaHref={plan.ctaHref}
            isPrimary={plan.isPrimary}
            badge={plan.badge}
            delay={i * 0.08}
          />
        ))}
      </div>

      {/* Comparison table */}
      <div className="max-w-[900px] mx-auto mb-32 overflow-x-auto">
        <h2 className="text-[26px] font-bold text-center mb-12 text-white">Feature comparison</h2>
        <table className="w-full text-[13px]">
          <thead>
            <tr className="border-b border-drev-border">
              <th className="text-left py-4 text-drev-text-secondary font-medium">Feature</th>
              <th className="text-center py-4 text-drev-text-secondary font-medium">Free</th>
              <th className="text-center py-4 text-drev-accent font-semibold">Team</th>
              <th className="text-center py-4 text-drev-text-secondary font-medium">Business</th>
              <th className="text-center py-4 text-drev-text-secondary font-medium">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Workers", "1", "3", "10", "Unlimited"],
              ["Pipelines", "Unlimited", "Unlimited", "Unlimited", "Unlimited"],
              ["Log retention", "7 days", "90 days", "180 days", "Custom"],
              ["GitHub integration", "✓", "✓", "✓", "✓"],
              ["GitLab / Bitbucket", "—", "✓", "✓", "✓"],
              ["Slack / Discord", "—", "✓", "✓", "✓"],
              ["RBAC", "—", "—", "✓", "✓"],
              ["SSO / SAML", "—", "—", "—", "✓"],
              ["Audit logs", "—", "—", "—", "✓"],
              ["Uptime SLA", "—", "99.5%", "99.9%", "Custom"],
              ["Support", "Community", "Email", "Priority", "Dedicated"],
            ].map(([feature, ...tiers], i) => (
              <tr key={i} className="border-b border-drev-border/30 hover:bg-drev-surface/30 transition-colors">
                <td className="py-3.5 text-drev-text">{feature}</td>
                {tiers.map((v, j) => (
                  <td key={j} className={`text-center py-3.5 ${v === '✓' ? 'text-drev-success' : v === '—' ? 'text-drev-text-muted' : 'text-drev-text-secondary'}`}>
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FAQ */}
      <div className="max-w-[720px] mx-auto border-t border-drev-border/50 pt-24">
        <h2 className="text-[30px] font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <details key={i} className="group">
              <summary className="list-none flex justify-between items-center text-[15px] font-medium text-drev-text py-4 border-b border-drev-border/30 cursor-pointer hover:text-white transition-colors">
                {faq.q}
                <span className="text-drev-text-muted group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <div className="py-4 text-[14px] text-drev-text-secondary leading-[1.7]">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
