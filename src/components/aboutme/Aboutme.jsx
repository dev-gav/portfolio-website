import React from 'react'
import './aboutme.css'
import Me from '../../assets/me_2.jpg'

const Aboutme = () => {
  return (
    <div id="aboutme" className='aboutme'>
      <img src={Me} alt='me' className='me'></img>
      <h1>About Me</h1>
      <h4>
        My name is Gavin Barber. I’m a graduate of 2023 from the <a href="https://www.cs.ucf.edu/">University of Central Florida</a> with a degree in Computer Science. 
        I have a passion for Software Engineering and expanding my knowledge within the field. 
        In my free time I enjoy working on Full Stack side projects and game development. 
        If you would like to connect, please feel free to email me at, <a href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=gavbarb1@gmail.com'>gavbarb1@gmail.com</a>.</h4>
    </div>
  )
}

export default Aboutme