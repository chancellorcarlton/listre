import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div id='footer'>
      <div id='footer-container'>
        <header id='footer-h'>Follow us</header>
        <div id='social-links'>
          <a href='facebook.com'>
            <img 
              className='social-icon'
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
              alt='Facebook Logo'
            />
          </a>
          <a href="twitter.com">
            <img
              className="social-icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
              alt="Twitter logo"
              />
          </a>
          <a href="https://www.linkedin.com/">
            <img
              className="social-icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn-logo"
              />
          </a>
        </div>
        <p id='address'>
          123 Salt Lake City, UT 84119
        </p>
      </div>
    </div>
  )
}


export default Footer
