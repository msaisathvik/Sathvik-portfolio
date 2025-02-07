import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' flex items-center justify-between px-5 py-7 font-medium bg-[#3A506B]'>
        <h1 className='text-white'>MY PORTFOLIO</h1>
        <ul className=' flex justify-between text-white gap-19 '>
            <NavLink to='/' className='hover:text-blue-400  transition duration-300 '>Profile</NavLink>
            <NavLink to='/projects' className='hover:text-blue-400  transition duration-300 '>Projects</NavLink>
            <NavLink to='/skills' className='hover:text-blue-400  transition duration-300 '>Skills</NavLink>
            <NavLink to='/achievements' className='hover:text-blue-400  transition duration-300 '>Achievements</NavLink>
        </ul>
    </div>
  )
}

export default Navbar