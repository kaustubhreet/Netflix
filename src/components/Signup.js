import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>


 <div style={{backgroundColor:" #a8f1ea",marginLeft:"35%",marginRight:"35%",marginTop:"15%"}}>
      <div className="container" style={{textAlign:"center"}} ><br/>
        <h2 className="mb-3"> Signup</h2><br/>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" style={{marginTop:"10px"}} controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2" style={{marginTop:"10px"}}>
            <Button type="Submit" style={{backgroundColor:"yellow",borderColor: "cornsilk",
    backgroundColor: "#f1f1dc;",
    padding: "7px;"}}>
              Sign up
            </Button>
          </div><br/>
        </Form>
  </div>

      <div className="p-4 box mt-3 text-center" style={{textAlign:"center"}}>
        Already have an account? <Link to="/login">Log In</Link><br/><br/><br/>
      </div>
      </div>
    </>
  );
};

export default Signup;