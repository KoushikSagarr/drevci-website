"use client";

import { useEffect, useState } from 'react';

const lines = [
  { text: "$ drev pipeline run --watch", color: "text-drev-text", delay: 0 },
  { text: "[00:00.001] ▶ Cloning repository...", color: "text-drev-text-secondary", delay: 400 },
  { text: "[00:00.312] ✓ Cloned in 311ms", color: "text-drev-success", delay: 800 },
  { text: "[00:00.314] ▶ Pulling image golang:1.22-alpine", color: "text-drev-text-secondary", delay: 1200 },
  { text: "[00:02.108] ✓ Image ready", color: "text-drev-success", delay: 1600 },
  { text: "[00:02.109] ▶ Running tests...", color: "text-drev-text-secondary", delay: 2000 },
  { text: "[00:04.887] ✓ All 247 tests passed (2.778s)", color: "text-drev-success", delay: 2400 },
  { text: "[00:04.888] ▶ Building binary...", color: "text-drev-text-secondary", delay: 2800 },
  { text: "[00:07.341] ✓ Build complete → dist/server (12.4MB)", color: "text-drev-success", delay: 3200 },
  { text: "[00:07.342] ▶ Pushing to registry...", color: "text-drev-text-secondary", delay: 3600 },
  { text: "[00:09.104] ✓ Pushed ghcr.io/acme/api:sha-4f3a9c1", color: "text-drev-success", delay: 4000 },
  { text: "[00:09.105] ✓ Pipeline complete in 9.1s", color: "text-drev-success", delay: 4400 },
];

const TerminalHero = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timers = lines.map((line, i) =>
      setTimeout(() => setVisibleLines(i + 1), line.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="bg-drev-bg border border-drev-border rounded-lg max-w-[700px] mx-auto shadow-2xl overflow-hidden accent-glow">
      {/* Title bar */}
      <div className="bg-drev-surface px-4 py-2.5 flex items-center justify-between border-b border-drev-border">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-drev-danger/60"></div>
          <div className="w-3 h-3 rounded-full bg-drev-warning/60"></div>
          <div className="w-3 h-3 rounded-full bg-drev-success/60"></div>
        </div>
        <div className="text-[11px] font-mono text-drev-text-muted tracking-tight">pipeline.log — bash</div>
        <div className="w-10"></div>
      </div>
      {/* Terminal body */}
      <div className="p-6 md:p-8 font-mono text-[12px] md:text-[13px] leading-[1.9] text-drev-text-secondary min-h-[320px]">
        {lines.slice(0, visibleLines).map((line, i) => (
          <div 
            key={i} 
            className="seq-fade-in flex gap-3"
            style={{ animationDelay: '0ms' }}
          >
            <span className={line.color}>{line.text}</span>
            {i === visibleLines - 1 && i === lines.length - 1 && (
              <span className="w-2 h-4 bg-drev-accent inline-block cursor-blink align-middle rounded-sm"></span>
            )}
          </div>
        ))}
        {visibleLines < lines.length && (
          <span className="w-2 h-4 bg-drev-accent inline-block cursor-blink align-middle rounded-sm mt-1"></span>
        )}
      </div>
    </div>
  );
};

export default TerminalHero;
