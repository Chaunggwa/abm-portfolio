"use client";
import React from 'react'
import {motion} from "framer-motion";

const About = () => {
  return (
    <motion.div className='flex flex-col mx-auto justify-center items-center mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 p-6'
        initial={{x: 100, scale: 0 }}
        animate={{x: 0, scale: 1}}
        transition={{delay: 1}}
        id='about'
    >
        <h1 className='text-3xl mb-10 dark:hover:text-teal-300 max-w-max font-medium capitalize border-b-2 border-b-stone-200 dark:border-b-teal-700'
        >About me</h1>

        <p className='mb-3'> After
successfully completing my Bachelor in Science from the University of Greenwich, I have significant knowledge
of networking and am confident in my qualifications and academic background. Also, I did one project about
campus network design. I am really passionate about researching campus network design and struggle with
problem-solving skills. I truly believe that there will be many good opportunities to seemingly come to me. On the
one hand, I can communicate with my subtle English-speaking skills using my incredible ideas. Now I am looking
for the best opportunities that will make me successful in my future career.
</p>
        <p>
        When I have free time, I enjoy playing the guitar, listening to music, walking, reading, and playing football. I also like learning about philosophy, psychology, and mathematics.
        </p>
    </motion.div>
  )
}

export default About