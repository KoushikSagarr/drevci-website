"use client";

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 nav-blur border-b border-drev-border/50">
      <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 font-mono text-[14px] text-drev-text font-semibold tracking-tight hover:opacity-80 transition-opacity">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-drev-accent">
            <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor"/>
          </svg>
          <span>DREV CI</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 text-[13px] font-medium">
          <Link href="/#features" className="text-drev-text-secondary hover:text-drev-text transition-colors duration-200">Features</Link>
          <Link href="/pricing" className="text-drev-text-secondary hover:text-drev-text transition-colors duration-200">Pricing</Link>
          <Link href="/docs" className="text-drev-text-secondary hover:text-drev-text transition-colors duration-200">Docs</Link>
          <Link href="/blog" className="text-drev-text-secondary hover:text-drev-text transition-colors duration-200">Blog</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="https://github.com/KoushikSagarr/drevci" className="text-drev-text-secondary hover:text-drev-text text-[13px] font-medium transition-colors flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </Link>
          <Link href="/pricing" className="bg-drev-accent text-white text-[12px] font-semibold px-4 py-1.5 rounded-md hover:bg-drev-accent-hover transition-all active:scale-[0.98] shadow-sm shadow-drev-accent/20">
            Get started
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileOpen(!mobileOpen)} 
            className="p-2 text-drev-text-secondary hover:text-drev-text transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
            )}
          </button>
          
          {mobileOpen && (
            <div className="fixed top-14 left-0 w-full bg-drev-bg/95 backdrop-blur-xl border-b border-drev-border flex flex-col p-6 gap-5 shadow-2xl">
              <Link href="/#features" onClick={() => setMobileOpen(false)} className="text-drev-text-secondary text-lg font-medium hover:text-drev-text transition-colors">Features</Link>
              <Link href="/pricing" onClick={() => setMobileOpen(false)} className="text-drev-text-secondary text-lg font-medium hover:text-drev-text transition-colors">Pricing</Link>
              <Link href="/docs" onClick={() => setMobileOpen(false)} className="text-drev-text-secondary text-lg font-medium hover:text-drev-text transition-colors">Docs</Link>
              <Link href="/blog" onClick={() => setMobileOpen(false)} className="text-drev-text-secondary text-lg font-medium hover:text-drev-text transition-colors">Blog</Link>
              <div className="flex flex-col gap-3 pt-6 border-t border-drev-border">
                <Link href="/pricing" className="bg-drev-accent text-center py-3 rounded-md font-semibold text-white hover:bg-drev-accent-hover transition-colors">Get started</Link>
                <Link href="https://github.com/KoushikSagarr/drevci" className="border border-drev-border text-center py-3 rounded-md font-medium text-drev-text-secondary hover:text-drev-text hover:border-drev-border-light transition-colors">GitHub</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
