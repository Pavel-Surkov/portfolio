import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sequel: 'var(--font-sequel-sans)',
        star: 'var(--font-star-jedi)',
      },
      backgroundImage: {
        'gradient-line':
          'linear-gradient(270deg, rgba(255, 255, 255, 0.25), #fff 50%, rgba(255, 255, 255, 0.25))',
        'gradient-line-shrink':
          'linear-gradient(80deg, #000 41%,  #e0ffff 50%, #000 59%)',
        'gradient-load': 'linear-gradient(90deg, #fff 50%, #666 50.1%)',
      },
      keyframes: {
        scroll: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(20px)' },
        },
      },
      animation: {
        scroll: 'scroll 2s infinite linear',
      },
      colors: {
        yellow: '#FFFF82',
        dark: '#211951',
        violet: '#836FFF',
        blue: '#071DE4',
        mint: '#15F5BA',
        mixed: '#e32765',
        gray: { DEFAULT: '#F0F3FF', '100': '#AAA' },
        white: '#FFF',
        black: '#0b0b0e',
      },
      fontSize: {
        large: '7vw',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '3vw',
        },
        screens: {
          sm: '100%',
          md: '100%',
          lg: '100%',
          xl: '100%',
        },
      },
    },
  },
  plugins: [],
};
export default config;
