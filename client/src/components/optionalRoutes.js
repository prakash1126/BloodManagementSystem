import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../containers/home";
import Header from "./header";
import Login from "../auth/login";
import Register from "../auth/register";
import Donor from "../donor/donorDashBoard";
import Reciever from "../reciever/recieverDashboard";
const OptionalRoute = () => {
  const { email, token } = useSelector(state => state.users)
  if(email&&token){
    return <>
   <Header/>
    <HomeScreen/>
    </>
  }
  else{
    return <AuthScreen/>
  }
}
const HomeScreen=()=>{
  return(
  <Routes>
  <Route exact path="/" element={<Home/>}/>
  <Route exact path="/donor" element={<Donor/>}/>
  <Route exact path="/reciever" element={<Reciever/>}/>
</Routes>

  )
  
}
const AuthScreen=()=>{
  return(
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route exact path="/register" element={<Register/>}/>
    </Routes>
  )
}
export default OptionalRoute;