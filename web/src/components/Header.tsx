import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import type { Language } from '../i18n/translations';
import './Header.css';

const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'ko', label: '한국어' },
  { code: 'zh', label: '中文' },
];

const Header: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  return (
    <header className="header">
      <div className="container">
        <div className="brand">
          <svg className="brand-mark" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" rx="8" fill="#2563EB"/>
            <path d="M7 14h14M14 7l7 7-7 7" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          twinker space
        </div>
        <nav className="nav">
          <a href="#hero">{t.nav.home}</a>
          <a href="#services">{t.nav.intro}</a>
          <a href="#capabilities">{t.nav.skills}</a>
          <a href="#insights">{t.nav.blog}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
        <div className="lang-switcher">
          <button
            className="lang-pill"
            onClick={() => setDropdownOpen((o) => !o)}
            aria-haspopup="listbox"
            aria-expanded={dropdownOpen}
          >
            {current.label}
            <span className={`lang-caret ${dropdownOpen ? 'open' : ''}`}>▾</span>
          </button>
          {dropdownOpen && (
            <ul className="lang-dropdown" role="listbox">
              {LANGUAGES.map((l) => (
                <li
                  key={l.code}
                  role="option"
                  aria-selected={l.code === lang}
                  className={l.code === lang ? 'active' : ''}
                  onClick={() => { setLang(l.code); setDropdownOpen(false); }}
                >
                  {l.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
