import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './Projects.css';

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const [activeStudy, setActiveStudy] = useState<number | null>(null);

  useEffect(() => {
    const el = titleRef.current;
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting && el) {
          el.classList.add('animate');
          obs.unobserve(el);
        }
      },
      { threshold: 0.4 }
    );
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  const projects = t.projects.items;

  const openStudy = (i: number) => {
    setActiveStudy(i);
    document.body.style.overflow = 'hidden';
  };

  const closeStudy = () => {
    setActiveStudy(null);
    document.body.style.overflow = '';
  };

  return (
    <section id="projects" className="projects">
      <div className="prj-container">
        <h2 ref={titleRef} className="highlight-underline">{t.projects.heading}</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image"></div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <div className="metric-pill">{project.metric}</div>
                <ul>
                  {project.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <button className="case-study-link" onClick={() => openStudy(index)}>
                  {t.projects.viewCaseStudy} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeStudy !== null && (
        <div className="modal-backdrop" onClick={closeStudy}>
          <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeStudy}>✕</button>
            <div className="modal-body">
              <div className="modal-meta">
                <span className="modal-tag">{projects[activeStudy].caseStudy.client}</span>
                <span className="modal-tag secondary">{projects[activeStudy].caseStudy.timeline}</span>
                <span className="metric-pill">{projects[activeStudy].metric}</span>
              </div>
              <h2 className="modal-title">{projects[activeStudy].title}</h2>

              <div className="case-section">
                <h4>Challenge</h4>
                <p>{projects[activeStudy].caseStudy.challenge}</p>
              </div>

              <div className="case-section">
                <h4>Solution</h4>
                <p>{projects[activeStudy].caseStudy.solution}</p>
              </div>

              <div className="case-section">
                <h4>Results</h4>
                <ul className="results-list">
                  {projects[activeStudy].caseStudy.results.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>

              <div className="case-section">
                <h4>Tech Stack</h4>
                <div className="tech-stack">
                  {projects[activeStudy].caseStudy.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

              <a href="#contact" className="cta-primary modal-cta" onClick={closeStudy}>
                Start a similar project →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
