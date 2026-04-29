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
  - Dark-navy bg with lime/blue radial glows, Inter 700 headings, Instrument Serif italics, data-testids on all tabs/panels, responsive collapse at 900px

## Roadmap
### P1
- Theme consistency audit of sections below Section 4 (WhatThisChanges, Clusters, ProgramShowcase, SpecialistsMosaic, FirstNamed, CinematicBanner, MovementStatement, Footer) — align to Cream/Navy/Lime/Blue palette + Inter 700

### P2 (on hold per user)
- Audience switcher (Doctors ↔ Patients) — user explicitly said NOT to work on this yet

### Backlog
- Regenerate Quiet Frustration section images (higher-fidelity photography)
- Wire "Join the Founding Network" CTA to backend lead-capture
- Standardize remaining inline styles in older components to index.css utility classes

## Known Issues
None. Section 4 verified rendering correctly across all 3 tabs.
