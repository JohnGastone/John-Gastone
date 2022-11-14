import React from 'react'
import './header.css'
import CTA from './CTA'
import MIMI from '../../assets/pic.jpg'
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
            <h4 className='text-light__quote'>“Softwares should never be scary to users; instead a place to run to in the quest of finding best business solutions. It is a neccesity for a software to be relevant to a business workflow - A must of course”</h4>
            <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header