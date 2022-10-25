import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/John.jpg'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
        <div className="container header__container">
            <h4>Hello I'm</h4>
            <h1>John Gastone</h1>
            <h4 className="text-light">Junior Software Developer</h4>
            <CTA/>
            <HeaderSocials/>
            <div className='me'>
            < img src={ME} alt='me'/>
            </div>
            <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header