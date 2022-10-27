import Link from 'next/link';
import React from 'react'
import { Cursor,  useTypewriter } from 'react-simple-typewriter'
import Backgroundcircles from './Backgroundcircles';
import Image from 'next/image'

type Props = {}

function Hero({}:Props) { 
    const {text, count} = useTypewriter({
        words:[
            "Hi The Name is Emmanuel Tokula ",
            "A-Nigga-Who-Loves-Problems",
            "But-Really-Enjoys-coding"
       ],
       loop:true,
       delaySpeed:2000
   
   
        
      });


   
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center" >
   <Backgroundcircles/>
   <img className="relative object-cover mx-auto rounded-full w-52 h-52 "
     src="/pic.JPG"  alt="" />

     <div  className="z-20" >
        <h2 className="text-sm text-gray-500 uppercase pd-12 tracking-[10px]" > Software Engineer</h2>
     <h1  className="px-10 text-3xl font-semibold lg:text-5xl" >
      <span className="mr-3" >{text}</span>
      <Cursor  />
      </h1>

      <div className="pt-5" >
        <Link href="#about">
        <button   className="heroButton">About</button>
        </Link>
        <Link href="#experience">
        <button   className="heroButton">Experience </button>
        </Link>

        <Link href="#skills">
        <button   className="heroButton">Skills</button>
        </Link>

        <Link href="#project">
        <button   className="heroButton">Project</button>
        </Link>

        
      </div>

     </div>
    

     
    </div>
  )
}

export default Hero
