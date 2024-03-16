'use client';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top',
        end: `+=${sectionRef.current?.offsetHeight}`,
        scrub: true,
      },
    });

    tl.fromTo(
      titleRef.current,
      { scale: 1, translateY: 0 },
      { scale: 0.75, translateY: 100 }
    ).to(titleRef.current, { opacity: 0, pointerEvents: 'none' });
  });

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen items-center justify-center"
    >
      <div ref={titleRef} className="fixed z-0">
        <h1 className="grid grid-cols-[repeat(3,auto)] gap-x-2 text-large font-bold text-gray lg:gap-x-6 [&_span]:relative [&_span]:z-10">
          <div className="col-span-2 col-start-2 flex gap-x-2 lg:gap-x-6">
            <span>I&apos;m</span>
            <span>Pavel</span>
          </div>
          <span>A</span>
          <div className="relative">
            <div className="absolute h-full w-full bg-gradient-blob-orange blur-[60px]" />
            <span>Frontend</span>
          </div>
          <span>Developer</span>
          <div className="col-start-3 flex gap-x-2 lg:gap-x-6">
            <span>for</span>
            <span>you</span>
          </div>
        </h1>
      </div>
    </section>
  );
}
