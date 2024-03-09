'use client';
import StarsCanvas from '@/components/canvas/Stars';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    if (sectionRef.current && titleRef.current) {
      gsap.registerPlugin(ScrollTrigger);

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top',
          end: `+=${sectionRef.current.offsetHeight}`,
          scrub: true,
        },
      });

      timeline.fromTo(
        titleRef.current,
        { scale: 1, translateY: 0 },
        { scale: 0.8, translateY: -200 }
      );
    }
  }, [sectionRef, titleRef]);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen items-center justify-center"
    >
      <StarsCanvas />
      <div ref={titleRef} className="fixed z-0">
        <h1 className="to-violet from-mint transparent-text text-large grid grid-cols-[repeat(3,auto)] gap-x-2 bg-gradient-to-b font-bold lg:gap-x-6">
          <div className="col-span-2 col-start-2 flex gap-x-2 lg:gap-x-6">
            <span className="transparent-text inline-block bg-white">I'm</span>
            <span className="inline-block">Pavel</span>
          </div>
          <span className="transparent-text inline-block bg-white">A</span>
          <span className="inline-block">Frontend</span>
          <span className="transparent-text inline-block bg-white">
            Developer
          </span>
          <div className="col-start-3 flex gap-x-2 lg:gap-x-6">
            <span className="transparent-text inline-block bg-white">for</span>
            <span className="inline-block">you</span>
          </div>
        </h1>
      </div>
    </section>
  );
}
