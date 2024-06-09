'use client'
import React from "react";
import bg from "../../public/background/hm1.png"
import Image from "next/image";
import RenderModel from "@/components/RenderModel"
import Front from "@/components/models/frontpage"
import Navigation from "@/components/navigation/index"
export default function Home() {

  return (

    <main className="flex min-h-screen flex-auto items-center justify-center relative">
      <Image src={bg} alt='background-image' fill className='w-full h-full object-cover object-center opacity-80 -z-50 ' />

      <div className="w-full h-screen">
        <Navigation/>
        <RenderModel>
          <Front/>
        </RenderModel>

      </div>
    </main>

  );
}
