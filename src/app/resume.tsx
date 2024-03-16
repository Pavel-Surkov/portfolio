'use client';

import EmailIcon from '@/icons/email';
import TelegramIcon from '@/icons/telegram';
import ResumeIcon from '@/icons/resume';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { useRef } from 'react';

export default function Resume() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'top top',
          scrub: true,
        },
        ease: 'none',
      })
      .fromTo(sectionRef.current, { yPercent: 20 }, { yPercent: 0 });
  });

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[calc(100vh-160px)] flex-col justify-center overflow-hidden bg-black py-32"
    >
      <div className="container">
        <div className="mb-10 text-[5vw] font-black tracking-wide">
          <p>
            <span className="opacity-70">
              Interested? <br />
              Explore my{' '}
            </span>
            <span className="group static">
              <Link
                href="https://docs.google.com/document/d/1x5LjscbzBXuVAfEa3wxlFJeDDiHcfN_D0-9tvCbBh1g/edit?usp=sharing"
                rel="noopener noreferrer"
                target="_blank"
                className="link relative bg-black"
              >
                RESUME
              </Link>
              <ResumeIcon className="absolute right-0 top-1/2 inline-block h-[30vw] w-[30vw] -translate-y-1/2 translate-x-full transition-transform duration-300 group-hover:-translate-x-24 xl:group-hover:-translate-x-1/4" />
            </span>
          </p>
        </div>
        <div className="text-[4vw] font-black tracking-wide">
          <p>
            <span className="opacity-70">
              Or contact me <br />
              via{' '}
            </span>
            <span className="group">
              <Link href="mailto:surkovv.pavel@gmail.com" className="link">
                Email
              </Link>
              <EmailIcon className="absolute right-0 top-1/2 inline-block h-[30vw] w-[30vw] -translate-y-1/2 translate-x-full transition-transform duration-300 group-hover:-translate-x-24 xl:group-hover:-translate-x-1/4" />
            </span>
            <span className="opacity-70">{' or '}</span>
            <span className="group">
              <Link href="https://t.me/surkov0" className="link">
                Telegram
              </Link>
              <TelegramIcon className="absolute right-0 top-1/2 inline-block aspect-square h-[30vw] w-[30vw] -translate-y-1/2 translate-x-full text-[50vh] transition-transform duration-300 group-hover:-translate-x-24 xl:group-hover:-translate-x-1/4" />
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
