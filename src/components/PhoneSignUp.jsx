import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from 'react-phone-number-input'
import { useUserAuth } from "../context/UserAuthContext";
import "./common.css";

const PhoneSignUp = () => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const { setUpRecaptha } = useUserAuth();
  const navigate = useNavigate();

  const getOtp = async (e) => {
    e.preventDefault();
 
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(number);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (

   <>
<section className="myStyle">
<div class="jumbotron jumbotron-fluid myStyle ">
    <div className="container-fluid" style={{marginTop:"-5%"}}>
   <nav class="navbar navbar-light">
  <Link to="/" >
  <img class="navbar-brand" width="130" height="130" src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png" alt="logo"/>
  </Link>
</nav>
</div>


<div class="container text-center border" >
      <div className="form-group" style={{textAlign:"center"}} ><br/>
        <h2 className="mb-3"> Sign In with Phone No.</h2><br/>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail" style={{margin: "2%"}}>
        
            <PhoneInput
              defaultCountry="IN"
              color="black"
              value={number}
              onChange={setNumber}
              placeholder="Enter Phone Number" style={{marginRight: "10%",marginLeft:"10%",marginTop:"5%",
                padding: "5% 3%"}}
            />
            <div  style={{marginLeft:"25%",marginRight:'20%'}} id="recaptcha-container"></div>
          </Form.Group>
          <div className="button-right">
            <Link to="/">
              <Button style={{
    backgroundColor: "blue",
    padding: "7px;"}} >Cancel</Button>
            </Link>
            &nbsp;
            <Button type="submit" style={{
    backgroundColor: "red",
    padding: "7px;"}} >
              Send Otp
            </Button>
          </div>
        </Form>
        </div>

{/*for verification */}
        <div class="container text-center border" >
     
        <Form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
        <div className="form-group" style={{textAlign:"center"}} ><br/>
        <h2 className="mb-2"> Verification</h2><br/>
          <Form.Group className="mb-3" style={{marginLeft:"30%",marginRight:"30%"}} controlId="formBasicOtp">
            <Form.Control
              type="otp"
              placeholder="Enter OTP" 
              
              onChange={(e) => setOtp(e.target.value)} 
            />
          </Form.Group>
          <div className="button-right">
            <Link to="/">
            <Button type="Submit" style={{
    backgroundColor: "blue",
    padding: "7px;"}}>
               Cancel
            </Button>
            </Link>
            &nbsp;
            <Button type="Submit" style={{
    backgroundColor: "red",
    padding: "7px;"}}>
               Verify
            </Button>
            </div>
          </div>
        </Form>
        
      </div>
      <div className="p-4 box mt-2 text-center" style={{textAlign:"center"}}>
        Already have an account? <Link to="/login">Log In</Link><br/><br/><br/>
      </div>
</div>
</div>
    <div className="container-fluid" style={{padding:"30px 100px", backgroundColor:"black"}}>
                <center>
                    <h3 style={{color:"#fff"}}>
                        Developed By <br/></h3><h1 style={{height:"100%",color:"#fff"}}>
                        Kaustubh Reet
                    </h1>
                </center>
            </div>
  </section>
    </>
  );
};

export default PhoneSignUp;