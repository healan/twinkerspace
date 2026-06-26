import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { ARTICLES } from '../data/articles';
import type { Language } from '../i18n/translations';
import './BlogPage.css';

const BlogPage: React.FC = () => {
  const { lang } = useLanguage();
  const articles = ARTICLES[lang as Language];

  return (
    <div className="blog-page">
      <div className="blog-page-header">
        <Link to="/#insights" className="blog-back">← Back to home</Link>
        <h1>Insights</h1>
        <p>Perspectives on multilingual web design, i18n, and global UX.</p>
      </div>

      <div className="blog-list">
        {articles.map((article) => (
          <Link
            key={article.slug}
            to={`/blog/${article.slug}`}
            className="blog-list-card"
          >
            <div className="blog-list-card-header">
              <div className="blog-list-tags">
                {article.tags.map((tag, i) => (
                  <span key={i} className="blog-tag">{tag}</span>
                ))}
              </div>
              <span className="blog-list-meta">{article.date} · {article.readTime}</span>
            </div>
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>
            <span className="blog-read-link">Read article →</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
