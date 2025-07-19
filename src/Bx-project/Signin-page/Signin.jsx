import React, { useRef } from "react";
import './Signin.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const  gotoRegister =()=> setTimeout(() => navigate('/'), 800);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    if (!email || !password) {
      alert("Please fill in both email and password.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5001/Login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      setTimeout(() => {
         navigate("/Home");
       }, 1000);
    } catch (error) {
      console.error("Login error:", error);
      if (error.response && error.response.data.message) {
        alert(error.response.data.message);
      } 
      else {
        alert("Could not connect to server.");
      }
    }

    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div className="container">
      <h1 className="title">Welcome Back</h1>
      <p className="phrase">Please enter your login details</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input className="input" type="email" placeholder="Email" ref={emailRef} />
        </div>
        <div className="form-group">
          <input className="input" type="password" placeholder="Password" ref={passwordRef} />
        </div>
        <button className="button" type="submit">Login</button>
          <div className="register">
          <p className="p">
            You don't have an account ? <button onClick={gotoRegister}  type="button" className="link">Register</button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signin;
