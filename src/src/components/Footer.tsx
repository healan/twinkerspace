import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="8" fill="#2563EB"/>
              <path d="M7 14h14M14 7l7 7-7 7" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>twinker space</span>
          </div>
          <p className="footer-tagline">Multilingual websites for startups expanding into Asian markets.</p>
          <div className="footer-socials">
            <a href="mailto:hello@twinkerspace.com" aria-label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-links-group">
          <h4>Navigation</h4>
          <a href="#hero">Home</a>
          <a href="#services">Services</a>
          <a href="#capabilities">What We Build</a>
          <a href="#projects">Projects</a>
          <a href="#insights">Insights</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-links-group">
          <h4>Services</h4>
          <a href="#services">Multilingual Web Dev</a>
          <a href="#services">Maintenance & Optimization</a>
          <a href="#services">Content & Localization</a>
        </div>

        <div className="footer-links-group">
          <h4>Contact</h4>
          <a href="mailto:hello@twinkerspace.com">hello@twinkerspace.com</a>
          <span className="footer-detail">Korean / Chinese / English</span>
          <span className="footer-detail">Reply in 1–2 business days</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p> © {new Date().getFullYear()} twinker space. All rights reserved.</p>
        <p className="footer-made">Built with React &amp; i18next</p>
      </div>
    </footer>
  );
};

export default Footer;
