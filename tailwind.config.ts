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
        large: '7vw',
      },
    },
  },
  plugins: [],
};
export default config;
