"use client"
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () =>{
    return(
        <motion.div 
        id="hero"
        className="flex flex-row justify-between items-center py-8 lg:px-12 md:px-6 px-2 max-w-screen-2xl mx-auto my-0"
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
            className="text-page-white-200 font-bebas sm:text-3xl text-xl"
            whileHover={{color: "#FFFFFF"}}
            >
                <Link href="#hero">WebDevPro</Link>
            </motion.h2>
            <ul className="flex flex-row justify-center items-center md:gap-11 sm:gap-7 gap-5 text-xl">
                <motion.li 
                className="text-page-white-200 sm:text-2xl text-[18px] font-bebas" 
                whileHover={{color: "#FFFFFF"}}
                >
                <Link href="#about">About Me</Link>
                </motion.li>
                <motion.li 
                className="text-page-white-200 sm:text-2xl text-[18px] font-bebas"
                whileHover={{ color: "#FFFFFF"}}
                >
                <Link href="#projects">Projects</Link>
                </motion.li>
                <motion.li 
                className="text-page-white-200 sm:text-2xl text-[18px] font-bebas"
                whileHover={{color: "#FFFFFF"}}
                >
                <Link href="#contact">Contact Me</Link>
                </motion.li>
            </ul>
        </motion.div>
    )
}

export default Navbar;