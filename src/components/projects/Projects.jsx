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
          <p>Designed and developed a fast-paced 2D platformer for iOS using Unity and C#, published on the App Store.</p>
          <a href='https://apps.apple.com/us/app/dungeon-divers/id6472009178' className='btn'><DiApple size={20} style={{display: "-ms-flexbox", verticalAlign: "bottom"}}/> App Store</a>
        </div>

        <div className='project'>
          <h3>AI Perception of Analog Gauges</h3>
          <p>Built a full-stack system for Siemens Energy that digitizes analog gauge readings to generate operational statistics and trends.</p>
          <a href='https://drive.google.com/file/d/1N0ZT6N3cbdkOPEd2fLIJILB0m0C-X_VX/view?usp=sharing' className='btn'><BsYoutube size={20} style={{display: "-ms-flexbox", verticalAlign: "bottom"}}/> Showcase</a>
        </div>

        <div className='project'>
          <h3>Learning In Motion Websites</h3>
          <p>Developed responsive preschool websites using React to showcase programs, locations, and enrollment information.</p>
          <div className='lim-container'>
            <a href='https://limpreschool.com/' className='btn lim'><BsGlobe size={20} style={{display: "-ms-flexbox", verticalAlign: "bottom"}}/> Visit Website</a>
          </div>
        </div>

        <div className='project'>
          <h3>Portfolio Website</h3>
          <p>Built a personal portfolio website using React to showcase projects, skills, and development work.</p>
          <a href='https://github.com/dev-gav/Portfolio-Website' className='btn'><AiFillGithub size={20} style={{display: "-ms-flexbox", verticalAlign: "bottom"}}/> Repository</a>
        </div>
      </div>
    </div>
  )
}

export default Projects