import React from 'react';
import Home from './Home';
import {Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PhoneSignUp from "./components/PhoneSignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Design from './components/Design';


const App=()=> {
  return (

<div >
      
       
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/design"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />

    
    <Route exact path="/design" element={<Home/>}></Route>
    <Route exact path="/*" element={<Design/>}></Route>
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
