import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Profile from './components/Profile/Profile';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';


export default(
    <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/UpdateProfile' element={<UpdateProfile/>}/>
    </Routes>
);