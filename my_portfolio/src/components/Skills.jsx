// src/components/Skills.jsx
import React from "react";
import "./Skills.css";

const Skills = () => {
  const languages = ["HTML", "CSS", "Python", "Java", "JavaScript", "C++"];
  const frameworks = ["FastAPI", "Django REST Framework", "Express"];
  const tools = ["GitHub", "VS Code", "MongoDB", "PostgreSQL"];

  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div>
          <h3>Languages</h3>
          <ul>
            {languages.map((lang) => <li key={lang}>{lang}</li>)}
          </ul>
        </div>
        <div>
          <h3>Frameworks</h3>
          <ul>
            {frameworks.map((fw) => <li key={fw}>{fw}</li>)}
          </ul>
        </div>
        <div>
          <h3>Tools</h3>
          <ul>
            {tools.map((tool) => <li key={tool}>{tool}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
