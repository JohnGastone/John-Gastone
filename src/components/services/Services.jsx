import React from 'react'
import './services.css'
import {BiCheckDouble} from 'react-icons/bi'
function Services() {
  return (
    <section id='services' className='services'>
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
                <p>User Interface and experience design that is relevant to your business audience. 
                </p>
              </li>
              <li>
                <BiCheckDouble className='service__list-icon'/>
                <p>Clean and up to date designs that foster customer engagement in digital space. 
                </p>
              </li>
              <li>
                <BiCheckDouble className='service__list-icon'/>
                <p>Collaborative customer study when designing for interfaces following HCI principles.                   
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
         {/* Cloud Consultancy */}
         <h3 className="service__head"> Web Development</h3>
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