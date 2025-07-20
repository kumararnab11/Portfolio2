import React from 'react'
import {CONTACT} from "../Constants/index"
import {motion} from"framer-motion"
const Contact = () => {
  return (
    <div className='border-b border-neutral-700 pb-8 lg:pb-20'>
      <motion.h2
            whileInView={{opacity:1 , y:0}}
            initial={{opacity:0 , y:-100}}
            transition={{duration:1}}
      className='my-10 lg:my-20 text-center text-4xl'>Get In Touch</motion.h2>
      <div className="text-center tracking-tighter flex flex-col gap-[20px] text-neutral-500">
        <p className='text-xl'>{CONTACT.address}</p>
        <p className='text-xl'><a href="mailto:kumararnab0342@gmail.com">{CONTACT.email}</a></p>
      </div>
    </div>
  )
}

export default Contact
