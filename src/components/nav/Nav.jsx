import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsJournalBookmarkFill} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons//ri'
import {BiMessage} from 'react-icons/bi'

function Nav() {
  return (
    <div>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BsJournalBookmarkFill/></a>
      <a href="#services"><RiServiceLine/></a>
      <a href="#contact"><BiMessage/></a>
    </div>
  )
}

export default Nav