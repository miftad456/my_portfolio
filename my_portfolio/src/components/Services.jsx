// src/components/Services.jsx
import React from "react";
import "./Services.css";

const services = [
  {
    title: "Telegram Bots",
    description:
      "Automation, notifications, and community management bots. I build bots that save you time and keep your community engaged.",
    icon: "🤖",
    features: ["Chat automation", "Notification bots", "Community management", "API integrations"],
  },
  {
    title: "Mobile Applications",
    description:
      "Cross-platform mobile apps that work seamlessly on iOS and Android. From idea to store release.",
    icon: "📱",
    features: ["Cross-platform development", "UI/UX design", "Store deployment", "App updates"],
  },
  {
    title: "Web Development",
    description:
      "Fast, responsive, and scalable web applications. Frontend that delights, backend that performs.",
    icon: "🌐",
    features: ["React & Next.js", "Responsive design", "API development", "Performance optimization"],
  },
  {
    title: "Backend Development",
    description:
      "Clean, well-documented APIs and reliable server-side systems. Database design, authentication, and more.",
    icon: "⚙️",
    features: ["REST & GraphQL APIs", "Database design", "Authentication", "Cloud deployment"],
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">
          <span className="title-icon">▸</span> Services I Deliver
        </h2>
        <div className="services-grid">
          {services.map((service, idx) => (
            <div key={idx} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <div className="service-features">
                {service.features.map((feat, fidx) => (
                  <span key={fidx} className="feature-tag">{feat}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
