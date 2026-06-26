export interface Article {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  excerpt: string;
  content: string[];
}

export interface ArticleSet {
  en: Article[];
  ko: Article[];
  zh: Article[];
}

export const ARTICLES: ArticleSet = {
  en: [
    {
      slug: 'designing-for-the-web-in-2026',
      title: 'Designing for the Web in 2026',
      date: 'March 2026',
      readTime: '5 min read',
      tags: ['UI', 'Frontend', 'Trends'],
      excerpt: 'Exploring the latest trends in web design and user experience.',
      content: [
        'The web design landscape has shifted dramatically over the past few years. With browsers finally converging on a stable feature set and CSS gaining powerful new primitives, designers and developers now have more expressive tools than ever to craft compelling digital experiences.',
        'Container queries have fundamentally changed how we think about responsive design. Rather than designing components around viewport breakpoints, we can now let components respond to their own container\'s size. This enables truly portable UI components that adapt intelligently wherever they are placed — a card in a sidebar behaves differently from the same card in a full-width grid, automatically.',
        'Design tokens have moved from nice-to-have to essential infrastructure. Teams managing multiple products or white-label deployments rely on a single token layer to propagate brand decisions — colors, spacing, typography scales — across web, native, and marketing assets consistently. Tools like Style Dictionary and Theo have matured, and first-class token support is now baked into Figma\'s component workflows.',
        'Dark mode is no longer an afterthought. Users expect seamless transitions, and the web platform\'s prefers-color-scheme media query combined with CSS custom properties makes it straightforward to deliver. The subtler art is choosing palettes that preserve contrast ratios and convey the same brand personality in both light and dark environments.',
        'Motion and micro-interactions continue to gain importance. The View Transitions API, now widely supported, enables smooth page-to-page animations that were previously possible only in single-page apps with heavy JavaScript. Animation should serve communication — guiding focus, confirming actions, conveying hierarchy — rather than existing purely as decoration.',
        'Accessibility has shifted from checkbox to culture. Teams are embedding accessibility audits into CI pipelines, catching issues before they reach production. Semantic HTML, correct ARIA roles, and keyboard navigation coverage are non-negotiable for products with global ambitions.',
        'AI-assisted design tooling is accelerating iteration. Designers can generate layout variants, auto-generate alt text, or receive contrast-ratio suggestions in real time. The risk is over-reliance; the opportunity is spending more creative energy on decisions that truly matter — brand voice, interaction metaphors, and information architecture.',
      ],
    },
    {
      slug: 'localization-tips-for-global-ready-apps',
      title: 'Localization: Tips for global-ready apps',
      date: 'February 2026',
      readTime: '7 min read',
      tags: ['i18n', 'UX', 'Markets'],
      excerpt: 'Best practices for creating applications that work seamlessly across cultures.',
      content: [
        'Building for a global audience is not an afterthought you layer on after launch. Applications that reach international users well are designed with localization as a first-class concern from the first commit. The cost of retrofitting i18n into a mature codebase is steep — string extraction, bi-directional layout refactoring, and locale-aware data formatting touch nearly every layer of the stack.',
        'The foundation is string externalization. Every user-visible string belongs in a translation resource file, never hard-coded in component logic. Libraries like react-intl, i18next, and Vue I18n provide the plumbing; the discipline is a team convention enforced through linting. A rule that flags string literals inside JSX expressions catches most violations before code review.',
        'Pluralization is more complex than it appears. English has two plural forms, but Arabic has six, and Russian pluralization depends on the last digit and last two digits of the number. ICU message format, supported by most mature i18n libraries, lets translators express these rules without touching application code. Never concatenate strings with counts.',
        'Date, time, and number formatting are locale-sensitive. The JavaScript Intl API covers most use cases: Intl.DateTimeFormat, Intl.NumberFormat, and Intl.RelativeTimeFormat handle locale-appropriate formatting without additional dependencies. Always store data in UTC and format at display time using the user\'s resolved locale.',
        'Currency display follows similar principles. Intl.NumberFormat with style: \'currency\' handles symbol placement, decimal separators, and grouping separators correctly per locale. Avoid hard-coding currency symbols or assuming symbol position — in many locales the symbol follows the amount rather than preceding it.',
        'Right-to-left (RTL) support requires layout awareness. CSS logical properties (margin-inline-start, padding-block-end) flip automatically with the document direction without duplicating stylesheet rules. Test your layouts early with Arabic or Hebrew content; icon orientation, progress indicators, and list markers all behave differently in RTL contexts.',
        'Image and media localization is often overlooked. Marketing images containing text must be replaced per locale. Some visual metaphors — hand gestures, color symbolism, holidays — vary significantly by market and can inadvertently alienate users if not reviewed by native speakers.',
        'Pseudo-localization is the most underused testing technique in i18n. By replacing source strings with expanded, accented variants, teams can catch layout overflow, hard-coded strings, and font coverage issues before a single human translation is available. Integrate it into your QA pipeline as an additional locale.',
        'Work with professional translators who understand your domain. Machine translation struggles with brand voice, technical jargon, and culturally loaded terms. Providing translators with context — screenshots, style guides, glossaries of product-specific terms — dramatically improves quality and reduces costly revision cycles.',
        'Finally, build a feedback loop with in-market users. Translation is not a one-time task; products evolve, new features ship, and language itself changes. A lightweight in-app mechanism for users to flag incorrect translations pays dividends far beyond its implementation cost.',
      ],
    },
  ],
  ko: [
    {
      slug: 'designing-for-the-web-in-2026',
      title: '2026년 웹 디자인 트렌드',
      date: '2026년 3월',
      readTime: '5분 읽기',
      tags: ['UI', '프론트엔드', '트렌드'],
      excerpt: '웹 디자인과 사용자 경험의 최신 트렌드를 살펴봅니다.',
      content: [
        '지난 몇 년간 웹 디자인 환경은 크게 변화했습니다. 브라우저들이 안정적인 기능 세트에 수렴하고 CSS가 강력한 새로운 기본 요소들을 갖추면서, 디자이너와 개발자는 그 어느 때보다 풍부한 도구로 매력적인 디지털 경험을 만들 수 있게 되었습니다.',
        '컨테이너 쿼리는 반응형 디자인에 대한 사고방식을 근본적으로 바꾸어 놓았습니다. 뷰포트 브레이크포인트 중심의 설계 대신, 이제는 컴포넌트가 자신이 속한 컨테이너의 크기에 반응하도록 만들 수 있습니다. 덕분에 사이드바 안의 카드와 전체 너비 그리드 안의 카드가 자동으로 서로 다르게 동작하는 진정한 이식 가능 UI 컴포넌트를 만들 수 있습니다.',
        '디자인 토큰은 있으면 좋은 도구에서 필수 인프라로 자리잡았습니다. 여러 제품이나 화이트레이블 배포를 관리하는 팀들은 색상, 간격, 타이포그래피 스케일 등 브랜드 결정 사항을 웹, 네이티브, 마케팅 자료 전반에 일관되게 전달하기 위해 단일 토큰 레이어에 의존합니다.',
        '다크 모드는 더 이상 부가 기능이 아닙니다. 사용자들은 매끄러운 전환을 기대하며, 웹 플랫폼의 prefers-color-scheme 미디어 쿼리와 CSS 커스텀 속성의 조합으로 이를 구현하기가 훨씬 쉬워졌습니다.',
        '모션과 마이크로인터랙션의 중요성은 계속 높아지고 있습니다. 이제 널리 지원되는 View Transitions API는 이전에는 무거운 JavaScript가 필요한 단일 페이지 앱에서만 가능했던 부드러운 페이지 전환 애니메이션을 가능하게 합니다.',
        '접근성은 체크리스트 항목에서 팀 문화로 진화했습니다. 팀들은 CI 파이프라인에 접근성 감사를 포함시켜 프로덕션에 이르기 전에 문제를 파악합니다.',
        'AI 보조 디자인 툴링이 반복 작업을 가속화하고 있습니다. 디자이너는 레이아웃 변형을 생성하거나, 대체 텍스트를 자동 생성하거나, 실시간으로 명암 비율 제안을 받을 수 있습니다.',
      ],
    },
    {
      slug: 'localization-tips-for-global-ready-apps',
      title: '현지화: 글로벌 앱을 위한 팁',
      date: '2026년 2월',
      readTime: '7분 읽기',
      tags: ['i18n', 'UX', '마켓'],
      excerpt: '다양한 문화에서 원활하게 작동하는 앱을 만드는 모범 사례.',
      content: [
        '글로벌 사용자를 위한 앱 개발은 출시 이후에 덧붙이는 작업이 아닙니다. 국제 사용자에게 좋은 경험을 제공하는 앱은 처음 커밋부터 현지화를 핵심 과제로 설계됩니다.',
        '기본은 문자열 외부화입니다. 사용자에게 보이는 모든 문자열은 컴포넌트 로직에 하드코딩되지 않고 번역 리소스 파일에 저장되어야 합니다.',
        '복수형 처리는 보기보다 복잡합니다. 영어에는 단수와 복수 두 가지 형태가 있지만 아랍어에는 여섯 가지가 있고, 러시아어의 복수형은 숫자의 마지막 자리와 마지막 두 자리에 따라 달라집니다.',
        '날짜, 시간, 숫자 서식은 로케일에 따라 다릅니다. JavaScript Intl API는 대부분의 사용 사례를 처리합니다.',
        '통화 표시도 같은 원칙을 따릅니다. style: \'currency\'를 사용한 Intl.NumberFormat은 로케일별로 기호 위치, 소수점 구분자, 천 단위 구분자를 올바르게 처리합니다.',
        '오른쪽에서 왼쪽(RTL) 지원은 레이아웃 인식이 필요합니다. CSS 논리적 속성은 스타일시트 규칙을 복제하지 않고 문서 방향에 따라 자동으로 전환됩니다.',
        '이미지와 미디어 현지화는 종종 간과됩니다. 텍스트가 포함된 마케팅 이미지는 로케일별로 교체되어야 합니다.',
        '가상 현지화(Pseudo-localization)는 i18n에서 가장 활용도가 낮은 테스트 기법입니다.',
        '해당 도메인을 이해하는 전문 번역가와 협력하세요.',
        '마지막으로, 현지 사용자와의 피드백 루프를 구축하세요.',
      ],
    },
  ],
  zh: [
    {
      slug: 'designing-for-the-web-in-2026',
      title: '2026年网页设计趋势',
      date: '2026年3月',
      readTime: '5分钟阅读',
      tags: ['UI', '前端', '趋势'],
      excerpt: '探索网页设计和用户体验的最新趋势。',
      content: [
        '过去几年，网页设计格局发生了深刻变化。随着各大浏览器在稳定功能集上趋于一致，CSS也获得了强大的新基础能力，设计师和开发者现在拥有了前所未有的丰富工具，可以打造引人入胜的数字体验。',
        '容器查询从根本上改变了我们对响应式设计的思考方式。我们不再需要围绕视口断点来设计组件，而是让组件响应其自身容器的尺寸。',
        '设计令牌已从可选项升级为必备基础设施。管理多个产品或白标部署的团队依赖单一令牌层，将品牌决策一致地传递到Web、原生应用和营销素材中。',
        '深色模式不再是事后补救。用户期望无缝切换，Web平台的prefers-color-scheme媒体查询与CSS自定义属性的结合使这一实现变得简单直接。',
        '动效和微交互的重要性持续提升。View Transitions API目前已获广泛支持，能够实现流畅的页面过渡动画。',
        '无障碍访问已从合规检查项演变为团队文化。各团队将无障碍审计集成到CI流水线中，在问题到达生产环境之前就将其捕获。',
        'AI辅助设计工具正在加速迭代节奏。设计师可以实时生成布局变体、自动生成替代文本或获取对比度建议。',
      ],
    },
    {
      slug: 'localization-tips-for-global-ready-apps',
      title: '本地化：打造全球就绪应用的技巧',
      date: '2026年2月',
      readTime: '7分钟阅读',
      tags: ['i18n', 'UX', '市场'],
      excerpt: '创建在不同文化中无缝运行的应用程序的最佳实践。',
      content: [
        '面向全球用户构建应用，并非上线之后才考虑的事情。真正能够触达国际用户的应用，从第一次提交代码起就将本地化视为核心要务。',
        '基础工作是字符串外部化。所有用户可见的字符串都应存放在翻译资源文件中，绝不硬编码在组件逻辑里。',
        '复数形式比表面上复杂得多。英语只有单数和复数两种形式，阿拉伯语却有六种，俄语的复数形式则取决于数字的末位和末两位。',
        '日期、时间和数字格式因区域设置而异。JavaScript Intl API涵盖了大多数使用场景。',
        '货币显示遵循相同原则。使用style: \'currency\'的Intl.NumberFormat能正确处理每种区域设置的货币符号位置。',
        '从右到左（RTL）支持需要具备布局意识。CSS逻辑属性无需复制样式表规则，即可随文档方向自动翻转。',
        '图片和媒体本地化常常被忽视。包含文字的营销图片必须按区域设置替换。',
        '伪本地化是i18n中最被低估的测试技术。',
        '与了解您所在领域的专业翻译人员合作。',
        '最后，建立与本地市场用户的反馈闭环。',
      ],
    },
  ],
};
