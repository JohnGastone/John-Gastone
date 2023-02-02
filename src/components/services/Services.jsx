import React from 'react'
import './services.css'
import { BiWifi0 } from 'react-icons/bi'
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
                <BiWifi0 className='service__list-icon' />
                <p>UI/UX design that is relevant to your business audience.
                </p>
              </li>
              <li>
                <BiWifi0 className='service__list-icon' />
                <p>Clean and smooth designs that foster customer engagement in digital space.
                </p>
              </li>
              <li>
                <BiWifi0 className='service__list-icon' />
                <p>Collaborative customer study for better interfaces following HCI principles.
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
                <BiWifi0 className='service__list-icon' />
                <p>Both Android and iOS mobile applications .
                </p>
              </li>
              <li>
                <BiWifi0 className='service__list-icon' />
                <p>Effective technologies that prioritise quality and quick delivery of Mobile Apps.
                </p>
              </li>
              <li>
                <BiWifi0 className='service__list-icon' />
                <p>Apps that focus on simplicity to users and improve their experience on the Apps.
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
                <BiWifi0 className='service__list-icon' />
                <p>Building scallable web applications that leverage business workflows effectively.
                </p>
              </li>
              <li>
                <BiWifi0 className='service__list-icon' />
                <p>Web Apps that are built using efficient software methodologies.
                </p>
              </li>
              <li>
                <BiWifi0 className='service__list-icon' />
                <p>Web Apps that closes businesses-customers gap.
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