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
                <p>I build both Android and iOS mobile applications . 
                </p>
              </li>
              <li>
                <BiCheckDouble className='service__list-icon'/>
                <p>I use effective technologies that prioritise quality and quick delivery of Mobile Apps. 
                </p>
              </li>
              <li>
                <BiCheckDouble className='service__list-icon'/>
                <p>I build Apps that focus on hiding technicalities to users and improve their experience on the App.                   
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
                <p>Building scallable web applications that leverage business workflows effectively. 
                </p>
              </li>
              <li>
                <BiCheckDouble className='service__list-icon'/>
                <p>Building Web Apps using efficient software methodologies. 
                </p>
              </li>
              <li>
                <BiCheckDouble className='service__list-icon'/>
                <p>I build Web Apps that bridges businesses with their customers.                   
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