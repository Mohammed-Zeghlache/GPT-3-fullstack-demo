import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <FaExclamationTriangle className="notfound-icon" />
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <button className="home-button" onClick={() => navigate("/Home")}>
        Go to Home
      </button>
    </div>
  );
};

export default NotFound;
