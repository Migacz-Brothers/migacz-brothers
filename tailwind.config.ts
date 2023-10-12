import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '0.875rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.75rem',
        '4xl': '2.5rem',
        '5xl': '3.052rem',
      },
    },
    fontFamily: {
      header: 'var(--font-header)',
      body: 'var(--font-body)',
    },
    backgroundColor: {
      main: '--main-background',
      cta: '--cta-background',
      tag: 'rgba(255, 255, 255, 0.10)',
    },
    lineHeight: {
      header: '128%',
      body: '128%',
    },
    backdropBlur: {
      xsm: '1px',
    },
    colors: {
      main: '--main-foreground',
      cta: '--cta-foreground',
    },
  },
  plugins: [],
};
export default config;
