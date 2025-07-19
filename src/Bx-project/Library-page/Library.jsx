import React from "react";
import "./Library.css";
import { useNavigate } from "react-router-dom"; 


const Library = () => {

  const navigate = useNavigate()
  const goToWhatIsGpt = ()=> navigate('/WhatisGPt-3')
  const goToHome = ()=> navigate('/Home')
  const goToCaseStudies = ()=> navigate('/Case-studies')
  const goToOpenAi = () => navigate('/Open-AI');
  const goToSignUp = () => setTimeout(() => navigate('/'), 1000);

  


  return (
    <div className="library-container">
      <header className="header">
        <p className="logo">GPT-3</p>
        <nav className="nav-links">
          <button onClick={goToHome} type="button">Home</button>
          <button onClick={goToWhatIsGpt} type="button ">What is GPT?</button>
          <button onClick={goToOpenAi} type="button">Open AI</button>
          <button onClick={goToCaseStudies} type="button">Case Studies</button>
          <button style={{ color: '#ff4820' }}>Library</button>
        </nav>
        <div className="auth-buttons">
          {/* <button className="btnone">Sign in</button> */}
          <button onClick={goToSignUp} type="button" className="btntwo">Sign up</button>
        </div>
      </header>

      <section className="about-gpt">
        <h2>What is GPT-3?</h2>
        <p>
          GPT-3 (Generative Pre-trained Transformer 3) is an advanced language model developed by OpenAI.
          It can understand and generate human-like text across various topics and formats.
        </p>
        <p>
          GPT-3 powers this library by helping users get summaries, suggestions, and intelligent answers based on natural language input.
        </p>
      </section>

      <section className="library-section">
        <h1 className="library-title">Explore the GPT-3 Knowledge Library</h1>
        <p className="library-desc">Search, summarize, and get AI-powered book suggestions.</p>

        <div className="library-search">
          <input type="text" placeholder="Search for a book, author, or topic..." />
          <button className="btn-searche">Search</button>
        </div>

        <div className="book-grid">
          <div className="book-card">
            <h2>1984</h2>
            <p>by George Orwell</p>
            <p className="summary">A dystopian future where surveillance and totalitarianism dominate.</p>
            <button>Summarize</button>
          </div>

          <div className="book-card">
            <h2>The Great Gatsby</h2>
            <p>by F. Scott Fitzgerald</p>
            <p className="summary">A tale of wealth, love, and the American Dream in the 1920s.</p>
            <button>Summarize</button>
          </div>

          <div className="book-card">
            <h2>Atomic Habits</h2>
            <p>by James Clear</p>
            <p className="summary">Tiny changes, remarkable results — how habits shape your life.</p>
            <button>Summarize</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Library;
