'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';
import { Group } from 'three';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

type Props = {
  tl: gsap.core.Timeline;
};

function Earth({ tl }: Props) {
  const gltf = useGLTF('models/earth/scene.gltf');
  const ref = useRef<Group>(null);

  useGSAP(() => {
    if (ref.current) {
      gsap.registerPlugin(ScrollTrigger);
      tl.fromTo(
        ref.current.position,
        { x: -10, y: 0, z: 0 },
        { x: 10, y: 0, z: 0 }
      );
    }
  });

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 10;
    }
  });

  return (
    <group ref={ref} dispose={null}>
      <mesh>
        <ambientLight intensity={2.5} />
        <primitive
          object={gltf.scene}
          scale={2}
          position-y={0}
          position-x={0}
          camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload('models/earth/scene.gltf');

export default function EarthCanvas({ tl }: Props) {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} />
      <Earth tl={tl} />
    </Canvas>
  );
}
