'use client'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'

export default function Rain(props) {
  const { nodes, materials } = useGLTF('/models/FabConvert.com_rain-transformed.glb')
  const myMesh =useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() *0.5;
    myMesh.current.rotation.y = a;
  });

  return (
    <group {...props} dispose={null}
    ref={myMesh}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        position={[-4.36, -0.656, -0.245]}
        scale={5.937}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere.geometry}
        material={nodes.Icosphere.material}
      />
    </group>
  )
}

useGLTF.preload('/models/FabConvert.com_rain-transformed.glb')