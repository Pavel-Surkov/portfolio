'use client';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useEffect, useMemo, useRef } from 'react';
import * as random from 'maath/random/dist/maath-random.esm';
import * as THREE from 'three';
import gsap from 'gsap';

function Stars() {
  const pointsRef = useRef<THREE.Points>(null);
  const groupRef = useRef<THREE.Group>(null);

  const sphere = useMemo(
    () =>
      random.inSphere(new Float32Array(3 * 380), {
        radius: 5,
      }) as Float32Array,
    []
  );

  useEffect(() => {
    document.addEventListener('mousemove', (e: MouseEvent) => {
      const mouseX = e.pageX / window.innerWidth - 1;
      const mouseY = -(e.pageY / window.innerWidth) + 1;

      if (groupRef.current) {
        gsap.to(groupRef.current.rotation, {
          x: mouseX / 5,
          y: mouseY / 5,
          duration: 0.6,
        });
      }
    });

    return () => {
      document.removeEventListener('mousemove', (e: MouseEvent) => {
        const mouseX = e.pageX / window.innerWidth - 1;
        const mouseY = -(e.pageY / window.innerWidth) + 1;

        if (groupRef.current) {
          gsap.to(groupRef.current.rotation, {
            x: mouseX / 5,
            y: mouseY / 5,
            duration: 0.6,
          });
        }
      });
    };
  }, []);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x -= delta / 20;
      pointsRef.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group ref={groupRef}>
      <Points ref={pointsRef} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          scale={0.5}
          transparent
          color="#fff"
          size={0.012}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function StarsCanvas() {
  return (
    <div className="fixed inset-0 z-[-1] h-screen w-full">
      <Canvas>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}
