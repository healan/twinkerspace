import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './Hero.css';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="eyebrow">{t.hero.eyebrow}</div>
          <h1>
            {t.hero.heading1}
            <span>{t.hero.heading2}</span>
          </h1>
          <p>{t.hero.subtext}</p>
          <div className="proof-tags">
            <span>{t.hero.tag1}</span>
            <span>{t.hero.tag2}</span>
          </div>
          <div className="cta-buttons">
            <a href="#contact" className="cta-primary">{t.hero.cta1}</a>
            <a href="#projects" className="cta-secondary">{t.hero.cta2}</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="stats-row">
            <div className="stat-card">
              <span className="stat-number">30+</span>
              <span className="stat-label">{t.hero.stat1Label}</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">3</span>
              <span className="stat-label">{t.hero.stat2Label}</span>
            </div>
            <div className="stat-card accent">
              <span className="stat-number">+40%</span>
              <span className="stat-label">{t.hero.stat3Label}</span>
            </div>
          </div>

          <div className="browser-mockup">
            <div className="browser-header">
              <div className="dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="url">twinker.space</div>
            </div>
            <div className="browser-content">
              <div className="mock-topbar">
                <div className="mock-logo-block"></div>
                <div className="mock-nav-items">
                  <div className="mock-nav-item"></div>
                  <div className="mock-nav-item"></div>
                  <div className="mock-nav-item"></div>
                  <div className="mock-lang-badge">EN · 한 · 中</div>
                </div>
              </div>
              <div className="mock-hero-section">
                <div className="mock-hero-text">
                  <div className="mock-line wide"></div>
                  <div className="mock-line medium"></div>
                  <div className="mock-line short"></div>
                </div>
                <div className="mock-language-flags">
                  <div className="flag-card">
                    <span className="flag">🇺🇸</span>
                    <span>EN</span>
                  </div>
                  <div className="flag-card active">
                    <span className="flag">🇰🇷</span>
                    <span>한국어</span>
                  </div>
                  <div className="flag-card">
                    <span className="flag">🇨🇳</span>
                    <span>中文</span>
                  </div>
                </div>
              </div>
              <div className="mock-metrics">
                <div className="mock-metric">
                  <div className="metric-bar">
                    <div className="metric-fill" style={{ width: '92%' }}></div>
                  </div>
                  <span>SEO</span>
                  <strong>92</strong>
                </div>
                <div className="mock-metric">
                  <div className="metric-bar">
                    <div className="metric-fill green" style={{ width: '98%' }}></div>
                  </div>
                  <span>Perf</span>
                  <strong>98</strong>
                </div>
                <div className="mock-metric">
                  <div className="metric-bar">
                    <div className="metric-fill purple" style={{ width: '95%' }}></div>
                  </div>
                  <span>A11y</span>
                  <strong>95</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="tech-tags">
            <span>React</span>
            <span>Next.js</span>
            <span>i18next</span>
            <span>TypeScript</span>
            <span>Vercel</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
