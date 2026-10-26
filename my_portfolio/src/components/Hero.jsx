// src/components/Hero.jsx
import React from "react";
import "./Hero.css";

const Hero = () => {
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
          
          <p className="hero-subtitle">
            Crafting scalable backend architectures, clean RESTful APIs, and full-stack web applications. 
            Third-year Software Engineering student at Adama Science and Technology University (ASTU) 
            and Developer at Africa to Silicon Valley (A2SV).
          </p>

          <div className="hero-actions">
            <a href="#services" className="btn btn-primary">
              <span className="btn-icon">🚀</span> View My Services
            </a>
            <a href="#contact" className="btn btn-secondary">
              <span className="btn-icon">✉️</span> Get in Touch
            </a>
          </div>

          {/* Highlights / Stats (Removed 2 Live Projects) */}
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