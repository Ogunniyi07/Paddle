import React from 'react'
import Article from '../components/Article'
import Footer2 from '../components/Footer2';
import Nav2 from '../components/Nav2'
import '../styles/ArticlePage.css';
import { FaYoutube, FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaThumbsDown, FaThumbsUp } from 'react-icons/fa';
import Metrics from '../components/Metrics';

const ArticlePage = () => {
  return (
    <div className='articlePage'>
        <Nav2/>
        <Article/>
        <div className='contain'>
            <img src='\images\card.jpg' alt='card'/>
            <div className='contain-text'>
            <h5>October 15, 2019 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;
                <img src='\images\card.jpg' alt='card'/>by Paul</h5>
            <h2>12 Popup Use Cases To Increase Conversions</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
            <h1>Table of contents:</h1>
            <div className='content'>
                <div className='list'>
                    <ol>
                        <li>▪ Lorem ipsum dolor sit amet, consetetur sadipscing elitr, </li>
                        <li>▪ Lorem ipsum dolor sit amet, consetetur sadipscing elitr, </li>
                        <li>▪ Lorem ipsum dolor sit amet, consetetur sadipscing elitr, </li>
                        <li>▪ Lorem ipsum dolor sit amet, consetetur sadipscing elitr, </li>
                        <li>▪ Lorem ipsum dolor sit amet, consetetur sadipscing elitr, </li>
                    </ol>
                </div>
                <div className='list'>
                    <ol className='unlist'>
                        <li>▪ Lorem ipsum dolor sit amet, consetetur sadipscing elitr, </li>
                        <li>▪ Lorem ipsum dolor sit amet, consetetur sadipscing elitr, </li>
                        <li>▪ Lorem ipsum dolor sit amet, consetetur sadipscing elitr, </li>
                        <li>▪ Lorem ipsum dolor sit amet, consetetur sadipscing elitr, </li>
                        <li>▪ Lorem ipsum dolor sit amet, consetetur sadipscing elitr, </li>
                    </ol>
                </div>
            </div>
            </div>
            <div className='socials'>
                <hr/>
                <div className='social-media'>
                    <div className='share'>
                        <h2>Share to social media</h2>
                        <div className='social-box'>
                            <div className='media-icons4'>
                                <ul>
                                    <div className='media-box'>
                                        <li><a href="#"><FaYoutube/></a></li>
                                    </div>
                                    <div className='media-box'>
                                        <li><a href="#"><FaFacebook/></a></li>
                                    </div>
                                    <div className='media-box'>
                                        <li><a href="#"><FaLinkedin/></a></li>
                                    </div>
                                    <div className='media-box'>
                                        <li><a href="#"><FaInstagram/></a></li>
                                    </div>
                                    <div className='media-box'>
                                        <li><a href="#"><FaTwitter/></a></li>
                                    </div>     
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
            <div className='help'>
                <div className='help-text'>
                    <p>Do you find this article helpful ? 
                        <span className='thumb'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaThumbsUp/>&nbsp;23 &nbsp;&nbsp;<FaThumbsDown/>&nbsp;12</span>
                    </p>
                </div>
                <div className='blur'>
                    <div className='blur-img'></div>
                </div>
            </div>
            <div className='article-form'>
                <div className='article-form-text'>
                    <h3>Add a comment</h3>
                    <p>Your email address will not be published. Required fields are marked*</p>
                    <input type='text' 
                    placeholder='Name (required)'/>
                    <input type='email' 
                    placeholder='E-mail (required)'/>
                    <h4>Comment</h4>
                    <div className='comment'>
                        <input type='text' 
                        placeholder='Write your comment here....'/>
                    </div>
                    <div className='article-form-btn'>
                        <button>SUBMIT</button>
                    </div>
                </div>
            </div>
            <Metrics/>
        </div>
        <Footer2/>
    </div>
  )
}

export default ArticlePage