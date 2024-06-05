'use client'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'


export default function Front(props) {
  const { nodes, materials } = useGLTF('/models/alien_planet-transformed.glb')
  
  const myMesh =useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() *0.5;
    myMesh.current.rotation.y = a;
  });
  
  return (
    <group {...props} dispose={null}
    ref={myMesh}
    scale={[1.8,1.8,1.8]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.Planet}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.Clouds}
        scale={1.025}
      />
    </group>
  )
}

useGLTF.preload('/models/alien_planet-transformed.glb')
