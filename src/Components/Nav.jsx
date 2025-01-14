import React from 'react'
import { ReactComponent as LogoIcon } from '../../images/logo.svg';

const Nav = () => {
  return (
    <div className='w-full flex items-center justify-between absolute top-0 left-0 bg-transparent text-base text-neutral-white'>
      <div className='w-40 overflow-hidden cursor-pointer p-4 flex items-center'>
        <LogoIcon className="w-40" />
      </div>

      <ul className='flex items-center justify-between gap-12 p-4'>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Project</a></li>
        <li><button className='uppercase font-Fraunces font-bold px-6 py-2 bg-neutral-white text-black rounded-full'>Contact</button></li>
      </ul>
    </div>
  )
}

export default Nav
