import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Cursor from '@/components/Cursor';
import { SpeedInsights } from '@vercel/speed-insights/next';

import './globals.css';
import LenisScroll from '@/components/LenisScroll';
import Footer from './footer';

const SequelSansDisp = localFont({
  src: '../../public/fonts/SequelSansVFDisp.woff2',
  variable: '--font-suisse-intl',
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
      <body className={SequelSansDisp.className}>
        <Cursor />
        <LenisScroll />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
