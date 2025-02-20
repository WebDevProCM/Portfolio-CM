"use client";

import { useEffect, useState } from "react";
import PageTransition from "@/components/animations/PageTransition";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ParallelText from "@/components/animations/ParallelText";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import IconsSection from "@/components/IconsSection";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import {AnimatePresence, motion} from "framer-motion"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 7500)
      }
    )()
  }, [])

  return (
    <motion.main 
      className="relative w-full overflow-x-hidden overflow-y-hidden mx-auto"
      initial={{height: "100vh", overflowY: "hidden"}}
      animate={{height: "auto", overflowY: "auto"}}
      transition={{delay: 7}}  
    >
      <AnimatePresence mode="wait">
      {isLoading && <PageTransition />}
      </AnimatePresence>
      <Navbar />
      <Hero />
      <ParallelText />
      <About />
      <Education />
      <Skills />
      <IconsSection />
      <Projects />
      <Contact />
    </motion.main>
  );
}
