'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import useMediaQuery from '@/hooks/useMediaQuery';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery('(max-width: 1023px)');

  useEffect(() => {
    if (!cursorRef.current) return;

    const cursor = cursorRef.current;

    document.addEventListener('mousemove', (e) => {
      gsap.to(cursor, {
        x: e.x - 8,
        y: e.y - 8,
        duration: 0.7,
        ease: 'power4',
      });
    });

    document.addEventListener('mousedown', () => {
      gsap.to(cursor, {
        scale: 1.8,
        duration: 0.18,
        ease: 'power1',
      });
    });

    document.addEventListener('mouseup', () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.18,
        ease: 'power1',
      });
    });

    return () => {
      document.removeEventListener('mousemove', (e) => {
        gsap.to(cursor, {
          x: e.x - 8,
          y: e.y - 8,
          duration: 0.7,
          ease: 'power4',
        });
      });

      document.removeEventListener('mousedown', () => {
        gsap.to(cursor, {
          scale: 1.8,
          duration: 0.18,
          ease: 'power1',
        });
      });

      document.removeEventListener('mouseup', () => {
        gsap.to(cursor, {
          scale: 1,
          duration: 0.15,
          ease: 'power1',
        });
      });
    };
  }, [cursorRef]);

  return isMobile ? null : (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-50 hidden h-4 w-4 select-none rounded-full bg-white mix-blend-difference md:inline-block"
    />
  );
}
