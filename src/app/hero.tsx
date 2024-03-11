'use client';
import StarsCanvas from '@/components/canvas/StarsCanvas';
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
      { scale: 0.8, translateY: -200 }
    );
  });

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen items-center justify-center"
    >
      <div ref={titleRef} className="fixed z-0">
        <h1 className=" transparent-text grid grid-cols-[repeat(3,auto)] gap-x-2 text-large font-bold lg:gap-x-6">
          <div className="col-span-2 col-start-2 flex gap-x-2 lg:gap-x-6">
            <span className="transparent-text inline-block bg-white">I'm</span>
            <span className="transparent-text inline-block bg-violet">
              Pavel
            </span>
          </div>
          <span className="transparent-text inline-block bg-white">A</span>
          <span className="transparent-text inline-block bg-mixed">
            Frontend
          </span>
          <span className="transparent-text inline-block bg-white">
            Developer
          </span>
          <div className="col-start-3 flex gap-x-2 lg:gap-x-6">
            <span className="transparent-text inline-block bg-white">for</span>
            <span className="transparent-text inline-block bg-mint">you</span>
          </div>
        </h1>
      </div>
    </section>
  );
}
