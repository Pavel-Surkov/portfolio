'use client';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { useCallback, useRef } from 'react';
import { z } from 'zod';
import { projectSchema } from '@/schemas/project-schema';

const duration = 0.3;

type Props = {
  data: z.infer<typeof projectSchema>;
};

export default function Project({ data }: Props) {
  const projectRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);

  const handleMouseEnter = useCallback(() => {
    gsap.to(imageRef.current, { scale: 1.01, borderRadius: 12, duration });
    gsap.to(projectRef.current, {
      scale: 1.01,
      duration,
    });
    gsap.to(titleRef.current, { y: 0, scale: 1 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    gsap.to(imageRef.current, { scale: 1, borderRadius: 8, duration });
    gsap.to(projectRef.current, {
      scale: 1,
      duration,
    });
    gsap.to(titleRef.current, { y: 48, scale: 0.75 });
  }, []);

  return (
    <article
      ref={projectRef}
      className="border-box colored-shadow relative mr-10 w-[28dvw] flex-shrink-0 rounded-2xl text-black shadow-xl last:mr-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={data.link}
        rel="noopener noreferrer"
        target="_blank"
        className="flex max-h-full flex-col pb-0"
      >
        <h2
          ref={titleRef}
          className="mb-3 translate-y-12 scale-75 text-center text-3xl font-bold tracking-wider text-white mix-blend-difference"
        >
          {data.title}
        </h2>
        <div ref={imageRef} className="relative overflow-hidden rounded-lg">
          <Image
            className="pointer-events-none h-auto w-full select-none"
            width={500}
            height={1200}
            src={data.image}
            alt={`${data} project capture`}
          />
        </div>
      </Link>
    </article>
  );
}
