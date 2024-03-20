'use client';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { useCallback, useRef } from 'react';
import { type z } from 'zod';
import { type projectSchema } from '@/schemas/project-schema';

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
      className="border-box colored-shadow relative mr-10 aspect-[9/16] flex-shrink-0 rounded-2xl text-black shadow-xl last:mr-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={data.link}
        rel="noopener noreferrer"
        target="_blank"
        className="flex h-full flex-col pb-0"
      >
        <h2
          ref={titleRef}
          className="mb-2 whitespace-nowrap text-center text-2xl font-bold tracking-wider text-white mix-blend-difference md:mb-3 md:translate-y-12 md:scale-75 xl:text-3xl"
        >
          {data.title}
        </h2>
        <div
          ref={imageRef}
          className="relative h-full overflow-hidden rounded-lg"
        >
          <Image
            className={`pointer-events-none relative w-full select-none object-cover ${data.type === 'poster' ? 'h-full' : 'h-auto'}`}
            quality={100}
            width={625}
            height={1063}
            src={data.image}
            alt={`${data.title} project capture`}
            loading="lazy"
          />
        </div>
      </Link>
    </article>
  );
}
