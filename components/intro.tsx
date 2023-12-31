"use client";
import Image from 'next/image'
import React from 'react'
import {Poppins} from "next/font/google";
import {motion} from "framer-motion";
import Link from 'next/link';
import {MdOutlineContactSupport} from "react-icons/md"
import { Button } from './ui/button';
import {LiaDownloadSolid} from "react-icons/lia"
import {DiGithubBadge} from "react-icons/di"
import {AiFillLinkedin} from "react-icons/ai"
import {CiFacebook} from "react-icons/ci"

const poppins = Poppins({weight: "600", style: "normal", subsets: ["latin"] })
const Intro = () => {
  return (
    <section id='home'>
        <div className='flex flex-col items-center justify-center'>
          
            <div className='my-6 flex flex-col gap-3 justify-center items-center'>
              <motion.div
              initial={{opacity: 0, scale: 0}}
              animate={{opacity: 1, scale: 1}}
              transition={{
                type: "tween",
                duration: 0.8
              }}
              >

                <Image 
                src={`/abm.jpg`}
                width={150}
                height={150}
                className='rounded-full border-[0.35rem] border-white object-cover shadow-xl hover:border-teal-400'
                quality={100}
                priority={true}
                alt='Aung Bhone Myint'
                />
              </motion.div>
              <motion.div
              initial={{opacity: 0, scale: 0}}
              animate={{opacity: 1, scale: 1}}
              transition={{
                type: "tween",
                duration: 0.8
              }}
              >

              <p className=''>
                {`Aung Bhone Myint(Alexis)`}
              </p>
              </motion.div>
              <motion.div
              initial={{opacity: 0, scale: 0}}
              animate={{opacity: 1, scale: 1}}
              transition={{
                type: "tween",
                duration: 0.8
              }}
              className='flex gap-2 justify-center items-center'
              >
                <Button variant="outline" >
              <Link 
              href="https://github.com/aungbm"
              target='_blank'
              className={`${poppins.className} flex items-center`}
              >
                <DiGithubBadge className="w-8 h-8"/>
              </Link>
              </Button>

              <Button variant="outline">
              <Link 
              href="https://www.linkedin.com/in/aung-bhone-myint-900475247/"
              target='_blank'
              className={`${poppins.className} flex items-center`}
              >
                <AiFillLinkedin className="w-8 h-8"/>
              </Link>
              </Button>

              <Button variant="outline" >
              <Link 
              href="https://www.facebook.com/phoe.kywal"
              target='_blank'
              className={`${poppins.className} flex items-center`}
              >
                <CiFacebook className="w-8 h-8"/>
              </Link>
              </Button>
              
              </motion.div>

            </div>
            <motion.div
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{
              type: "tween",
              duration: 0.8
            }}
            >
              <p className='text-center p-6'>
                {`Hello, I am a network engineer who maintains, designs, and configures infrastructure networks.`}
              </p>
            </motion.div>

            <motion.div
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{
              type: "tween",
              duration: 0.8
            }}
            className='flex gap-1 p-2'
            >
              <Button
              variant="outline"
              >
              <Link 
              href="/contact"
              className={`${poppins.className} flex items-center gap-1`}
              >
                Contact me
                <MdOutlineContactSupport className="w-5 h-5" />
              </Link>
              </Button>
              <Button
              variant="outline"
              >
              <a 
              href="/ABM_Resume.pdf"
              className={`${poppins.className} flex items-center gap-1`}
              download={true}
              >
                Download CV
                <LiaDownloadSolid className="w-5 h-5"/>
              </a>
              </Button>
              
            </motion.div>
        </div>
    </section>
  )
}

export default Intro