'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, useGLTF } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';
import { type Group } from 'three';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

type Props = {
  tl: gsap.core.Timeline;
};

function Earth({ tl }: Props) {
  const gltf = useGLTF('models/earth/scene.gltf');
  const ref = useRef<Group>(null);
  const innerRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (innerRef.current) {
      innerRef.current.rotation.y += delta / 6;
    }
  });

  useGSAP(() => {
    if (ref.current) {
      tl.to(ref.current.position, { x: -2.2, y: -2.2, z: 0, ease: 'none' });
    }
  });

  return (
    <group
      ref={ref}
      dispose={null}
      position={[3, 1.2, 0]}
      rotation={[0.4, 0, 0.89]}
    >
      <group ref={innerRef}>
        <mesh>
          <ambientLight intensity={2} />
          <primitive object={gltf.scene} scale={1} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload('models/earth/scene.gltf');

export default function EarthCanvas({ tl }: Props) {
  return (
    <Canvas>
      <OrbitControls
        enableDamping={false}
        enablePan={false}
        enableRotate={false}
        enableZoom={false}
        makeDefault
      />
      <PerspectiveCamera
        makeDefault
        far={200}
        fov={30}
        near={0.1}
        position={[3, 3, 0]}
      />
      <Earth tl={tl} />
    </Canvas>
  );
}
