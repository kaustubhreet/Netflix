import React,{ useEffect, useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import './Header.css';
import { useUserAuth } from "./context/UserAuthContext";
import Avatar from 'react-avatar';

function Navbar()
{
    const [show, handleShow] = useState(false);
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        })
        return () =>{
            window.removeEventListener("scroll")    
        }
    }, [])

    //after logout 
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
    return (

<div className = {`nav ${ show && "nav__black" }`}>
 
 <Link to="/design"> 
 <img  className="logoimg" src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png" alt="logo"/></Link>

 <img src={user ? user.photoURL : Avatar}  whileTap={{ scale: 0.6 }}
  className="logoadmin mr-sm-2" onClick={handleLogout} alt="USER"/>
    
       </div>

    )
};
export default Navbar;