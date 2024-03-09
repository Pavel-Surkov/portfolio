'use client';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (sliderRef.current && sectionRef.current) {
      gsap.registerPlugin(ScrollTrigger);

      const mainTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
      });

      mainTimeline.to(sliderRef.current, {
        x: -sliderRef.current.offsetWidth + sectionRef.current.offsetWidth,
        ease: 'none',
      });
    }
  }, [sliderRef, sectionRef]);

  return (
    <section
      ref={sectionRef}
      className="bg-dark border-gray max-w-screen relative z-10 h-[5000px] border-t-2"
    >
      <div className="sticky top-0 overflow-hidden bg-white">
        <div
          ref={sliderRef}
          className="container relative flex h-screen w-[5000px] items-stretch gap-10 py-[5vh]"
        >
          <div className="vertical relative flex rotate-180 justify-end pl-10 text-[14vh] font-semibold uppercase text-black">
            Portfolio
          </div>
          <div className="rounded-2xl border border-black p-10 text-black">
            Element
          </div>
        </div>
      </div>
    </section>
  );
}
