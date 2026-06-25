import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Capabilities from './components/Capabilities';
import Projects from './components/Projects';
import Insights from './components/Insights';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogPage from './pages/BlogPage';
import ArticlePage from './pages/ArticlePage';
import './App.css';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Capabilities />
      <Projects />
      <Insights />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <div className="App">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<ArticlePage />} />
          </Routes>
        </div>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
