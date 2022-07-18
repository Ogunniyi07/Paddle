import React from 'react'
import { FaSearch } from 'react-icons/fa';
import Nav2 from '../components/Nav2'
import Footer3 from '../components/Footer3'
import '../styles/Blog.css';
import Article from '../components/Article';
import Metrics from '../components/Metrics';

const Blog = () => {
  return (
    <div>
        <Nav2/>
        <Article/>
        <div className='container'>
            <div className='lorem'>
                <div className='text'>
                    <h2>Latest From The Blog</h2>
                    <h4>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</h4>
                </div>
                <div className='search'>
                    <input type='search' 
                    placeholder='search here'
                    />
                    <div className='icon'>
                        <FaSearch/>
                    </div>
                </div>
            </div>
            <div className='box'>
                <div className='wrap'>
                    <div className='row'>
                        <div className='card'>
                            <img src='\images\card.jpg' alt='card'/>
                            <div className='text-box'>
                                <h3>SEPTEMBER 6, 2021 . FEATURED ARTICLE . AFFILATE</h3>
                                <h2>12 Popup Use Cases To Increase Conversions</h2>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum</p>
                                <div className='read'>
                                <h6>&#x2015;&#x2015;&#x2015;</h6><a href='/articlePage'>&nbsp;&nbsp;READ MORE</a>            
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <img src='\images\card.jpg' alt='card'/>
                            <div className='text-box'>
                                <h3>SEPTEMBER 6, 2021 . FEATURED ARTICLE . AFFILATE</h3>
                                <h2>12 Popup Use Cases To Increase Conversions</h2>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum</p>
                                <div className='read'>
                                <h6>&#x2015;&#x2015;&#x2015;</h6><a href='/articlePage'>&nbsp;&nbsp;READ MORE</a>            
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <img src='\images\card.jpg' alt='card'/>
                            <div className='text-box'>
                                <h3>SEPTEMBER 6, 2021 . FEATURED ARTICLE . AFFILATE</h3>
                                <h2>12 Popup Use Cases To Increase Conversions</h2>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum</p>
                                <div className='read'>
                                <h6>&#x2015;&#x2015;&#x2015;</h6><a href='/articlePage'>&nbsp;&nbsp;READ MORE</a>           
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='card'>
                            <img src='\images\card.jpg' alt='card'/>
                            <div className='text-box'>
                                <h3>SEPTEMBER 6, 2021 . FEATURED ARTICLE . AFFILATE</h3>
                                <h2>12 Popup Use Cases To Increase Conversions</h2>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum</p>
                                <div className='read'>
                                <h6>&#x2015;&#x2015;&#x2015;</h6><a href='/articlePage'>&nbsp;&nbsp;READ MORE</a>          
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <img src='\images\card.jpg' alt='card'/>
                            <div className='text-box'>
                                <h3>SEPTEMBER 6, 2021 . FEATURED ARTICLE . AFFILATE</h3>
                                <h2>12 Popup Use Cases To Increase Conversions</h2>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum</p>
                                <div className='read'>
                                <h6>&#x2015;&#x2015;&#x2015;</h6><a href='/articlePage'>&nbsp;&nbsp;READ MORE</a>           
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <img src='\images\card.jpg' alt='card'/>
                            <div className='text-box'>
                                <h3>SEPTEMBER 6, 2021 . FEATURED ARTICLE . AFFILATE</h3>
                                <h2>12 Popup Use Cases To Increase Conversions</h2>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum</p>
                                <div className='read'>
                                <h6>&#x2015;&#x2015;&#x2015;</h6><a href='/articlePage'>&nbsp;&nbsp;READ MORE</a>           
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='recent'>
                    <div className='recent-text'>
                        <h2>Recent Articles</h2>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
                    </div>
                </div>
                <div className='row2'>
                    <div className='card2'>
                        <div className='text-box'>
                            <h6>SEPTEMBER 6, 2021 . FEATURED ARTICLE . AFFILATE</h6>
                            <h2>12 Popup Use Cases To Increase Conversions</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum</p>
                            <div className='read'>
                            <h6>&#x2015;&#x2015;&#x2015;</h6><a href='/articlePage'>&nbsp;&nbsp;READ MORE</a>            
                            </div>
                        </div>
                    </div>
                    <div className='card2'>
                        <div className='text-box'>
                            <h6>SEPTEMBER 6, 2021 . FEATURED ARTICLE . AFFILATE</h6>
                            <h2>12 Popup Use Cases To Increase Conversions</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum</p>
                            <div className='read'>
                            <h6>&#x2015;&#x2015;&#x2015;</h6><a href='/articlePage'>&nbsp;&nbsp;READ MORE</a>            
                            </div>
                        </div>
                    </div>
                    <div className='card2'>
                        <div className='text-box'>
                            <h6>SEPTEMBER 6, 2021 . FEATURED ARTICLE . AFFILATE</h6>
                            <h2>12 Popup Use Cases To Increase Conversions</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum</p>
                            <div className='read'>
                            <h6>&#x2015;&#x2015;&#x2015;&nbsp;&nbsp;</h6><a href='/articlePage'>READ MORE</a>           
                            </div>
                        </div>
                    </div>
                </div>
                <div className='button'>
                    <button>LOAD MORE</button>
                </div>
            </div>
            <Metrics/>
        </div>
        <Footer3/>
    </div>
  )
}

export default Blog