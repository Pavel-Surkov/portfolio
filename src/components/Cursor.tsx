'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  const [cursorCoords, setCursorCoords] = useState({ x: 0, y: 0 });
  const [mouseDown, setMouseDown] = useState(false);

  useEffect(() => {
    if (!cursorRef.current) return;

    document.addEventListener('mousemove', (e) => {
      setCursorCoords({ x: e.clientX, y: e.clientY });
    });

    document.addEventListener('mousedown', () => {
      setMouseDown(true);
    });

    document.addEventListener('mouseup', () => {
      setMouseDown(false);
    });

    return () => {
      document.removeEventListener('mousemove', (e) => {
        setCursorCoords({ x: e.clientX, y: e.clientY });
      });

      document.removeEventListener('mousedown', () => {
        setMouseDown(true);
      });

      document.removeEventListener('mouseup', () => {
        setMouseDown(false);
      });
    };
  }, [cursorRef]);

  return (
    <motion.div
      ref={cursorRef}
      className="bg-mint pointer-events-none fixed left-0 top-0 z-50 hidden h-4 w-4 select-none rounded-full mix-blend-difference md:inline-block"
      animate={{
        x: cursorCoords.x - 8,
        y: cursorCoords.y - 8,
        scale: mouseDown ? 1.8 : 1,
      }}
      transition={{
        duration: 0.1,
        stiffness: 50,
      }}
    />
  );
}
