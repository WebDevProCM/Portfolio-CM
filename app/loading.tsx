"use client";

import React from 'react'
import {motion} from "framer-motion";

export default function Loading() {
  return (
    <motion.div 
        className='flex justify-center items-center w-screen h-screen bg-black'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
    >
        <motion.p
            className='text-white text-4xl font-bebas'
            animate={{opacity: [0,1,1,0]}}
            transition={{duration: 4, repeat: Infinity, repeatType:"loop", ease: "easeInOut"}}
        >
            One moment, please...
        </motion.p>
    </motion.div>
  )
}