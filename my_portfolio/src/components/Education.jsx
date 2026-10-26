// src/components/Education.jsx
import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="container">
        <h2 className="section-title">
          <span className="title-icon">•</span> Education
        </h2>
        <div className="edu-card">
          <div className="edu-header">
            <h3 className="edu-degree">Bachelor of Computer Science and Engineering </h3>
            <p className="edu-period">2026 — Present</p>
          </div>
          <p className="edu-university">
            Adama Science and Technology University
          </p>
          <p className="edu-desc">
            Building a strong foundation in software engineering — from
            backend systems and databases to frontend interfaces and mobile apps.
            Focused on building clean, production-ready code and solving real
            problems.
          </p>
          <div className="edu-points">
            <div>📐 Data Structures &amp; Algorithms</div>
            <div>🌐 Web Development</div>
            <div>☕ Java &amp; C#</div>
            <div>🐍 Python</div>
            <div>📱 Mobile Development</div>
            <div>☁️ Cloud &amp; DevOps Basics</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
