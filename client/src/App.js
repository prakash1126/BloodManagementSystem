

import React from 'react';
import './App.css';
import Register from './auth/register';
import {Routes, Route} from 'react-router-dom'
import Login from './auth/login';
import Admin from './auth/admin';
import Home from './containers/home';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
    </>
   
  );
}
export default App;
