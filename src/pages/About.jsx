import { FaArrowRight } from 'react-icons/fa';
import React from 'react'
import Nav from '../components/Nav'
import Footer2 from '../components/Footer2'
import '../styles/About.css';

const About = () => {
  return (
    <div className='about-page'>
      <Nav/>
      <div className='about-banner'>
        <div className='about-img'>
        <div className='title'>
              <h4 className='about'><p>&#x2015;&#x2015;&#x2015;</p>&nbsp;&nbsp;About us</h4>
            <h1 className='description'>Built for Saas and <br/> E-commerce</h1>
          </div>
        </div>
        <div className='about-txt'>
        
          <div className='text'>
           <p>Our tools are easy to set up and use with a user friendly dashboard that enable you to set up, launch, automate and manage multi-affiliate campaigns in 5 minutes.</p>
          </div>
        </div>
      </div>
      <center>
        <div className='writing'>
          <p>Metricks was developed because just like you, we needed a product that could give us <b>good value.</b></p>
        </div>
      </center>
      <div className='why'>
        <div className='why-text'>
          <div className='title2'>
            <h4 className='why-us'>why us</h4>
            <h5>We pride ourselves in our ability to innovate and create world-class tools that provide reliable and efficient touchpoints between advertisers and affiliates.</h5>
            <p>.............<br/>.............<br/>.............<br/>.............<br/>.............</p>
          </div>
        </div>
        <div className='why-grow'>
        <div className='title2'>
            <h4 className='grow'>Growing with you</h4>
            <h5>Leveraging the best technology, we have developed an all-in-one affiliate marketing tracking software, a genius tool to help you track, automate and optimize your influencer campaigns, all from one dashboard.</h5>
            <h6>Our team of experts are constantly brainstorming, testing and developing new solutions with only one thing in mind - your business growth. Your success is our success and by giving you the tools you need to scale, we grow as well.</h6>
          </div>
        </div>
      </div>
      <div className='question'>
        <div className='con'>
          <h2 className='quest'>Got a Question?</h2>
          <p>See how Metricks can help your business grow with best Affiliate Marketing Tracking Software.</p>
          <br/>
          <a href='/contact'>Contact us <FaArrowRight/></a>
        </div>
      </div>
      <Footer2/>
    </div>
  )
}

export default About