import React, { useState } from 'react'
import './Register.css'
import Navigation from '../Nav/Nav'
import Footer from '../Footer/Footer';
import axios from 'axios';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/reducer';


function Register(props) {

  const [first_name, setFirst_Name] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();

    axios.post("/auth/register", {first_name, last_name, username, password}).then((res) => {
        console.log('yo')
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }


  return (
    <div>
      <Navigation />
      <div id='register-container'>
      <header id='register-h'>Create Account</header>
        <p id='this-is-the-way'>This is the way</p>
        <form id='register-form' onSubmit={register}>
          <input
            type='text'
            name='first-name'
            className='register-input'
            placeholder='First Name'
            onChange={(e) => setFirst_Name(e.target.value)}
          />
          <input
            type='text'
            name='last-name'
            className='register-input'
            placeholder='Last Name'
            onChange={(e) => setLast_Name(e.target.value)}
          />
          <input
            type='text'
            name='username'
            className='register-input'
            placeholder='Create Username'
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type='text'
            name='password'
            className='register-input'
            placeholder='Create Password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <span id='register-span'><input
            id='register-submit'
            type='submit'
          /></span>
        </form>
      </div>
      <Footer />
    </div>
  )
}

// const MapToStateProps = reduxState => reduxState.mapState

export default Register

// export default connect(MapToStateProps, { loginUser })(Register)