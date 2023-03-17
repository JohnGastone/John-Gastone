import React from 'react'
import './about.css'
import ME from '../../assets/John.jpg'
import { BsAward } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { VscFolderActive } from 'react-icons/vsc'

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='me' />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsAward className='about__icon' />
              <h5>Experience</h5>
              <small> 1+ Years </small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>10+ Nationwide..</small>
            </article>
            <article className='about__card'>
              <VscFolderActive className='about__icon' />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>

          </div>
          <p>
            I am a very dedicated and passionate Software Developer and Data Science enthusiast, loving to work in a learning-oriented environment where customer satisfaction is a priority.
            I'm always curious on how to make things work better to meet organizational goals.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About