import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";

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
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
       <center><div className="container" style={{padding:" 15% 30%",borderColor:"lightblue"}}>
       <h2 className="mt-3"> Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group   controlId="formBasicEmail">
            <Form.Control style={{padding: "3% 12%"}}
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group   controlId="formBasicPassword">
            <Form.Control style={{padding: "3% 12%",marginTop:"4%"}}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <br/>
          <div className="d-grid gap-2">
          <Button variant="primary"  style={{padding: "3% 12%"}} type="Submit" active>
          Log In
  </Button>
          </div>
        </Form>
         <br/>
        <div>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
        <br/>
        <Link to="/phonesignup">
          <div className="d-grid gap-2 mt-3">
            <Button variant="success" style={{padding: "3% 12%"}} type="Submit">
              Sign in with Phone
            </Button>
          </div>
        </Link><br/>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div></center>
    </>
  );
};

export default Login;