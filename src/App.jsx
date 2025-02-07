import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/projects';
import Achievements from './components/Achievements';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] grid min-h-screen grid-rows-[auto_1fr]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/achievements' element={<Achievements />} />
        
      </Routes>
      <Footer />
    </div>
  )
}

export default App