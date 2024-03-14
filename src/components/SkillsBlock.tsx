'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function SkillsBlock({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ref.current,
      {
        yPercent: 0,
        duration: 20,
        repeat: -1,
        ease: 'none',
      },
      {
        yPercent: -100,
        duration: 20,
        repeat: -1,
        ease: 'none',
      }
    );
  });

  return (
    <div ref={ref} className="text-yellow flex flex-col gap-10 text-[10vw]">
      {children}
    </div>
  );
}
