'use client';
import useMediaQuery from '@/hooks/useMediaQuery';
import { createContext } from 'react';

export const MobileContext = createContext(false);

export default function DeviceContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobile = useMediaQuery('(max-width: 1023px)');

  return (
    <MobileContext.Provider value={isMobile}>{children}</MobileContext.Provider>
  );
}
