import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Case.css'; // Make sure this file exists and is styled

const Case = () => {
  const navigate = useNavigate();

  const goToHome = () => navigate('/home');
   const goToOpenAi = () => navigate('/Open-AI');
  const goToLibrary=() => navigate('/library')
 const goToWhatIsGpt = ()=> navigate('/WhatisGPt-3')
 const goToSignUp = () => setTimeout(() => navigate('/'), 1000);

  return (
    <div className="library-container">
      <header className="header">
        <p className="logo">GPT-3</p>
        <nav className="nav-links">
          <button onClick={goToHome} type="button">Home</button>
          <button onClick={goToWhatIsGpt} type="button" >What is GPT?</button>
          <button onClick={goToOpenAi} type="button">Open AI</button>
          <button type="button" style={{ color: '#ff4820' }}>Case Studies</button>
          <button type="button" onClick={goToLibrary}>Library</button>
        </nav>
        <div className="auth-buttons">
          <button onClick={goToSignUp} type="button" className="btntwo">Sign up</button>
        </div>
      </header>

      <div className="case-studies-container">
        <header className="case-header">
          <h1>GPT-3 Case Studies</h1>
          <p>
            Discover how businesses and developers are using GPT-3 to innovate,
            automate, and scale their ideas.
          </p>
        </header>

        <section className="case-grid">
          <div className="case-card">
            <h3>Customer Support Automation</h3>
            <p><strong>Company:</strong> Zendesk</p>
            <p>Used GPT-3 to automate 70% of Tier 1 support, cutting response time by 60%.</p>
          </div>

          <div className="case-card">
            <h3>AI-Powered Writing Tool</h3>
            <p><strong>Company:</strong> Copy.ai</p>
            <p>Helps marketers create high-performing ads using GPT-3 content generation.</p>
          </div>

          <div className="case-card">
            <h3>Healthcare Virtual Assistant</h3>
            <p><strong>Company:</strong> MediBot</p>
            <p>GPT-3 assists with symptom checking and appointment scheduling.</p>
          </div>

          <div className="case-card">
            <h3>Education & Tutoring</h3>
            <p><strong>Company:</strong> LearnAI</p>
            <p>Powers personalized learning and homework assistance using GPT-3.</p>
          </div>

          <div className="case-card">
            <h3>Legal Drafting Support</h3>
            <p><strong>Company:</strong> LawGen</p>
            <p>Generates legal drafts and simplifies contract writing with AI assistance.</p>
          </div>

          <div className="case-card">
            <h3>Programming Assistant</h3>
            <p><strong>Company:</strong> DevBoost</p>
            <p>Generates code snippets and documentation using GPT-3.</p>
          </div>
        </section>

        <section className="case-cta">
          <h2>Start Your Own GPT-3 Journey</h2>
          <p>Leverage AI to transform your business. Try GPT-3 now.</p>
          <button className="btn-case" onClick={goToLibrary} type='button'>Explore the GPT-3 </button>
        </section>
      </div>
    </div>
  );
};

export default Case;
