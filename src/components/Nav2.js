import React from 'react'
import { NavLink } from "react-router-dom";
import '../styles/Nav2.css';

const Nav = () => {
  return (
        <div className='Nav2'>  
      
        <div className='Logo'>
              <NavLink to="/">
                  <img src='/images/logo2.png' alt=''/>
              </NavLink>
        </div>
        <div className='Navlist'>
        <ul className='ul2'> 
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
  )
}

export default Nav


// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// import '../styles/Nav.css';


// const Nav = () => {

//   return (

//     <div className='Nav2'>  
      
//       <div className='Logo2'>
//             <NavLink to="/">
//                 <img src='/images/logo.png' alt=''/>
//             </NavLink>
//       </div>
//       <div className='Navlist'>
//       <ul className='ul2'> 
//         <li className="nav-item">
//           <NavLink to="/about">
//                 About Us
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink to="/Blog">
//                 Blog
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink to="/Contact">
//                 <button>Contact us</button>
//           </NavLink>
//         </li>
//     </ul>
//         </div>  
// </div>
//   );
// }

// export default Nav;