import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../styles/Nav.css';


const Nav = () => {
  return (

    <div className='Nav'>  
      
      <div className='Logo'>
            <NavLink to="/">
                <img src='/images/logo.png' alt=''/>
            </NavLink>
      </div>
      <div className='Navlist'>
      <ul> 
        <li>
          <NavLink className='link' to="/about">
                About Us
          </NavLink>
        </li>
        <li>
          <NavLink className='link' to="/Blog">
                Blog
          </NavLink>
        </li>
        <li>
          <NavLink className='link' to="/Contact">
                <button>Contact us</button>
          </NavLink>
        </li>
    </ul>
  </div> 
</div>
  );
}

export default Nav;