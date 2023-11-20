import React from 'react'
import './projects.css'
import {AiFillYoutube, AiFillGithub, } from 'react-icons/ai'
import { DiApple } from "react-icons/di";
import {BsGlobe, BsYoutube} from 'react-icons/bs'

const Projects = () => {
  return (
    <div id='projects' className='featured-projects'>
      <h1>Featured Projects</h1>

      <div className='projects'>

      <div className='project'>
          <h3>Dungeon Divers</h3>
          <p>Independently designed and developed a fast-paced 2D platformer game in Unity using C# for iOS devices.</p>
          <a href='https://apps.apple.com/us/app/dungeon-divers/id6472009178' className='btn'><DiApple size={20} style={{display: "-ms-flexbox", verticalAlign: "bottom"}}/> App Store</a>
        </div>

        <div className='project'>
          <h3>AI Perception of Analog Gauges</h3>
          <h4>Siemens Energy</h4>
          <p>Developed a full stack application to digitize a variety of analog and digital gauges to compute statistics and trends.</p>
          <a href='https://www.youtube.com/embed/w5bBNHqIB38' className='btn'><BsYoutube size={20} style={{display: "-ms-flexbox", verticalAlign: "bottom"}}/> Showcase</a>
        </div>

        <div className='project'>
          <h3>Learning In Motion Websites</h3>
          <p>Developed engaging preschool websites with React.js for Learning In Motion, showcasing information about the daycares.</p>
          <div className='lim-container'>
            <a href='https://limpreschool.com/' className='btn lim'><BsGlobe size={20} style={{display: "-ms-flexbox", verticalAlign: "bottom"}}/> LIM Preschool</a>
            <a href='https://limacademy.com/' className='btn lim'><BsGlobe size={20} style={{display: "-ms-flexbox", verticalAlign: "bottom"}}/> LIM Academy</a>
          </div>
        </div>

        <div className='project'>
          <h3>Portfolio Website</h3>
          <p>Built a personal portfolio website using ReactJS and tsParticles to showcase my web presence, projects, and skills in a visually appealing format.</p>
          <a href='https://github.com/dev-gav/Portfolio-Website' className='btn'><AiFillGithub size={20} style={{display: "-ms-flexbox", verticalAlign: "bottom"}}/> Repository</a>
        </div>

        <div className='project'>
          <h3>Shomi</h3>
          <h4>UCF Class Project</h4>
          <p>Created a college social event management website using a LAMP stack for my  2022 Database Systems term project.</p>
          <a href='https://github.com/dev-gav/Shomi' className='btn'><AiFillGithub size={20} style={{display: "-ms-flexbox", verticalAlign: "bottom"}}/> Repository</a>
        </div>

      </div>
    </div>
  )
}

export default Projects