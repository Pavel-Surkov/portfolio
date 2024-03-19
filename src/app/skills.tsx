'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

const SKILLS = [
  'Typescript',
  'React',
  'Next.js',
  'REST',
  'Webpack',
  'GSAP',
  'Three.js',
  'Tailwind CSS',
  'Lodash',
  'Prisma',
  'React Query',
  'Auth.js',
] as const;

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });

    tl.fromTo(
      skillsRef.current,
      {
        yPercent: 100,
      },
      { yPercent: -100 }
    );
  });

  return (
    <section ref={sectionRef} className="relative h-[350vh]">
      <div className="sticky top-0 h-screen">
        <h2 className="stroke-text-yellow pt-[8vh] text-center font-star text-[12vw] md:pt-[5vh] md:text-[8vw]">
          Skills
        </h2>
        <div className="titles">
          <div
            ref={skillsRef}
            className="flex flex-col gap-10 text-[14vw] text-yellow"
          >
            <div className="flex flex-col items-center justify-center gap-16 md:gap-28">
              {SKILLS.map((skill) => (
                <span key={skill} className="text-center">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
