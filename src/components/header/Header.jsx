import React from 'react'
import './header.css'
import HeaderSocials from './HeaderSocials'
import {BiChevronDown} from 'react-icons/bi'

const Header = () => {

  return (
    <header id='home'>
      <div className="container header__container">
        <h1>Gavin Barber</h1>
        <h2>Software Engineer | Full-Stack Developer | UCF Graduate 2023</h2>
        <HeaderSocials/>
      </div>
      <a href='/#aboutme' className='scrollto'><BiChevronDown/></a>
    </header>
  )
}

export default Header