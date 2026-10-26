// src/components/Skills.jsx
import React from "react";
import "./Skills.css";

const skillsData = {
  frontend: [
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "TypeScript", icon: "TS" },
    { name: "React", icon: "⚛️" },
  ],
  backend: [
    { name: "Python", icon: "🐍" },
    { name: "Django", icon: "🚀" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express", icon: "🚂" },
    { name: "Java", icon: "☕" },
  ],
  database: [
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "MySQL", icon: "🐬" },
    { name: "SQLite", icon: "🗄️" },
    { name: "Redis", icon: "🔴" },
  ],
  api: [
    { name: "RESTful APIs", icon: "🔌" },
    { name: "FastAPI", icon: "⚡" },
    { name: "Postman", icon: "📮" },
    { name: "API Debugging", icon: "🛠️" },
  ],
  frameworks: [
    { name: "Next.js", icon: "▲" },
    { name: "Tailwind CSS", icon: "🌊" },
    { name: "Bootstrap", icon: "🅱️" },
    { name: "Shadcn UI", icon: "🧩" },
    { name: "Flutter", icon: "📱" },
  ],
  tools: [
    { name: "Git", icon: "⬡" },
    { name: "GitHub", icon: "🐙" },
    { name: "Docker", icon: "🐳" },
    { name: "VS Code", icon: "💻" },
    { name: "Linux / Arch", icon: "🐧" },
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
    title: "Tools & Environment",
    subtitle: "Version control, containerization, and development workflow.",
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