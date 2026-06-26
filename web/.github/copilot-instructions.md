# Copilot Instructions for Implementing `final_ui_mockup_portfolio.pdf`

Use these instructions when generating, editing, or refactoring the portfolio website UI.

The source of truth is the uploaded mockup PDF. Match its structure, spacing, hierarchy, and tone as closely as possible. Do not "improve" the design by replacing it with a generic startup landing page, SaaS template, or flashy portfolio style. The intent of the mockup is a calm, premium, conversion-oriented multilingual web portfolio for startups. fileciteturn0file0

---

## 1. Primary Goal

Implement the page so it feels visually and structurally faithful to the mockup.

This is **not** a full redesign.
This is **not** a creative reinterpretation.
This is **not** a chance to add trendy UI patterns.

The implementation must preserve:

- the section order
- the card counts
- the content hierarchy
- the restrained visual tone
- the premium but minimal spacing system
- the conversion-first layout

The PDF explicitly frames the direction as: keep the structure, improve message, trust, and conversion. Build to that standard, not beyond it. fileciteturn0file0

---

## 2. Non-Negotiable Rules

### Do not change the layout concept
- Do not invent new sections.
- Do not remove sections.
- Do not reorder sections.
- Do not combine sections.
- Do not change the number of cards in the services or projects areas.
- Do not convert the layout into a centered one-column marketing page.

### Do not stylize beyond the mockup
- No loud gradients.
- No glassmorphism.
- No neon effects.
- No oversized drop shadows.
- No excessive animation.
- No parallax.
- No floating decorative blobs unless they are extremely subtle and clearly aligned with the mockup.

### Do not make spacing denser than the mockup
- Keep generous whitespace.
- Keep large section separation.
- Keep comfortable card padding.
- Do not compress text lines, card gaps, or form spacing just to fit more on screen.

### Do not overwrite the tone
The site should feel:
- clear
- premium
- editorial
- trustworthy
- global-ready
- polished without being flashy

It should **not** feel:
- overly playful
- aggressively startup-y
- futuristic
- cyber-themed
- dark and dramatic

---

## 3. Page Purpose

This page represents a multilingual web designer/developer focused on startups expanding internationally, especially across Chinese, Korean, and English experiences. The page should help a visitor quickly understand:

1. what service is offered
2. why the offering is credible
3. what kinds of projects can be built
4. what proof of work exists
5. how to make contact

The mockup headline and supporting copy make this positioning explicit. fileciteturn0file0

---

## 4. Required Section Order

Implement the page in this exact order:

1. Header / top navigation
2. Hero section
3. Three service cards
4. "What can you build?"
5. "Featured Projects"
6. "Insights on multilingual web & global UX"
7. "Start your project" contact form
8. "Quick implementation specs" footer-style information block

Do not alter this order. It is central to the mockup structure. fileciteturn0file0

---

## 5. Layout and Spacing Tokens

These values come directly from the mockup notes and should be treated as the baseline system.

### Global layout
- Max container width: `1200px`
- Section vertical spacing: `88px` to `104px`
- Default desktop horizontal padding: `24px` to `32px`
- Tablet horizontal padding: `20px` to `24px`
- Mobile horizontal padding: `16px` to `20px`

### Cards
- Default card padding: `24px`
- Service card gap: `24px`
- Project card gap: `36px`
- Card radius: `20px`
- Project visual area height: `170px`

### Typography
- Hero title desktop size: `56px / 64px`
- Base body text: `16px`
- Use bold section titles with a strong but clean hierarchy

### Color
- Primary blue: `#2563EB`
- Page background: very light neutral gray or off-white
- Card background: near-white
- Main text: deep navy or charcoal, not pure black
- Borders: subtle and low-contrast

These specifications are explicitly called out in the mockup. fileciteturn0file0

---

## 6. Visual System

### Overall style
The UI should feel like a polished editorial/product portfolio rather than a SaaS dashboard.

Use:
- soft shadows
- large rounded containers
- clean white surfaces
- disciplined spacing
- restrained blue accents
- strong headings
- readable body text

Avoid:
- strong border-heavy design
- cramped cards
- tiny text
- overuse of icons
- high-saturation backgrounds
- full-bleed dramatic hero imagery

### Surface treatment
Cards and panels should feel soft and elevated, but only slightly.

Preferred surface rules:
- large radius
- thin subtle border or no border
- light shadow
- white or almost-white background
- generous inner padding

---

## 7. Header Instructions

