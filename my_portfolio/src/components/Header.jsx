// src/components/Header.jsx
import React from "react";
import "./Header.css";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Education", href: "#education" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  return (
    <header className="header">
      <div className="nav">
        <a href="#home" className="logo">
          <div className="logo-content">
            <span className="logo-text">Miftah<span className="logo-dot">.</span></span>
            <span className="logo-glow"></span>
          </div>
        </a>
        <nav className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
