import React from 'react'
import ParticleBackground from './components/particles/ParticleBackground'
import Header from './components/header/Header'
import Aboutme from './components/aboutme/Aboutme'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Navbar from './components/navbar/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <ParticleBackground/>
      <Header />
      <Aboutme />
      <Skills />
      <Projects />
    </>
  )
}

export default App