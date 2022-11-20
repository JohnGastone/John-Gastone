import React from 'react'
import './footer.css'
import {FaTelegramPlane} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {SlSocialTwitter} from 'react-icons/sl'
import {RiHome2Line} from 'react-icons/ri'

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">Go Back     <RiHome2Line/></a>      
        <div className="footer__copyright">
          <small>&copy; John Gastone. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer