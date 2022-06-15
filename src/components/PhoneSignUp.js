import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useUserAuth } from "../context/UserAuthContext";

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
    console.log(number);
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
    <div >

      <div className="container" style={{padding:"6%",alignContent:"center",backgroundColor:"#23cfe9",margin:"30%",borderTopRightRadius: "33%",
    borderBottomLeftRadius: "30%"}}><center>
        <h2 className="mb-3">SIGN IN USING PHONE NO</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail" style={{margin: "2%"}}>
            <PhoneInput
              defaultCountry="IN"
              value={number}
              onChange={setNumber}
              placeholder="Enter Phone Number" style={{marginRight: "10%",marginLeft:"10%",marginTop:"5%",
                padding: "5% 3%"}}
            />
            <div id="recaptcha-container"></div>
          </Form.Group>
          <div className="button-right">
            <Link to="/">
              <Button variant="secondary" style={{padding: "2%",
    borderStyle: "ridge",
    borderTopRightRadius: "33%",
    borderBottomLeftRadius: "30%",
    borderTopColor: "#05ab05",
    backgroundColor: "yellowgreen;"}}>Cancel</Button>
            </Link>
            &nbsp;
            <Button type="submit" variant="primary" style={{padding: "2%",
    borderStyle: "ridge",
    borderTopRightRadius: "33%",
    borderBottomLeftRadius: "30%",
    borderTopColor: "#05ab05",
    backgroundColor: "yellowgreen;"}}>
              Send Otp
            </Button>
          </div>
        </Form>

        <Form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicOtp">
            <Form.Control
              type="otp"
              placeholder="Enter OTP"
              onChange={(e) => setOtp(e.target.value)} style={{marginRight: "20%",marginLeft:"20%",marginTop:"5%",
              paddingBlock: "2%",marginBottom:"3%"}}
            />
          </Form.Group>
          <div className="button-right">
            <Link to="/">
              <Button variant="secondary" style={{padding: "2%",
    borderStyle: "ridge",
    borderTopRightRadius: "33%",
    borderBottomLeftRadius: "30%",
    borderTopColor: "#05ab05",
    backgroundColor: "yellowgreen;"}}>Cancel</Button>
            </Link>
            &nbsp;
            <Button type="submit" variant="primary" style={{padding: "2%",
    borderStyle: "ridge",
    borderTopRightRadius: "33%",
    borderBottomLeftRadius: "30%",
    borderTopColor: "#05ab05",
    backgroundColor: "yellowgreen;"}}>
              Verify
            </Button>
          </div>
        </Form></center>
      </div>
    </div>
  );
};

export default PhoneSignUp;