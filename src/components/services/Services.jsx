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
          <div>

            {/* UI/UX */}
            <h3 className="service__head">UI/UX Design</h3>
            <ul className='service__list'>
              <li>
                <BiCheckDouble className='service__list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                </p>
              </li>
              <li>
                <BiCheckDouble className='service__list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                </p>
              </li>
              <li>
                <BiCheckDouble className='service__list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.                   
                </p>
              </li>
              <li>
                <BiCheckDouble className='service__list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.                  
                </p>
              </li>
            </ul>
          </div>
        </article>

        <article className="service">
          <div>
            
            {/* Mobile App Development */}
            <h3 className="service__head"> Mobile App Dev</h3>
            <ul className='service__list'>
              <li>
                <BiCheckDouble className='service__list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                </p>
              </li>
              <li>
                <BiCheckDouble className='service__list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                </p>
              </li>
              <li>
                <BiCheckDouble className='service__list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.                   
                </p>
              </li>
              <li>
                <BiCheckDouble className='service__list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.                  
                </p>
              </li>
            </ul>
          </div>
        </article>


        <article className="service">
          <div>
         {/* Digital Marketing */}
         <h3 className="service__head"> Digital Marketing</h3>
            <ul className='service__list'>
              <li>
                <BiCheckDouble className='service__list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                </p>
              </li>
              <li>
                <BiCheckDouble className='service__list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                </p>
              </li>
              <li>
                <BiCheckDouble className='service__list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.                   
                </p>
              </li>
              <li>
                <BiCheckDouble className='service__list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.                  
                </p>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Services