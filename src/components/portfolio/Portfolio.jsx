import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/shopify.png'
import IMG3 from '../../assets/quotation.png'
import IMG4 from '../../assets/toDo.jpg'
import IMG5 from '../../assets/articles.png'
import IMG6 from '../../assets/openai_project.png'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
        
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG6} alt="" />
          </div>
          <h3>A clone app of ChatGPT that help you to generate code with text</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/Octhanos/openai-codex" className='btn' target='_blank' rel='noreferrer'>Github</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>This is amazing portfolio</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/Octhanos/octavio-portfolio" className='btn' target='_blank' rel='noreferrer'>Github</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>Shopify App</h3>
          <p>Develop a shopify App for dropshipping</p>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
          </div>
          <h3>Quotation Platform</h3>
          <p>ERP platform for quotations with suppliers</p>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt="" />
          </div>
          <h3>Full Stack To Do App</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/Octhanos/To-Do" className='btn' target='_blank' rel='noreferrer'>Github</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt="" />
          </div>
          <h3>Full Stack Blog Articles</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/Octhanos/Articles" className='btn' target='_blank' rel='noreferrer'>Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio