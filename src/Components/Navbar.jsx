import React from 'react'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <div className='w-full flex items-center px-[1rem] sm:px-[2rem] py-[2rem] border-b border-[#222]'>
        <a href="/" className='flex items-center gap-x-2 sm:gap-x-4'>
            <img src={logo} alt="logo" className='w-[20vw] max-w-[3rem]' />
            <h2 className='text-lg sm:text-xl font-semibold'>ContribuTrack.</h2>
        </a>
    </div>
  )
}

export default Navbar