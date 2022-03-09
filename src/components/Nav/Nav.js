import React from 'react'
import './Nav.css'

function Nav() {
  return (
    <div id='navbar-container'>
      <div id='nb-link-container'>
        <a className='menu-links' href='/Register'>
        About
        </a>
        <a className='menu-links' href='/Register'>
        Join
        </a>
        <a className='menu-links' href='/Login'>
        Login
        </a>
      </div>
    </div>
  )
}

export default Nav