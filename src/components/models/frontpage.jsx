'use client'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Front(props) {
  const { nodes, materials } = useGLTF('/models/alien_planet-transformed.glb')
  return (
    <group {...props} dispose={null}
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
