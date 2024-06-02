'use client'
import React from "react";
import bg from "../../public/background/homepage.png"
import Image from "next/image";
export default function Home() {

  return (

    <main className="flex min-h-screen flex-auto items-center justify-center relative">
      <Image src={bg} alt='background-image' className='w-full h-full object-cover object-center opacity-60' />

      <div className="w-full h-screen">
        
        //24:02
      </div>
    </main>

  );
}
