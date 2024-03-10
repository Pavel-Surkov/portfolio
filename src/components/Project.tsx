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
      borderRadius: 18,
      duration,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    gsap.to(imageRef.current, { scale: 1, borderRadius: 8, duration });
    gsap.to(projectRef.current, {
      scale: 1,
      borderRadius: 12,
      duration,
    });
  }, []);

  return (
    <article
      ref={projectRef}
      className="bg-gradient-peach border-box mr-10 w-[28dvw] flex-shrink-0 overflow-hidden rounded-xl text-black last:mr-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={data.link}
        rel="noopener noreferrer"
        target="_blank"
        className="flex flex-col p-8 pb-0"
      >
        <h2
          ref={titleRef}
          className="text-dark mb-4 text-xl font-semibold tracking-wider mix-blend-difference"
        >
          {data.title}
        </h2>
        <Image
          ref={imageRef}
          className="pointer-events-none h-auto w-full select-none rounded-lg"
          width={500}
          height={1200}
          src={data.image}
          alt={`${data} project capture`}
        />
      </Link>
    </article>
  );
}
