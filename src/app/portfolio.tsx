'use client';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import Project from '@/components/Project';

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (sliderRef.current && sectionRef.current && progressRef.current) {
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

      gsap
        .timeline({
          scrollTrigger: {
            trigger: sliderRef.current,
            start: 'left left',
            end: 'right right',
            scrub: true,
            containerAnimation: mainTimeline,
          },
        })
        .fromTo(progressRef.current, { scaleX: 0 }, { scaleX: 1 });
    }
  }, [sliderRef, sectionRef, progressRef]);

  return (
    <section
      ref={sectionRef}
      className="bg-dark max-w-screen relative z-10 h-[5000px]"
    >
      <div className="sticky top-0 flex flex-col overflow-hidden bg-white">
        <div className="relative h-4">
          <div
            ref={progressRef}
            className="bg-mixed absolute left-0 right-0 top-0 h-full origin-left scale-x-0"
          />
        </div>
        <div
          ref={sliderRef}
          className="container relative flex h-screen w-[5000px] flex-grow items-stretch gap-10 py-[5vh]"
        >
          <div className="vertical relative flex rotate-180 justify-end pl-10 text-[14vh] font-semibold uppercase tracking-wide text-black">
            Projects
          </div>
          <Project />
        </div>
      </div>
    </section>
  );
}
