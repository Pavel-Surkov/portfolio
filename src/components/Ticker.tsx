'use client';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';

type Props = {
  items: string[];
  direction?: 'left' | 'right';
};

export default function Ticker({ items, direction = 'left' }: Props) {
  const tickerRefFirst = useRef<HTMLDivElement>(null);
  const tickerRefSecond = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      tickerRefFirst.current,
      {
        xPercent: direction === 'right' ? -100 : 0,
        duration: 20,
        repeat: -1,
        ease: 'none',
      },
      {
        xPercent: direction === 'right' ? 0 : -100,
        duration: 20,
        repeat: -1,
        ease: 'none',
      }
    );

    gsap.fromTo(
      tickerRefSecond.current,
      {
        xPercent: direction === 'right' ? -100 : 0,
        duration: 20,
        repeat: -1,
        ease: 'none',
      },
      {
        xPercent: direction === 'right' ? 0 : -100,
        duration: 20,
        repeat: -1,
        ease: 'none',
      }
    );
  });

  return (
    <div className="stroke-text flex text-[5vw] text-white">
      <div
        ref={tickerRefFirst}
        className="flex gap-x-24 px-12 will-change-transform"
      >
        {items.map((item) => (
          <p key={item} className="word-space-lg whitespace-nowrap">
            {item}
          </p>
        ))}
      </div>
      <div
        ref={tickerRefSecond}
        className="flex gap-x-24 px-12 will-change-transform"
      >
        {items.map((item) => (
          <p key={item} className="word-space-lg whitespace-nowrap">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
