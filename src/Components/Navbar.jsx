import React, { useState } from 'react'
import {assets} from '../assets/assets'
const Navbar = () => {
    const [showMenu, setShowMenu]=useState(false)
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto px-6 py-4 flex justify-between align-center md:px-20 md:lg-32 bg-transparent'> 
        <img src={assets.logo} alt="logo" />
        <ul className='hidden md:flex text-white gap-7'>
            <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
            <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
            <a href="#Project" className='cursor-pointer hover:text-gray-400'>Projects</a>
            <a href="#Testimonial" className='cursor-pointer hover:text-gray-400'>Testimonial</a>
        </ul>
        <button className='hidden md:block bg-white rounded-full px-8 py-2'>Sign Up</button>
        <img src={assets.menu_icon} alt="" className='md:hidden w-7 cursor-pointer' onClick={() => setShowMenu(true)}/>
        </div>
        {/* -------------Hidden Menu------------ */}
        <div className={` md:hidden ${showMenu ? 'fixed w-full min-h-full' : ' w-0 h-0 '} top-0 right-0 botton-0 overflow-hidden bg-white transition-all `}>
            <div className='flex justify-end p-6'>
                <img src={assets.cross_icon} alt="cross_icon"  className='w-6 cursor-pointer' onClick={() => setShowMenu(false)}/></div>
            <ul className='flex flex-col justify-center items-center gap-2 font-medium mt-5 px-5 text-lg'>
                <a href="#Header" className='px-4  inline-block rounded-full hover:text-gray-500' onClick={() => setShowMenu(false)}>Home</a>
                <a href="#About" className='px-4  inline-block rounded-full hover:text-gray-500' onClick={() => setShowMenu(false)}>About</a>
                <a href="#Projects" className='px-4  inline-block rounded-full hover:text-gray-500' onClick={() => setShowMenu(false)}>Projects</a>
                <a href="#Testimonial" className='px-4  inline-block rounded-full hover:text-gray-500' onClick={() => setShowMenu(false)}>Testimonial</a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar