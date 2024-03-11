'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, useGLTF } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';
import { Group } from 'three';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

type Props = {
  tl: gsap.core.Timeline;
};

function Earth({ tl }: Props) {
  const gltf = useGLTF('models/earth/scene.gltf');
  const ref = useRef<Group>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta / 6;
    }
  });

  useGSAP(() => {
    if (ref.current) {
      tl.fromTo(
        ref.current.position,
        { x: 3, y: 1.3, z: 0 },
        { x: -0.5, y: -0.5, z: 0 }
      );
    }
  });

  return (
    <group ref={ref} dispose={null} rotation={[0, 0, 0.409]}>
      <mesh>
        <ambientLight intensity={1} />
        <primitive object={gltf.scene} scale={1} />
      </mesh>
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
      >
        <directionalLight
          castShadow
          position={[10, 20, 15]}
          shadow-camera-right={8}
          shadow-camera-top={8}
          shadow-camera-left={-8}
          shadow-camera-bottom={-8}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          intensity={1.5}
          shadow-bias={-0.0001}
        />
      </PerspectiveCamera>
      <Earth tl={tl} />
    </Canvas>
  );
}
