// src/components/Hero.jsx
import React from "react";
import "./Hero.css";

const Hero = () => {
  // Subtitle text split into individual words
  const subtitleText =
    "I build scalable backend systems, modern web and mobile applications, and AI-powered solutions that solve real-world problems. From robust APIs and high-performance architectures to intelligent automation and seamless user experiences, I turn ambitious ideas into reliable, production-ready software.";
  
  const subtitleWords = subtitleText.split(" ");

  // Key impact words to highlight with vibrant multi-color gradients
  const highlightWords = [
    "scalable", "backend", "systems,", "ai-powered", "solutions", 
    "robust", "apis", "high-performance", "architectures", 
    "intelligent", "automation,", "reliable,", "production-ready", "software."
  ];

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        
        {/* Left Column: Information & CTAs */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span> Available for Opportunities
          </div>

          <p className="hero-greeting">Hello, I&apos;m</p>
          <h1 className="hero-name">
            Miftah Hussien <span className="hero-name-accent">Ahmed</span>
          </h1>
          <p className="hero-title">Software Engineer & Backend Specialist</p>
          
          {/* Word-by-Word Animated & Multi-Colored Subtitle Paragraph */}
          <p className="hero-subtitle">
            {subtitleWords.map((word, index) => {
              // Check if word should be color-accented
              const cleanWord = word.toLowerCase().replace(/[^a-z-]/g, '');
              const isHighlighted = highlightWords.includes(cleanWord);

              return (
                <span
                  key={index}
                  className={`hero-word ${isHighlighted ? "hero-word-accent" : ""}`}
                  style={{ "--word-index": index }}
                >
                  {word}&nbsp;
                </span>
              );
            })}
          </p>

          <div className="hero-actions">
            <a href="#services" className="btn btn-primary">
              <span className="btn-icon">🚀</span> View My Services
            </a>
            <a href="#contact" className="btn btn-secondary">
              <span className="btn-icon">✉️</span> Get in Touch
            </a>
          </div>

          {/* Highlights / Stats */}
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number">3+</span>
              <span className="hero-stat-label">Years Coding</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">500+</span>
              <span className="hero-stat-label">Algorithmic Problems</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">ASTU & A2SV</span>
              <span className="hero-stat-label">Developer</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Photo Frame */}
        <div className="hero-photo-container">
          <div className="hero-photo-card">
            <div className="hero-photo-wrap">
              <img
                src="/photo/myportpic.jpeg"
                alt="Miftah Hussien Ahmed"
                className="hero-img"
              />
              <div className="hero-img-ring"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;