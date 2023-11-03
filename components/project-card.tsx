"use client";
import Image, { StaticImageData } from 'next/image';
import React, { useRef } from 'react'
import {DiGithubBadge} from "react-icons/di"
import { CgMediaLive } from 'react-icons/cg';
import {Poppins} from "next/font/google";
import { useScroll, motion, useTransform } from 'framer-motion';
import { root } from 'postcss';

const poppins = Poppins({weight: "400", style: "normal", subsets: ["latin"] })


interface ProjectCardProps {
    title: string,
    description: string,
    tags: string[],
}
const ProjectCard = ({
    title, description, tags
}: ProjectCardProps) => {
  const ref = useRef(null);
  const initialScale = Math.random();
  const yPosition = Math.floor(Math.random() * 100);
  const xPosition = Math.floor(Math.random() * 100);
const { scrollYProgress} = useScroll({
  target: ref,
  offset: ["120px", "100px"]
 })

 const scaleProgress = useTransform(scrollYProgress, [1, 1], [0.8, 1.1])
 const opacityProgress = useTransform(scrollYProgress, [1, 1], [0.6, 1])
  return (
    <motion.div
    style={{
      scale: scaleProgress,
      opacity: opacityProgress
    }} 
    initial={{
      opacity: 0, 
      scale: initialScale,
      y: yPosition,
      x: xPosition
    }}
    animate={{
      opacity: 1,
      scale: 1,
      y: 0,
      x: 0
    }}
    transition={{
      delay: 0.8
    }}
    ref={ref}
    className={`${poppins.className} rounded overflow-hidden shadow-lg max-w-xs`}>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base dark:text-gray-200">
         {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag, index) => {
            return (
                <span key={index} className="inline-block bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
            )
        })}
        
      </div>
    </motion.div>
  )
}

export default ProjectCard