### Content
The header should include:
- brand on the left: `twinker space`
- navigation on the right: `HOME`, `INTRO`, `SKILLS`, `BLOG`, `CONTACT`
- a small language pill on the far right: `EN`

This structure is visible in the mockup. fileciteturn0file0

### Styling rules
- Keep the header slim and quiet.
- Use small uppercase or uppercase-like navigation text.
- Keep spacing airy.
- The language pill should be small, rounded, and accented with the primary blue.
- Do not make the header heavy or sticky by default.
- Avoid complex hover animations.

### Alignment
- Brand aligned left within the same global container as the rest of the page
- Nav aligned right
- Vertical centering must feel exact and tidy

---

## 8. Hero Section Instructions

This is the most important section. It must clearly communicate the positioning in one glance.

### Layout
Desktop layout should be a two-column composition:
- left: text stack and CTA
- right: a clean browser or UI mockup visual

The mockup specifically recommends one clean browser mockup plus language indicators rather than a noisy image. fileciteturn0file0

### Required copy structure
Use the hero content from the mockup or keep extremely close to it:

- eyebrow/context: multilingual websites for startups
- headline:
  - `Build global-ready websites`
  - `in Chinese, Korean & English`
- supporting paragraph explaining that the redesign keeps the existing structure but improves message clarity, premium feel, and conversion
- supporting proof tags or chips similar to: `SEO + i18n + UX`, `Korean/Chinese/EN`
- two CTAs:
  - `Get a quote`
  - `View projects`

These elements are explicitly shown in the PDF. fileciteturn0file0

### Visual rules
- Use one clean browser-style illustration or interface mockup
- Do not use photography
- Do not use a busy collage
- Keep the right panel soft, rounded, and light
- Visual should support the message rather than dominate the section

### Typography rules
- Headline should be large and bold with strong line breaks
- Supporting paragraph should remain readable and not span too wide
- Buttons should be prominent but not oversized

### Button rules
Primary CTA:
- filled blue button
- white text
- medium-large radius

Secondary CTA:
- outlined or lightly filled neutral button
- more understated than the primary

---

## 9. Introductory Transition Line Under Hero

The mockup includes a trust-building transition line around the message:

`This mockup keeps your existing section order and tone, but upgrades hierarchy, copy and conversion.`

and a strong central line:

`Let's build something amazing together!`

Keep this transition area. It helps bridge the hero and service cards. It should feel light, centered, and editorial rather than banner-like. fileciteturn0file0

---

## 10. Services Section Instructions

### Structure
This section must have exactly **three cards** in one row on desktop.

Card topics:
1. Multilingual Web Development
2. Maintenance & Optimization
3. Content & Localization

The mockup also indicates that each card should be outcome-focused and paired with a clean recommended visual style. fileciteturn0file0

### Card layout
Each service card should contain:
- a light visual placeholder or illustration area at the top
- a bold service title
- a short explanatory paragraph
- a simple text link such as `Learn more →`

### Visual direction per card
- Card 1: clean website UI mockup
- Card 2: dashboard or analytics style visual
- Card 3: editorial or localization style visual

These recommendations appear directly in the mockup annotations. fileciteturn0file0

### Styling rules
- Cards should share equal height when possible
- Top visual area should be soft and simple
- Title must be bold and easy to scan
- Copy should be short, practical, and trust-building
- Do not turn this into icon-only service boxes

### Desktop and responsive behavior
- Desktop: 3 columns
- Tablet: 2 columns then 1 column if needed
- Mobile: always 1 column
- Never force 3 cards into unreadably narrow columns

---

## 11. “What Can You Build?” Section Instructions

### Purpose
This section reframes capabilities as realistic client needs instead of generic categories.

### Structure
Keep it as a wide rounded content block with three internal columns:
- For startups
- For content businesses
- For market entry

Example items shown in the mockup include:
- Global landing pages
- Product marketing sites
- Bilingual brand sites
- Localized blogs
- Course pages
- Membership landing flows
- Korean market pages
- Chinese content localization
- SEO-ready expansion pages

These lists come directly from the mockup. fileciteturn0file0

### Styling rules
- Use a section heading with a short explanatory sentence underneath
- Present the three content groups clearly
- Keep bullets clean and minimal
- Avoid turning this into a full pricing/features grid
- Maintain a spacious, readable layout

---

## 12. Featured Projects Section Instructions

### Importance
The mockup says this is the most important section to add because it changes the page from portfolio-like to client-ready. Treat it as a priority area. fileciteturn0file0

