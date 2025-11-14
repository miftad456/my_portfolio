// src/components/Projects.jsx
import React from "react";
import "./Projects.css";

// Replace these with your real projects
const projectData = [
  {
    title: "E-commerce App",
    description: "A responsive online store built with React and Node.js.",
    github: "https://github.com/YOUR_GITHUB/ecommerce",
    live: "https://ecommerce-demo.vercel.app",
    image: "https://via.placeholder.com/300x150.png?text=E-commerce+App"
  },
  {
    title: "Task Manager",
    description: "A task management app using Django REST Framework and React.",
    github: "https://github.com/YOUR_GITHUB/task-manager",
    live: "https://taskmanager-demo.vercel.app",
    image: "https://via.placeholder.com/300x150.png?text=Task+Manager"
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website built with React.",
    github: "https://github.com/YOUR_GITHUB/portfolio",
    live: "https://my-portfolio.vercel.app",
    image: "https://via.placeholder.com/300x150.png?text=Portfolio"
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={project.live} target="_blank" rel="noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
