import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {FaWhatsapp} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3ego7k9', 'template_efnp89d', form.current, '8r6d5jJ3tRwpstB_X')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">        
          <article className="contact__option">
          <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>johngastone11@gmail.com</h5>
            <a href="mailto:johngastone11@gmail.com" target='_blank'>Send a message</a>                        
          </article>
       
          <article className="contact__option">
          <FaWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>John Gastone</h5>
            <a href="https://wa.me/+255786849280" target='_blank'>Text me on WhatsApp</a>                        
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact