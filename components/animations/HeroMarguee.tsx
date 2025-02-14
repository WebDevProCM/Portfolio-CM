"use client";

import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion";

interface screenSizeType{
  height: number,
  width: number 
}

function HeroMarguee() {
  const [screenSize, setScreenSize] = useState<screenSizeType>({height: 0, width: 0});

  useEffect(() =>{
    const resize = () =>{
        setScreenSize({
            height: window.innerHeight,
            width: window.innerWidth
        })
    }

    resize();
    window.addEventListener("resize", resize);
    window.scrollTo({top: 0, behavior: "smooth"})

    return () => window.removeEventListener("resize", resize);
  }, [])


  const delayTime:number = screenSize.width > 500 ? 5.5 : 2.5; 

  return (
    <motion.div className='relative overflow-hidden max-w-[1800px] mx-auto h-32 z-30 sm:-mt-5'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 2}}
    >
      <motion.div
        className="flex space-x-8 absolute top-0 left-0"
        animate={{ x: ["30%", "-100%"] }}
        transition={{
        repeat: Infinity,
        ease: "linear",
        delay: delayTime,
        duration: 40,
        }}
        style={{ whiteSpace: "nowrap" }}
        >
            <p
              className='lg:text-9xl text-8xl font-bebas text-center dark:text-white text-page-black'
            >
                A passionate full-stack developer with the enthusiasm to build responsive and modern websites and to learn and stay updated with the latest technologies.
            </p>
      </motion.div>

    </motion.div>
  )
}

export default HeroMarguee