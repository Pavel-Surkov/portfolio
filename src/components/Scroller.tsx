'use client';

import useScrollTop from '@/hooks/useScrollTop';

export default function Scroller() {
  const scrollAtTop = useScrollTop();

  return (
    <div
      className={`pointer-events-none fixed bottom-[10%] left-1/2 mt-12 flex -translate-x-1/2 flex-col items-center justify-center gap-2 justify-self-end text-white transition-opacity duration-300 ${scrollAtTop ? 'opacity-60' : 'opacity-0'}`}
    >
      <p className="tracking-wide">scroll down</p>
      <div className="relative h-10 w-5 rounded-full border-2 border-gray-100 p-1">
        <div className="h-2 w-2 animate-scroll rounded-full bg-gray-100 will-change-transform" />
      </div>
    </div>
  );
}
