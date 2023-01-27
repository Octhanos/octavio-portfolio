import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin, BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'
import { useRef } from 'react';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1qp9h3c', 'template_1bjcvz5', form.current, '1eqboE5D1meh1Z-qD')
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

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>luis.tavo@live.com</h5>
            <a href="mailto:luis.tavo@live.com" target='_blank' rel='noreferrer'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>linkedin.com/in/luis-octavio-lopez</h5>
            <a href="https://www.linkedin.com/in/luis-octavio-lopez/" target='_blank' rel='noreferrer'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+52 1 33 34 54 75 64</h5>
            <a href="https://wa.me/3334547564" target='_blank' rel='noreferrer'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact