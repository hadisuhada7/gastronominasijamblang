# PRD — Gastronomi Nasi Jamblang (Landing Page)

## Original Problem Statement
"Buatlah website landing page Gastronomi Nasi Jamblang dengan ketentuan terlampir pada word."
Build a storytelling landing page about Nasi Jamblang — the culinary heritage of Cirebon — based on a provided Word document (9 narrative sections).

## User Choices
- Visual style: Traditional & warm (earthy/brown tones, teak leaf, authentic Cirebon)
- Images: relevant high-quality stock photos (agent-selected)
- Scope: static landing page only (no backend feature)
- Language: Bilingual (Bahasa Indonesia + English) with toggle

## Architecture
- Frontend: React 19 + Tailwind + framer-motion. Single page `/app/frontend/src/pages/Landing.jsx`.
- Content: bilingual data in `/app/frontend/src/data/content.js`; reveal animation in `components/Reveal.jsx`.
- Fonts: Cormorant Garamond (headings) + Manrope (body). Palette per `design_guidelines.json`.
- Backend: unchanged template (no APIs required for this static site).

## Implemented (June 2026)
- Sticky glassmorphism navbar with anchor links + ID/EN language toggle + mobile menu.
- 9 sections: Hero, Philosophy (bento), Ingredients (gallery + variety), Techniques (sticky split), Tasting (terracotta), Serving, Experience (immersive), Nutrition (editorial table), Ethics (blockquote), Footer.
- Full bilingual content faithfully translated from the source document, including nutrition table values.
- Scroll reveals, hover micro-interactions, custom scrollbar/selection styling.
- data-testid coverage on all interactive/critical elements.

## Backlog / Next
- P2: Section scroll-spy active state in nav.
- P2: Before/after image comparison slider for the Serving section.
- P2: Lightbox gallery for ingredient/technique images.
- P1 (optional): contact / order CTA form if user later wants lead capture.
