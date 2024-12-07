"use client";

import { ReactNode, useEffect, useState } from "react";
import {AnimatePresence, motion} from "framer-motion";

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
            className="fixed z-40 cursor-none pointer-events-none left-0 -top-[300px] w-screen h-[calc(100vh+600px)]"
        >
            <motion.path
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

    const opac = screenSize.width === undefined ? 1 : 0
    const texts = ["HI THERE!", "GLAD TO HAVE YOU", "HERE..."]

    const parentVariant = {
        animate: {
        display: "none",
        transition: {duration: 1 ,delay: 6 ,staggerChildren: 1 },
        },
    };

    const textVariant = {
        initial: {opacity: 0},
        animate: {                
            opacity: [0,1,0],
            transition: {duration:6, ease: [0.76, 0, 0.24, 1]},
        }
    }
  return (    
    <motion.div className="fixed h-screen w-screen z-50"
        animate={{display: "none"}}
        transition={{delay: 9}}
    >
        <motion.div
            variants={parentVariant}
            initial= "initial"
            animate= "animate"
        >

            {texts.map((text, index) =>(
                <motion.p 
                    className='relative text-white text-6xl z-50 text-center'
                    key={index}
                    variants={textVariant}
                >

                    {text}

                </motion.p>
            ))}

        </motion.div>
        {screenSize.width > 0 && <BlackSvg {...screenSize}/>} 
    </motion.div>
  )
}

export default PageTransition