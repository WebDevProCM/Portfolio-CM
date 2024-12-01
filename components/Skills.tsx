"use client"

import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion";
import SkillProgress from './SkillProgress';
import { BorderBeam } from './ui/border-beam';
import ShineBorder from './ui/shine-border';


function Skills() {
    const skills = ["Javascript", "Typescript", "Node.js/Epress.js", "Mongodb/Mysql", "ReactJS", "NextJs", "CSS Frameworks", "Authentication/ Authorization"]
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref);

    return (
        <div className="flex flex-col justify-around gap-14 items-center max-w-[1400px] mx-auto text-center my-[200px]">
            
            {/* <BackgroundGradient 
            containerClassName="sm:w-[350px] w-[260px] sm:h-[350px] h-[260px] rounded-[175px] flex justify-center items-center"
            > */}
            <motion.div 
                className="bg-[#00010a] relative sm:min-w-[350px] min-w-[260px] sm:min-h-[350px] min-h-[260px] rounded-full flex justify-center items-center"
                initial={{scale: 0}}
                whileInView={{scale: 1}}
                // viewport={{once:true}}
                transition={{duration: 0.9, type: 'spring', bounce: 0.45}}
            >

                <motion.h1 className="text-[4rem] whitespace-nowrap font-bebas text-page-purple uppercase"
                    initial={{scaleY: 0, opacity: 0}}
                    whileInView={{scaleY: 1, opacity: 1}}
                    viewport={{once: true}}
                    transition={{delay: 0.4}}
                >
                    TOP SKILLS
                </motion.h1>

                <BorderBeam size={250} duration={12} delay={9} colorFrom='#CBACF9' colorTo='#E4ECFF'/>
            </motion.div>
            {/* </BackgroundGradient> */}
            <div className="flex flex-wrap gap-12 justify-center items-center" ref={ref}>

            {isInView ?
            skills.map((skill, index) =>{
                return(          
                <div key={index} className="text-center">
                <motion.p className="sm:text-lg text-[13px] mb-4 text-page-white font-bold block uppercase"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{delay: 0.3}}
                >
                    {skill}
                </motion.p>
                <SkillProgress />
                </div>)
            })
            : ""
            }

            </div>
        </div>
    )
}

export default Skills