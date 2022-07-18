import React from 'react'
import '../styles/Banner.css';

const Banner = () => {
  return (
    <div className='banner'>
        <div className='banner-text'>
            <h1>Something awesome is coming soon</h1>
            <p>Your all-in-one affiliate marketing software <b>track, automate</b> and <b>optimize</b> your campaigns.</p>
        </div>
        <div className='date'>
            <div className='count-down'>
                <span>7</span>
                <p>Days</p>
            </div>
            <div className='count-down'>
                <span>24</span>
                <p>Hours</p>
            </div>
            <div className='count-down'>
                <span>54</span>
                <p>Minutes</p>
            </div>
            <div className='count-down'>
                <span>11</span>
                <p>Second</p>
            </div>
        </div>
        <div className='form'>
            <input type='text'
                placeholder='First Name'/>
            <input type='text'
                placeholder='Last Name'/>
        </div>
        <div className='form2'>
            <input type='email'
            placeholder='Enter your email address..'/>
            <button>JOIN OUR WAITING LIST</button>
        </div>
    </div>
  )
}

export default Banner