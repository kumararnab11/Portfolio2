import React from 'react'
import DP from "../assets/ME.jpg"
import { motion } from "framer-motion"
const container = (delay,val)=>({
    hidden: {x:val, opacity : 0},
    visible: { x:0, opacity : 1, transition : {duration:0.5 , delay:delay}}
})
const Hero = () => {
  return (
    <div className='border-b border-neutral-700 pb-4 lg:mb-35'>
        <div className='flex flex-wrap mb-[50px]'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1 
                    variants={container(0,-100)}
                    initial='hidden'
                    animate="visible"
                    className='pb-16 text-[34px] font-thin tracking-tight lg:mt-16 lg:text-[67px]'>Arnab Kumar</motion.h1>
                    <motion.span 
                    variants={container(0.5,-100)}
                    initial='hidden'
                    animate="visible"
                    className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text  text-3xl tracking-tight text-transparent'>Fullstack Developer</motion.span>
                    <motion.p 
                    variants={container(1,-100)}
                    initial='hidden'
                    animate="visible"
                    className='my-2 py-6 max-w-xl font-light tracking-tighter'>As a full-stack developer, I bring a wealth of expertise in both front-end and back-end technologies, with a particular focus on React.js and Next.js. I have a strong foundation in database management, proficient in both SQL with MySQL and NoSQL with MongoDB. On the back-end, I specialize in Node.js and Express, enabling me to build robust and scalable server-side applications. My portfolio includes a range of full-stack projects that demonstrate my ability to seamlessly integrate front-end and back-end technologies, showcasing my skills in creating comprehensive and efficient web solutions.</motion.p>
                </div>
            </div>
            <motion.div 
            variants={container(1.2,100)}
            initial='hidden'
            animate="visible"
            className="profilepic w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center items-center h-[100%]">
                    <img src={DP} alt="" className='w-[80%] h-[100%] lg:w-[70%] lg:h-[80%] rounded-[5%] grayscale-[30%]'/>
                </div>

            </motion.div>
        </div>
      
    </div>
  )
}

export default Hero
