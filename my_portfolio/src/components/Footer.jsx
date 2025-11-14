// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Miftah Hussien Ahmed. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://github.com/YOUR_GITHUB" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/YOUR_LINKEDIN/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
