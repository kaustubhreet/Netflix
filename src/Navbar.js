import React,{ useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Header.css';

function Navbar()
{
    const [show, handleShow] = useState(false);
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
    return (

<div className = {`nav ${ show && "nav__black" }`}>
 
 <Link to="/home"> 
 <img  className="logoimg" src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png" alt="logo"/></Link>
 <Link to="/signup"><img src="https://i1.pngguru.com/preview/756/900/872/login-icon-logout-icon-blue-azure-text-electric-blue-line-arrow-material-property-png-clipart.jpg" 
  className="logoadmin mr-sm-2" alt="lgoin"/></Link>
    
       </div>

    )
};
export default Navbar;