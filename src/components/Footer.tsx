import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-drev-bg border-t border-drev-border/50 pt-20 pb-10 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="flex items-center gap-2 font-mono text-[14px] text-drev-text font-bold tracking-tight">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-drev-accent">
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor"/>
            </svg>
            <span>DREV CI</span>
          </Link>
          <p className="text-[13px] text-drev-text-secondary mt-4 leading-relaxed">
            Self-hosted CI/CD for serious engineering teams. 
            Built with Go and performance in mind.
          </p>
        </div>

        {/* Links */}
        <div>
          <h5 className="text-[12px] font-bold text-drev-text mb-6 uppercase tracking-widest">Product</h5>
          <ul className="space-y-4 text-[13px] text-drev-text-secondary">
            <li><Link href="/#features" className="hover:text-drev-text transition-colors">Features</Link></li>
            <li><Link href="/pricing" className="hover:text-drev-text transition-colors">Pricing</Link></li>
            <li><Link href="/docs" className="hover:text-drev-text transition-colors">Documentation</Link></li>
            <li><Link href="/blog" className="hover:text-drev-text transition-colors">Engineering Blog</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="text-[12px] font-bold text-drev-text mb-6 uppercase tracking-widest">Community</h5>
          <ul className="space-y-4 text-[13px] text-drev-text-secondary">
            <li><Link href="https://github.com/KoushikSagarr/drevci" className="hover:text-drev-text transition-colors">GitHub ↗</Link></li>
            <li><Link href="https://discord.gg/drevci" className="hover:text-drev-text transition-colors">Discord ↗</Link></li>
            <li><Link href="https://twitter.com/drevci" className="hover:text-drev-text transition-colors">Twitter ↗</Link></li>
            <li><Link href="/status" className="hover:text-drev-text transition-colors">System Status</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="text-[12px] font-bold text-drev-text mb-6 uppercase tracking-widest">Legal</h5>
          <ul className="space-y-4 text-[13px] text-drev-text-secondary">
            <li><Link href="/privacy" className="hover:text-drev-text transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-drev-text transition-colors">Terms of Service</Link></li>
            <li><Link href="/security" className="hover:text-drev-text transition-colors">Security</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto pt-8 border-t border-drev-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[12px] text-drev-text-muted font-medium tracking-tight">
          MIT License · © 2026 Drev CI. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <span className="text-[11px] text-drev-text-muted font-bold uppercase tracking-widest">Proudly Open Source</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
