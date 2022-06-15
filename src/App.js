import React from 'react';
import Home from './Home';
import {Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Basic from "./components/Basic";
import PhoneSignUp from "./components/PhoneSignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
//import { Container, Row, Col } from "react-bootstrap";

const App=()=> {
  return (

<div >
      
       
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/basic"
                element={
                  <ProtectedRoute>
                    <Basic />
                  </ProtectedRoute>
                }
              />

    
    <Route exact path="/" element={<Home/>}></Route>
   
    <Route exact path="login" element={<Login/>}></Route>
    <Route exact path="signup" element={<Signup/>}></Route>
    <Route exact path="*" element={<not found/>}></Route>
    <Route path="/phonesignup" element={<PhoneSignUp />} />
  </Routes>
  </UserAuthContextProvider>
  
              </div>
      
  )
};
export default App;
