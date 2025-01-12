"use client"

import React from 'react'
import {motion} from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

function Contact() {
  return (
    <div className='max-w-[1400px] mx-auto text-center md:mt-[200px] mt-[100px] lg:px-12 md:px-5 px-1' id="contact">

        <h1 className='max-w-[600px] mx-auto sm:leading-[45px] leading-10 md:text-[50px] text-[40px] text-white font-bebas'>
            {/* I&#39;m Ready to take your dreamed website to the  */}
            Do you have a 
            <span className="text-page-purple"> job opportunity </span>
            or want to take your dreamed website to the
            <span className="text-page-purple"> next level</span>?
        </h1>

        <motion.p 
            className='mt-[40px] mx-auto font-fjalla md:text-[20px] text-[15px] leading-[30px] max-w-[900px] text-page-white-100'
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 0.5, delay: 0.5}}
        >
            Reach out to me today, Let&#39;s build something amazing. Your website awaits.
        </motion.p>

        <button className="p-[3px] relative mt-[20px] font-fjalla">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                <Link href="http://www.linkedin.com/in/chamod-udugama" target='_blank'>Reach to Chamod Ud</Link>
            </div>
        </button>

        <div className='flex justify-between items-end mt-[130px] lg:px-12 md:px-5 px-1'>
            <p className='font-fjalla md:text-[15px] text-[10px] uppercase'>copyright &#169; 2025 Chamod Udugama</p>
            <div className='flex items-center gap-[10px]'>
                <Link href="https://github.com/WebDevProCM"><FaGithub size={30}/></Link>
                <Link href="mailto:chamodmenuka320@gmail.com"><SiGmail size={30}/></Link>
                <Link href="http://www.linkedin.com/in/chamod-udugama"><FaLinkedin size={30}/></Link>

            </div>
        </div>

    </div>
  )
}

export default Contact