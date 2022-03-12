import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div id='footer'>
      <div id='footer-container'>
        <header id='footer-h'>Follow us</header>
        <div id='social-links'>
          <a href="facebook.com">
          <img
            className="social-icon"
            src="https://cdn-icons.flaticon.com/png/512/3670/premium/3670124.png?token=exp=1647061830~hmac=b9d20be8db8fa564062f609b4fe0cc06"
            alt="Facebook logo"
            />
          </a>
          <a href="twitter.com">
          <img
            className="social-icon"
            src="https://cdn-icons.flaticon.com/png/512/3670/premium/3670127.png?token=exp=1647061727~hmac=e1c59a8c6f95b47c44c7f92a243cb07b"
            alt="Twitter logo"
            />
          </a>
          <a href="instagram.com">
          <img
            className="social-icon"
            src="https://cdn-icons.flaticon.com/png/512/3670/premium/3670125.png?token=exp=1647061680~hmac=3e58371825411622b08702299e13d98e"
            alt="Instagram-logo"
            />
          </a>
          <a href="https://www.linkedin.com/">
          <img
            className="social-icon"
            src="https://cdn-icons.flaticon.com/png/512/2626/premium/2626273.png?token=exp=1647061773~hmac=e1b9bd6a98096606a06cbaf77d96bdb1"
            alt="LinkedIn-logo"
            />
          </a>
        </div>
        <p id='footer-p'>
          address
        </p>
      </div>
    </div>
  )
}


export default Footer
