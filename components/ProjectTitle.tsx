"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const ProjectsTitle = () =>{
    const {scrollY} = useScroll();
    const scaleText = useTransform(scrollY, [1800, 2500], [1, 2])

  return (
    <motion.h1 
    className='md:text-[50px] text-[20px] text-page-purple font-bebas mx-auto text-center mt-10' id="projects"
    style={{scale: scaleText}}
    >
        SOME OF MY PROJECTS
    </motion.h1>
  )
}

export default ProjectsTitle