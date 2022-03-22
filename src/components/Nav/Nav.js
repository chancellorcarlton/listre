import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Nav,
  // Container,
  // NavDropdown,
  // Button,
  // Form,
  // FormControl
} from 'react-bootstrap';

import './Nav.css'

function Navigation() {
  return (
    <div id='navbar-container'>
      <Nav variant="tabs" defaultActiveKey="/home" id='navvy'>
        <Nav.Item className='nav-item'>
          <Nav.Link id='nav-link' href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item className='nav-item'>
          <Nav.Link id='nav-link' href="/register">Register</Nav.Link>
        </Nav.Item>
        <Nav.Item className='nav-item'>
          <Nav.Link id='nav-link' href="/about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item className='nav-item'>
          <Nav.Link id='nav-link' href="/login">Login</Nav.Link>
        </Nav.Item>
        
      </Nav>
    </div>
)
}

export default Navigation;











    // <div id='navbar-container'>
    //   <div class="toggle" id="mobile-menu">
    //     <span class="bar"></span>
    //     <span class="bar"></span>
    //     <span class="bar"></span>
    //   </div>
    //   <nav id='navbar-menu'>
    //     <a className='navbar-link' href='/'>
    //       Home
    //     </a>
    //     <a className='navbar-link' href='/About'>
    //       About
    //     </a>
    //     <a className='navbar-link' href='/Register'>
    //       Register
    //     </a>
    //     <a className='navbar-link' href='/Login'>
    //       Login
    //     </a>
    //   </nav>
    // </div>