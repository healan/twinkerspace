import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './Services.css';

const SERVICE_ICONS = [
  <svg key="globe" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M2 12h20"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>,
  <svg key="settings" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>,
  <svg key="pen" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>,
];

const VISUALS = ['website-mockup', 'dashboard-mockup', 'content-mockup'];

const Services: React.FC = () => {
  const { t } = useLanguage();
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const open = (i: number) => {
    setActiveModal(i);
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    setActiveModal(null);
    document.body.style.overflow = '';
  };

  const services = t.services.items;

  return (
    <section id="services" className="services">
      <h2>{t.services.heading}</h2>
      <div className="container">
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className={`service-visual ${VISUALS[index]}`}>{SERVICE_ICONS[index]}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="learn-more" onClick={() => open(index)}>
                {t.services.learnMore}
              </button>
            </div>
          ))}
        </div>
      </div>

      {activeModal !== null && (
        <div className="modal-backdrop" onClick={close}>
          <div className="svc-modal-panel" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={close}>✕</button>
            <div className="svc-modal-body">
              <div className={`svc-modal-icon ${VISUALS[activeModal]}`}>{SERVICE_ICONS[activeModal]}</div>
              <h2 className="svc-modal-title">{services[activeModal].modalTitle}</h2>
              {services[activeModal].modalContent.map((block, i) => (
                <div key={i} className="svc-section">
                  <h4>{block.subtitle}</h4>
                  <p style={{ whiteSpace: 'pre-line' }}>{block.text}</p>
                </div>
              ))}
              <a href="#contact" className="svc-cta" onClick={close}>
                Get started →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
