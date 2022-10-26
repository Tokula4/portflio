import { motion } from 'framer-motion'
import React from 'react'

type props= {}

function About({}:props) {
  return (
    <motion.div 
    initial={{ opacity:0 }}
    whileInView={{ opacity:1 }}
    transition={{ duration:1.5 }}

    
    className="relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly " >
        <h3 className="absolute  top-24 lg:top-10 tracking-[20px] uppercase text-gray-500 text-2xl" >About</h3>
        <motion.img 
        initial={{
            x:-200,
            opacity:0
        }}

        transition={{
            duration:1.2,
        }}

        whileInView={{
            x:0,
            opacity:1
        }}

        viewport={{ once:true,  }}


        
         className=" -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 object-cover rounded-full  md:rounded-lg 
         md:w-64 md:h-95 xl:w-[500px] xl:h-[550px]" 
        src="/pic-2.JPG"  alt=""
        />

        <div className="px-0 space-y-10 md:px-10" >
            <h4 className="text-4xl text-semibold" >
                Here is a <span className="underline decoration-[#f7ab0a]/50" >Little</span>  Background 
            </h4>
            <p  className="text-sm" >
            Visit the repository page again; you'll see that, since we pushed it back to GitHub, <br></br>
             the README.md file is now in the file list. We can change the text in that file right on GitHub,<br></br>
              then pull the change back down to our local repository.<br></br> Start by clicking the file name link. That'll give you this page:
            </p>
        </div>
      
    </motion.div>
  )
}

export default About
