# Supercore Longevity — PRD

## Problem Statement
Single-page marketing site for Supercore Longevity (supercorelongevity.com). Dual audience — doctors (default) and patients. Primary CTA: get specialists to click "Join the Founding Network." Premium, energetic, gethealthspan.com-inspired design.

## Stack
- Next.js / React + Tailwind CSS
- Fonts: Inter 700 (headings, -0.035em tracking), Instrument Serif / Fraunces (italic accents only)
- Palette: Cream `#FAF8F2`, Navy `#0A1628`, Lime `#DAFF6B`, Blue `#2563EB`
- Scroll animations via IntersectionObserver (`/app/frontend/src/hooks/useReveal.js`)

## Architecture
/app/frontend/src/
├── App.js, index.css (theme variables + utility classes)
└── components/site/
    ├── Navbar.jsx
    ├── Hero.jsx, HeroMarquee.jsx
    ├── FoundingStats.jsx
    ├── QuietFrustration.jsx (sticky card scroll)
    ├── WhatSupercoreIs.jsx (3-tab interactive — DONE)
    ├── WhatThisChanges.jsx, Clusters.jsx, ProgramShowcase.jsx
    ├── SpecialistsMosaic.jsx, FirstNamed.jsx, CinematicBanner.jsx
    ├── MovementStatement.jsx, Footer.jsx
    └── PatientView.jsx

## Completed (by date)
- Initial scaffolding, routing, theme (Cream/Navy/Lime/Blue)
- Hero with tablet mockup + floating program card
- Auto-scroll marquee
- Stats band (70+ Years · 24 Clusters · IP Filed · First 50)
- Quiet Frustration sticky card scroll (3 cards)
- **Feb 2026 — Section 4 "What Supercore Is" 3-tab interactive**
  - Tab 01 Home: Cluster selector pills visual
  - Tab 02 Ownership: Two-column Yours/Supercore matrix + italic closer
  - Tab 03 Permanence: Cluster score chart, Longevity score transition, Biological Timeline
- **Feb 2026 — Section 5 "What This Changes" flat 3-column layout**
  - Reverted from sticky-left / scroll-right to a flat grid: header block on top, 3 equal columns below each with UI mockup image + numbered eyebrow (01/02/03) + Inter 700 heading + body
  - Added subtle hairline gradient divider between Section 4 and Section 5 (gethealthspan-style)
  - 3 AI-generated UI images (Gemini Nano Banana) saved in `/app/frontend/public/generated/`
  - Collapses to 1 column at ≤1080px
- **Feb 2026 — Clusters section typography upgrade** — 3 group names (Amplifiers / Core Systems / Condition-Based) now render as Inter 700 ~clamp(26px,2.4vw,34px) headings with navy `#0A1628` and tight tracking; subtitles slightly enlarged to 15px / 1.55 line-height for legibility
- **Feb 2026 — Removed `ProgramShowcase` ("Inside a Supercore Program") section** — App.js no longer imports or renders it; Clusters now flows directly into Founding Cohort (SpecialistsMosaic)
- **Feb 2026 — MovementStatement closure section redesigned (high-impact)**
  - Two-column layout: left tilted cream "Founder's Note" letter card with lime top-accent bar, flowing 5-line body, italic serif sign-off "— The Supercore Team", hover tilt-lift interaction
  - Right: "THE MOVEMENT" eyebrow, huge Inter 700 "With Supercore," headline, and the final line *"that changes."* highlighted on a lime-yellow pill block with glow (last-line highlight per user ask)
  - Glowing lime pill CTA "Join the Founding Network →" with dark inner arrow circle + "LIMITED · 50 SEATS" meta chip
  - Dark navy background with ambient lime + blue radial glows and subtle noise grain
  - Responsive: collapses to single column at ≤1024px, tighter letter padding at ≤640px

## Roadmap
### P1
- Theme consistency audit of sections below Section 5 (Clusters, ProgramShowcase, SpecialistsMosaic, FirstNamed, CinematicBanner, MovementStatement, Footer) — align to Cream/Navy/Lime/Blue palette + Inter 700

### P2 (on hold per user)
- Audience switcher (Doctors ↔ Patients) — user explicitly said NOT to work on this yet

### Backlog
- Regenerate Quiet Frustration section images (higher-fidelity photography)
- Wire "Join the Founding Network" CTA to backend lead-capture
- Standardize remaining inline styles in older components to index.css utility classes

## Known Issues
None. Section 4 verified rendering correctly across all 3 tabs.
