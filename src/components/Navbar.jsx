import React from 'react'
import logo from "../assets/logo.jpeg"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className="imagebox flex flex-shrink-0 items-center">
            <img src={logo} alt="" className='mx-2 w-[58px] h-[58px]' />
        </div>
        <div className="icons flex gap-[15px] text-3xl text-[white] cursor-pointer">
            <a href="https://www.linkedin.com/in/arnab-kumar-896737253/" target='_blank'> <FaLinkedin/> </a>
            <a href="https://github.com/kumararnab11" target='_blank' ><FaGithub/></a>
            <FaSquareXTwitter/>
        </div>

    </nav>
  )
}

export default Navbar
