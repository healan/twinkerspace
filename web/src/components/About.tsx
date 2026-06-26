import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a full-stack developer with a passion for creating beautiful and functional web applications.
              With experience in React, TypeScript, and modern web technologies, I love bringing ideas to life.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open source,
              or enjoying outdoor activities.
            </p>
          </div>
          <div className="about-image">
            <img src="/placeholder-about.jpg" alt="About" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;