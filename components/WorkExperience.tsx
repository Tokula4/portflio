import { motion } from 'framer-motion'
import React from 'react'
import Experiencecard from './Experiencecard'

type props ={}

function WorkExperience({} : props) {
  return (
    <motion.div 
    initial={{ opacity:0 }}
    whileInView={{ opacity:1 }}
    transition={{ duration:1.5 }}

     className="relative flex flex-col items-center h-screen max-w-full px-10 mx-auto overflow-hidden text-left justify-evenly md:flex-row" >
        <h3 className="absolute  top-24 lg:top-5  tracking-[20px] uppercase text-gray-500 text-2xl" > Experience</h3>
       
       <div className="flex w-full p-10 space-x-5 overflow-x-scroll lg:p-10 snap-x snap-mandatory" >
        <Experiencecard/>
        <Experiencecard/>
        <Experiencecard/>
        <Experiencecard/>
       </div>
      
    </motion.div>
  )
}

export default WorkExperience
