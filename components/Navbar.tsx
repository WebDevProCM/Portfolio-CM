"use client"
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
// import { ModeToggle } from "./ModeToggle";

const Navbar = () =>{
    const {scrollYProgress} = useScroll();

    return(
        <motion.div 
        id="hero"
        className={`fixed top-0 left-0 flex flex-row justify-between items-center lg:px-12 md:px-6 px-2 py-5 
        bg-bg-dark/5 rounded-b-[16px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[4px] border border-white/11 
           w-full max-w-screen-2xl mx-auto my-0 z-50`}
        initial={{
            opacity:0
        }}
        animate={{
            opacity:1
        }}
        transition={{
            duration:1
        }}
        >
            <motion.h2 
            className="dark:text-page-white-200 text-page-black font-bebas sm:text-3xl text-xl"
            whileHover={{color: "#FFFFFF"}}
            >
                <Link href="#hero">WebDevPro</Link>
            </motion.h2>
            <ul className="flex flex-row justify-center items-center md:gap-11 sm:gap-7 gap-5 text-xl">
                <motion.li 
                className="dark:text-page-white-200 text-page-black sm:text-2xl text-[18px] font-bebas" 
                whileHover={{color: "#FFFFFF"}}
                >
                <Link href="#about">About Me</Link>
                </motion.li>
                <motion.li 
                className="dark:text-page-white-200 text-page-black sm:text-2xl text-[18px] font-bebas"
                whileHover={{ color: "#FFFFFF"}}
                >
                <Link href="#projects">Projects</Link>
                </motion.li>
                <motion.li 
                className="dark:text-page-white-200 text-page-black sm:text-2xl text-[18px] font-bebas"
                whileHover={{color: "#FFFFFF"}}
                >
                <Link href="#contact">Contact Me</Link>
                </motion.li>
                
                {/* <li><ModeToggle /></li> */}
            </ul>
        </motion.div>
    )
}

export default Navbar;