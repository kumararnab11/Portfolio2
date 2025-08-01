import React from 'react'
import {RiReactjsLine} from "react-icons/ri"
import {TbBrandNextjs} from "react-icons/tb"
import {SiMongodb} from "react-icons/si"
import { SiTailwindcss } from 'react-icons/si'
import {FaNodeJs} from "react-icons/fa"
import { SiExpress } from 'react-icons/si'
import { animate, motion } from "framer-motion"

const variance= (duration)=>({
  initial : {y:-10},
  animate : {
    y : [10,-10],
    transition:{
      duration :duration,
      ease : "linear",
      repeat: Infinity,
      repeatType : "reverse"
    }
  }
})
const Tech = () => {
  return (
    <div className='border-b border-neutral-700 pb-24 lg:pb-48'>
      <motion.h2
      whileInView={{opacity:1 , y:0}}
      initial={{opacity:0 , y:-100}}
      transition={{duration:1}}
      className='my-20 text-center text-4xl'>Technologies</motion.h2>
      <motion.div
      whileInView={{opacity:1 , x:0}}
      initial={{opacity:0 , x:-100}}
      transition={{duration:1.5}}
      className="flex flex-wrap gap-4 justify-center">

        <motion.div 
        variants={variance(2.0)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-500 p-4">
            <RiReactjsLine className='text-7xl text-cyan-400'/>
        </motion.div>

        <motion.div
        variants={variance(1.8)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-500 p-4">
            <TbBrandNextjs className='text-7xl'/>
        </motion.div>

        <motion.div
        variants={variance(2.7)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-500 p-4">
            <SiMongodb className='text-7xl text-green-500'/>
        </motion.div>

        <motion.div
        variants={variance(3.0)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-500 p-4">
            <SiTailwindcss className='text-7xl text-cyan-600'/>
        </motion.div>

        <motion.div
        variants={variance(3.4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-500 p-4">
            <FaNodeJs className='text-7xl text-green-500'/>
        </motion.div>

        <motion.div
        variants={variance(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-500 p-4">
            <SiExpress className='text-7xl text-yellow-500'/>
        </motion.div>

      </motion.div>
    </div>
  )
}

export default Tech
