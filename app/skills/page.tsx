import React from 'react'
import { skillsData } from '@/lib/data'
import SkillCard from '@/components/skill-card'
import Image from 'next/image'
const Skills = () => {
  return (
    <div
    className='sm:mt-[6rem] flex flex-col justify-center items-center p-6 mx-auto gap-8'>
      <h1 className='text-center capitalize hover:text-gray-600 dark:hover:text-teal-200 text-2xl border-b-8 border-b-stone-400'>Skills</h1>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-'>
      {skillsData.map((skill, index) => {
        return <SkillCard {...skill} key={index}/>
      })}
      </div>
      <h1 className='text-center capitalize hover:text-gray-600 dark:hover:text-teal-200 text-2xl border-b-8 border-b-stone-400'>Certificates</h1>
      <div className='flex flex-col items-center justify-center'>
      <Image 
      src={`/bos.png`}
      alt='certificate'
      width={300}
      height={400}
      className='object-cover'
      />
      </div>
    </div>
  )
}

export default Skills