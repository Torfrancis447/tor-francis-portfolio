import Image from 'next/image'
import React from 'react'
import devHunt from "../public/assets/dev_hunt.png"
import Link from 'next/link'
import ProjectCard from './ProjectCard'
const Projects = () => {
  return (
    <div id="projects" className='w-full '>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className="py-4"> What I've Built </h2>
            <div className='grid md:grid-cols-2 gap-8'>

               <ProjectCard projectImage={devHunt} projectName="Dev Hunt" projectUrl='/property'/>
               <ProjectCard projectImage={devHunt} projectName="Dev Hunt" projectUrl='/property'/>
               <ProjectCard projectImage={devHunt} projectName="Dev Hunt" projectUrl='/property'/>
               <ProjectCard projectImage={devHunt} projectName="Dev Hunt" projectUrl='/property'/>
            </div>

        </div>
    </div>
  )
}

export default Projects