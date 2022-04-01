import React from 'react'
import './Landing.css'
import Navigation from '../Nav/Nav'
import Footer from '../Footer/Footer'

function Landing(props) {
  return (
    <div>
      <Navigation />
      <div id='landing-container'>
        <div id='title-logo'>
          <div id='list-h'>
            <strong id='list-header'>list</strong>
          </div>
          <div id='re-h'>
            <strong id='re-header'>RE</strong>
          </div>
        </div>
        <p id='landing-p1'>Don't wait to buy real estate</p>
        <p id='landing-p2'>Buy real estate and wait</p>
        <span id='landing-login-button'><a href='./Login'> </a></span>
        <p id='here-p'>Don't have an account? <a id='here-link' href='./Register'>Sign Up</a></p>
      </div>
      <Footer />
    </div>
  )
}

export default Landing


// #0066cc

// #ffcc00