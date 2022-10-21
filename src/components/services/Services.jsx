import React from 'react'
import './services.css'
import {BiCheckDouble} from 'react-icons/bi'
function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX</h3>
            <ul className='service__list'>
              <li>
                <BiCheckDouble className='service__list-icon'/>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Services