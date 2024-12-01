import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import IconsSection from "@/components/IconsSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="max-w-[1400px] mx-auto">
      <Hero />
      <About />
      <Skills />
      <IconsSection />
      <Projects />
      <Contact />
    </main>
  );
}
