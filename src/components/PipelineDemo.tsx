"use client";

import React from 'react';
import { motion } from 'framer-motion';

const PipelineDemo = () => {
  return (
    <motion.div
      className="bg-drev-bg border border-drev-border rounded-2xl p-8 md:p-12 max-w-[800px] mx-auto overflow-hidden shadow-2xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative">
        
        {/* Stage: Clone */}
        <div className="flex flex-col items-center flex-1">
          <div className="bg-drev-surface border border-drev-border rounded-xl py-5 px-6 w-full text-center group hover:border-drev-border-light transition-colors">
            <span className="text-[14px] font-semibold text-drev-text tracking-tight">Clone</span>
            <div className="mt-3 flex justify-center">
              <div className="status-badge stage-clone">
                <span className="dot mr-2 w-1.5 h-1.5 rounded-full bg-drev-accent animate-pulse hidden"></span>
                <span className="status-text font-mono text-[11px] uppercase tracking-wider"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center text-drev-border">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>

        {/* Stage: Test */}
        <div className="flex flex-col items-center flex-1">
          <div className="bg-drev-surface border border-drev-border rounded-xl py-5 px-6 w-full text-center group hover:border-drev-border-light transition-colors">
            <span className="text-[14px] font-semibold text-drev-text tracking-tight">Test</span>
            <div className="mt-3 flex justify-center">
              <div className="status-badge stage-test">
                <span className="dot mr-2 w-1.5 h-1.5 rounded-full bg-drev-accent animate-pulse hidden"></span>
                <span className="status-text font-mono text-[11px] uppercase tracking-wider"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center text-drev-border">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>

        {/* Stage: Build */}
        <div className="flex flex-col items-center flex-1">
          <div className="bg-drev-surface border border-drev-border rounded-xl py-5 px-6 w-full text-center group hover:border-drev-border-light transition-colors">
            <span className="text-[14px] font-semibold text-drev-text tracking-tight">Build</span>
            <div className="mt-3 flex justify-center">
              <div className="status-badge stage-build">
                <span className="dot mr-2 w-1.5 h-1.5 rounded-full bg-drev-accent animate-pulse hidden"></span>
                <span className="status-text font-mono text-[11px] uppercase tracking-wider"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Log Output Area */}
      <div className="mt-12 bg-drev-surface/50 border border-drev-border/50 rounded-xl p-6 font-mono text-[12px] leading-[2] h-[200px] overflow-hidden shadow-inner">
        <div className="log-line opacity-0 translate-y-2 log-1 flex gap-4"><span className="text-drev-text-muted">01:02.1</span> <span className="text-drev-text-secondary">[clone]</span> ▶ Cloning repository...</div>
        <div className="log-line opacity-0 translate-y-2 log-2 flex gap-4"><span className="text-drev-text-muted">01:02.4</span> <span className="text-drev-text-secondary">[clone]</span> <span className="text-drev-success font-bold">✓</span> Cloned in 311ms</div>
        <div className="log-line opacity-0 translate-y-2 log-3 flex gap-4"><span className="text-drev-text-muted">01:02.5</span> <span className="text-drev-text-secondary">[test]</span> ▶ Running go test ./...</div>
        <div className="log-line opacity-0 translate-y-2 log-4 flex gap-4"><span className="text-drev-text-muted">01:05.1</span> <span className="text-drev-text-secondary">[test]</span> <span className="text-drev-success font-bold">✓</span> 247 tests passed (2.6s)</div>
        <div className="log-line opacity-0 translate-y-2 log-5 flex gap-4"><span className="text-drev-text-muted">01:05.2</span> <span className="text-drev-text-secondary">[build]</span> ▶ Building binary...</div>
        <div className="log-line opacity-0 translate-y-2 log-6 flex gap-4"><span className="text-drev-text-muted">01:07.8</span> <span className="text-drev-text-secondary">[build]</span> <span className="text-drev-success font-bold">✓</span> Build complete (14.2MB)</div>
      </div>

      <style jsx>{`
        .status-badge {
          font-size: 11px;
          border-radius: 6px;
          padding: 4px 10px;
          background: #161b22;
          color: #8b949e;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 100px;
          border: 1px solid #30363d;
        }

        /* 14s Loop Animation */
        .stage-clone { animation: cloneStatus 14s infinite; }
        @keyframes cloneStatus {
          0%, 7% { background: #161b22; color: #8b949e; border-color: #30363d; }
          7.1%, 21% { background: rgba(56,139,253,0.1); color: #58a6ff; border-color: rgba(56,139,253,0.3); }
          21.1%, 100% { background: rgba(63,185,80,0.1); color: #3fb950; border-color: rgba(63,185,80,0.3); }
        }
        .stage-clone .dot { animation: dotShowClone 14s infinite; }
        @keyframes dotShowClone {
          0%, 7% { display: none; }
          7.1%, 21% { display: inline-block; }
          21.1%, 100% { display: none; }
        }
        .stage-clone .status-text::after { animation: textSwapClone 14s infinite; content: "pending"; }
        @keyframes textSwapClone {
          0%, 7% { content: "pending"; }
          7.1%, 21% { content: "running"; }
          21.1%, 100% { content: "done"; }
        }

        .stage-test { animation: testStatus 14s infinite; }
        @keyframes testStatus {
          0%, 21% { background: #161b22; color: #8b949e; border-color: #30363d; }
          21.1%, 35% { background: rgba(56,139,253,0.1); color: #58a6ff; border-color: rgba(56,139,253,0.3); }
          35.1%, 100% { background: rgba(63,185,80,0.1); color: #3fb950; border-color: rgba(63,185,80,0.3); }
        }
        .stage-test .dot { animation: dotShowTest 14s infinite; }
        @keyframes dotShowTest {
          0%, 21% { display: none; }
          21.1%, 35% { display: inline-block; }
          35.1%, 100% { display: none; }
        }
        .stage-test .status-text::after { animation: textSwapTest 14s infinite; content: "pending"; }
        @keyframes textSwapTest {
          0%, 21% { content: "pending"; }
          21.1%, 35% { content: "running"; }
          35.1%, 100% { content: "done"; }
        }

        .stage-build { animation: buildStatus 14s infinite; }
        @keyframes buildStatus {
          0%, 35% { background: #161b22; color: #8b949e; border-color: #30363d; }
          35.1%, 64% { background: rgba(56,139,253,0.1); color: #58a6ff; border-color: rgba(56,139,253,0.3); }
          64.1%, 100% { background: rgba(63,185,80,0.1); color: #3fb950; border-color: rgba(63,185,80,0.3); }
        }
        .stage-build .dot { animation: dotShowBuild 14s infinite; }
        @keyframes dotShowBuild {
          0%, 35% { display: none; }
          35.1%, 64% { display: inline-block; }
          64.1%, 100% { display: none; }
        }
        .stage-build .status-text::after { animation: textSwapBuild 14s infinite; content: "pending"; }
        @keyframes textSwapBuild {
          0%, 35% { content: "pending"; }
          35.1%, 64% { content: "running"; }
          64.1%, 100% { content: "done"; }
        }

        .log-line { animation: logFade 14s infinite forwards; }
        @keyframes logFade {
          0%, 5% { opacity: 0; transform: translateY(8px); }
          10%, 95% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; }
        }
        .log-1 { animation-delay: 1s; }
        .log-2 { animation-delay: 2.2s; }
        .log-3 { animation-delay: 3.2s; }
        .log-4 { animation-delay: 5.8s; }
        .log-5 { animation-delay: 7s; }
        .log-6 { animation-delay: 9s; }
      `}</style>
    </motion.div>
  );
};

export default PipelineDemo;
