import React from 'react'
import {PROJECTS} from '../Constants/index'
import {motion} from 'framer-motion'
const Projects = () => {
  return (
    <div className='border-b border-neutral-700 pb-12 lg:pb-24'>
        <motion.h2
              whileInView={{opacity:1 , y:0}}
              initial={{opacity:0 , y:-100}}
              transition={{duration:1}}
        className='my-20 text-center text-4xl' >Projects</motion.h2>
        <div>
            {PROJECTS.map((project,index)=>(
                <div key={index} className="mb-12 flex flex-wrap lg:justify-center lg:gap-[50px]">
                    <motion.div
                    whileInView={{opacity:1 , x:0}}
                    initial={{opacity:0 , x:-100}}
                    transition={{duration:1.5}}
                    className='w-full lg:w-[20%] flex justify-center items-center'>
                        <img src={project.image} alt={project.title} className='w-[90%] h-[90%] mb-6 rounded'/>
                    </motion.div>
                    <motion.div
                    whileInView={{opacity:1 , x:0}}
                    initial={{opacity:0 , x:100}}
                    transition={{duration:1.5}}
                    className="w-full lg:w-[70%]">
                        <a href={project.demo}><h6 className='mb-5 font-semibold text-2xl'>{project.title}</h6></a>
                        <p className='mb-4 text-neutral-400'>{project.description}</p>
                        {project.technologies.map((tech,idx)=>(
                            <span key={idx} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-pink-500'>
                            {tech}</span>
                        ))}
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects
