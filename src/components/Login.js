import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import "./common.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/design");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/design");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
    <section>
    <div class="jumbotron jumbotron-fluid myStyle ">
    <div className="container-fluid" style={{marginTop:"-5%"}}>
   <nav class="navbar navbar-light">
  <Link to="/">
  <img class="navbar-brand" width="130" height="130" src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png" alt="logo"/>
  </Link>
</nav>
</div>

<div class="container text-center border">
      <div className="container " style={{ padding: " 15% 30%", borderColor: "lightblue", textAlign: "center" }}>
        <h1 className="mt-3 "> Login</h1><br />
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control style={{ padding: "3% 12%" }}
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control style={{ padding: "3% 12%", marginTop: "4%" }}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <br />
          <div className="d-grid gap-2">
            <Button style={{ padding: "3% 12%", backgroundColor: "red" }} type="Submit" active>
              Log In
            </Button>
          </div>
        </Form>
        <br />
        <center>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
       </center>
        <br />
        <Link to="/phonesignup">
          <div className="d-grid gap-2 mt-3">
            <Button style={{ padding: "3% 12%"}} type="Submit">
              Sign in with Phone
            </Button>
          </div>
        </Link><br />
        Don't have an account? <Link to="/signup">Sign up</Link>
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

export default Login;