'use client'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'

export default function Aboutmodel(props) {

  const myMesh = useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() * 0.5;
    myMesh.current.rotation.y = a;
  });

  // const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/aboutmodel.glb')
  // const { actions } = useAnimations(animations, group)
  return (
    <group  {...props} dispose={null}
      scale={[7.6, 7.6, 7.6]} >
      <group name="Sketchfab_Scene">
        <group name="GLTF_SceneRootNode" scale={0.001}>
          <group name="emite_1_a_13" position={[65, -2, -603.78]}>
            <mesh name="Object_30" geometry={nodes.Object_30.geometry} material={materials.emit} />
          </group>
          <group name="emite_1_a_12" position={[-526, -56, -603.78]}>
            <mesh name="Object_30" geometry={nodes.Object_30.geometry} material={materials.emit} />
          </group>
          <group name="emite_1_b_14" position={[-126, -92, -27.203]}>
            <mesh name="Object_32" geometry={nodes.Object_32.geometry} material={materials.emit} />
          </group>
        </group>
        <group ref={myMesh}>
          <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.spaceship_main} scale={0.045} />
          <mesh name="Object_26" geometry={nodes.Object_26.geometry} material={materials.misc} scale={0.045} />
          <mesh name="Object_36" geometry={nodes.Object_36.geometry} material={materials.emit2} scale={0.045} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/aboutmodel.glb')
