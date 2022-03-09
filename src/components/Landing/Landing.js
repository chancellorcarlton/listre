import React from 'react'
import './Landing.css'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

function Landing() {
  return (
    <div id='landing-container'>
    <Nav />
      <div id='landing-h'>Heading</div>
      <a className='landing-btn' href='./Register'>Sign Up</a>
      <a className='landing-btn' href='./Login'>Login</a>
    <Footer />
    </div>
  )
}

export default Landing