import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Fancy and responsive landing pages</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Powerful Ecommerce</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Complex systems for your business</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Automate tasks in your company</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Shopify Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create your online store</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Beatiful and attractive ecommerces</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Add functionalities to your default stores with the App development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Automate your supply chain</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>OpenIA Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>This is your moment to launch your idea with IA</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Development using the popular IA of Microsoft...OpenIA</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Use the IA that is used for ChatGPT and DallE</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Prompt operator for text and images</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services