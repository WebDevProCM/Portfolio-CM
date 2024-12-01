"use client"

import React from 'react'
import { AnimatedTestimonials } from './ui/animated-testimonials';
import {motion} from "framer-motion";
import ProjectsTitle from './projectTitle';


const items = [
    {
      title: "TrueElegance: The Perfume Store",
      description: "TrueElegance is a fully responsive e-commerce project that sells Perfumes.Features include user authentication (register, login), add to cart and APIs authorizations.",
      header: "ecommerce",
      link: "https://github.com/WebDevProCM/E-commerce-FrontEnd"
  },
  {
      title: "Chat App",
      description: "Developed a dynamic real-time chat application using Socket.io for efficient communication. Leverages React.js on the front-end for a user-friendly interface and Node.js with Express.js on the back-end for robust server-side functionality. User can Create/Join a chat room just using username and ID of the chat room by selecting profile icon.",
      header: "chat app",
      link: "https://github.com/WebDevProCM/chat-app-frontend"
  },
  {
      title: "Food Recipes Sharing Web App",
      description: "Developed a full-stack web application using Next.js for users to discover, share, and manage recipes. Implemented robust authentication (JWT), data management (Mongoose, DAL, DTO), and image handling (Cloudinary). Optimized performance with Next.js caching and enhanced user experience with smooth animations (Framer Motion).",
      header: "recipes sharing app",
      link: "https://github.com/WebDevProCM/Meals-App"
  }
  ];


function Projects() {
    const testimonials = [
        {
        quote:
            "TrueElegance is a fully responsive e-commerce project that sells Perfumes.Features include user authentication (register, login), add to cart and APIs authorizations.",
        name: "TrueElegance: The Perfume Store",
        designation: "E-commerce",
        src: "/images/chat.png",
        },
        {
        quote:
            "Developed a dynamic real-time chat application using Socket.io for efficient communication. Leverages React.js on the front-end for a user-friendly interface and Node.js with Express.js on the back-end for robust server-side functionality. User can Create/Join a chat room just using username and ID of the chat room by selecting profile icon.",
        name: "Chat App",
        designation: "Chat App",
        src: "/images/ecommerce.png",
        },
        {
        quote:
            "Developed a full-stack web application using Next.js for users to discover, share, and manage recipes. Implemented robust authentication (JWT), data management (Mongoose, DAL, DTO), and image handling (Cloudinary). Optimized performance with Next.js caching and enhanced user experience with smooth animations (Framer Motion).",
        name: "Food Recipes Sharing Web App",
        designation: "Recipes Sharing App",
        src: "/images/nextjs.png",
        },
    ];

  return (
    <div className="overflow-hidden flex flex-col justify-center gap-16 items-center max-w-[1400px] mx-auto" id='projects'>
        <ProjectsTitle />
        <motion.section
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.5, type: "spring", delay: 0.8}}
            // viewport={{once: true}}
        >
            <AnimatedTestimonials testimonials={testimonials} />
        </motion.section>
    </div>
  )
}

export default Projects