import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-peach':
          'linear-gradient(120deg,  rgba(62,147,252,0.57) 12.9%, rgba(239,183,192,0.44) 91.2% );',
      },
      fontFamily: {
        suisse: ['var(--font-suisse-intl)'],
      },
      colors: {
        dark: '#211951',
        violet: '#836FFF',
        mint: '#15F5BA',
        mixed: '#e32765',
        gray: '#F0F3FF',
        white: '#FFF',
        black: '#000',
      },
      fontSize: {
        large: '7dvw',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '3dvw',
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
