'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Preload, useGLTF } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';
import { Mesh } from 'three';
import { useRef } from 'react';

function Earth() {
  const meshRef = useRef<Mesh>(null);
  const gltf = useGLTF('models/earth/scene.gltf');

  // TODO: Animate
  useFrame((state, delta) => {
    if (meshRef.current) {
    }
  });

  return (
    <mesh ref={meshRef}>
      <hemisphereLight intensity={2} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-100, 50, 0]}
        angle={0.12}
        penumbra={1}
        intensity={1}
      />
      <primitive
        object={gltf.scene}
        scale={2}
        position-y={0}
        position-x={0}
        camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
      />
    </mesh>
  );
}

export default function EarthCanvas() {
  return (
    <Canvas shadows frameloop="demand">
      <OrbitControls enableZoom={false} />
      <Earth />
      <Preload all />
    </Canvas>
  );
}
