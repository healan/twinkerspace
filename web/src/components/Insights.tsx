import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { ARTICLES } from '../data/articles';
import type { Language } from '../i18n/translations';
import './Insights.css';

const Insights: React.FC = () => {
  const { lang, t } = useLanguage();
  const articles = ARTICLES[lang as Language].slice(0, 2);

  return (
    <section id="insights" className="insights">
      <div className="container">
        <div className="insights-left">
          <h2>{t.insights.heading}</h2>
          <Link to="/blog" className="view-all-btn">View all articles →</Link>
        </div>
        <div className="articles">
          {articles.map((article, index) => (
            <Link
              key={index}
              to={`/blog/${article.slug}`}
              className="article-card"
            >
              <div className="article-visual">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </div>
              <div className="article-content">
                <h3>{article.title}</h3>
                <div className="article-meta">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
                <p className="article-excerpt">{article.excerpt}</p>
                <div className="article-tags">
                  {article.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                <span className="article-read-link">Read article →</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Insights;
