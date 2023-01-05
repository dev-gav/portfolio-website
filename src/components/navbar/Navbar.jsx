import React, { useState } from 'react'
import './navbar.css'
import resume from '../../assets/Gavin Barber Resume.pdf'


const Navbar = () => {


  // ====== Hamburger Toggle ===== //
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  }

  // ===== Scroll Height Detection ===== //  

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
    <div className='navbar'>
      <nav className={state?"scroll":""}>

        <a href='/#home' class='devgav'>&lt;devgav /&gt;</a>

        <ul className={`nav-menu ${isActive ? 'active' : ''}`}>
          <li class='nav-item'>
            <a href='/#projects' className='nav-link'>Projects</a>
          </li>
          <li class='nav-item'>
            <a href={resume} className='nav-link'>Resume</a>
          </li>
          <li class='nav-item'>
            <a href='/#aboutme' className='nav-link'>About Me</a>
          </li>
        </ul>

        <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={handleToggle}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>

      </nav>
    </div>
  )
}

export default Navbar