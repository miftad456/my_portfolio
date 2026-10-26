// src/components/About.jsx
import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">
          <span className="title-icon">•</span> About Me
        </h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I&apos;m  Computer Science  and Engineering student at Adama Science and
              Technology University, specializing in software engineering. I
              enjoy turning ideas into real, working products — whether that&apos;s
              a web app, a backend API, or a mobile experience.
            </p>
            <p>
              My strength is the full stack: I build the frontend that users see
              and the backend that powers it. I care about writing clean code,
              shipping reliably, and paying attention to the details that make a
              product feel polished.
            </p>
            <p>
              I&apos;m especially interested in backend systems, API design,
              database work, and building tools that help teams collaborate.
              When I&apos;m not coding, I&apos;m usually exploring new
              technologies or contributing to open source.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years coding</span>
            </div>
            <div className="stat">
              <span className="stat-number">2</span>
              <span className="stat-label">Live projects</span>
            </div>
            <div className="stat">
              <span className="stat-number">Engineering</span>
              <span className="stat-label">Degree</span>
            </div>
            <div className="stat">
              <span className="stat-number">Full Stack</span>
              <span className="stat-label">Focus</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
