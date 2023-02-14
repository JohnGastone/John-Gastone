import React from 'react'
import './testimonials.css'
import me from '../../assets/John.jpg'
import avt2 from '../../assets/abambo.png'
import avt from '../../assets/avatar3.jpg'
import avt3 from '../../assets/Nsaa-Iya.jpg'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const data = [
  {
    avatar: me,
    name: 'Happiness Tibaijuka - TANESCO',
    review: 'Despite his technical expertise and hardworking spirit John is an interactive individual whose potential will bring much good in Tanzanian community and the world at large.'
  },
  {
    avatar: avt2,
    name: 'Charles Kapinga - SONAK TZ',
    review: 'The energy John is showing towards work is inspiring, he is someone that loves to see things work and bring the desired business outcome.'
  },
  {
    avatar: avt,
    name: 'Michael Justine - Konzo Metrics',
    review: "I would say John's work is worth a mention, the vision and digital solutions he propose to businesses are superb. He is a pearl that needs to be used especially in this digital era."
  },
  {
    avatar: avt3,
    name: 'Nsaa-Iya Kihunrwa - ISACA Tanzania Chapter',
    review: 'I always like the way John explore new learning adventures from different arenas. From communication, finance, ethics, policy management while technology being the core among others.'
  }
]


function Testimonials() {
  return (
    <section id='testimonials' className='container'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}

      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt='' />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>

              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials