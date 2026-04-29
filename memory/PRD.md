# Supercore Longevity — Marketing Site

## Original Problem Statement
Single-page marketing website for Supercore Longevity (supercorelongevity.com). Dual-audience (doctors / patients), with the doctor view as the default. Primary CTA: "Join the Founding Network." Premium dark aesthetic in line with superpower.com, lucis.life, humanauthealth.com, biograph.com, gethealthspan.com. Built with React (CRA) + Tailwind (env: FastAPI/Mongo unused for this static site, retained as scaffolding).

## Stack
- Frontend: React 19 (CRA + craco), Tailwind, Google Fonts (Playfair Display + Inter)
- No backend integrations (per user — CTAs are placeholder anchors; user will plug real URL later)

## User Personas
1. **Specialist physician (primary)** — gut/metabolic/hormonal/sleep/etc specialists evaluating whether to join a founding longevity network. Reads doctor view by default.
2. **Patient (secondary)** — placeholder coming-soon view; user will replace with real URL.

## Design System (locked)
- Backgrounds: #0D0D0D / #141414 / #1A1A1A
- Borders: #2A2A2A
- Text: #F5F0E8 (with 25–85% opacity tiers)
- Accent: #C9A96E (warm amber)
- Fonts: Playfair Display (display, italic accents), Inter (UI/body)
- Layout: 1280px max, 80px desktop / 24px mobile padding, 120px section padding

## What's Been Implemented (2025-12)
- Sticky navbar (transparent → solid #141414 on scroll)
- Audience switcher pill (For Doctors / For Patients) — toggles secondary nav, page content, and footer legal links
- Secondary nav strip with audience-specific links
- **Doctor view sections (all per spec):**
  - Hero (full viewport, italic amber "right now")
  - Quiet Frustration (3 blocks + amber divider + italic close)
  - What Supercore Is — three pillars with amber numerals (#141414 + amber top border)
  - What This Changes — 2-col layout, amber em-dash lead lines
  - Find Your Clusters — 3 grouped layers (Amplifiers / Core Systems / Condition-Based) with 24 sharp chips
  - Be Among the First Named (#141414, amber pull quote)
  - Movement Statement (full viewport, staggered IntersectionObserver reveal)
- **Patient view:** clean coming-soon page with Playfair headline, italic accent, waitlist CTA placeholder
- Footer with audience-specific legal links + supercorelongevity.com
- IntersectionObserver-based reveal/stagger animations
- Mobile responsive (collapses to single-column at <768px / <900px)
- All interactive/key elements have `data-testid` attributes

## Backlog / Known Placeholders
- **P0** — Replace placeholder anchors (`#apply`, `#contact`, etc.) with real URLs once user provides them
- **P1** — Build real Patient experience (currently coming-soon)
- **P1** — Wire FAQ content (placeholder anchor only)
- **P2** — Apply page or modal form (user said "URL later", currently scrolls to MovementStatement section which has anchor `#apply`)
- **P2** — Doctor application form / lead capture (could be a future MongoDB-backed feature)
- **P2** — SEO meta + OG image / favicon
- **P2** — Analytics events on CTA clicks (PostHog already loaded via index.html)

## Files of Note
- `frontend/src/App.js` — root, audience state
- `frontend/src/components/site/Navbar.jsx` — sticky nav + pill switcher
- `frontend/src/components/site/Hero.jsx` … `MovementStatement.jsx` — section components
- `frontend/src/components/site/PatientView.jsx` — placeholder patient view
- `frontend/src/components/site/Footer.jsx` — audience-aware footer
- `frontend/src/hooks/useReveal.js` — IntersectionObserver hook
- `frontend/src/index.css` — design system tokens + reusable classes (`sc-btn`, `sc-pill`, `sc-chip`, `sc-section`, `sc-container`, `sc-reveal`, `sc-stagger`)

## Next Action Items
1. User shares production URLs for "Join the Founding Network", FAQ, Patient links → swap `APPLY_URL` constant in Navbar/Hero/MovementStatement/PatientView and href values in Footer
2. Decide: keep placeholder Patient page or commission full Patient view content
