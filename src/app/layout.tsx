import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Cursor from '@/components/Cursor';
import { SpeedInsights } from '@vercel/speed-insights/next';

import LenisScroll from '@/components/LenisScroll';
import Footer from './footer';

const SequelSansDisp = localFont({
  src: '../../public/fonts/SequelSansVFDisp.woff2',
  variable: '--font-sequel-sans',
});

const StarJedi = localFont({
  src: '../../public/fonts/StarJedi.woff2',
  variable: '--font-star-jedi',
});

export const metadata: Metadata = {
  title: 'Portfolio',
  description: '...',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${StarJedi.variable} ${SequelSansDisp.variable} font-sequel`}
      >
        <Cursor />
        <LenisScroll />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
