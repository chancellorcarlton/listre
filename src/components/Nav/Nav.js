import React from 'react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Nav,
  Navbar,
  NavDropdown
} from 'react-bootstrap';

import './Nav.css'

function Navigation() {
  let first_name= (localStorage.getItem('first_name'))
  let navigate = useNavigate();
  function logOut() 
  {
    localStorage.clear()
    navigate('/')
  }
  function update()
  {
    navigate('/updateprofile')
  }
  return (
    <div id='navbar-container'>
      <Navbar.Brand id='listre-nav' href="/">        
        <div id='title-logo-nav'>
          <div id='list-h-nav'>
            <strong id='list-header-nav'>list</strong>
          </div>
          <div id='re-h-nav'>
            <strong id='re-header-nav'>RE</strong>
          </div>
        </div>
      </Navbar.Brand>
      <Navbar id='navvy' collapseOnSelect expand="lg" className="top-nav">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="menu-list">
          <Nav id='nav-menu-links'>
            <Nav.Link className='link-navigation' href="/">home</Nav.Link>
            <Nav.Link className='link-navigation' href="/about">about</Nav.Link>
            <Nav.Link className='link-navigation' href="/register">register</Nav.Link>
            <Nav.Link className='link-navigation' href="/login">login</Nav.Link>
            <Nav.Link className='link-navigation'>
              <NavDropdown id='logout-drop' title={first_name}>
                <NavDropdown.Item className='link-navigation' onClick={logOut}>Logout</NavDropdown.Item> 
                <NavDropdown.Item className='link-navigation' onClick={update}>Update User</NavDropdown.Item> 
              </NavDropdown>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
)
}

export default Navigation;

