import React, { useRef } from "react";
import './Login.css'; 
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const addUsername = useRef();
  const addEmail = useRef();
  const addPassword = useRef();
  const navigate = useNavigate();
  const goToLogin =()=> setTimeout(() => navigate('/Login'), 800);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const Username = addUsername.current.value;
    const Email = addEmail.current.value;
    const Password = addPassword.current.value;

    if (!Username || !Email || !Password) {
      alert("Please fill in all fields");
      return;
    }

    const frontData = { Username, email: Email, password: Password };

    try {
      const response = await axios.post("http://localhost:5001/register", frontData);
      const { message } = response.data;

      if (message === "User created successfully") {
        // alert("🎉 Account created successfully!");
        setTimeout(() => {
          navigate("/Home");
        }, 1000);
      } else {
        alert(message || "Registration failed.");
      }
    } catch (error) {
      console.error("❌ Registration error:", error);
      // alert("Could not connect to server.");
    }

    addUsername.current.value = "";
    addEmail.current.value = "";
    addPassword.current.value = "";
  };

  return (
    <div className="container">
      <h1 className="title">Create an Account</h1>
      <p className="phrase">Please enter your details to register</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input className="input" type="text" placeholder="Username" ref={addUsername} />
        </div>
        <div className="form-group">
          <input className="input" type="email" placeholder="Email" ref={addEmail} />
        </div>
        <div className="form-group">
          <input className="input" type="password" placeholder="Password" ref={addPassword} />
        </div>
        <button className="button" type="submit">Register</button>

        <div className="register">
          <p className="p">
            Already have an account ? <button onClick={goToLogin} type="button" className="link">Login</button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
