import React from 'react'
import './aboutme.css'
import Me from '../../assets/me.png'

const Aboutme = () => {
  return (
    <div id="aboutme" className='aboutme'>
      <img src={Me} alt='me' className='me'></img>
      <h1>About Me</h1>
      <h4>I am a senior at the <a href="https://www.cs.ucf.edu/">University of Central Florida</a> currently pursuing my undergraduate degree in Computer Science. 
        I have a passion for Software Engineering and expanding my knowledge within the field. In my free time I enjoy working on full stack side projects and game development. 
        I am currently seeking new Software Engineering opportunities! 
        If you know any positions available, or if you want to connect, please feel free to email me at, <a href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=gavbarb1@gmail.com'>gavbarb1@gmail.com</a>.</h4>
    </div>
  )
}

export default Aboutme