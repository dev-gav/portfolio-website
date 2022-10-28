import React from 'react'
import './skills.css'
import css from '../../assets/css.png'
import express from '../../assets/express.png'
import github from '../../assets/github.png'
import html from '../../assets/html.png'
import c from '../../assets/c.png'
import java from '../../assets/java.png'
import js from '../../assets/js.png'
import mongodb from '../../assets/mongodb.png'
import mysql from '../../assets/mysql.png'
import unity from '../../assets/unity.png'
import vscode from '../../assets/vscode.png'
import react from '../../assets/react.png'
import python from'../../assets/python.png'
import nodejs from '../../assets/nodejs.png'
import figma from '../../assets/figma.png'
import git from '../../assets/git.png'


function Skills() {
  return (
    <div className='skills'>
      <div className='skill'>
        <h2>Languages</h2>  
        <div className='image-grid'>
          <img src={c} alt='C'></img>
          <img src={python} alt='Python'></img>  
          <img src={java} alt='Java'></img>
          <img src={js} alt='JavaScript'></img>
        </div>
        <h4>Some of my favorite progamming langauges for creating applications and machine learning.</h4>
      </div>

      <div className='skill'>
        <h2>Front-End</h2>
        <div className='image-grid'>
          <img src={html} alt='HTML'></img>    
          <img src={css} alt='CSS'></img>
          <img src={react} alt='React'></img>
          <img style={{height: "75px", width: "auto", left: "10px", marginLeft: "15px"}}src={figma} alt='Figma'></img>
        </div>
        <h4>My most familiar tools for front-end web development and UI design.</h4>
      </div>
      
      <div className='skill'>
        <h2>Back-End</h2> 
        <div className='image-grid'>
          <img src={nodejs} alt='Node.js'></img>
          <img src={express} alt='Express'></img> 
          <img src={mysql} alt='MySQL'></img> 
          <img src={mongodb} alt='MongoDB'></img>
        </div>
        <h4>My preferred technologies for back-end web programming and database architecture.</h4>
      </div>

      <div className='skill'>
        <h2>Tools</h2>    
        <div className='image-grid'>
          <img src={vscode} alt='Visual Studio Code'></img>
          <img src={unity} alt='Unity'></img>
          <img src={github} alt='Github'></img>
          <img src={git} alt='Git'></img>
        </div>
        <h4>A few of my favorite tools for writing code, verison control, and game development.</h4>
      </div>
    </div>
  )
}

export default Skills