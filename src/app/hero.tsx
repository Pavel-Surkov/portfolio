'use client';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import LightSaberCanvas from '@/components/canvas/LightSaberCanvas';
import Scroller from '@/components/Scroller';
import useMediaQuery from '@/hooks/useMediaQuery';

export default function Hero() {
  const [tl, setTl] = useState<gsap.core.Timeline | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const isMobile = useMediaQuery('(max-width: 1024px)');

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom center',
        scrub: true,
      },
      ease: 'none',
    });

    setTl(timeline);

    timeline.fromTo(
      titleRef.current,
      { backgroundPositionX: '100%', ease: 'none' },
      { backgroundPositionX: '0%', ease: 'none' },
      'hero'
    );
  });

  return (
    <section ref={sectionRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {!isMobile && tl ? <LightSaberCanvas tl={tl} /> : null}
        <div className="relative flex h-full flex-col items-center justify-center">
          <h1
            ref={titleRef}
            className="transparent-text relative z-10 bg-gradient-line-shrink bg-[length:320%_auto] bg-[0%_50%] text-large font-black text-gray"
          >
            <p className="bg-transparent pl-[4.6vw]">I&apos;m Pavel</p>
            <p className="bg-transparent pr-[3.61vw]">Creative Frontend</p>
            <p className="bg-transparent text-right">Developer</p>
          </h1>
        </div>
      </div>
      <Scroller />
    </section>
  );
}
