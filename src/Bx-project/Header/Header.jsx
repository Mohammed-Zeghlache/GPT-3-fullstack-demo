import React from "react";
import './Header.css';
import { useNavigate } from "react-router-dom"; 



const Header = ({ username }) => {

  const navigate = useNavigate()

  const goToLibrary =()=> navigate('/library')
  const goToWhatIsGpt = ()=> navigate('/WhatisGPt-3')
  const goToCaseStudies = ()=> navigate('/Case-studies')
  const goToOpenAi = () => navigate('/Open-AI');
  const goToSignUp = () => setTimeout(() => navigate('/'), 1000);



  return (
    <div className="header">
      <p className="logo">GPT-3</p>
      <nav className="nav-links">
        <button  type="button" style={{ color: '#ff4820' }}>Home</button>
        <button onClick={goToWhatIsGpt}  type="button">What is GPT?</button>
        <button onClick={goToOpenAi} type="button">Open AI</button>
        <button onClick={goToCaseStudies} type="button">Case Studies</button>
        <button onClick={goToLibrary}  type="button">Library</button>
      </nav>

      <div className="auth-buttons">
        {username ? (
          <p className="username">👤 {username}</p>
        ) : (
          <>
            {/* <button className="btnone">Sign in</button> */}
            <button onClick={goToSignUp} type="button" className="btntwo">Sign up</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;


