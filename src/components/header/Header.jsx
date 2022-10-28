import React from 'react'
import './header.css'
import HeaderSocials from './HeaderSocials'
import {BiChevronDown} from 'react-icons/bi'
import {Link} from 'react-scroll'

const Header = () => {

  return (
    <header id='header'>
      <div className="container header__container">
        <h1>Gavin Barber</h1>
        <h2>Software Engineer | Full-Stack Developer | College Student</h2>
        <HeaderSocials/>
        <ul className='scrollto'><Link to="aboutme"><BiChevronDown/></Link></ul>
      </div>
    </header>
  )
}

export default Header