import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact-page'>
            <div className='contactImg'></div>
            <div className='contactForm'>
              <div className='contactArrow'>
                <div className='square'>
                  <a href='/'><FaArrowRight/></a>
                </div>
              </div>
              <div className='contactForm-text'>
                <h1>Hey, we are still in the works, but you can send us a message!</h1>
                 <div className='mainForm'>
                  <p>First name</p>
                  <input type='text'
                  placeholder='Enter your First name'/>
                </div>
                <div className='mainForm'>
                  <p>Last name</p>
                  <input type='text'
                  placeholder='Enter your Last name'/>
                </div>
                <div className='mainForm'>
                  <p>Email address</p>
                  <input type='email'
                  placeholder='Enter your Email address'/>
                </div>
                <div className='mainForm'>
                  <p>Tell us what you need help with:</p>
                  <div className='problem'>
                    <input type='text'
                    placeholder='Enter a topic, like " channel problem... "'/>
                  </div>
                </div>
                <div className='contactBtn'>
                  <button>SEND NOW</button>
                </div>
              </div> 
            </div>
        </div>
    </div>
  )
}

export default Contact