// src/components/Skills.jsx
import React from "react";
import "./Skills.css";

const skillsData = {
  frontend: [
    { name: "HTML5", icon: "5" },
    { name: "CSS3", icon: "3" },
    { name: "TypeScript", icon: "TS" },
    { name: "React", icon: "⚛" },
  ],
  backend: [
    { name: "Python", icon: "🐍" },
    { name: "Django", icon: "dj" },
    { name: "Java", icon: "☕" },
    { name: "C#", icon: "C#" },
  ],
  database: [
    { name: "MySQL", icon: "MSQL" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "SQLite", icon: "SQL" },
    { name: "MongoDB", icon: "🌙" },
  ],
  api: [
    { name: "REST API", icon: "🔌" },
    { name: "Backend Debug", icon: "🐍" },
    { name: "Frontend Debug", icon: "⚛" },
    { name: "Issue Fix", icon: "♦" },
  ],
  frameworks: [
    { name: "Next.js", icon: "N" },
    { name: "Bootstrap", icon: "Bw" },
    { name: "Tailwind CSS", icon: "Tw" },
    { name: "Shadcn UI", icon: "SH" },
  ],
  tools: [
    { name: "Git", icon: "⬡" },
    { name: "GitHub", icon: "GH" },
    { name: "VS Code", icon: "VS" },
    { name: "React DevTools", icon: "⚛" },
  ],
};

const categories = [
  {
    id: "frontend",
    title: "Frontend",
    subtitle: "Interfaces, interaction, and responsive web experiences.",
    items: skillsData.frontend,
  },
  {
    id: "backend",
    title: "Backend",
    subtitle: "Application logic, APIs, and server-side problem solving.",
    items: skillsData.backend,
  },
  {
    id: "database",
    title: "Database",
    subtitle: "Structured data storage, querying, and persistence.",
    items: skillsData.database,
  },
  {
    id: "api",
    title: "API Integration & Debugging",
    subtitle: "Service integration, error resolution, and production issue fixing.",
    items: skillsData.api,
  },
  {
    id: "frameworks",
    title: "Frameworks & Libraries",
    subtitle: "Modern UI systems and development frameworks.",
    items: skillsData.frameworks,
  },
  {
    id: "tools",
    title: "Tools",
    subtitle: "Version control and collaborative development workflow.",
    items: skillsData.tools,
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">
          <span className="title-icon">▸</span> Skills
        </h2>
        <div className="skills-grid">
          {categories.map((cat) => (
            <div key={cat.id} className="skill-card">
              <div className="skill-card-header">
                <span className="skill-icon">{cat.title.charAt(0)}</span>
                <div className="skill-card-text">
                  <h3 className="skill-title">{cat.title}</h3>
                  <p className="skill-subtitle">{cat.subtitle}</p>
                </div>
              </div>
              <div className="skill-list">
                {cat.items.map((item, idx) => (
                  <div key={idx} className="skill-item">
                    <span className="skill-item-icon">{item.icon}</span>
                    <span className="skill-item-name">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
