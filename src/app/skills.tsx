'use client';

import Ticker from '@/components/Ticker';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: `+=${sectionRef.current?.offsetHeight ?? 800 - 300}`,
          scrub: true,
        },
      })
      .fromTo(sectionRef.current, { y: 300 }, { y: 0 });
  });

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[calc(100vh-160px)] flex-col overflow-hidden bg-black py-32"
    >
      <div className="container">
        <h2 className="text-right text-[14dvh] font-black uppercase tracking-wide">
          Skills
        </h2>
      </div>
      <div className="flex flex-grow flex-col justify-center">
        <Ticker
          items={['html', 'typescript', 'react', 'next.js', 'javascript']}
        />
        <Ticker
          direction="right"
          items={['gsap', 'three.js', 'prisma', 'auth.js', 'tailwind', 'vite']}
        />
        <Ticker
          items={['css', 'zod', 'svelte', 'postgresql', 'react-query', 'git']}
        />
      </div>
    </section>
  );
}
