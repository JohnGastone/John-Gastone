import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiTwitter} from 'react-icons/fi'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/john-mahwaya-342645240" rel='nonreferer' target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/JohnGastone" rel='noreferer' target="_blank"><FaGithub/></a>
        <a href="https://twitter.com/DaddyCommunity?t=NbkZiYxgQV_05b5vZrEGuA&s=09" rel='noreferer' target="_blank"><FiTwitter/></a>

    </div>
  )
}

export default HeaderSocials