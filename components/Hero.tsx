"use client"

import React from 'react'
import profileImg from "@/public/images/profile img1.jpg";
import {motion} from "framer-motion";
import WordPullUp from './ui/word-pull-up';
import Image from 'next/image';
import { TypingAnimation } from './magicui/typing-animation';

function Hero() {
    return (
        <div className={"relative max-w-[1400px] lg:px-12 md:px-5 px-1 mx-auto sm:m-8"}>
    
            <div className="flex md:flex-row flex-col justify-around items-center h-full md:gap-0 gap-4 z-10">     

                <div className="lg:shrink-0 shrink z-20 md:mt-[0] mt-10">

                    <motion.h1
                        className='text-4xl font-roboto dark:text-page-purple text-page-black md:text-left text-center tracking-[-0.02em]'
                        initial={{scaleY: 0, transformOrigin: "bottom", opacity: 0}}
                        whileInView={{scaleY: 1, opacity: 1}}
                        viewport={{once: true}}
                        transition={{duration: 0.3, delay: 7.2}}
                    >
                        <span className='dark:text-white text-black'>HI,</span> I&apos;M CHAMOD
                    </motion.h1>

                    <TypingAnimation delay={6700} duration={300} className='md:text-7xl text-6xl dark:text-white text-page-black font-fjalla md:text-left text-center lg:my-[20px] my-3 tracking-[-0.02em]'>
                        FULL-STACK DEVELOPER
                    </TypingAnimation>

                    <motion.h1
                        className='md:text-lg text-xs font-lora dark:text-page-purple text-page-black md:text-left text-center max-w-[771px] tracking-[-0.02em]'
                        initial={{scaleY: 0, transformOrigin: "bottom", opacity: 0}}
                        whileInView={{scaleY: 1, opacity: 1}}
                        viewport={{once: true}}
                        transition={{duration: 0.3, delay: 7.2}}
                    >
                        self-motivated developer with hands-on experience in building responsive full-stack web
                        applications and a strong foundation in algorithms. Passionate about tackling complex challenges, learning
                        emerging technologies, and collaborating with teams to implement best practices.
                    </motion.h1>
                </div>

                <motion.div 
                className="relative flex shrink justify-center items-start z-20 pointer-events-none"
                initial={{
                    scaleY:0,
                    transformOrigin: "bottom",
                    opacity:0
                }}
                animate={{
                    scaleY: 1,
                    opacity:1
                }}
                transition={{
                    duration:1.3,
                    ease: "easeInOut",
                    delay: 6.2
                }}
                >
                    
                    <Image src={profileImg} width={280} height={390} priority sizes="(min-width:768px) 430px, 300px" 
                    className="md:max-w-[330px] max-w-[250px] rounded-[20px]" alt="Profile picture"/>

                </motion.div>

            </div>
      
        </div>
    )
}

export default Hero