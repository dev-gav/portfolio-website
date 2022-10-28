import React from 'react'
import './aboutme.css'
import Me from '../../assets/me.png'

const Aboutme = () => {
  return (
    <div id="aboutme" className='aboutme'>
      <img src={Me} alt='me' className='me'></img>
      <h1>About Me</h1>
      <h4>I am a senior in the College of Engineering and Computer Science at the <a href="https://www.cs.ucf.edu/">University of Central Florida</a>, on track to receive on my undergraduate degree of Computer Science in spring of 2023. 
        I am passionate about learning more within the field of software engineering and exploring the possibilities that accompany it. 
        In my free time I enjoy working on side projects such as game development and full stack programming.</h4>
    </div>
  )
}

export default Aboutme