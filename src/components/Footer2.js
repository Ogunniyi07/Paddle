import React from 'react'
import { FaYoutube, FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import '../styles/Footer2.css';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='foot2'>
        <div className='media-icons2'>
        <ul>
              <li><a href="#"><FaYoutube/></a></li>
              <li><a href="#"><FaFacebook/></a></li>
              <li><a href="#"><FaLinkedin/></a></li>
              <li><a href="#"><FaInstagram/></a></li>
              <li><a href="#"><FaTwitter/></a></li>
            </ul>
        </div>
        <div className='service2'>
          <p><a href='/Terms'>Terms of Services</a></p>
          <p><a href='/Privacy'>Privacy Policy</a></p>  
        </div>
        <div className='copyright'>
            <p>Copyright 2021 @ Peddle Technologies. All Rights Reserved.</p>
        </div>
    </div>
    </div>
  )
}

export default Footer