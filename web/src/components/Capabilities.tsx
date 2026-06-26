import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './Capabilities.css';

const CAPABILITIES = {
  en: [
    { title: 'For startups', items: ['Global landing pages', 'Product marketing sites', 'Bilingual brand sites', 'SEO-ready expansion pages'] },
    { title: 'For content businesses', items: ['Localized blogs', 'Course pages', 'Membership landing flows', 'Content hubs'] },
    { title: 'For market entry', items: ['Korean market pages', 'Chinese content localization', 'Regional brand adaptations', 'Cross-border e-commerce'] },
  ],
  ko: [
    { title: '스타트업', items: ['글로벌 랜딩 페이지', '제품 마케팅 사이트', '2개 국어 브랜드 사이트', 'SEO 최적화 확장 페이지'] },
    { title: '콘텐츠 비즈니스', items: ['현지화 블로그', '강의 페이지', '멤버십 랜딩 플로우', '콘텐츠 허브'] },
    { title: '시장 진출', items: ['한국 시장 페이지', '중국어 콘텐츠 현지화', '지역 브랜드 적응', '크로스보더 이커머스'] },
  ],
  zh: [
    { title: '初创企业', items: ['全球落地页', '产品营销网站', '双语品牌网站', 'SEO 就绪的扩张页面'] },
    { title: '内容企业', items: ['本地化博客', '课程页面', '会员落地流程', '内容中心'] },
    { title: '市场进入', items: ['韩国市场页面', '中文内容本地化', '区域品牌适配', '跨境电商'] },
  ],
};

const Capabilities: React.FC = () => {
  const { lang, t } = useLanguage();
  const capabilities = CAPABILITIES[lang];

  return (
    <section id="capabilities" className="capabilities">
      <div className="container">
        <div className="capabilities-wrapper">
          <div className="capabilities-header">
            <h2>{t.capabilities.heading}</h2>
            <p>{t.capabilities.subtext}</p>
          </div>
          <div className="capabilities-content">
            {capabilities.map((cap, index) => (
              <div key={index} className="capability-column">
                <h3>{cap.title}</h3>
                <ul>
                  {cap.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
