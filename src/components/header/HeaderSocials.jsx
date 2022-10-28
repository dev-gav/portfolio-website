import React from 'react'
import {MdOutlineMail} from 'react-icons/md'
import {AiFillLinkedin, AiFillFilePdf, AiFillGithub} from 'react-icons/ai'
import './header.css'
import resume from '../../assets/Gavin Barber Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href='https://www.linkedin.com/in/gavbarb/' className='socials'><AiFillLinkedin/></a>
        <a href='https://github.com/dev-gav' className='socials'><AiFillGithub/></a>
        <a href={resume} className='socials'><AiFillFilePdf/></a>
        <a href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=gavbarb1@gmail.com' className='socials'><MdOutlineMail/></a>
    </div>
  )
}

export default CTA