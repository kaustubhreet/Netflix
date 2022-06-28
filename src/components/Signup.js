import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import "./common.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [name,setName]=useState("");
  const [phone,setPhone]=useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password,name,phone);
      navigate("/");
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
        <h2 className="mb-3"> Sign Up</h2><br/>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" style={{marginLeft:"30%",marginRight:"30%"}} controlId="formBasicPassword">
            <Form.Control
              type="text"
              placeholder="Enter Full name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" style={{marginLeft:"30%",marginRight:"30%"}}  controlId="formBasicPassword">
            <Form.Control
              type="number"
              placeholder="Enter phone number"
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3 mt-3" style={{marginLeft:"30%",marginRight:"30%"}} controlId="formBasicEmail">
            
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" style={{marginLeft:"30%",marginRight:"30%"}}  controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2" style={{marginTop:"10px"}}>
            <Button type="Submit" style={{
    backgroundColor: "red",
    padding: "7px;"}}>
              Sign Up
            </Button>
          </div><br/>
        </Form>
        
  </div>

      <div className="p-4 box mt-3 text-center" style={{textAlign:"center"}}>
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

export default Signup;