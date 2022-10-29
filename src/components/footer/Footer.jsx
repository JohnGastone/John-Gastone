import React from 'react'
import './footer.css'
import {FaTelegramPlane} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {SlSocialTwitter} from 'react-icons/sl'

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">John Gastone</a>
      <ul className="permalinks">
        <li> <a href="#">Home</a> </li>
        <li> <a href="#about">About</a> </li>
        <li> <a href="#experience">Experience</a> </li>
        <li> <a href="#services">Services</a> </li>
        <li> <a href="#portfolio">Portfolio</a> </li>
        <li> <a href="#testimonials">Testimonials</a> </li>
        <li> <a href="#contact">Contact</a> </li>
      </ul>

      <div className="footer__socials">
          <a href="https://instagram.com" target='_blank' rel='noreferer'><BsInstagram/></a>
          <a href="https://twitter.com" target='_blank' rel='noreferer'><SlSocialTwitter/></a>
          <a href="https://telegram.com" target='_blank' rel='noreferer'><FaTelegramPlane/></a>
        </div>

        <div className="footer__copyright">
          <small>&copy; John Gastone. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer