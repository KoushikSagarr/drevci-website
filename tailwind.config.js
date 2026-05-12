/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "drev-bg": "#0d1117",
        "drev-surface": "#161b22",
        "drev-border": "#30363d",
        "drev-border-light": "#484f58",
        "drev-text": "#e6edf3",
        "drev-text-secondary": "#8b949e",
        "drev-text-muted": "#6e7681",
        "drev-accent": "#388bfd",
        "drev-accent-hover": "#58a6ff",
        "drev-success": "#3fb950",
        "drev-danger": "#f85149",
        "drev-warning": "#d29922",
        "drev-card": "#0d1117",
        "drev-card-hover": "#1c2128",
      },
      fontSize: {
        'hero': '48px',
        'hero-mobile': '32px',
        'section': '42px',
        'section-mobile': '30px',
      },
      letterSpacing: {
        'tightest': '-0.03em',
        'tighter': '-0.02em',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'SF Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