### Structure
Display exactly **two featured project cards** on desktop.

Project concepts shown in the mockup:
1. SaaS Platform Localization
2. E-commerce Market Entry Page

Each project card should include:
- image or UI mockup area on top
- project title
- a small metric pill under the title
- short, practical outcome-focused bullet points or short paragraphs
- CTA link such as `View case study`

The mockup also notes that project image height should be `170px`, card gap should be `36px`, and the metric pill should sit under the title. fileciteturn0file0

### Visual direction
- Use realistic website screenshots or realistic UI/device mockups
- Do not use abstract placeholder art that feels fake
- The cards should feel more credible than decorative

### Content tone
The project descriptions should emphasize:
- adaptation for Korean, Chinese, and English audiences
- clarity of pricing or onboarding copy
- campaign-ready landing sections
- measurable result or testimonial space
- before/after style improvement indicators

These outcome cues are explicitly recommended in the PDF. fileciteturn0file0

### Responsive rules
- Desktop: 2 columns
- Tablet: 1 or 2 columns depending on available width, but prioritize readability
- Mobile: 1 column

---

## 13. Blog / Insights Section Instructions

### Section title
Use the mockup title:
`Insights on multilingual web & global UX`

### Purpose
This section acts as proof of expertise, not just a generic blog teaser. The mockup explicitly frames it that way. fileciteturn0file0

### Structure
The mockup shows two article cards on the left and the contact form on the right in the same visual band.

Articles shown:
- `Designing for the Web in 2026`
- `Localization: Tips for global-ready apps`

Each article card should contain:
- a calm editorial or illustration area at top
- title
- metadata line with date and reading time
- small topical tags such as `UI`, `Accessibility`, `Responsive`, `i18n`, `Frontend`, `Markets`

### Styling rules
- Cards should be simpler than project cards
- Keep visuals calm and editorial
- Avoid cluttered blog thumbnails
- Metadata should be subtle
- Tags should be small and neat

---

## 14. Contact Form Instructions

### Placement
The contact form sits to the right of the blog cards in the mockup's lower content band. On smaller screens it should stack below the blog cards. fileciteturn0file0

### Title and intro
Use:
- `Start your project`
- `Reply within 1-2 business days.`

### Required fields
- Your Name
- Email Address
- Message
- Submit button: `Send inquiry`

These fields and labels are present in the PDF. fileciteturn0file0

### Form styling
- Use rounded inputs with soft borders
- Keep ample vertical spacing between fields
- Inputs should feel premium and calm
- Submit button should use the primary blue and span a strong visual width
- Avoid harsh borders or tiny field heights

### UX rules
- Ensure accessible labels
- Use proper focus states
- Keep placeholder text subtle if used
- Do not over-style validation states

---

## 15. Footer-Style “Quick Implementation Specs” Block

### Purpose
This bottom block should feel like a concise implementation note panel rather than a traditional heavy footer.

### Include the spec items shown in the mockup
- Container width: 1200px
- Section vertical spacing: 88-104px
- Card padding: 24px
- Hero title: 56/64 on desktop
- Body text: 16px
- Primary color: #2563EB

These are explicitly listed at the bottom of the mockup. fileciteturn0file0

### Styling rules
- Light blue or softly tinted panel background is acceptable if subtle
- Text should remain readable and understated
- This block should not overpower the page ending

---

## 16. Typography Rules

### Hierarchy
Use a strong but restrained type scale.

Recommended hierarchy:
- Hero title: very large, bold
- Section titles: large, bold
- Card titles: medium-large, bold
- Body: 16px default
- Meta text: smaller and muted

### Tone
Typography should feel:
- clean
- modern
- editorial
- readable

Avoid:
- overly geometric display fonts
- condensed fonts
- tiny body copy
- ultra-tight letter spacing
- dramatic stylistic fonts

### Line length
Keep paragraph lines moderate. Do not let supporting text stretch too wide on large screens.

---

## 17. Color and Contrast Rules

### Primary palette
- Primary: `#2563EB`
- Background: very light gray/off-white
- Card background: white
- Main text: deep charcoal/navy
- Secondary text: muted slate-gray
- Borders: very light gray

### Accent usage
Use the primary blue for:
- primary buttons
- selected pill or tag accents
- small highlights
- subtle links

Do not use blue everywhere. The page should remain mostly neutral.

---

## 18. Border Radius, Shadow, and Depth

### Radius
Default large radius should feel close to `20px`, especially on cards and large panels. This is directly specified in the mockup. fileciteturn0file0

