import React from 'react'
import './experience.css'
import { AiFillHtml5 } from 'react-icons/ai'
import { SiCsswizardry } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { TbBrandBootstrap } from 'react-icons/tb'
import { RiVuejsFill } from 'react-icons/ri'
import { TbBrandNuxt } from 'react-icons/tb'
import { FaNodeJs } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { SiPython } from 'react-icons/si'
import { SiPostgresql } from 'react-icons/si'
import { FaPhp } from 'react-icons/fa'
import { TbBrandFirebase } from 'react-icons/tb'
import { SiExpress } from 'react-icons/si'
import { SiFigma } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'
import { SiFlutter } from 'react-icons/si'
import { GrCycle } from 'react-icons/gr'
import { DiGhostSmall } from 'react-icons/di'
import { FaMoneyCheck } from 'react-icons/fa'
import { GrEmoji } from 'react-icons/gr'
import { AiFillProject } from 'react-icons/ai'
import { BsUpc } from 'react-icons/bs'
import { TbWriting } from 'react-icons/tb'

function Experience() {
  return (
    <section id='experience'>
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillHtml5 className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiCsswizardry className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiJavascript className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaReact className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <TbBrandBootstrap className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <TbBrandNuxt className='experience__details-icon' />
              <div>
                <h4>Dart</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiFlutter className='experience__details-icon' />
              <div>
                <h4>Flutter</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <RiVuejsFill className='experience__details-icon' />
              <div>
                <h4>Vue</h4>
                <small className='text-light'>Beginer</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaNodeJs className='experience__details-icon' />
              <div>
                <h4>Nodejs</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiMongodb className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <GrMysql className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiPython className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiPostgresql className='experience__details-icon' />
              <div>
                <h4>PostgreSQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaPhp className='experience__details-icon' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <TbBrandFirebase className='experience__details-icon' />
              <div>
                <h4>Firebase</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiExpress className='experience__details-icon' />
              <div>
                <h4>Expressjs</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

          </div>
        </div>
        <div className="experience__backend">
          <h3>Other Skills and Tools</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaGithub className='experience__details-icon' />
              <div>
                <h4>Git and Github</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiFigma className='experience__details-icon' />
              <div>
                <h4>Figma</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <GrCycle className='experience__details-icon' />
              <div>
                <h4>Agile Methodology</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <DiGhostSmall className='experience__details-icon' />
              <div>
                <h4>Waterfall Methodology</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <DiGhostSmall className='experience__details-icon' />
              <div>
                <h4>Scipy</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <DiGhostSmall className='experience__details-icon' />
              <div>
                <h4>Pandas</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

          </div>
        </div>

        <div className="experience__backend">
          <h3>Extracurricular Skills</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaMoneyCheck className='experience__details-icon' />
              <div>
                <h4 className='h4'>Finance</h4>
              </div>
            </article>
            <article className='experience__details'>
              <GrEmoji className='experience__details-icon' />
              <div>
                <h4>Storytelling</h4>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillProject className='experience__details-icon' />
              <div>
                <h4>Project Management</h4>
              </div>
            </article>
            <article className='experience__details'>
              <TbWriting className='experience__details-icon' />
              <div>
                <h4>Content Writing</h4>
              </div>
            </article>

            {/* <article className='experience__details'>
              <BsUpc className='experience__details-icon' />
              <div>
                <h4>Marketing</h4>
              </div>
            </article> */}
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience