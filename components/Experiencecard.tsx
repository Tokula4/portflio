import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
type props ={}

function Experiencecard({}:props) {
  return (
    <article className="flex flex-col items-center flex-shrink-0 rounded-lg 
                        space-y-7 w-[400px]  md:w-[500px]  xl:w-[800px]  snap-center bg-[#292929] opacity-40
                        cursor-pointer transition-opacity duration-200 overflow-hidden p-10 hover:opacity-100 " >
        <motion.img 
        
        initial={{
            y:0,
            opacity:0
        }}

        transition={{
            duration:1.2,
        }}

        whileInView={{
            y:1,
            opacity:1
        }}

        viewport={{ once:true,  }}

        className="w-32 h-32 rounded-full object-cover object-center 
        xl:-w-[200px] xl:-w-[200px]"  src="/Instagram-Icon.png"  />

        <div className="px-0 md:px-10" >
            <h3 className="text-4xl font-light " >Frontend Developer</h3>
            <p  className="mt-1 text-2xl font-bold" >At EJ Limited</p>
            <div  className="flex my-2 space-x-2 " >

                <Image className="w-10 h-10 rounded-full" src="/next.png" />

                <Image className="w-10 h-10 rounded-full" src="/next.png" />

                <Image className="w-10 h-10 rounded-full" src="/next.png" />
                
            </div>
            <p  className="py-5 text-gray-300 uppercase" >  started  work .....    ended...... </p>

            <ul  className="ml-5 space-y-4 list-disc " >
                <li>  Summary Points</li>
                <li>  Summary Points</li>
                <li>  Summary Points</li>
                <li>  Summary Points</li>
               
            </ul>
            </div>
    </article>
  )
}

export default Experiencecard
