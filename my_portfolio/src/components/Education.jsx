// src/components/Education.jsx
import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="education-container">
        <h2 className="section-title">
          <span className="title-icon">🎓</span> Academic Background
        </h2>

        <div className="timeline">
          <div className="timeline-item">
            {/* Animated Timeline Node */}
            <div className="timeline-dot">
              <span className="dot-inner"></span>
            </div>

            <div className="edu-card">
              <div className="edu-card-glow"></div>

              <div className="edu-header">
                <div>
                  <h3 className="edu-degree">
                    Bachelor of Science in Software Engineering
                  </h3>
                  <div className="edu-univ-badge">
                    Adama Science and Technology University (ASTU)
                  </div>
                </div>
                <span className="edu-period">2026 — Present</span>
              </div>

              <p className="edu-desc">
                Building a deep foundation in computer science principles, system architecture, and 
                software engineering. Actively involved in peer mentoring for Data Structures & Algorithms 
                via CSEC-ASTU and developing clean, scalable applications.
              </p>

              <div className="edu-section-subtitle">Core Focus & Coursework</div>
              
              <div className="edu-points">
                <div className="edu-tag">
                  <span className="tag-icon">📐</span> Data Structures & Algorithms
                </div>
                <div className="edu-tag">
                  <span className="tag-icon">🌐</span> Full-Stack Web Development
                </div>
                <div className="edu-tag">
                  <span className="tag-icon">⚡</span> Backend Architecture & APIs
                </div>
                <div className="edu-tag">
                  <span className="tag-icon">🐍</span> Python, JavaScript & Go
                </div>
                <div className="edu-tag">
                  <span className="tag-icon">📱</span> Mobile App Development (Flutter)
                </div>
                <div className="edu-tag">
                  <span className="tag-icon">🐧</span> Linux Systems & DevOps Basics
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;