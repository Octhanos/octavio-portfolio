import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Me'/>
          </div>
        </div>
      

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>6+ years working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Disruptive</h5>
              <small>IA and VR/AR topics</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>Full Stack Development</small>
            </article>
          </div>

          <p>
            Hi! Thanks for your interest about me. I´m an industrial enginner, with experience as project manager and full stack developer. My core stack is based on JavaScript, but I´m always open to learn new languages. Always alert of new IA and VR/AR trends. My hobbies are playing rugby and hiking.
          </p>

          <a href='#contact' className='btn btn-primary'>Let´s Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About