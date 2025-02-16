"use client";

import React, { useEffect, useState } from 'react'
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { motion } from 'framer-motion';
import Particles from './ui/particles';


function IconsSection() {
    const iconsArray = [
        <TbBrandJavascript size={120} key={4} className='md:mx-[40px] mx-[20px] my-[40px]'/>,
        <SiTypescript size={85} key={10} className='md:mx-[40px] mx-[20px] my-[40px]'/>,
        <FaReact size={100} key={1} className='md:mx-[40px] mx-[20px] my-[40px]'/>,
        <RiNextjsFill size={120} key={9} className='md:mx-[40px] mx-[20px] my-[40px]'/>,
        <FaNodeJs size={100} key={7} className='md:mx-[40px] mx-[20px] my-[40px]'/>,
        <SiExpress size={110} key={8} className='md:mx-[40px] mx-[20px] my-[40px]'/>,
        <DiMongodb size={100} key={2} className='md:mx-[40px] mx-[20px] my-[40px]'/>,
        <SiMysql size={110} key={3} className='md:mx-[40px] mx-[20px] my-[40px]'/>,
        <RiTailwindCssFill size={100} key={6} className='md:mx-[40px] mx-[20px] my-[40px]'/>,
        <FaBootstrap size={110} key={5} className='md:mx-[40px] mx-[20px] my-[40px]'/>,
    ];

    const [screenSize, setScreenSize] = useState<boolean>(true);
  
    useEffect(() =>{
      const resize = () =>{
        setScreenSize(window.innerWidth > 500);
      }
  
      resize();
      window.addEventListener("resize", resize);
  
      return () => window.removeEventListener("resize", resize);
    }, [])

    const bouncingAnimation = {y:-25 ,scaleY:0.93, transition:{duration: 7 ,type: "spring", bounce: 1}}

    const container = {
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.3
        }
      }
    }
    const iconAnimations = {
      hidden: { opacity: 0 },
      show: { opacity: 1 }
    }

  return (
    <>

      <div 
        className='relative overflow-hidden flex flex-row flex-wrap justify-center items-center max-w-[1400px] mx-auto my-[200px] lg:px-12 md:px-5 px-1'>
        <div className="w-full absolute inset-0 h-full">
          <Particles
            className="absolute inset-0"
            quantity={300}
            ease={80}
            color={"#CBACF9"}
            refresh
          />
        </div>
        <motion.div
          className='w-full flex flex-wrap justify-center items-center'
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{once: true}}
        >
          {iconsArray.map((icon, i) =>{
            return(
              <motion.div
              className='relative z-20'
              key={i}
              variants={iconAnimations}
              whileHover={screenSize ? bouncingAnimation : undefined}
              whileTap={!screenSize ? bouncingAnimation : undefined}
              viewport={{once: true}}
              transition={{duration: 0.8}}
              >
                {icon}
              </motion.div>
            )
          })}
        </motion.div>
      </div>

    </>
  )
}

export default IconsSection