'use client';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';
import { Group } from 'three';
import { useRef } from 'react';

function Earth() {
  const gltf = useGLTF('models/earth/scene.gltf');
  const groupRef = useRef<Group>(null);

  return (
    <group ref={groupRef} dispose={null}>
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

export default function EarthCanvas() {
  return (
    <Canvas frameloop="demand">
      {/* <OrbitControls enableZoom={false} /> */}
      <Earth />
    </Canvas>
  );
}
