import React from 'react'
import './Landing.css'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

function Landing() {
  return (
    <div>
      <Nav />
      <div id='landing-container'>
        <div id='landing-h'>listRE</div>
        <p id='landing-p1'>Don't wait to buy real estate!</p>
        <p id='landing-p2'>Buy real estate and wait...</p>
        <span><a href='./Login'> </a></span>
        <p id='here-p'> Not a member yet? Click <a id='here-link' href='./Register'>here</a>!</p>
      </div>
      <Footer />
    </div>
  )
}

export default Landing