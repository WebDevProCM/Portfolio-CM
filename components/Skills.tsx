"use client"

import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion";
import SkillProgress from '@/components/animations/SkillProgress';
import { BorderBeam } from './ui/border-beam';


const Skills = () => {
    const skills = [
        {stack:"Javascript", percent: 95},
        {stack:"Typescript", percent: 85},
        {stack:"Node.js/Epress.js", percent: 95},
        {stack:"Mongodb/Mysql", percent: 85}, 
        {stack:"ReactJS", percent: 90},
        {stack:"NextJs", percent: 85},
        {stack:"CSS\nFrameworks", percent: 90},
        {stack:"Authentication\nAuthorization", percent: 80}
    ]
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {once: true});

    return (
        <div className="flex flex-col justify-around gap-14 items-center max-w-[1400px] mx-auto text-center my-[200px] lg:px-12 md:px-5 px-1">
            
            {/* <BackgroundGradient 
            containerClassName="sm:w-[350px] w-[260px] sm:h-[350px] h-[260px] rounded-[175px] flex justify-center items-center"
            > */}
            <motion.div 
                className="dark:bg-[#00010a] bg-white relative sm:min-w-[350px] min-w-[260px] sm:min-h-[350px] min-h-[260px] rounded-full flex justify-center items-center"
                initial={{scale: 0}}
                whileInView={{scale: 1}}
                viewport={{once:true}}
                transition={{duration: 1, type: 'spring', bounce: 0.45}}
            >

                <motion.h1 className="text-[4rem] whitespace-nowrap font-bebas dark:text-page-purple text-page-black uppercase"
                    initial={{scaleY: 0, opacity: 0}}
                    whileInView={{scaleY: 1, opacity: 1}}
                    viewport={{once: true}}
                    transition={{delay: 0.5}}
                >
                    TOP SKILLS
                </motion.h1>

                <BorderBeam size={250} duration={12} delay={9} colorFrom='#CBACF9' colorTo='#E4ECFF'/>
            </motion.div>
            {/* </BackgroundGradient> */}
            <div className="flex flex-wrap sm:gap-28 gap-12 justify-center items-end" ref={ref}>

            {isInView ?
            skills.map((skill, index) =>{
                return(          
                <div key={index} className="text-center">
                <motion.p className="sm:text-lg text-[13px] mb-4 dark:text-page-white text-text-page-light font-bold block uppercase whitespace-pre-line"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{delay: 0.3}}
                >
                    {skill.stack}
                </motion.p>
                <SkillProgress percent={skill.percent}/>
                </div>)
            })
            : ""
            }

            </div>
        </div>
    )
}

export default Skills