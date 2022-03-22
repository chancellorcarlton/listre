import React, { useState } from 'react';
import Navigation from '../Nav/Nav';
import Footer from '../Footer/Footer';
import './Login.css'
import axios from 'axios';
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from '../../redux/reducer';
// const saltRounds = 10;
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
// const someOtherPlaintextPassword = 'not_bacon';


const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();

    axios
    .post("/auth/login", { username, password })
    .then((res) => {
      props.getUser(res.data)
      props.history.push("/profile");
    })
    .catch((error) => alert(error, "Sorry, Username or Password incorrect"));
  }
  
  return (
    <div id='login'>
      <Navigation />
      <div id='login-container'>
        <header id='login-h'>Login</header>
        <p id='this-is-the-way'>This is the way</p>
        <form id='input-container'>
          <input
            type='text'
            name='username'
            className='login-input'
            placeholder='Username'
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type='text'
            name='password'
            className='login-input'
            placeholder='Password' 
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
          type='button'
          id='login-submit' 
          onClick={login}>
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    user: state,
  }
}

export default connect(mapStateToProps, { getUser })(Login);