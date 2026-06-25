import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './Contact.css';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault(): void }) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('http://localhost:4000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Server error');
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <div className="contact-heading">
          <h2>{t.contact.heading}</h2>
          <p className="contact-subtext">{t.contact.subtext}</p>
          <a className="contact-email" href="mailto:hello@twinkerspace.com">hello@twinkerspace.com</a>
        </div>

        {status === 'success' ? (
          <div className="contact-success">
            <div className="success-icon">✓</div>
            <p>{t.contact.success}</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t.contact.namePlaceholder}</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={t.contact.namePlaceholder}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t.contact.emailPlaceholder}</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t.contact.emailPlaceholder}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t.contact.messagePlaceholder}</label>
              <textarea
                id="message"
                name="message"
                placeholder={t.contact.messagePlaceholder}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            {status === 'error' && (
              <p className="contact-error">{t.contact.error}</p>
            )}
            <button type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? '...' : t.contact.submit}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
