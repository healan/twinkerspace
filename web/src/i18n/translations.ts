export type Language = 'en' | 'ko' | 'zh';

export const translations = {
  en: {
    nav: {
      home: 'HOME',
      intro: 'INTRO',
      skills: 'SKILLS',
      blog: 'BLOG',
      contact: 'CONTACT',
    },
    hero: {
      eyebrow: 'multilingual websites for startups',
      heading1: 'Build global-ready websites',
      heading2: 'in Chinese, Korean & English',
      subtext: 'We design and develop high-converting, multilingual websites that help businesses expand into Asian markets with confidence.',
      tag1: 'SEO + i18n + UX',
      tag2: 'Korean / Chinese / EN',
      cta1: 'Get a quote',
      cta2: 'View projects',
      stat1Label: 'Projects Launched',
      stat2Label: 'Markets Entered',
      stat3Label: 'Avg. Conversion Lift',
      browserTitle: 'Global Website Preview',
      browserLang: 'Language',
    },
    services: {
      heading: "Let's build something amazing together!",
      learnMore: 'Learn more →',
      items: [
        {
          title: 'Multilingual Web Development',
          description: 'Build websites that seamlessly support multiple languages with proper internationalization and localization.',
          modalTitle: 'Multilingual Web Development',
          modalContent: [
            { subtitle: 'What we do', text: 'We architect and build websites from the ground up with i18n (internationalization) baked in — not bolted on. Every component, route, and piece of content is designed to support Chinese, Korean, and English simultaneously.' },
            { subtitle: 'Our Stack', text: 'React + i18next, Next.js for SEO, Tailwind CSS, and headless CMS integration (Contentful / Sanity) so your team can update copy in any language without touching code.' },
            { subtitle: 'What you get', text: '• SEO-optimized hreflang tags\n• RTL-ready layout system\n• Locale-aware date/number/currency formatting\n• CMS-driven content in 3 languages\n• Performance score ≥ 90 on Lighthouse' },
          ],
        },
        {
          title: 'Maintenance & Optimization',
          description: 'Keep your global website running smoothly with ongoing maintenance, performance optimization, and updates.',
          modalTitle: 'Maintenance & Optimization',
          modalContent: [
            { subtitle: 'Monthly retainer', text: 'We offer monthly retainer plans so your site never falls behind. Security patches, dependency upgrades, and bug fixes are handled proactively — no need to open a ticket every time.' },
            { subtitle: 'Performance tuning', text: 'We monitor Core Web Vitals across all locale versions of your site. When scores dip, we diagnose and fix — image optimization, code splitting, caching strategies, and CDN configuration.' },
            { subtitle: 'Reporting', text: 'Monthly reports covering uptime, Lighthouse scores, traffic by locale, and conversion metrics so you always know the ROI of your global site.' },
          ],
        },
        {
          title: 'Content & Localization',
          description: 'Translate and adapt your content for different markets while maintaining brand consistency and cultural relevance.',
          modalTitle: 'Content & Localization',
          modalContent: [
            { subtitle: 'Beyond translation', text: 'We don\'t just translate words — we localize meaning. Idioms, tone, cultural references, and visual design all get adapted for Korean and Chinese audiences by native speakers.' },
            { subtitle: 'SEO localization', text: 'We research keywords in each target language and optimize meta tags, headings, and content accordingly. Your Korean landing page ranks on Naver; your Chinese page on Baidu.' },
            { subtitle: 'Content management', text: 'We set up your CMS so your team can publish in all languages without our help. Training sessions included.' },
          ],
        },
      ],
    },
    capabilities: {
      heading: 'What can you build?',
      subtext: 'Specialized web solutions for international expansion',
    },
    projects: {
      heading: 'Featured Projects',
      viewCaseStudy: 'View case study',
      items: [
        {
          title: 'SaaS Platform Localization',
          metric: '+45% conversion',
          image: '/placeholder-project1.jpg',
          points: ['Localized user interface for Korean market', 'SEO optimization for local search terms', 'Cultural adaptation of onboarding flow', 'Performance monitoring and A/B testing'],
          caseStudy: {
            client: 'B2B SaaS Startup',
            timeline: '6 weeks',
            challenge: 'A fast-growing SaaS company needed to enter the Korean market but had zero localization. Their English site was converting at 1.2% globally — they wanted to understand if a fully localized Korean experience could move the needle.',
            solution: 'We rebuilt their marketing site and onboarding flow in Korean, adapted the UX patterns for Korean business culture (formal language registers, trust signals like business registration numbers), and re-optimized their entire SEO footprint for Naver.',
            results: ['+45% conversion rate on Korean landing pages', '3x organic traffic from Naver within 90 days', 'Onboarding completion rate up 28%', 'Korean enterprise deals closed within 2 months of launch'],
            tech: ['Next.js', 'i18next', 'Naver Search Advisor', 'Vercel'],
          },
        },
        {
          title: 'E-commerce Market Entry Page',
          metric: '3x faster launch',
          image: '/placeholder-project2.jpg',
          points: ['Chinese market landing page design', 'Payment integration for local preferences', 'Content translation and localization', 'Mobile-first responsive design'],
          caseStudy: {
            client: 'DTC E-commerce Brand',
            timeline: '4 weeks',
            challenge: 'A direct-to-consumer brand wanted a Chinese market entry page in time for the Golden Week shopping season. They had 4 weeks and no prior localization experience.',
            solution: 'We delivered a full Chinese-language landing page with culturally adapted creative, WeChat-friendly sharing metadata, and integration with popular Chinese payment preferences. Mobile-first since 80%+ of Chinese shoppers browse on mobile.',
            results: ['Launched 3 days before Golden Week', '¥120,000 in first-week revenue', 'Mobile conversion rate: 4.2%', 'Zero critical post-launch bugs'],
            tech: ['React', 'TailwindCSS', 'Alipay API reference', 'WeChat Meta Tags'],
          },
        },
      ],
    },
    insights: {
      heading: 'Insights on multilingual web & global UX',
    },
    contact: {
      heading: 'Start your project',
      subtext: 'Reply within 1-2 business days.',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email Address',
      messagePlaceholder: 'Tell us about your project...',
      submit: 'Send inquiry',
      success: 'Message sent! We\'ll be in touch soon.',
      error: 'Something went wrong. Please try again.',
    },
  },

  ko: {
    nav: {
      home: '홈',
      intro: '소개',
      skills: '스킬',
      blog: '블로그',
      contact: '문의',
    },
    hero: {
      eyebrow: '스타트업을 위한 다국어 웹사이트',
      heading1: '글로벌 웹사이트를',
      heading2: '한국어, 중국어, 영어로 제작합니다',
      subtext: '아시아 시장 진출을 위한 고성능 다국어 웹사이트를 설계하고 개발합니다.',
      tag1: 'SEO + i18n + UX',
      tag2: '한국어 / 중국어 / EN',
      cta1: '견적 문의',
      cta2: '프로젝트 보기',
      stat1Label: '완료 프로젝트',
      stat2Label: '진출 시장',
      stat3Label: '평균 전환율 향상',
      browserTitle: '글로벌 웹사이트 미리보기',
      browserLang: '언어',
    },
    services: {
      heading: '함께 멋진 것을 만들어봐요!',
      learnMore: '더 알아보기 →',
      items: [
        {
          title: '다국어 웹 개발',
          description: '다국어를 완벽하게 지원하는 국제화·현지화 웹사이트를 개발합니다.',
          modalTitle: '다국어 웹 개발',
          modalContent: [
            { subtitle: '우리가 하는 일', text: '중국어, 한국어, 영어를 동시에 지원하도록 처음부터 i18n을 기반으로 웹사이트를 설계·개발합니다.' },
            { subtitle: '기술 스택', text: 'React + i18next, SEO를 위한 Next.js, Tailwind CSS, 헤드리스 CMS 연동(Contentful / Sanity)으로 코드 없이 다국어 콘텐츠를 관리합니다.' },
            { subtitle: '제공 사항', text: '• SEO 최적화 hreflang 태그\n• RTL 레이아웃 지원\n• 로케일별 날짜/숫자/통화 포맷\n• 3개 언어 CMS 기반 콘텐츠\n• Lighthouse 성능 점수 90점 이상' },
          ],
        },
        {
          title: '유지보수 & 최적화',
          description: '지속적인 유지보수, 성능 최적화, 업데이트로 글로벌 웹사이트를 최상의 상태로 유지합니다.',
          modalTitle: '유지보수 & 최적화',
          modalContent: [
            { subtitle: '월간 리테이너', text: '월정액 플랜으로 사이트가 뒤처지지 않도록 관리합니다. 보안 패치, 의존성 업그레이드, 버그 수정을 선제적으로 처리합니다.' },
            { subtitle: '성능 튜닝', text: '모든 로케일 버전의 Core Web Vitals를 모니터링합니다. 점수가 하락하면 이미지 최적화, 코드 스플리팅, 캐싱 전략, CDN 설정을 통해 개선합니다.' },
            { subtitle: '월간 보고', text: '가동 시간, Lighthouse 점수, 로케일별 트래픽, 전환 지표를 담은 월간 리포트를 제공합니다.' },
          ],
        },
        {
          title: '콘텐츠 & 현지화',
          description: '브랜드 일관성과 문화적 적합성을 유지하면서 다양한 시장에 맞게 콘텐츠를 번역·현지화합니다.',
          modalTitle: '콘텐츠 & 현지화',
          modalContent: [
            { subtitle: '단순 번역 그 이상', text: '단어만 번역하는 것이 아니라 의미를 현지화합니다. 관용어, 어조, 문화적 맥락, 시각 디자인까지 한국어·중국어 원어민이 현지 맞춤으로 조정합니다.' },
            { subtitle: 'SEO 현지화', text: '각 언어별 키워드를 조사하고 메타 태그, 헤딩, 콘텐츠를 최적화합니다. 한국어 페이지는 네이버에, 중국어 페이지는 바이두에 최적화됩니다.' },
            { subtitle: '콘텐츠 관리', text: 'CMS를 설정해 팀이 우리 도움 없이도 모든 언어로 발행할 수 있게 합니다. 교육 세션을 포함합니다.' },
          ],
        },
      ],
    },
    capabilities: {
      heading: '무엇을 만들 수 있나요?',
      subtext: '글로벌 확장을 위한 전문 웹 솔루션',
    },
    projects: {
      heading: '주요 프로젝트',
      viewCaseStudy: '케이스 스터디 보기',
      items: [
        {
          title: 'SaaS 플랫폼 현지화',
          metric: '+45% 전환율',
          image: '/placeholder-project1.jpg',
          points: ['한국 시장을 위한 UI 현지화', '현지 검색어 SEO 최적화', '온보딩 플로우 문화적 적응', '성능 모니터링 및 A/B 테스트'],
          caseStudy: {
            client: 'B2B SaaS 스타트업',
            timeline: '6주',
            challenge: '빠르게 성장하는 SaaS 기업이 한국 시장 진출을 원했지만 현지화가 전혀 없었습니다. 영어 사이트의 글로벌 전환율은 1.2%였고, 완전히 현지화된 한국어 경험이 결과를 바꿀 수 있는지 알고 싶었습니다.',
            solution: '한국어로 마케팅 사이트와 온보딩 플로우를 재구성하고, 한국 비즈니스 문화에 맞는 UX 패턴(격식체, 사업자등록번호 등 신뢰 지표)을 적용했으며, 네이버에 맞게 SEO 전체를 재최적화했습니다.',
            results: ['한국어 랜딩 페이지 전환율 +45%', '90일 내 네이버 유기 트래픽 3배 증가', '온보딩 완료율 28% 향상', '출시 2개월 내 한국 기업 계약 체결'],
            tech: ['Next.js', 'i18next', 'Naver Search Advisor', 'Vercel'],
          },
        },
        {
          title: '이커머스 시장 진출 페이지',
          metric: '3배 빠른 출시',
          image: '/placeholder-project2.jpg',
          points: ['중국 시장 랜딩 페이지 디자인', '현지 결제 방식 연동', '콘텐츠 번역 및 현지화', '모바일 우선 반응형 디자인'],
          caseStudy: {
            client: 'DTC 이커머스 브랜드',
            timeline: '4주',
            challenge: 'D2C 브랜드가 황금연휴 쇼핑 시즌에 맞춰 중국 시장 진출 페이지가 필요했습니다. 4주의 시간과 현지화 경험 제로.',
            solution: '문화적으로 적응된 크리에이티브, 위챗 공유 메타데이터, 중국 결제 방식 연동을 갖춘 중국어 랜딩 페이지를 납품했습니다. 중국 쇼핑객의 80% 이상이 모바일로 이용하므로 모바일 우선으로 제작했습니다.',
            results: ['황금연휴 3일 전 출시', '첫 주 매출 ¥120,000', '모바일 전환율 4.2%', '출시 후 치명적 버그 0건'],
            tech: ['React', 'TailwindCSS', 'Alipay API', 'WeChat 메타 태그'],
          },
        },
      ],
    },
    insights: {
      heading: '다국어 웹 & 글로벌 UX 인사이트',
    },
    contact: {
      heading: '프로젝트 시작하기',
      subtext: '영업일 기준 1-2일 내에 답변드립니다.',
      namePlaceholder: '이름',
      emailPlaceholder: '이메일 주소',
      messagePlaceholder: '프로젝트에 대해 알려주세요...',
      submit: '문의 보내기',
      success: '메시지가 전송되었습니다! 곧 연락드리겠습니다.',
      error: '오류가 발생했습니다. 다시 시도해 주세요.',
    },
  },

  zh: {
    nav: {
      home: '首页',
      intro: '简介',
      skills: '技能',
      blog: '博客',
      contact: '联系',
    },
    hero: {
      eyebrow: '为初创企业打造多语言网站',
      heading1: '构建面向全球的网站',
      heading2: '支持中文、韩文与英文',
      subtext: '我们设计并开发高转化率的多语言网站，帮助企业自信地拓展亚洲市场。',
      tag1: 'SEO + i18n + UX',
      tag2: '韩文 / 中文 / EN',
      cta1: '获取报价',
      cta2: '查看项目',
      stat1Label: '已完成项目',
      stat2Label: '进入市场',
      stat3Label: '平均转化率提升',
      browserTitle: '全球网站预览',
      browserLang: '语言',
    },
    services: {
      heading: '让我们一起创造精彩！',
      learnMore: '了解更多 →',
      items: [
        {
          title: '多语言网站开发',
          description: '构建无缝支持多种语言的网站，具备完善的国际化与本地化能力。',
          modalTitle: '多语言网站开发',
          modalContent: [
            { subtitle: '我们的工作', text: '我们从零开始架构并构建网站，将 i18n（国际化）内置其中，而非事后添加。每个组件、路由和内容都设计为同时支持中文、韩文和英文。' },
            { subtitle: '技术栈', text: 'React + i18next、用于 SEO 的 Next.js、Tailwind CSS，以及无头 CMS 集成（Contentful / Sanity），让您的团队无需改动代码即可更新任何语言的内容。' },
            { subtitle: '您将获得', text: '• SEO 优化的 hreflang 标签\n• RTL 就绪的布局系统\n• 支持本地化的日期/数字/货币格式\n• CMS 驱动的三语内容\n• Lighthouse 性能评分 ≥ 90' },
          ],
        },
        {
          title: '维护与优化',
          description: '通过持续的维护、性能优化和更新，保持您的全球网站高效运行。',
          modalTitle: '维护与优化',
          modalContent: [
            { subtitle: '月度托管', text: '我们提供月度托管计划，让您的网站始终保持最新状态。安全补丁、依赖升级和 Bug 修复均主动处理，无需您每次提交工单。' },
            { subtitle: '性能调优', text: '我们监控网站所有语言版本的 Core Web Vitals。当评分下降时，我们会进行诊断并修复——图片优化、代码分割、缓存策略和 CDN 配置。' },
            { subtitle: '月度报告', text: '涵盖正常运行时间、Lighthouse 评分、各语言版本流量及转化指标的月度报告，让您随时了解全球网站的投资回报。' },
          ],
        },
        {
          title: '内容与本地化',
          description: '在保持品牌一致性和文化相关性的同时，为不同市场翻译和适配您的内容。',
          modalTitle: '内容与本地化',
          modalContent: [
            { subtitle: '超越翻译', text: '我们不只是翻译文字——我们本地化意义。惯用语、语气、文化参考和视觉设计都由母语者为韩国和中国受众进行适配。' },
            { subtitle: 'SEO 本地化', text: '我们研究每种目标语言的关键词，并相应优化 meta 标签、标题和内容。您的韩语页面在 Naver 排名，您的中文页面在百度排名。' },
            { subtitle: '内容管理', text: '我们配置好 CMS，让您的团队无需我们的帮助即可以所有语言发布内容。包含培训课程。' },
          ],
        },
      ],
    },
    capabilities: {
      heading: '能构建什么？',
      subtext: '面向国际扩张的专业网站解决方案',
    },
    projects: {
      heading: '精选项目',
      viewCaseStudy: '查看案例研究',
      items: [
        {
          title: 'SaaS 平台本地化',
          metric: '+45% 转化率',
          image: '/placeholder-project1.jpg',
          points: ['针对韩国市场的 UI 本地化', '本地搜索词 SEO 优化', '入职流程的文化适配', '性能监控与 A/B 测试'],
          caseStudy: {
            client: 'B2B SaaS 初创公司',
            timeline: '6 周',
            challenge: '一家快速成长的 SaaS 公司希望进入韩国市场，但完全没有本地化。其英文网站的全球转化率为 1.2%，他们想了解完全本地化的韩语体验是否能改变结果。',
            solution: '我们用韩语重建了他们的营销网站和入职流程，根据韩国商业文化（正式语体、营业执照等信任信号）调整了 UX 模式，并针对 Naver 重新优化了整体 SEO 布局。',
            results: ['韩语落地页转化率提升 +45%', '90 天内来自 Naver 的自然流量增长 3 倍', '入职完成率提升 28%', '上线 2 个月内完成韩国企业交易'],
            tech: ['Next.js', 'i18next', 'Naver Search Advisor', 'Vercel'],
          },
        },
        {
          title: '电商市场进入页面',
          metric: '上线速度提升 3 倍',
          image: '/placeholder-project2.jpg',
          points: ['中国市场落地页设计', '本地支付方式集成', '内容翻译与本地化', '移动端优先的响应式设计'],
          caseStudy: {
            client: 'DTC 电商品牌',
            timeline: '4 周',
            challenge: '一个 DTC 品牌需要在黄金周购物季前完成中国市场进入页面。时间只有 4 周，且没有任何本地化经验。',
            solution: '我们交付了一个完整的中文落地页，包含文化适配的创意内容、微信友好的分享元数据，以及对中国常用支付方式的集成。由于 80% 以上的中国购物者通过手机浏览，采用移动优先设计。',
            results: ['黄金周前 3 天上线', '首周收入 ¥120,000', '移动端转化率：4.2%', '上线后零严重 Bug'],
            tech: ['React', 'TailwindCSS', 'Alipay API', '微信 Meta 标签'],
          },
        },
      ],
    },
    insights: {
      heading: '多语言网站与全球用户体验洞察',
    },
    contact: {
      heading: '开始您的项目',
      subtext: '我们将在 1-2 个工作日内回复。',
      namePlaceholder: '您的姓名',
      emailPlaceholder: '电子邮件地址',
      messagePlaceholder: '请告诉我们您的项目需求...',
      submit: '发送询问',
      success: '消息已发送！我们将尽快与您联系。',
      error: '出现了问题，请重试。',
    },
  },
};

export interface Translations {
  nav: { home: string; intro: string; skills: string; blog: string; contact: string };
  hero: {
    eyebrow: string; heading1: string; heading2: string; subtext: string;
    tag1: string; tag2: string; cta1: string; cta2: string;
    stat1Label: string; stat2Label: string; stat3Label: string;
    browserTitle: string; browserLang: string;
  };
  services: {
    heading: string;
    learnMore: string;
    items: Array<{
      title: string; description: string; modalTitle: string;
      modalContent: Array<{ subtitle: string; text: string }>;
    }>;
  };
  capabilities: { heading: string; subtext: string };
  projects: {
    heading: string;
    viewCaseStudy: string;
    items: Array<{
      title: string; metric: string; image: string; points: string[];
      caseStudy: { client: string; timeline: string; challenge: string; solution: string; results: string[]; tech: string[] };
    }>;
  };
  insights: { heading: string };
  contact: {
    heading: string; subtext: string; namePlaceholder: string;
    emailPlaceholder: string; messagePlaceholder: string;
    submit: string; success: string; error: string;
  };
}
