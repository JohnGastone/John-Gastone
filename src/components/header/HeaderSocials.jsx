import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsDribbble} from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/JohnMahwaya" rel='' target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/JohnGastone" rel='' target="_blank"><FaGithub/></a>
        <a href="https://dribble.com" rel='' target="_blank"><BsDribbble/></a>

    </div>
  )
}

export default HeaderSocials