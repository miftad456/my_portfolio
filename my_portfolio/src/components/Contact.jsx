// src/components/Contact.jsx
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p>If you want to get in touch, feel free to reach me via the links below:</p>
      <div className="contact-links">
        <a href="https://github.com/YOUR_GITHUB" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/YOUR_LINKEDIN/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://leetcode.com/YOUR_LEETCODE/" target="_blank" rel="noreferrer">LeetCode</a>
        <a href="https://codeforces.com/profile/YOUR_CODEFORCES" target="_blank" rel="noreferrer">Codeforces</a>
        <a href="mailto:YOUR_EMAIL@example.com" target="_blank" rel="noreferrer">Email Me</a>
      </div>
    </section>
  );
};

export default Contact;
