import React from 'react';
import './Openai.css';
import { useNavigate } from 'react-router-dom';

const Openai = () => {
  const navigate = useNavigate();

  const goToWhatIsGpt = () => navigate('/WhatisGPt-3');
  const goToCaseStudies = () => navigate('/Case-Studies');
  const goToHome = ()=> navigate('/Home')
  const goToLibrary = () => navigate('/library');
  const goToSignUp = () => setTimeout(() => navigate('/'), 1000);

  return (
    <div className="openai-container">
      <header className="header">
        <p className="logo">GPT-3</p>
        <nav className="nav-links">
          <button type="button" onClick={goToHome}>Home</button>
          <button type="button" onClick={goToWhatIsGpt}>What is GPT?</button>
          <button type="button" style={{ color: '#ff4820' }}>Open AI</button>
          <button type="button" onClick={goToCaseStudies}>Case Studies</button>
          <button type="button" onClick={goToLibrary}>Library</button>
        </nav>
        <div className="auth-buttons">
          {/* <button type="button" className="btnone">Sign in</button> */}
          <button onClick={goToSignUp} type="button" className="btntwo">Sign up</button>
        </div>
      </header>

      <main className="openai-main">
        <section className="openai-about">
          <h1>Welcome to OpenAI Technology</h1>
          <p>
            OpenAI is an AI research and deployment company. Our mission is to ensure that artificial general intelligence (AGI) benefits all of humanity.
            Through tools like GPT-3, we're enabling machines to understand and generate human-like language.
          </p>
          <p>
            We focus on long-term safety research, technical leadership, and ensuring that AI is aligned with human values.
          </p>
          <ul>
            <li>🌐 Cutting-edge language understanding</li>
            <li>🤖 Conversational assistants and creative tools</li>
            <li>🧠 Machine learning at scale</li>
            <li>🔐 Ethical and safe AI practices</li>
          </ul>
        </section>

        <section className="openai-cta">
          <h2>Try GPT-3 in Action</h2>
          <p>Visit our library or test live demos to experience the power of GPT-3!</p>
          <button onClick={goToLibrary}>Explore the GPT-3 Library</button>
        </section>
      </main>
    </div>
  );
};

export default Openai;