### Shadows
- very soft
- low blur contrast
- minimal depth

The site should feel elevated, not dramatic.

### Borders
- subtle
- low-contrast
- often optional when shadow and background separation are enough

---

## 19. Responsive Behavior

### Desktop
- Use the 1200px container system
- Preserve the intended multi-column layouts
- Keep strong horizontal rhythm

### Tablet
- Reduce columns progressively
- Preserve spacing before shrinking typography too much
- Hero may stack if needed, but keep the visual/text relationship clean

### Mobile
- One column for nearly everything
- Preserve section order exactly
- Keep generous vertical spacing
- Buttons can stack if needed
- Reduce hero headline carefully but maintain impact
- Do not cram service or project cards into side-by-side micro-columns

### Mobile priorities
On mobile, preserve:
- readability
- whitespace
- card padding
- clear CTA hierarchy

Do not preserve desktop density at the cost of legibility.

---

## 20. Implementation Guidance for Existing Codebases

When editing an existing project:

- preserve the current framework and routing structure
- preserve reusable components if they can match the mockup faithfully
- refactor styling only where necessary to reach layout parity
- centralize tokens for spacing, radius, colors, and typography
- avoid introducing unnecessary libraries just for styling

If the project uses:
- Tailwind: map the design system into consistent utility patterns or theme extensions
- CSS/SCSS: create reusable variables or tokens
- component libraries: override aggressively enough to match the mockup, but do not let the library's default look dominate the page

If a framework component fights the mockup, prefer custom styling over default component styling.

---

## 21. Accessibility Rules

Always keep the implementation accessible.

Required:
- semantic headings in the correct order
- buttons and links with clear focus states
- sufficient color contrast
- labeled form fields
- meaningful alt text for visuals
- keyboard access for navigation and form submission

Accessibility should be preserved without making the design look generic.

---

## 22. Content Rules

### Keep the copy close to the mockup
Do not replace the provided messaging with generic marketing copy.

Do not swap in phrases like:
- "We build digital experiences"
- "Transform your business"
- "Cutting-edge solutions"
- "Innovative products for the future"

The tone should stay specific and grounded in multilingual web delivery for startups. The PDF's actual wording is much stronger and should guide the implementation. fileciteturn0file0

### Proof-oriented wording
Where case studies or service descriptions need supporting text, bias toward:
- outcomes
- clarity
- launch speed
- trust
- localization accuracy
- SEO readiness
- conversion improvement

Those themes are repeatedly emphasized in the mockup. fileciteturn0file0

---

## 23. Visual Asset Guidance

If placeholder assets are needed during implementation:

### Prefer
- browser mockups
- UI screenshots
- clean device frames
- editorial illustrations
- simple localization-themed interface visuals

### Avoid
- stock photography of teams
- random abstract 3D graphics
- shiny AI-style render art
- oversized icon illustrations
- images that shift the site away from the portfolio/editorial tone

Assets must support credibility and clarity, not visual spectacle.

---

## 24. Quality Bar Before Considering the Task Complete

Before finalizing, verify all of the following:

### Structure
- all required sections exist
- section order matches the mockup
- card counts match the mockup

### Layout
- spacing feels open and premium
- container width is consistent
- cards have enough padding
- no section feels cramped

### Styling
- primary blue matches `#2563EB`
- radius feels close to `20px`
- shadows are soft
- backgrounds remain light and neutral

### Hero
- headline hierarchy is strong
- CTA buttons feel clear and balanced
- right-side visual is clean and not noisy

### Services
- exactly 3 cards
- cards are outcome-oriented
- visual treatment is calm and consistent

### Projects
- exactly 2 featured project cards
- image area height roughly matches the spec
- metric pill sits under the title
- cards feel credible, not decorative

### Blog + Form band
- article cards and contact form align cleanly on desktop
- form stacks correctly on smaller screens
- fields have comfortable spacing

### Responsive
- mobile is readable
- spacing is not collapsed
- buttons and inputs remain usable
- no awkward two-column compression on small screens

---

## 25. Final Instruction to Copilot

When there is any ambiguity, choose the option that is **closer to the PDF mockup**, not the option that is more creative.

Your job is to produce a faithful implementation with clean frontend code.

Priority order:
1. fidelity to the mockup
2. clear hierarchy
3. spacing and readability
4. trust and conversion tone
5. maintainable code

If a tradeoff is required, never sacrifice mockup fidelity for generic visual flair.
