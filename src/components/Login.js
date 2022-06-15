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
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
<div style={{backgroundColor:" #a8f1ea",marginLeft:"30%",marginRight:"30%",marginTop:"15%",marginBottom:"15%"}}>
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
            <Button variant="primary" style={{ padding: "3% 12%", backgroundColor: "#f1f1dc" }} type="Submit" active>
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
            <Button variant="success" style={{ padding: "3% 12%", backgroundColor: "#f1f1dc" }} type="Submit">
              Sign in with Phone
            </Button>
          </div>
        </Link><br />
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
      </div>
    </>
  );
};

export default Login;