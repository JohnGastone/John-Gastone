import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {FaWhatsapp} from 'react-icons/fa'

function Contact() {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">        
          <article className="contact_options">
          <HiOutlineMail/>
            <h4>Email</h4>
            <h5>johngastone11@gmail.com</h5>
            <a href="mailto:festomugezi@gmail.com">Send a message</a>                        
          </article>
        </div>

        <div className="contact__options">
          <article className="contact_options">
          <FaWhatsapp/>
            <h4>WhatsApp</h4>
            <h5>John Gastone</h5>
            <a href="https://api.whatsapp.com/send?phone+255786849280">Text me on WhatsApp</a>                        
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form>

        </form>
      </div>
    </section>
  )
}

export default Contact