import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { ARTICLES } from '../data/articles';
import type { Language } from '../i18n/translations';
import './ArticlePage.css';

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLanguage();
  const articles = ARTICLES[lang as Language];
  const article = articles.find((a) => a.slug === slug);

  if (!article) return <Navigate to="/blog" replace />;

  return (
    <div className="article-page">
      <div className="article-page-inner">
        <Link to="/blog" className="article-back">← All articles</Link>

        <div className="article-page-meta">
          <div className="article-page-tags">
            {article.tags.map((tag, i) => (
              <span key={i} className="blog-tag">{tag}</span>
            ))}
          </div>
          <span className="article-page-date">{article.date} · {article.readTime}</span>
        </div>

        <h1>{article.title}</h1>
        <p className="article-page-excerpt">{article.excerpt}</p>

        <div className="article-page-body">
          {article.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="article-page-footer">
          <Link to="/blog" className="article-back-bottom">← Back to all articles</Link>
          <a href="/#contact" className="article-cta">Start a project →</a>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
