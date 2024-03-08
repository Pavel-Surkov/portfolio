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
      random.inSphere(new Float32Array(3 * 540), {
        radius: 5,
      }) as Float32Array,
    []
  );

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x -= delta / 10;
      pointsRef.current.rotation.y -= delta / 10;
    }
  });

  return (
    <group rotation={[0, 0, 0]}>
      <Points ref={pointsRef} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#fff"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function StarsCanvas() {
  return (
    <div className="absolute inset-0 z-[-1] h-auto w-full">
      <Canvas>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}
