// src/components/About.jsx
import React from "react";
import "./About.css";
import profilePhoto from "/photo/myportpic.jpeg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">
          <span className="title-icon">▸</span> About Me
        </h2>
        <div className="about-grid">
          <div className="about-photo-wrap">
            <img src={profilePhoto} alt="Miftah Hussien Ahmed" className="about-img" />
            <div className="about-img-ring"></div>
          </div>
          <div className="about-text">
            <p className="lead">
              I&apos;m Miftah Hussien Ahmed — a Computer Science student at
              Adama Science and Technology University and a software engineer
              who builds web, mobile, and backend solutions.
            </p>
            <p>
              I specialize in full-stack development: responsive frontend
              interfaces, robust backend APIs, and cross-platform mobile apps.
              From building team collaboration tools to developer community
              platforms, I turn ideas into polished, production-ready software.
            </p>
            <div className="about-services-summary">
              <span className="service-summary">
                <span className="service-icon">🌐</span>
                <span className="service-text">
                  <strong>Frontend &amp; Backend</strong> — Web apps that users love
                </span>
              </span>
              <span className="service-summary">
                <span className="service-icon">📱</span>
                <span className="service-text">
                  <strong>Mobile Apps</strong> — Cross-platform mobile development
                </span>
              </span>
              <span className="service-summary">
                <span className="service-icon">🤖</span>
                <span className="service-text">
                  <strong>Telegram Bots</strong> — Automation &amp; integrations
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
