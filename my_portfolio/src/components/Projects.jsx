// src/components/Projects.jsx
import React from "react";
import "./Projects.css";

const projectData = [
  {
    title: "Task Management",
    scope: "Individual & Team",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    description:
      "A full-featured task manager for individuals and teams. Members can sign up, managers can assign and track tasks, and every member stays in sync — with real-time updates and a clean dashboard.",
    github: "https://github.com/miftad456/task-management",
    live: "https://task-management-swart-omega.vercel.app",
    image: "/photo/taskflowpicture.jpeg",
  },
  {
    title: "Srahub",
    scope: "Developer Community & Jobs",
    tech: ["Web", "API", "Database"],
    description:
      "Srahub connects developers in Ethiopia with employers. Developers build their profiles, browse posted jobs, and get hired — while employers post jobs and manage candidates. Built with a focus on the local dev community.",
    github: "https://github.com/A2SV-ASTU/srahub",
    live: "https://srahub-web.firaolkef.workers.dev",
    image: "/photo/srahubpicture.jpeg",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">
          <span className="title-icon">▸</span> Projects
        </h2>
        <div className="project-list">
          {projectData.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image-wrap">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-body">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-badge">{project.scope}</span>
                </div>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="tech-tag">{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-small"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-small btn-live"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
