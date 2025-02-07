import React from 'react'

const Achievements = () => {
  return (
    <div className='flex flex-col gap-10 pt-4 w-full items-center bg-[#F5F5F5]'>
      <h1 className='text-3xl text-center mt-7'><b>MY ACHIEVEMENTS</b></h1>
      <div className='w-full text-center flex flex-col items-center' >
        <h2>Won the <b>'BEST ENGINEERING SOLUTION AWARD'</b> in a NASA Hackathon</h2><br />
        <p className='w-2/3 '>We built a website which contained various information about Exoplanets and we added simulations to learn more about each Exoplanet</p>
        <p>Certificate: <a href="/assets/NASA_S_1.pdf" download>Download File</a></p>
      </div>

      <h1 className='text-3xl text-center '><b>MY ONLINE COURSES</b></h1>
      <div className='w-full text-center'>
        <ul>
          <li>Mastering Data Structures and Algorithms using C and C++ by Abdul Bari on Udemy</li><br />
          <li>The Complete Full-Stack Web Development Bootcamp by Angela Yu on Udemy</ li>
        </ul>
      </div>
    </div>
  )
}

export default Achievements