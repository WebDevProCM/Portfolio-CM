"use client"

import React, { useRef } from 'react'
import { AnimatedTestimonials } from './ui/animated-testimonials';
import {motion, useScroll, useTransform} from "framer-motion";


function Projects() {
    const projectRef = useRef(null)
    const {scrollYProgress} = useScroll({target: projectRef, offset: ["start end", "end end"]});
    const scaleText = useTransform(scrollYProgress, [0, 1], [1, 2])

    const testimonials = [
        {
        description:
            "TrueElegance is a fully responsive e-commerce project that sells Perfumes.Features include user authentication (register, login), add to cart and APIs authorizations.",
        name: "TrueElegance: The Perfume Store",
        technologies: "MERN Stack | E-commerce",
        src: "/images/ecommerce.png",
        link: "https://github.com/WebDevProCM/E-commerce-FrontEnd"
        },
        {
        description:
            "Developed a dynamic real-time chat application using Socket.io for efficient communication. Leverages React.js on the front-end for a user-friendly interface and Node.js with Express.js on the back-end for robust server-side functionality. User can Create/Join a chat room just using username and ID of the chat room by selecting profile icon.",
        name: "Chat App",
        technologies: "Web Socket | ReactJs",
        src: "/images/chat.png",
        link: "https://github.com/WebDevProCM/chat-app-frontend"
        },
        {
        description:
            "Developed a full-stack web application using Next.js for users to discover, share, and manage recipes. Implemented robust authentication (JWT), data management (Mongoose, DAL, DTO), and image handling (Cloudinary). Optimized performance with Next.js caching and enhanced user experience with smooth animations (Framer Motion).",
        name: "Food Recipes Sharing Web App",
        technologies: "NextJs",
        src: "/images/nextjs.png",
        link: "https://github.com/WebDevProCM/Meals-App"
        },
    ];

  return (
    <div 
    ref={projectRef}
    className="overflow-hidden flex flex-col justify-center sm:gap-16 gap-8 items-center max-w-[1400px] mx-auto lg:px-12 md:px-5 px-1" id='projects'>

        <motion.h1 
            className='md:text-5xl text-3xl text-page-purple font-bebas mx-auto text-center mt-10' id="projects"
            style={{scale: scaleText}}
        >
                SOME OF MY PROJECTS
        </motion.h1>

        <motion.section
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.5, type: "spring", delay: 0.4}}
            viewport={{once: true}}
        >
            <AnimatedTestimonials testimonials={testimonials} />
        </motion.section>
    </div>
  )
}

export default Projects