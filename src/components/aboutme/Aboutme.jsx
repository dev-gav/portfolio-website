import React from 'react'
import './aboutme.css'
import Me from '../../assets/me_2.jpg'

const Aboutme = () => {
  return (
    <div id="aboutme" className='aboutme'>
      <img src={Me} alt='me' className='me'></img>
      <div className='aboutme__content'>
        <h1>About Me</h1>
        <h4>
        Hi, I’m Gavin Barber, a software engineer who enjoys building scalable systems and solving complex technical problems. 
        I’m particularly interested in backend development, APIs, and system architecture, and I enjoy designing software that 
        is reliable, maintainable, and easy to extend.
        <br />
        <br />
        Outside of work, I like building side projects, including full-stack applications and mobile games developed with Unity. I enjoy exploring new technologies and continuously improving my skills as a developer.
        <br />
        <br />
        If you'd like to connect, feel free to reach out at <a href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=gavbarb1@gmail.com'>gavbarb1@gmail.com</a>.
        </h4>
      </div>
    </div>
  )
}

export default Aboutme