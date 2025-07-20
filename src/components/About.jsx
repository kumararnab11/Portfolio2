import React from 'react'
import pic from "../assets/PRIZE.jpg"
import { motion } from "framer-motion"
const About = () => {
  return (
    <div className='border-b border-neutral-700 pb-3'>
        <h2 className='my-20 text-center text-4xl'>
            About
            <span className='text-neutral-500'>Me</span>
        </h2>
        <div className="flex flex-wrap mb-[50px]">
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0 , x:-100}}
            transition={{duration : 0.5}}
            className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img src={pic} alt="About" className='rounded-[5%] lg:w-[80%] lg:h-[80%] grayscale-[45%]'/>
                </div>
            </motion.div>
            <motion.div
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0 , x:100}}
            transition={{duration : 0.5}}
             className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className='my-2 py-6 max-w-xl'>
                    I am Arnab Kumar, a final-year B.Tech student at Narula Institute of Technology, West Bengal. As a passionate full-stack developer and competitive programmer, I specialize in the MERN stack (MongoDB, Express.js, React, and Node.js), enabling me to craft comprehensive and dynamic web applications. My dedication to coding has also led me to excel in competitive programming, where I have achieved a 4-star rating on CodeChef, the Knight rank on LeetCode, and the Specialist title on Codeforces. I thrive on solving complex problems and continuously improving my skills to stay ahead in the ever-evolving tech landscape.
                    </p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About
