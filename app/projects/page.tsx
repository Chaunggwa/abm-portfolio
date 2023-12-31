import React from 'react'
import { projectsData } from '@/lib/data'
import ProjectCard from '@/components/project-card'
const ProjectPage = () => {
  return (
    <div
    className='sm:mt-[6rem] flex flex-col justify-center items-center p-6 mx-auto gap-8'>
      <h1 className='text-center capitalize hover:text-gray-600 text-2xl dark:hover:text-teal-200 border-b-8 border-b-stone-400'>Projects</h1>
      <div className='grid grid-cols-1 gap-3 md:gap-2 my-8 mx-auto max-w-max'>
        {projectsData.map((project, index) => {
          return <ProjectCard {...project} key={index}/>
        })}
      </div>
      <p className='text-center text-lg text-gray-900 dark:text-orange-200'>More projects are coming soon...</p>
    </div>
  )
}

export default ProjectPage