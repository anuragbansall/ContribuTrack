import React from 'react'
import logo from '../assets/logo.png'

import { FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <div className='w-full flex items-center justify-between px-[1rem] sm:px-[2rem] py-[1.5rem] border-b border-[#222]'>
        <a href="/" className='flex items-center gap-x-2 sm:gap-x-4'>
            <img src={logo} alt="logo" className='w-[20vw] max-w-[3rem]' />
            <h2 className='text-lg sm:text-xl font-semibold hidden sm:block'>ContribuTrack.</h2>
        </a>
        <a href='https://github.com/anuragbansall/ContribuTrack' target='_blank' className='text-[2rem]'>
          <FaGithub />
        </a>
    </div>
  )
}

export default Navbar