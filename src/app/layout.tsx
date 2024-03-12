import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Cursor from '@/components/Cursor';
import { SpeedInsights } from '@vercel/speed-insights/next';

import './globals.css';
import LenisScroll from '@/components/LenisScroll';
import Footer from './footer';

const SuisseIntl = localFont({
  src: [
    {
      path: '../../public/fonts/SuisseIntl-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SuisseIntl-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SuisseIntl-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SuisseIntl-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SuisseIntl-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
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
      <body className={SuisseIntl.className}>
        <Cursor />
        <LenisScroll />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
