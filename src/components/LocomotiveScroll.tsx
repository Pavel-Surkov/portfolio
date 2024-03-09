'use client';

import { useEffect } from 'react';

export default function LocomotiveScroll() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll({
        smooth: true,
        lerp: 0.5,
      });
    })();
  }, []);

  return null;
}
