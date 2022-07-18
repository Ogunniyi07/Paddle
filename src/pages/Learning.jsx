import React from 'react'
import { FaFile, FaSearch } from 'react-icons/fa';
import Footer2 from '../components/Footer2';
import Nav from '../components/Nav';
import '../styles/Learning.css';

const Learning = () => {
  return (
    <div className='learning'>
        <Nav/>
        <div className='article'>
            <div className='article-img'>
                <div className='l-cont'>
                    <h2>Learning Center</h2>
                    <p>Learning Center</p>
                </div>
            </div>
            <div className='larticle-text'>
                <input type='search'
                placeholder='Searching...'/>
                <div className='licon'>
                    <FaSearch/>
                </div>
            </div>
        </div>
        <div className='learn'>
            <div className='features'>
                <div className='features-text'>
                    <div className='file'>
                        <FaFile/>
                    </div>
                    <div className='file-text'>
                        <h2>In-App Messaging Features</h2>
                        <p>New around here ? Start with the Basics</p>
                        <div className='break'>
                            <div className='break-text'>
                                <p>We are developing an in-app messaging feature that enables advertisers and affiliates to communicate in real-time through their dashboards. <br/> <b>Benefits include:</b></p>
                            </div>
                            <div className='break-icon'>
                                <div className='circle'>
                                    <p>-</p>
                                </div>
                            </div>
                        </div>
                        <div className='features-list'>
                            <ol>
                                <li> Advertisers - affiliate direct chats </li>
                                <li>Advertisers can block/disable users from sending messages.</li>
                                <li>Create marketing groups</li>
                                <li>In-app messaging notifications</li>
                                <li>Advertisers can send bulk messages</li>
                            </ol>
                        </div>
                        <hr className='line'></hr>
                        <div className='drop-down'>
                            <div className='dummy'>
                                <div className='dummy-text'>
                                    <p>Lorem ipsum dolor sit amet, consetetur</p>
                                </div>
                                <div className='click'>
                                    <div className='circle'>
                                        <p>+</p>
                                    </div>
                                </div>
                            </div>
                            <div className='dummy'>
                                <div className='dummy-text'>
                                    <p>Lorem ipsum dolor sit amet, consetetur</p>
                                </div>
                                <div className='click'>
                                    <div className='circle'>
                                        <p>+</p>
                                    </div>
                                </div>
                            </div>
                            <div className='dummy'>
                                <div className='dummy-text'>
                                    <p>Lorem ipsum dolor sit amet, consetetur</p>
                                </div>
                                <div className='click'>
                                    <div className='circle'>
                                        <p>+</p>
                                    </div>
                                </div>
                            </div>
                            <div className='dummy'>
                                <div className='dummy-text'>
                                    <p>Lorem ipsum dolor sit amet, consetetur</p>
                                </div>
                                <div className='click'>
                                    <div className='circle'>
                                        <p>+</p>
                                    </div>
                                </div>
                            </div>
                            <div className='dummy'>
                                <div className='dummy-text'>
                                    <p>Lorem ipsum dolor sit amet, consetetur</p>
                                </div>
                                <div className='click'>
                                    <div className='circle'>
                                        <p>+</p>
                                    </div>
                                </div>
                            </div>
                            <div className='dummy'>
                                <div className='dummy-text'>
                                    <p>Lorem ipsum dolor sit amet, consetetur</p>
                                </div>
                                <div className='click'>
                                    <div className='circle'>
                                        <p>+</p>
                                    </div>
                                </div>
                            </div>
                            <div className='dummy'>
                                <div className='dummy-text'>
                                    <p>Lorem ipsum dolor sit amet, consetetur</p>
                                </div>
                                <div className='click'>
                                    <div className='circle'>
                                        <p>+</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='general'>
                <div className='drop'>
                    <p>General</p>
                </div>
                <div className='drop'>
                    <p>Features</p>
                </div>
                <div className='drop'>
                    <p>Building an affiliate campaign</p>
                </div>
                <div className='drop'>
                    <p>One-time Access Affiliate Sign-up</p>
                </div>
                <div className='drop'>
                    <p>Managing and optimizing affiliate campaign</p>
                </div>
                <div className='drop'>
                    <p>Managing Marketing Assets</p>
                </div>
                <div className='drop'>
                    <p>New user onboarding</p>
                </div>
                <div className='drop'>
                    <p>Affiliate Payouts and commission</p>
                </div>
                <div className='drop'>
                    <p>Troubleshooting</p>
                </div>
                <div className='drop'>
                    <p>Account & Billing</p>
                </div>
                <div className='drop'>
                    <p>Advanced technical features</p>
                </div>
                <div className='drop'>
                    <p>New features</p>
                </div>
                <div className='drop'>
                    <p>Announcements</p>
                </div>
            </div>
        </div>
        <div className='footttt'>
        <Footer2/>
        </div>
        
    </div>
  )
}

export default Learning