// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Miftah Hussien Ahmed. All rights reserved.
          </p>
          <div className="footer-links">
            <a href="https://github.com/miftad456" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/miftah-hussien-2627b1358/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
