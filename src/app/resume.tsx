'use client';

import Ticker from '@/components/Ticker';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { useRef } from 'react';

export default function Resume() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'top top',
          scrub: true,
        },
        ease: 'none',
      })
      .fromTo(sectionRef.current, { yPercent: 20 }, { yPercent: 0 });
  });

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[calc(100vh-160px)] flex-col overflow-hidden bg-black py-32"
    >
      <div className="container">
        <h2 className="text-[10dvh] font-black tracking-wide">
          <p>
            Explore my{' '}
            <Link
              href="https://docs.google.com/document/d/1x5LjscbzBXuVAfEa3wxlFJeDDiHcfN_D0-9tvCbBh1g/edit?usp=sharing"
              rel="noopener noreferrer"
              target="_blank"
              className="link uppercase"
            >
              resume
            </Link>{' '}
            for more
          </p>
        </h2>
      </div>
      <div className="flex flex-grow flex-col justify-end">
        <Ticker
          direction="right"
          items={[
            'contact me',
            'contact me',
            'contact me',
            'contact me',
            'contact me',
          ]}
        />
        <Ticker
          items={[
            'contact me',
            'contact me',
            'contact me',
            'contact me',
            'contact me',
          ]}
        />
      </div>
    </section>
  );
}
