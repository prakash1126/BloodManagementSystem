

import React from 'react';
import './App.css';
import Register from './auth/register';
import {Routes, Route} from 'react-router-dom'
import Login from './auth/login';
import Admin from './auth/admin';
import Home from './containers/home';
import OptionalRoute from './components/optionalRoutes';

function App() {
  return (
    <>
    <OptionalRoute/>
    </>
  );
}
export default App;
