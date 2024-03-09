'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cursorRef.current) return;

    document.addEventListener('mousemove', (e) => {
      gsap.to(cursorRef.current, {
        x: e.x - 8,
        y: e.y - 8,
        duration: 0.7,
        ease: 'power4',
      });
    });

    document.addEventListener('mousedown', () => {
      gsap.to(cursorRef.current, {
        scale: 1.8,
        duration: 0.18,
        ease: 'power1',
      });
    });

    document.addEventListener('mouseup', () => {
      gsap.to(cursorRef.current, {
        scale: 1,
        duration: 0.18,
        ease: 'power1',
      });
    });

    return () => {
      document.removeEventListener('mousemove', (e) => {
        gsap.to(cursorRef.current, {
          x: e.x - 8,
          y: e.y - 8,
          duration: 0.7,
          ease: 'power4',
        });
      });

      document.removeEventListener('mousedown', () => {
        gsap.to(cursorRef.current, {
          scale: 1.8,
          duration: 0.18,
          ease: 'power1',
        });
      });

      document.removeEventListener('mouseup', () => {
        gsap.to(cursorRef.current, {
          scale: 1,
          duration: 0.15,
          ease: 'power1',
        });
      });
    };
  }, [cursorRef]);

  return (
    <div
      ref={cursorRef}
      className="bg-mint pointer-events-none fixed left-0 top-0 z-50 hidden h-4 w-4 select-none rounded-full mix-blend-difference md:inline-block"
    />
  );
}
