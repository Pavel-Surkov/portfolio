'use client';
import getRandomMessage from '@/static/loading-messages';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState } from 'react';

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  const blockRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(loaderRef.current, { backgroundPositionX: '0%', duration: 3.5 });
    gsap.to(blockRef.current, {
      yPercent: -100,
      duration: 1,
      delay: 3.5,
      onComplete: () => setIsLoading(false),
    });
  });

  return isLoading ? (
    <div
      ref={blockRef}
      className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black"
    >
      <div
        ref={loaderRef}
        className="transparent-text bg-gradient-load max-w-full bg-[length:200%_auto] bg-[100%_50%] px-6 text-center text-2xl font-bold leading-relaxed md:text-[6vw]"
      >
        {getRandomMessage()}
      </div>
    </div>
  ) : null;
}
