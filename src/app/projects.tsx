'use client';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import Project from '@/components/Project';
import { useGSAP } from '@gsap/react';
import { z } from 'zod';
import { projectsSchema } from '@/schemas/project-schema';
import Link from 'next/link';

type Props = {
  data: z.infer<typeof projectsSchema>;
};

export default function Projects({ data }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const sliderWidth = useRef(0);

  // Strange that width of slider is its scrollWidth + paddingX
  useEffect(() => {
    if (sliderRef.current) {
      const padding = window
        .getComputedStyle(sliderRef.current)
        .getPropertyValue('padding-right');

      const paddingValue = +(padding.match(/\d+/) as RegExpMatchArray)[0];

      sliderWidth.current = sliderRef.current.scrollWidth + paddingValue;
    }
  }, [sliderRef]);

  useGSAP(() => {
    if (sliderRef.current) {
      gsap.registerPlugin(ScrollTrigger);

      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
      });

      mainTl.fromTo(
        sliderRef.current,
        { xPercent: 0, left: '0%', ease: 'none' },
        {
          xPercent: -100,
          left: '100%',
          ease: 'none',
        }
      );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: sliderRef.current,
            start: 'left left',
            end: 'right right',
            scrub: true,
            containerAnimation: mainTl,
          },
        })
        .fromTo(progressRef.current, { scaleX: 0 }, { scaleX: 1 });
    }
  }, [sliderRef]);

  return (
    <section
      ref={sectionRef}
      className="max-w-screen relative z-10"
      style={{ height: sliderWidth.current ?? 0 }}
    >
      <div className="sticky top-0 flex flex-col overflow-hidden">
        <div className="relative h-4">
          <div
            ref={progressRef}
            className="absolute left-0 right-0 top-0 h-full origin-left scale-x-0 bg-mixed"
          />
        </div>
        <div
          ref={sliderRef}
          className="container relative box-border flex h-screen flex-grow items-stretch py-[5dvh]"
          style={{ width: sliderWidth.current ?? 0 }}
        >
          <div className="vertical relative flex rotate-180 justify-end pl-10 text-[14dvh] font-black uppercase tracking-wide text-white">
            Projects
          </div>
          {data.projects.map((project) => (
            <Project data={project} key={project.title} />
          ))}
          <article className="border-box colored-shadow relative mr-10 w-[28dvw] flex-shrink-0 pt-12 shadow-xl last:mr-0">
            <div className="flex h-full flex-col rounded-2xl border border-[#FFFFFF22] bg-black pb-0">
              <div className="relative grid h-full place-items-center rounded-lg">
                <div className="text-center">
                  <div className="text-[100px]">👀</div>
                  <h2 className="mb-2 text-2xl">New porjects Coming Soon</h2>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
