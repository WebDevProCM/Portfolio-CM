"use client";

import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion";

function HeroMarguee() {

  return (
    <div className='relative overflow-hidden -mt-12 max-w-[1800px] mx-auto h-32 z-30'>
        <motion.div
            className="flex space-x-8 absolute top-0 left-0"
            animate={{ x: ["30%", "-100%"] }}
            transition={{
            repeat: Infinity,
            ease: "linear",
            delay: 5.5,
            duration: 40,
            }}
            style={{ whiteSpace: "nowrap" }}
        >
            <p
                className='lg:text-9xl text-7xl font-bebas text-center text-white'
            >
                A passionate full-stack developer with the enthusiasm to build responsive and modern websites and to learn and stay updated with the latest technologies.
            </p>
      </motion.div>
    </div>
  )
}

export default HeroMarguee