"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [waitlistCount, setWaitlistCount] = useState(247);

  useEffect(() => {
    const savedCount = localStorage.getItem('drev_waitlist_count');
    if (savedCount) {
      setWaitlistCount(parseInt(savedCount));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setWaitlistCount(data.count);
        localStorage.setItem('drev_waitlist_count', data.count.toString());
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="py-40 px-6 border-t border-drev-border/30 bg-drev-surface/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,139,253,0.05),transparent_70%)]" />
      
      <div className="max-w-[540px] mx-auto text-center relative z-10">
        <motion.h2
          className="text-[36px] md:text-[48px] font-bold text-white tracking-tightest leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Built for engineers<br />by engineers.
        </motion.h2>
        
        <motion.p
          className="text-[17px] text-drev-text-secondary leading-relaxed mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Join 200+ teams already scaling their pipelines with Drev CI.
          Early adopters get 3 months free at launch.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                className="bg-drev-success/5 border border-drev-success/20 rounded-xl p-10 flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-12 h-12 rounded-full bg-drev-success/10 flex items-center justify-center mb-4">
                  <span className="text-drev-success text-2xl">✓</span>
                </div>
                <p className="text-[16px] text-white font-semibold mb-2">Welcome to the list</p>
                <p className="text-[14px] text-drev-text-secondary">Check your inbox for a confirmation email.</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 mb-6"
              >
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (status === 'error') setStatus('idle'); }}
                  placeholder="Enter your work email"
                  className="flex-1 bg-drev-bg border border-drev-border rounded-lg px-5 py-3.5 text-[15px] text-drev-text outline-none focus:border-drev-accent transition-colors ring-1 ring-transparent focus:ring-drev-accent/20 placeholder:text-drev-text-muted"
                  disabled={status === 'loading'}
                />
                <button 
                  type="submit"
                  className="btn-primary px-8 py-3.5 text-[14px] disabled:opacity-50 whitespace-nowrap"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/></svg>
                      Joining...
                    </span>
                  ) : 'Get early access'}
                </button>
              </motion.form>
            )}
          </AnimatePresence>

          {status === 'error' && (
            <motion.p
              className="text-[12px] text-drev-danger mt-3 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Please enter a valid work email.
            </motion.p>
          )}
          
          <p className="text-[12px] text-drev-text-muted mt-6 font-medium uppercase tracking-widest">
            {waitlistCount} engineers on the list
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WaitlistForm;
