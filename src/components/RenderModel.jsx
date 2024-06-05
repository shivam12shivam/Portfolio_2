'use client'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import clsx from 'clsx'
import { Environment } from '@react-three/drei'
// clx works almost same as `` backtiks to input multiple things together

function RenderModel({children,classname}) {
  return (
    <Canvas className={clsx("w-screen -z-50 h-screen relative",classname)}>
        <Suspense> {/*fallback={null} */}
            {children}
        </Suspense>
        <Environment preset='city'/>
        {/* Environment will change the sourrounding of our model its lighting conditions */}
    </Canvas>
  )
}

export default RenderModel