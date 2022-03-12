import React from 'react'
import './Register.css'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer';


function Register() {
  return (
    <div>
      <Nav />
      <div id='register-container'>
        <form id='register-form'>
        <div id='register-h'>Account Info</div>
          <input 
          className='register-input' 
          type='text' 
          placeholder='First Name'
          />
          <input 
          className='register-input' 
          type='text' 
          placeholder='New Username'
          />
          <input 
          className='register-input' 
          type='text' 
          placeholder='New Password'
          />
          <input 
          className='register-input' 
          type='text'
          placeholder='Confirm Password'
          />
          <input 
          id='register-submit' 
          type='submit'
          placeholder='Confirm Password'
          />
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Register