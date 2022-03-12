import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import './Login.css'

function Login() {

  
  return (
    <div id='login'>
      <Nav />
      <div id='login-container'>
        <header id='login-h'>Login</header>
        <form id='input-container'>
          <input
            className='login-input'
            placeholder='Username'
            type='text'
          />
          <input
            className='login-input'
            placeholder='Password' 
            type='text'
          />
          <input 
          id='login-submit' 
          type='submit'
          >
          </input>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Login