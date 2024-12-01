"use client";

import React from 'react'
import { useEffect, useState } from "react";
import AnimatedCircularProgressBar from './ui/animated-circular-progress-bar';
import { AnimatePresence } from 'framer-motion';


function SkillProgress() {
    const [value, setValue] = useState(0);
 
    useEffect(() => {
        const handleIncrement = (prev: number) => {
            if (prev === 85) {
                clearInterval(interval);
                return 85;
            }
            return prev + 5;
        };
    
        const interval = setInterval(() => {
            setValue((prev) => handleIncrement(prev));
        }, 300);
    
        return () => clearInterval(interval);
    }, []);
    

  return (
    <main className="sm:w-[350px] w-[280px] mx-auto text-center">
      <AnimatePresence>
        <AnimatedCircularProgressBar
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