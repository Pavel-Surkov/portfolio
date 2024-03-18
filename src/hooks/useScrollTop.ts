'use client';

import { useState, useEffect, useCallback } from 'react';

export default function useScrollTop() {
  const [scrollAtTop, setScrollAtTop] = useState(false);

  const scrollHandler = useCallback(() => {
    setScrollAtTop(window.scrollY <= 0);
  }, []);

  useEffect(() => {
    scrollHandler();
  }, [scrollHandler]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [scrollHandler]);

  return scrollAtTop;
}
