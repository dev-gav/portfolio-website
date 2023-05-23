import React from 'react'
import './projects.css'
import {AiFillYoutube, AiFillGithub, } from 'react-icons/ai'
import {BsGlobe} from 'react-icons/bs'

const Projects = () => {
  return (
    <div id='projects' className='featured-projects'>
      <h1>Featured Projects</h1>

      <div className='projects'>

        <div className='project'>
          <h3>AI Perception of Analog Gauges</h3>
          <h4>Siemens Energy</h4>
          <p>Developed a full stack application to digitize a variety of analog and digital gauges to compute statistics and trends</p>
          <a href='https://www.cecs.ucf.edu/SeniorDesignShowcase/team/siemens-project-for-analog-gauges/' className='btn'><BsGlobe size={20} style={{display: "-ms-flexbox", verticalAlign: "bottom"}}/> Showcase</a>
        </div>

        <div className='project'>
          <h3>Portfolio Website</h3>
          <p>Built a personal portfolio website using ReactJS and tsParticles to showcase my web presence, projects, and skills in a visually appealing format.</p>
          <a href='https://github.com/dev-gav/Portfolio-Website' className='btn'><AiFillGithub size={20} style={{display: "-ms-flexbox", verticalAlign: "bottom"}}/> Repository</a>
        </div>

        <div className='project'>
          <h3>Dungeon Divers</h3>
          <p>Developed and designed a fast pace 2D platformer game in Unity for iOS mobile devices.</p>
          <a href='https://youtu.be/NKtga4GQVa0' className='btn'><AiFillYoutube size={20} style={{display: "-ms-flexbox", verticalAlign: "bottom"}}/> Check It Out!</a>
        </div>

        <div className='project'>
          <h3>Shomi</h3>
          <h4>UCF Class Project</h4>
          <p>Created a college social event management website using a LAMP stack for my  2022 Database Systems term project.</p>
          <a href='https://github.com/dev-gav/Shomi' className='btn'><AiFillGithub size={20} style={{display: "-ms-flexbox", verticalAlign: "bottom"}}/> Repository</a>
        </div>

        {/* <div className='project'>
          <h3>Dead Ringer</h3>
          <p>Developed a web based application using a MERN stack that automatically sends pre-written emails to selected recipients if the user does not check in before the amounted time ends. </p>
          <a href='https://github.com/dev-gav/Dead-Ringer' className='btn'><AiFillGithub size={20} style={{display: "-ms-flexbox", verticalAlign: "bottom"}}/> Repo</a>
        </div> */}

      </div>
    </div>
  )
}

export default Projects