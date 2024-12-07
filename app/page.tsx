"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import HeroMarguee from "@/components/HeroMarguee";
import IconsSection from "@/components/IconsSection";
import PageTransition from "@/components/PageTransition";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="relative w-screen overflow-x-hidden mx-auto">
      <PageTransition />
      <Hero />
      <HeroMarguee />
      <About />
      <Skills />
      <IconsSection />
      <Projects />
      <Contact />
    </main>
  );
}
