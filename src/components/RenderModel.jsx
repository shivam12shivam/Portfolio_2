import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import clsx from 'clsx'
// clx works almost same as `` backtiks to input multiple things together

function RenderModel({children,classname}) {
  return (
    <Canvas className={clcx("w-screen h-screen relative",classname)}>
        <Suspense> {/*fallback={null} */}
            {children}
        </Suspense>
    </Canvas>
  )
}

export default RenderModel