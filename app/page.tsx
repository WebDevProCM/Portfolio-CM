"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import HeroMarguee from "@/components/animations/HeroMarguee";
import IconsSection from "@/components/IconsSection";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/animations/PageTransition";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import {motion} from "framer-motion";
import Education from "@/components/Education";

export default function Home() {
  return (
    <motion.main 
      className="relative w-full overflow-x-hidden overflow-y-hidden mx-auto"
      initial={{height: "100vh", overflowY: "hidden"}}
      animate={{height: "auto", overflowY: "auto"}}
      transition={{delay: 7}}  
    >
      <PageTransition />
      <Navbar />
      <Hero />
      <HeroMarguee />
      <About />
      <Education />
      <Skills />
      <IconsSection />
      <Projects />
      <Contact />
    </motion.main>
  );
}
