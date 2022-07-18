import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import React from 'react'

const Home = () => {
  return (
    <div className='home'>
        <Nav/>
        <Banner/>
        <Footer/>
    </div>
  )
}

export default Home