'use client';
import { useGSAP } from '@gsap/react';
import { Preload, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import { type Group } from 'three';

function LightSaber({ tl }: { tl: gsap.core.Timeline }) {
  const gltf = useGLTF('models/skywalker-lightsaber/scene.gltf');
  const ref = useRef<Group>(null);

  useGSAP(() => {
    if (ref.current) {
      tl.to(ref.current.rotation, { z: 0.2 }, 'hero');
    }
  });

  return (
    <group ref={ref} rotation={[0, 0, 2.5]}>
      <mesh>
        <ambientLight intensity={2} />
        <primitive
          object={gltf.scene}
          position={[0, -1, 0]}
          rotation={[0, 0, -1.5708]}
          scale={0.06}
        />
      </mesh>
    </group>
  );
}

export default function LightSaberCanvas({ tl }: { tl: gsap.core.Timeline }) {
  return (
    <div className="fixed h-screen w-screen overflow-hidden">
      <Canvas>
        <LightSaber tl={tl} />
        <Preload all />
      </Canvas>
    </div>
  );
}
