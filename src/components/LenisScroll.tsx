'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

export default function LenisScroll() {
  useEffect(() => {
    (async () => {
      const Lenis = (await import('@studio-freight/lenis')).default;
      const lenis = new Lenis({
        lerp: 0.12,
      });

      gsap.registerPlugin(ScrollTrigger);

      lenis.on('scroll', ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);
    })();
  }, []);

  return null;
}
