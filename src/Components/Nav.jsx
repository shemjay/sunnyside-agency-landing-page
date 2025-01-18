import React, { useState } from 'react'
import { ReactComponent as LogoIcon } from '../../images/logo.svg';
import { ReactComponent as HamburgerIcon } from '../../images/icon-hamburger.svg';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleHamburger = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='w-full flex items-center justify-between absolute top-0 left-0 bg-transparent text-base text-neutral-white'>
      <div className="w-40 overflow-hidden cursor-pointer p-4 flex items-center">
        <LogoIcon className="w-40" />
      </div>

      

      <ul className={`${isOpen ? "flex bg-white text-neutral-darkGrayishBlue gap-4 flex-col items-center mt-6" : "hidden"} sm:flex sm:w-auto absolute items-center justify-center sm:relative top-full left-0 w-full p-4 gap-12 bg-transparent`}>
        <li className='font-Barlow cursor-pointer sm:hover:underline'><a href="#">About</a></li>
        <li className='font-Barlow cursor-pointer sm:hover:underline'><a href="#">Services</a></li>
        <li className='font-Barlow cursor-pointer sm:hover:underline'><a href="#">Project</a></li>
        <li><button className={`${isOpen ? "bg-primary-yellow" : "bg-neutral-white"} uppercase font-Fraunces font-bold px-6 py-2 bg-neutral-white text-black rounded-full sm:hover:bg-opacity-35`}>Contact</button></li>
        {/*THIS IS THE TIP OF THE DIV CURRENTLY NOT VISIBLE <div className={`${isOpen ? "absolute top-0 right-[-20px] w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-transparent border-t-teal-500" : "hidden"}`}></div> */}
      </ul>

      {/* Hamburger Icon */}
      <div onClick={() => toggleHamburger()} className='sm:hidden cursor-pointer overflow-hidden p-4'>
        <HamburgerIcon />
      </div>

    </div>
  )
}

export default Nav
