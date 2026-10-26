// src/components/Hero.jsx
import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-photo-wrap">
        <div className="hero-photo">
          <img
            src="/photo/myportpic.jpeg"
            alt="Miftah Hussien Ahmed"
            className="hero-img"
          />
          <div className="hero-img-ring"></div>
        </div>
      </div>
      <div className="hero-content">
        <p className="hero-greeting">Hello, I&apos;m</p>
        <h1 className="hero-name">
          Miftah Hussien
          <span className="hero-name-accent">Ahmed</span>
        </h1>
        <p className="hero-title">Software Engineer</p>
        <p className="hero-subtitle">
          Building responsive web apps and robust backend services. Currently a
          Computer Science student at Adama Science and Technology University.
        </p>
        <div className="hero-actions">
          <a href="#services" className="btn btn-primary">
            <span className="btn-icon">🚀</span>
            View My Services
          </a>
          <a href="#contact" className="btn btn-secondary">
            <span className="btn-icon">✉</span>
            Get in Touch
          </a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-number">3+</span>
            <span className="hero-stat-label">Years Coding</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number">2</span>
            <span className="hero-stat-label">Live Projects</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number">Full Stack</span>
            <span className="hero-stat-label">Focus</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
