import React from 'react'
import './portfolio.css'
import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.jpg'
import img4 from '../../assets/portfolio4.jpg'
import img5 from '../../assets/portfolio5.png'
import img6 from '../../assets/portfolio6.jpg'


function Portfolio() {
  return (
    <section id='portfolio'>
      <h5> My Recent Works </h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="porfolio item__image">
            <img src={img1} alt="" />
          </div>
          <h3>Duka Tembezi</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/JohnGastone" className='btn'>Github</a>
          <a href="https://github.com/JohnGastone" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="porfolio item__image">
            <img src={img2} alt="" />
          </div>
          <h3>Nyumbani Mkononi</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/JohnGastone" className='btn'>Github</a>
          <a href="https://github.com/JohnGastone" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="porfolio item__image">
            <img src={img3} alt="" />
          </div>
          <h3>Gereji Mkononi</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/JohnGastone" className='btn'>Github</a>
          <a href="https://github.com/JohnGastone" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="porfolio item__image">
            <img src={img4} alt="" />
          </div>
          <h3>Shangazi Cafe</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/JohnGastone" className='btn'>Github</a>
          <a href="https://github.com/JohnGastone" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="porfolio item__image">
            <img src={img5} alt="" />
          </div>
          <h3>Mama Chanja</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/JohnGastone" className='btn'>Github</a>
          <a href="https://github.com/JohnGastone" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="porfolio item__image">
            <img src={img6} alt="" />
          </div>
          <h3>Twenzetu Kwetu</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/JohnGastone" className='btn'>Github</a>
          <a href="https://github.com/JohnGastone" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio