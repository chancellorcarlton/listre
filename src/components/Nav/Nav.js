import React from 'react'
import './Nav.css'

function Nav() {
  return (
    <div id='navbar-container'>
      <nav id='navbar-link-container'>
        <a className='menu-links' href='/'>
          Home
        </a>
        <a className='menu-links' href='/About'>
          About
        </a>
        <a className='menu-links' href='/Register'>
          Join
        </a>
        <a className='menu-links' href='/Login'>
          Login
        </a>
      </nav>
    </div>
  )
}

export default Nav