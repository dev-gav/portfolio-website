import React, { useState } from 'react'
import './navbar.css'
import {Link} from 'react-scroll'
import resume from '../../assets/Gavin Barber Resume.pdf'
import { BiWindowOpen } from 'react-icons/bi'

const Navbar = () => {

  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  }

  const [state, setstate] = useState(false)

  const changevalueonScroll = () => {

    const scrollValue = document.documentElement.scrollTop;
    if(scrollValue > 850){
      setstate(true);
    } else {
      setstate(false);
    }
  }

  window.addEventListener('scroll', changevalueonScroll);

  return (
    <nav className={state?"scroll":""}>
      <Link to="header" className='devgav'>&lt;devgav /&gt;</Link>
      <div className={`links ${isActive ? 'active' : ''}`}>
        <Link to="projects" className='link'>Projects</Link>
        <a href={resume} className='link'>Resume</a>
        <Link to="aboutme" className='link'>About Me</Link>
      </div>
      <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={handleToggle}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>
    </nav>
  )
}

export default Navbar