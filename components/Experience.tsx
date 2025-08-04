"use client"

import React, { useRef } from 'react'
import {motion, useScroll, useTransform} from "framer-motion";

function Experience() {
    const aboutRef = useRef(null);
    const {scrollYProgress} = useScroll({target: aboutRef, offset: ["start end", "end end"]});
    const scaleText = useTransform(scrollYProgress, [0, 1], [1, 2]);

  return (
    <div 
        ref={aboutRef}
        className='relative max-w-[1400px] mx-auto text-center md:my-[200px] my-[100px] lg:px-12 md:px-5 px-1 z-10 overflow-x-hidden scroll-mt-20' 
        id="about"
    >
      
        <motion.h1 className='md:text-[50px] text-[40px] dark:text-page-purple text-page-black font-bebas mt-6' style={{scale: scaleText}}>
            Experience
        </motion.h1>

        <motion.hr 
        className='max-w-[90px] h-[10px] bg-page-purple mx-auto'
        style={{scaleX: scrollYProgress}}
        >
        </motion.hr>
        
        <div className="mb-6 text-left max-w-[1000px] mx-auto space-y-10 mt-16">
            <motion.div
                className='pl-3'
                initial={{x: 400, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                // viewport={{once: true}}
                transition={{duration: 1, ease:"easeInOut"}}
            >
                <h3 className="text-xl font-semibold">Freelance Frontend Developer</h3>
                <p className="text-sm text-gray-300">Oct 2024 – Present</p>
            </motion.div>

            <div 
                className='flex gap-8 flex-wrap justify-around'
            >
                <motion.div 
                    className='max-w-[380px] flex flex-col gap-3 bg-white/10 backdrop-blur-md border-page-purple border-2 rounded-lg p-4 shadow-md shadow-blue-400'
                    initial={{opacity: 0}}
                    whileHover={{shadow: "1px"}}
                    whileInView={{opacity: 1}}
                    transition={{duration:1, delay:0.8, ease: 'easeInOut'}}
                >
                    <h1 className='text-xl text-gray-200 font-bold border-b-page-purple border-b'>Project Management System Frontend</h1>
                    <p className='text-gray-300 text-sm'>
                        Delivered a spreadsheet‑style project‑management dashboard in Next.js, TypeScript, TanStack Table, and Redux that
                        matched Figma specs exactly. Implemented server‑side filtering & Excel‑style cell edits that cut data entry time
                    </p>
                </motion.div>

                <motion.div 
                    className='max-w-[380px] flex flex-col gap-3 bg-white/10 backdrop-blur-md border-page-purple border-2 rounded-lg p-4 shadow-md shadow-blue-400'
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}} 
                    transition={{duration:1, delay:0.8, ease: 'easeInOut'}}   
                >
                    <h1 className='text-xl text-gray-200 font-bold border-b-page-purple border-b'>Public-Facing E-Commerce Website</h1>
                    <p className='text-gray-300 text-sm'>
                        Integrated blog and tutorial pages into the public-facing Next.js e-commerce website and admin dashboard project.
                        Also extended the backend by implementing corresponding Mongoose models and Express.js API endpoints
                    </p>
                </motion.div>

                <motion.div 
                    className='max-w-[380px] flex flex-col gap-3 bg-white/10 backdrop-blur-md border-page-purple border-2 rounded-lg p-4 shadow-md shadow-blue-400'
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration:1, delay:0.8, ease: 'easeInOut'}}
                >
                    <h1 className='text-xl text-gray-200 font-bold border-b-page-purple border-b'>Garment Factory Management System</h1>
                    <p className='text-gray-300 text-sm'>
                        Integrated 25+ REST API endpoints into an existing Garment Factory Management System (React + TypeScript),
                        enabling dynamic data rendering and improving system interactivity
                    </p>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Experience