"use client";

import {motion, useScroll, useTransform} from "framer-motion";
import { useRef } from "react";
import { FaTrophy } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Education() {
    const educationRef = useRef(null)
    const {scrollYProgress} = useScroll({target: educationRef, offset: ["start end", "end end"]});
    const scaleText = useTransform(scrollYProgress, [0, 1], [1, 2])
    const educationList = [
        {campus: "London Metropolitan University", course: "BEng (Hons) in Software Engineering", date: "2025 - 2026", icon: <FaGraduationCap />, iconColor: "#0056B3"}, 
        {campus: "ESOFT Metro Campus", course: "HEQ BCS Diploma in IT", date: "2023 - 2024", modules: ["Software Engineering 1", "Web Development", "User Experience"], icon: <FaTrophy />, iconColor: "#6F42C1"}, 
        {campus: "ESOFT Metro Campus", course: "HEQ BCS Certificate in IT", date: "2020 - 2021", icon: <FaTrophy />, iconColor: "#28A745"}
    ]

  return (
    <div 
    ref={educationRef}
    className="overflow-hidden flex flex-col justify-center sm:gap-16 gap-8 items-center max-w-[1400px] mx-auto lg:px-12 md:px-5 px-1 scroll-mt-20" id='eduction'>

        <motion.h1 
            className='md:text-5xl text-3xl dark:text-page-purple text-page-black font-bebas mx-auto text-center mt-10' id="eduction"
            style={{scale: scaleText}}
        >
            EDUCATION
        <motion.hr 
            className='max-w-[50px] w-full h-[5px] bg-page-purple mx-auto'
            style={{scaleX: scrollYProgress}}
        />
        </motion.h1>


            <VerticalTimeline className="z-30" animate={false}>
                {educationList.map((education, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work font-fjalla"
                        contentStyle={{
                            background:"linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.1))",
                            boxShadow: "none",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            borderRadius: "12px",
                            backdropFilter: "blur(16px)",
                            textAlign: "left",
                            padding: "1.3rem 2rem",
                        }}
                        contentArrowStyle={{
                            borderRight: "0.4rem solid rgba(255, 255, 255, 0.5)",
                        }}
                        date={education.date}
                        iconStyle={{ background: education.iconColor, color: '#fff' }}
                        icon={education.icon}
                        visible={true}
                    >
                        <h3 className="vertical-timeline-element-title md:text-xl text-lg">{education.campus}</h3>
                        <h4 className="vertical-timeline-element-subtitle md:text-[18px] text-[16px]">{education.course}</h4>
                        {education.modules && (
                            <>
                            <p className="md:text-[16px] text-[14px]">Modules :</p>
                            <ul className="list-disc md:text-[14px] text-[12px]">
                            {education.modules.map((module, index) => (
                                <li key={index}>{module}</li>
                            ))}
                            </ul>
                            </>
                        )}
                    </VerticalTimelineElement>
                ))}

            </VerticalTimeline>
    </div>
  )
}

export default Education