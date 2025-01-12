"use client"

import React, { useRef } from 'react'
import {motion, useScroll, useTransform} from "framer-motion";

function About() {
    const aboutRef = useRef(null);
    const {scrollYProgress} = useScroll({target: aboutRef, offset: ["start end", "end end"]});
    const scaleText = useTransform(scrollYProgress, [0, 1], [1, 2])

  return (
    <>

    <div 
    ref={aboutRef}
    className='relative max-w-[1400px] mx-auto text-center md:my-[200px] my-[100px] lg:px-12 md:px-5 px-1 z-10 overflow-x-hidden' id="about">
      
      <motion.h1 className='md:text-[50px] text-[40px] text-page-purple font-bebas mt-6' style={{scale: scaleText}}>
          ABOUT ME
      </motion.h1>

      <motion.hr 
      className='max-w-[90px] h-[10px] bg-page-purple mx-auto'
      style={{scaleX: scrollYProgress}}
      // initial={{scaleX: 0}}
      // whileInView={{scaleX: 1}}
      // viewport={{ once: true }}
      // transition={{delay: 0.3, type:"spring"}}
      >
      </motion.hr>
      
      <motion.p 
      className='mt-[80px] mx-auto font-fjalla md:text-[20px] text-[15px] leading-10 max-w-[900px]'
      initial={{x: 400, opacity: 0}}
      whileInView={{x: 0, opacity: 1}}
      viewport={{once: true}}
      transition={{duration: 1}}
      >
          I&#39;m Chamod Udugama, a zealous Full Stack Developer with a strong foundation in JavaScript.  
          I’m currently working as a freelancer, where I specialize in building modern, professional websites 
          that align with the latest trends and feature sleek animations for an enhanced user experience.
          Looking ahead, I’m planning to complete the final year of my software engineering degree to deepen 
          my expertise and advance my career. My ultimate goal is to become a professional and senior software
          engineer, leading innovative projects and creating impactful digital solutions.
          I’m driven by the desire to craft user-friendly, aesthetically pleasing, and high-performance web and
           mobile applications. Whether it’s collaborating on a team or tackling challenges independently, I’m
            always excited to push boundaries and grow as a developer.
      </motion.p> 
    </div>

    </>
  )
}

export default About