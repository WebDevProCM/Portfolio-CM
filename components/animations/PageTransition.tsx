"use client";

import { useEffect, useState } from "react";
import {motion} from "framer-motion";
import WordRotate from "../ui/word-rotate";

interface screenSizeType{
    height: number,
    width: number 
}

const BlackSvg = ({height, width}: screenSizeType) =>{
    const initialPath = `
        M0 300 

        Q${width/2} 0 ${width} 300

        L${width} ${height + 300}

        Q${width/2} ${height + 600} 0 ${height + 300}

        L0 0
    `

    const targetPath = `
        M0 300

        Q${width/2} 0 ${width} 300

        L${width} ${height}

        Q${width/2} ${height} 0 ${height}

        L0 0
    `

    return(
        <motion.svg 
            initial={{top: "-300px"}}
            animate={{top: "-100vh", transition: {duration: 2, ease: [0.75, 0, 0.24, 1], delay: 6}, transitionEnd: {top: "100vh"}}}
            className="absolute z-40 cursor-none pointer-events-none left-0 -top-[300px] w-full h-[calc(100vh+600px)]"
        >
            <motion.path
                fill="#141516"
                initial={{d: initialPath}} 
                animate={{d: targetPath, transition: {duration: 2, ease: [0.75, 0, 0.24, 1], delay: 6}}}
                d={initialPath}
            ></motion.path>
        </motion.svg>
    )
} 

function PageTransition() {
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


    const parentVariant = {
        animate: {
            display: "none",
            transition: {duration: 1 ,delay: 6 ,staggerChildren: 1 },
        },
    };

  return (    
    <motion.div className="fixed h-screen w-screen top-0 left-0 bg-[#141516] z-[99] overflow-hidden flex justify-center items-center"
        animate={{backgroundColor: "transparent"}}
        transition={{delay: 1}}
    >
        <motion.div
            variants={parentVariant}
            initial= "initial"
            animate= "animate"
        >

        <WordRotate
        className="relative text-white text-6xl z-50 text-center font-bebas"
        words={["Building the future,", "one line of code at a time", "Welcome to my portfolio", "your gateway to my digital journey", " "]}
        duration={1650}
        />

        </motion.div>
        {screenSize.width > 0 && <BlackSvg {...screenSize}/>} 
    </motion.div>
  )
}

export default PageTransition