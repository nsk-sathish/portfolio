import React from 'react'
import Hero from './sections/hero'
import Skills from './sections/skills'
import About from './sections/about'
import Projects from './sections/projects'
import Contact from './sections/contact'



const Body = () => {
  return (
    <main className='mt-[70px]'>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
    </main>
  )
}

export default Body