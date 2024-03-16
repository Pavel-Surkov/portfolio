/* eslint @typescript-eslint/no-unsafe-call: 0 */
/* eslint @typescript-eslint/no-unsafe-member-access: 0 */

'use client';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useMemo, useRef } from 'react';
import * as random from 'maath/random/dist/maath-random.esm';
import type * as THREE from 'three';

function Stars() {
  const pointsRef = useRef<THREE.Points>(null);

  const sphere = useMemo(
    () =>
      random.inSphere(new Float32Array(3 * 380), {
        radius: 5,
      }) as Float32Array,
    []
  );

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x -= delta / 20;
      pointsRef.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group>
      <Points ref={pointsRef} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          scale={0.5}
          transparent
          color="#f0f3ff"
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
