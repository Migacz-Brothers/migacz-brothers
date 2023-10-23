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
        '5xl': '3rem',
      },
      screens: {
        lg: '1180px',
        xsm: '400px',
      },
      padding: {
        18: '4.5rem',
      },
      animation: {
        'pulse-fast': 'pulse 1000ms linear infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
      },
    },
    boxShadow: {
      bright: '2px 3px 24px 4px #ffffff6f',
      'bright-sm': '1px 2px 30px 3px #ffffff2f',
    },
    fontFamily: {
      header: 'var(--font-header)',
      body: 'var(--font-body)',
    },
    backgroundColor: {
      main: 'var(--main-background)',
      cta: 'var(--cta-background)',
      tag: 'rgba(255, 255, 255, 0.10)',
      'tag-hover': 'rgba(255, 255, 255, 0.20)',
    },

    lineHeight: {
      header: '128%',
      body: '160%',
    },
    backdropBlur: {
      xsm: '1px',
    },
    colors: {
      main: 'var(--main-foreground)',
      cta: 'var(--cta-foreground)',
    },
  },
  plugins: [],
};
export default config;
