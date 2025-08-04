"use client";

import React, { useRef } from 'react'
import { useScroll, useTransform, MotionValue, motion } from 'framer-motion';
import clsx from 'clsx';


type sliderProps = {
    left: string 
    progress: MotionValue<number>
    direction: string
    className?: string 
}

const ParallelText = () => {
    const slidersContainer = useRef<HTMLDivElement | null>(null);
    const {scrollYProgress} = useScroll({
        target: slidersContainer,
        offset: ["start end", "end start"]
    })

  return (
    <motion.div className='flex flex-col overflow-hidden max-w-[1800px] mx-auto mt-14 z-30'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1, delay: 2}}
    >
        <div ref={slidersContainer}>
            <Slider left="-10%" progress={scrollYProgress} direction="left"/>
            <Slider left="-30%" progress={scrollYProgress} direction="right" className='text-stroke'/>
        </div>
    </motion.div>
  )
}

const Slider = ({left, progress, direction, className}: sliderProps) =>{
    const dir = direction === "left" ? 1 : -1
    const x = useTransform(progress, [0, 1], [-250 * dir, 250 * dir]);

    return (
        <motion.div className='flex whitespace-nowrap relative gap-6 leading-[1] font-lora' style={{left, x}} transition={{type:"spring"}}>
            <p className={clsx('sm:text-[5vw] text-[10vw] text-white', className)}>FULL-STACK DEVELOPER</p>
            <p className={clsx('sm:text-[5vw] text-[10vw] text-white', className)}>FULL-STACK DEVELOPER</p>
            <p className={clsx('sm:text-[5vw] text-[10vw] text-white', className)}>FULL-STACK DEVELOPER</p>
        </motion.div>
    )
}

export default ParallelText