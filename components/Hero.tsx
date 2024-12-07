"use client"

import React from 'react'
import profileImg from "@/public/images/profile img1.jpg";
import {motion} from "framer-motion";
import WordPullUp from './ui/word-pull-up';
import FlipText from './ui/flip-text';
import Image from 'next/image';
import GradualSpacing from './ui/gradual-spacing';
import DotPattern from './ui/dot-pattern';
import { cn } from '@/lib/utils';
import HeroMarguee from './HeroMarguee';
import PageTransition from './PageTransition';

function Hero() {
    return (
        <div className={"relative max-w-[1400px] lg:px-12 md:px-5 px-1 mx-auto"}>
            {/* <PageTransition /> */}
    
            <div className="flex md:flex-row flex-col justify-around items-center h-full md:gap-0 gap-4 z-10">     

                <div className="lg:shrink-0 shrink z-20 md:mt-[0] mt-[40px]">
                    {/* <WordPullUp
                    className="xl:text-7xl md:text-6xl text-5xl font-fjalla text-page-black-300 text-left tracking-[-0.02em] md:leading-[5rem]"
                    words="Hello There!"
                    /> */}
                    <motion.h1
                        className='xl:text-7xl md:text-6xl text-5xl font-roboto text-page-black-300 md:text-left text-center tracking-[-0.02em] md:leading-[5rem]'
                        initial={{scaleY: 0, transformOrigin: "bottom", opacity: 0}}
                        whileInView={{scaleY: 1, opacity: 1}}
                        viewport={{once: true}}
                        transition={{duration: 0.3, delay: 7.2}}
                    >
                        HELLO THERE!
                    </motion.h1>

                    <WordPullUp
                    className="xl:text-9xl lg:text-8xl md:text-7xl text-6xl font-fjalla md:my-[20px] my-7 tracking-[-0.02em] md:leading-[5rem]"
                    words="I`M CHAMOD..."
                    />
                </div>

                <motion.div 
                className="flex shrink justify-center items-start z-20"
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
                    
                    <Image src={profileImg} width={330} height={440} priority sizes="(min-width:768px) 430px, 300px" 
                    className="md:max-w-[330px] max-w-[280px] rounded-[20px]" alt="Profile picture"/>
                </motion.div>

                {/* <div className='md:absolute relative bottom-0 z-20 mx-auto md:-mb-14 max-w-[1200px]'>
                    <GradualSpacing
                        className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bebas text-center text-page-white-100 sm:leading-8 md:leading-[43px] lg:leading-[35px]"
                        text="A passionate full-stack developer with the enthusiasm to build responsive and modern websites and to learn and stay updated with the latest technologies."
                    />
                </div> */}
            </div>
          
            {/* <HeroMarguee /> */}
            {/* <DotPattern
                width={20}
                height={20}
                cx={1}
                cy={1}
                cr={1}
                className={cn(
                "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                )}
            /> */}
      
        </div>
    )
}

export default Hero