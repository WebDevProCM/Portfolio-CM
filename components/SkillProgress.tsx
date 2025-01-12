"use client";

import React from 'react'
import { useEffect, useState } from "react";
import AnimatedCircularProgressBar from './ui/animated-circular-progress-bar';
import { AnimatePresence } from 'framer-motion';


function SkillProgress({percent}: {percent: number}) {
    const [value, setValue] = useState(0);
    const [circleSize, setcircleSize] = useState<string>("size-44");
 
    useEffect(() => {
      const handleIncrement = (prev: number) => {
          if (prev === percent) {
              clearInterval(interval);
              return percent;
          }
          return prev + 5;
      };

      const resize = () =>{
        setcircleSize(window.innerWidth > 500 ? "size-44" : "size-32");
      }
  
      const interval = setInterval(() => {
          setValue((prev) => handleIncrement(prev));
      }, 300);

      resize();
      window.addEventListener("resize", resize);
  
      return () => {
        clearInterval(interval); 
        window.removeEventListener("resize", resize);
      }

    }, [percent]);
    

  return (
    <main className="mx-auto text-center">
      <AnimatePresence>
        <AnimatedCircularProgressBar
          className={circleSize}
          max={100}
          min={0}
          value={value}
          gaugePrimaryColor="rgb(203 172 249)"
          gaugeSecondaryColor="rgba(0, 0, 0, 0)"
        />
      </AnimatePresence>
    </main>
  )
}

export default SkillProgress