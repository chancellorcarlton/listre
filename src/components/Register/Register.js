import React from 'react'
import './Register.css'

function Register() {
  return (
    <div id='register-container'>
      <form id='register-form'>
      <div id='register-h'>Account Info</div>
        <input 
        className='register-input' 
        type='text' 
        placeholder='First Name'
        >
        </input>
        <input 
        className='register-input' 
        type='text' 
        placeholder='New Username'
        >
        </input>
        <input 
        className='register-input' 
        type='text' 
        placeholder='New Password'
        >
        </input>
        <input 
        className='register-input' 
        type='text'
        placeholder='Confirm Password'
        >
        </input>
        <input 
        id='register-submit' 
        type='submit'
        placeholder='Confirm Password'
        >
        </input>
      </form>
    </div>
  )
}

export default Register