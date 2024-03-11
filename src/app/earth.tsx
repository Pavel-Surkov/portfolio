'use client';
import EarthCanvas from '@/components/canvas/EarthCanvas';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useState } from 'react';
import gsap from 'gsap';

export default function Earth() {
  const sectionRef = useRef<HTMLElement>(null);
  const [tl, setTl] = useState<gsap.core.Timeline | null>(null);

  // Sticky component moves inside relative element on scroll
  // Here gsap timeline created and set to ref.current
  // This timeline is provided to EarthCanvas and can be used inside
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    setTl(
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          markers: true,
        },
      })
    );
  });

  return (
    <section ref={sectionRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen">
        {tl && <EarthCanvas tl={tl} />}
      </div>
    </section>
  );
}
