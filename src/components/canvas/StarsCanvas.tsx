'use client';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useMemo, useRef } from 'react';
import * as random from 'maath/random/dist/maath-random.esm';
import * as THREE from 'three';

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
      pointsRef.current.rotation.x -= delta / 30;
      pointsRef.current.rotation.y -= delta / 30;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
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
