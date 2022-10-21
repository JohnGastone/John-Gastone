import React from 'react'
import './about.css'
import ME from '../../assets/John.jpg'
import {BsAward} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {VscFolderActive} from 'react-icons/vsc'

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt='me'/>
            </div>
        </div>
        <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <BsAward className='about__icon'/>
                  <h5>Experience</h5>
                  <small>3+ Years Working</small>
              </article>
              <article className='about__card'>
                <FiUsers className='about__icon'/>
                  <h5>Clients</h5>
                  <small>100+ Nationalwide</small>
              </article>              
              <article className='about__card'>
                <VscFolderActive className='about__icon'/>
                  <h5>Projects</h5>
                  <small>50+ Completed</small>
              </article>
    
            </div>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam nisi laborum esse ipsam repellat recusandae labore alias. 
                Et aspernatur neque id incidunt, expedita optio architecto aut? Repudiandae qui debitis quasi velit excepturi, doloribus ipsa molestiae quidem ab numquam dolor! 
                At, voluptatem beatae sed delectus animi quod quo. Vero, libero esse.
              </p>
              <a href="#about" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About