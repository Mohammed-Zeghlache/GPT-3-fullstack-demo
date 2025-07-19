import React from 'react';
import './Whatisgpt.css';
import { useNavigate } from 'react-router-dom';

const Whatisgpt = () => {
  const navigate = useNavigate();

  const goToHome = () => navigate('/home');
  const goToLibrary=() => navigate('/library')
 const goToCaseStudies = ()=> navigate('/Case-studies')
 const goToOpenAi = () => navigate('/Open-AI');
 const goToSignUp = () => setTimeout(() => navigate('/'), 1000);

  return (
    <div className="library-container">
      <header className="header">
        <p className="logo">GPT-3</p>
        <nav className="nav-links">
          <button onClick={goToHome} type="button">Home</button>
          <button type="button" style={{ color: '#ff4820' }}>What is GPT?</button>
          <button onClick={goToOpenAi} type="button">Open AI</button>
          <button onClick={goToCaseStudies} type="button">Case Studies</button>
          <button type="button" onClick={goToLibrary}>Library</button>
        </nav>
        <div className="auth-buttons">
          <button onClick={goToSignUp} type="button" className="btntwo">Sign up</button>
        </div>
      </header>

      <div className="gpt3-info-page">
        <header className="gpt3-header">
          <h1>What is GPT-3?</h1>
          <p>
            GPT-3 (Generative Pre-trained Transformer 3) is a revolutionary language model developed by OpenAI.
            It can understand and generate human-like text using deep learning and massive datasets.
          </p>
        </header>

        <section className="gpt3-section">
          <h2>Key Features</h2>
          <ul>
            <li><strong>Language Generation:</strong> Write articles, stories, emails, and more.</li>
            <li><strong>Conversational AI:</strong> Power chatbots with intelligent responses.</li>
            <li><strong>Translation:</strong> Translate text between many languages.</li>
            <li><strong>Code Generation:</strong> Help write and debug code in different programming languages.</li>
            <li><strong>Summarization:</strong> Summarize documents or articles accurately.</li>
          </ul>
        </section>

        <section className="gpt3-how-it-works">
          <h2>How It Works</h2>
          <p>
            GPT-3 was trained on hundreds of billions of words from books, websites, and other text sources.
            It uses a transformer-based architecture to understand the context of a prompt and respond accordingly.
          </p>
          <p>
            The model predicts the next word in a sequence, enabling it to produce full paragraphs, answer questions,
            and even hold a coherent conversation.
          </p>
        </section>

        <section className="gpt3-use-cases">
          <h2>Real-World Use Cases</h2>
          <div className="use-case-grid">
            <div className="use-case-card">
              <h3>Customer Service</h3>
              <p>Automated support systems using GPT-3 can handle FAQs and live chat support efficiently.</p>
            </div>
            <div className="use-case-card">
              <h3>Education</h3>
              <p>GPT-3 helps students with explanations, tutoring, and essay generation.</p>
            </div>
            <div className="use-case-card">
              <h3>Marketing</h3>
              <p>Create high-quality copy, product descriptions, and social media content.</p>
            </div>
            <div className="use-case-card">
              <h3>Programming Assistant</h3>
              <p>Generate code snippets, debug problems, or explain complex functions.</p>
            </div>
            <div className="use-case-card">
              <h3>Health Tech</h3>
              <p>Provide initial symptom checking, appointment scheduling, and medical info support.</p>
            </div>
          </div>
        </section>

        <section className="gpt3-benefits">
          <h2>Benefits of GPT-3</h2>
          <ul>
            <li>Boosts productivity and creativity.</li>
            <li>Saves time on repetitive tasks like writing or replying to emails.</li>
            <li>Helps non-native speakers improve their writing fluency.</li>
            <li>Empowers developers with smart coding tools.</li>
          </ul>
        </section>

        <section className="gpt3-cta">
          <h2>Ready to Explore More?</h2>
          <p>Use the GPT-3 Library to explore, summarize, or generate content instantly.</p>
          <button className="cta-button" onClick={goToLibrary}>Visit the Library</button>
        </section>
      </div>
    </div>
  );
};

export default Whatisgpt;
