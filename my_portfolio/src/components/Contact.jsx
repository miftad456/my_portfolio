// src/components/Contact.jsx
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">
          <span className="title-icon">•</span> Contact Me
        </h2>
        <div className="contact-grid">
          <div className="contact-info">
            <p>
              I&apos;m always open to discussions about software engineering,
              new opportunities, or just chatting about tech. Pick how you&apos;d
              like to reach me:
            </p>
            <div className="contact-methods">            <a
              href="mailto:miftahhusen562@gmail.com"
              className="contact-method"
            >
              <span className="method-icon">✉</span>
              <div>
                <span className="method-label">Email</span>
                <span className="method-value">miftahhusen562@gmail.com</span>
              </div>
            </a>
              <a
                href="https://t.me/re875"
                target="_blank"
                rel="noreferrer"
                className="contact-method"
              >
                <span className="method-icon">💬</span>
                <div>
                  <span className="method-label">Telegram</span>
                  <span className="method-value">@re875</span>
                </div>
              </a>
              <a
                href="https://github.com/miftad456"
                target="_blank"
                rel="noreferrer"
                className="contact-method"
              >
                <span className="method-icon">GH</span>
                <div>
                  <span className="method-label">GitHub</span>
                  <span className="method-value">@miftad456</span>
                </div>
              </a>
            </div>
          </div>
          <div className="contact-form-wrap">
            <form
              action="https://formspree.io/f/mljjjgvw"
              method="POST"
              className="contact-form"
            >
              <h5>Send me a message</h5>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your message"
                  rows="5"
                  required
                  className="form-input"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
            <p className="form-note">
              Note: the form sends to Formspree. Replace YOUR_FORM_ID with your
              Formspree endpoint once you set one up, or use a mailto link
              instead.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
