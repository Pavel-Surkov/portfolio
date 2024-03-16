import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Cursor from '@/components/Cursor';
import { SpeedInsights } from '@vercel/speed-insights/next';

import LenisScroll from '@/components/LenisScroll';
import Footer from './footer';
import DeviceContext from '@/components/DeviceContext';

const SequelSansDisp = localFont({
  src: '../../public/fonts/SequelSansVFDisp.woff2',
  variable: '--font-sequel-sans',
});

const StarJedi = localFont({
  src: '../../public/fonts/StarJedi.woff2',
  variable: '--font-star-jedi',
});

export const metadata: Metadata = {
  title: 'Surkov Pavel • Frontend developer',
  description:
    'Frontend developer who specializes in building modern, user-friendly websites and web applications.',
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
        <DeviceContext>
          <Cursor />
          {children}
          <Footer />
        </DeviceContext>
        <LenisScroll />
        <SpeedInsights />
      </body>
    </html>
  );
}
