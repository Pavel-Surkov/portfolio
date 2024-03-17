'use client';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import LightSaberCanvas from '@/components/canvas/LightSaberCanvas';

export default function Hero() {
  const [tl, setTl] = useState<gsap.core.Timeline | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lightSaberRef = useRef<HTMLDivElement>(null);

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
      lightSaberRef.current,
      { xPercent: -60, ease: 'none' },
      { xPercent: 60, ease: 'none' },
      'hero'
    );

    timeline.fromTo(
      titleRef.current,
      { backgroundPositionX: 100, ease: 'none' },
      { backgroundPositionX: 0, ease: 'none' },
      'hero'
    );
  });

  return (
    <section ref={sectionRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          ref={lightSaberRef}
          className="absolute left-0 top-1/2 h-[90%] w-full -translate-x-1/2 -translate-y-1/2 will-change-transform"
        >
          {tl && <LightSaberCanvas tl={tl} />}
        </div>
        <div className="relative flex h-full items-center justify-center">
          <h1
            ref={titleRef}
            className="bg-gradient-line-shrink transparent-text relative z-10 bg-[length:320%_auto] bg-[0%_50%] text-large font-black text-gray"
          >
            <p className="bg-transparent pl-[3.7vw]">I&apos;m Pavel</p>
            <p className="bg-transparent">Frontend Developer</p>
            <p className="bg-transparent pr-[9.5vw] text-right"> for you</p>
          </h1>
        </div>
      </div>
    </section>
  );
}
