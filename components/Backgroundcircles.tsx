import { motion } from 'framer-motion'
import React from 'react'

type props = {}

function Backgroundcircles({} :props) {
  return (


    <motion.div 
    initial={{
    
       opacity:0,
        
  
      }}
  
      animate={{
        
        opacity:[0.1, 0.2 , 0.4 , 0.8, 1.0 ,1.0 ],
        scale:[1, 2, 2, 3, 1],
        borderRadius:["20%", "20%" , "50%" , "80%", "20%"]
       

      }}
  
      transition={{
        duration:2.5,
      }}
      
      className="relative flex items-center justify-center" >

        <div  className=" absolute  border border-[#6c6b6b]  rounded-full h-[100px]  w-[100px] animate-ping mt-52 "  />

        <div  className=" absolute  border border-[#6c6b6b]  rounded-full h-[300px] animate-ping  w-[300px]  mt-52 "  />
        
        <div  className=" absolute  border border-[#6c6b6b]  opacity-20 rounded-full h-[500px]  w-[500px]  mt-52 "  />

<div  className=" absolute  border border-[#f4ab0a]  rounded-full h-[700px] animate-pluse  opacity-20 w-[700px]  mt-52 "  />

        <div  className=" absolute  border border-[#6c6b6b]  rounded-full h-[500px] opacity-20  w-[500px]  mt-52 "  />

       
    </motion.div>
  )
}

export default Backgroundcircles
