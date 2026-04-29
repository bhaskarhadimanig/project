import { useState } from "react";
import useReveal from "../../hooks/useReveal";
import { Check, X, Activity, Clock, Sparkles } from "lucide-react";

const tabs = [
  {
    n: "01",
    eyebrow: "Home",
    short: "Your specialty has a home here",
    title: "Your specialty has a home here.",
    body: [
      "Health on Supercore is organised into clusters — gut, metabolic, hormonal, sleep, inflammation, cognitive, and more. You don't have to become a \"longevity doctor.\" You select the clusters you already practise in.",
      "Your work plugs into the larger biological picture without expanding your scope. The architecture meets you where you already are.",
    ],
  },
  {
    n: "02",
    eyebrow: "Ownership",
    short: "Your medicine stays yours",
    title: "Your medicine stays your medicine.",
    body: [
      "Every program, protocol, care plan, and clinical decision you make on Supercore is yours.",
      "We don't write prescriptions. We don't review your protocols. We don't own your patients.",
    ],
    closer: "We host the rails — you run the medicine.",
  },
  {
    n: "03",
    eyebrow: "Permanence",
    short: "Your work doesn't disappear",
    title: "Your work doesn't disappear anymore.",
    body: [
      "This is the part that's never existed before. When you finish a 12-week protocol on Supercore, your patient walks away with three things that stay forever: a measurable shift in their cluster score, a movement in their overall longevity score, and a permanent line on their biological timeline — dated, attributed, scored.",
      "Five years from now, when another specialist sees that patient, your work is still there. Still visible. Still counting.",
    ],
  },
];

// ──────────── Tab 1 visual: Cluster Selector ────────────
const allClusters = [
  { name: "Gut & Microbiome", on: true },
  { name: "Metabolic Stability", on: true },
  { name: "GI Disease", on: true },
  { name: "Aging Biology", on: true },
  { name: "Sleep & Circadian", on: false },
  { name: "Hormonal Balance", on: false },
  { name: "Cognitive Focus", on: false },
  { name: "Cardiovascular Foundation", on: false },
  { name: "Skin & Aesthetic", on: false },
  { name: "Immune & Inflammation", on: false },
];

function ClusterSelector() {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 16,
        padding: 28,
        backdropFilter: "blur(8px)",
      }}
      data-testid="cluster-selector-visual"
    >
      <div
        className="font-sans-ui"
        style={{
          fontSize: 11,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.5)",
          fontWeight: 600,
          marginBottom: 20,
        }}
      >
        Select your clusters
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {allClusters.map((c) => (
          <span
            key={c.name}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 14px",
              borderRadius: 999,
              fontSize: 11.5,
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              fontFamily: "Inter, sans-serif",
              border: c.on
                ? "1px solid #DAFF6B"
                : "1px solid rgba(255,255,255,0.18)",
              background: c.on
                ? "rgba(218,255,107,0.12)"
                : "rgba(255,255,255,0.02)",
              color: c.on ? "#DAFF6B" : "rgba(255,255,255,0.55)",
            }}
          >
            {c.on && (
              <Check size={11} strokeWidth={3} style={{ marginRight: -2 }} />
            )}
            {c.name}
          </span>
        ))}
      </div>
      <div
        style={{
          marginTop: 24,
          paddingTop: 18,
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontSize: 12,
            color: "rgba(255,255,255,0.45)",
            fontFamily: "Inter, sans-serif",
            fontStyle: "italic",
          }}
        >
          A gastroenterologist's selection
        </span>
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: "#DAFF6B",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          4 active
        </span>
      </div>
    </div>
  );
}

// ──────────── Tab 2 visual: Ownership Matrix ────────────
const yours = [
  "Clinical protocols & programs",
  "Patient relationships",
  "Prescriptions & decisions",
  "Program pricing & structure",
  "Your clinical identity",
];
const supercoreProvides = [
  "Scoring infrastructure",
  "Biological timeline",
  "Cluster architecture",
  "Patient-facing platform",
  "Program continuity layer",
];

function OwnershipMatrix() {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 16,
        padding: 28,
        backdropFilter: "blur(8px)",
      }}
      data-testid="ownership-visual"
    >
      <div
        className="font-sans-ui"
        style={{
          fontSize: 11,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.5)",
          fontWeight: 600,
          marginBottom: 24,
        }}
      >
        How the platform works
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        {/* Yours, Always */}
        <div>
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#DAFF6B",
              fontWeight: 700,
              marginBottom: 16,
              fontFamily: "Inter, sans-serif",
            }}
          >
            Yours, Always
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
            {yours.map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  fontSize: 13.5,
                  color: "rgba(255,255,255,0.85)",
                  fontFamily: "Inter, sans-serif",
                  lineHeight: 1.4,
                }}
              >
                <Check size={14} strokeWidth={2.5} style={{ color: "#DAFF6B", flexShrink: 0, marginTop: 2 }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Supercore Provides */}
        <div>
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)",
              fontWeight: 700,
              marginBottom: 16,
              fontFamily: "Inter, sans-serif",
            }}
          >
            Supercore Provides
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
            {supercoreProvides.map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  fontSize: 13.5,
                  color: "rgba(255,255,255,0.7)",
                  fontFamily: "Inter, sans-serif",
                  lineHeight: 1.4,
                }}
              >
                <span style={{ color: "rgba(255,255,255,0.45)", marginTop: 1, lineHeight: 1.4 }}>›</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        style={{
          marginTop: 24,
          paddingTop: 18,
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          alignItems: "center",
          gap: 10,
          fontSize: 12,
          color: "rgba(255,255,255,0.55)",
          fontFamily: "Inter, sans-serif",
          lineHeight: 1.55,
        }}
      >
        <X size={14} strokeWidth={2.4} style={{ color: "#DAFF6B", flexShrink: 0 }} />
        <span>
          No review. No interference. No ownership. Your practice on better
          infrastructure.
        </span>
      </div>
    </div>
  );
}

// ──────────── Tab 3 visual: Permanence (3 outputs) ────────────
function PermanenceVisual() {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 16,
        padding: 28,
        backdropFilter: "blur(8px)",
      }}
      data-testid="permanence-visual"
    >
      <div
        className="font-sans-ui"
        style={{
          fontSize: 11,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.5)",
          fontWeight: 600,
          marginBottom: 22,
        }}
      >
        After 12 weeks · what stays forever
      </div>

      {/* Output 1: Cluster Score */}
      <div
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 12,
          padding: 18,
          marginBottom: 12,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Activity size={16} strokeWidth={2} style={{ color: "#DAFF6B" }} />
            <span style={{ fontSize: 13, fontWeight: 600, color: "#FFFFFF", fontFamily: "Inter, sans-serif" }}>
              Cluster Score · Gut
            </span>
          </div>
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "#DAFF6B",
              fontFamily: "Inter, sans-serif",
              letterSpacing: "0.04em",
            }}
          >
            +18 PTS
          </span>
        </div>
        <svg viewBox="0 0 320 50" width="100%" height="36" style={{ display: "block" }}>
          <defs>
            <linearGradient id="permFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#DAFF6B" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#DAFF6B" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,42 C40,40 80,36 130,28 S220,12 320,6 L320,50 L0,50 Z" fill="url(#permFill)" />
          <path d="M0,42 C40,40 80,36 130,28 S220,12 320,6" stroke="#DAFF6B" strokeWidth="1.6" fill="none" strokeLinecap="round" />
          <circle cx="320" cy="6" r="3" fill="#DAFF6B" />
        </svg>
      </div>

      {/* Output 2: Longevity Score */}
      <div
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 12,
          padding: 18,
          marginBottom: 12,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Sparkles size={16} strokeWidth={2} style={{ color: "#DAFF6B" }} />
          <span style={{ fontSize: 13, fontWeight: 600, color: "#FFFFFF", fontFamily: "Inter, sans-serif" }}>
            Longevity Score
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", fontFamily: "Inter, sans-serif" }}>72</span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>→</span>
          <span style={{ fontSize: 22, fontWeight: 700, color: "#DAFF6B", fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>
            81
          </span>
        </div>
      </div>

      {/* Output 3: Biological Timeline */}
      <div
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 12,
          padding: 18,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
          <Clock size={16} strokeWidth={2} style={{ color: "#DAFF6B" }} />
          <span style={{ fontSize: 13, fontWeight: 600, color: "#FFFFFF", fontFamily: "Inter, sans-serif" }}>
            Biological Timeline
          </span>
        </div>
        <div style={{ position: "relative", paddingLeft: 8 }}>
          <div
            style={{
              position: "absolute",
              left: 4,
              top: 6,
              bottom: 6,
              width: 1,
              background: "rgba(255,255,255,0.12)",
            }}
          />
          {[
            { date: "Mar '25", label: "Baseline · Dr. Arjun Shah", muted: true },
            { date: "Jun '25", label: "Gut Reset Protocol · +18 pts", muted: false },
            { date: "Future", label: "Your work, still counting.", muted: true, italic: true },
          ].map((e, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: i === 2 ? 0 : 10, position: "relative" }}>
              <span
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: "50%",
                  background: e.muted ? "rgba(255,255,255,0.25)" : "#DAFF6B",
                  boxShadow: e.muted ? "none" : "0 0 12px rgba(218,255,107,0.6)",
                  flexShrink: 0,
                  marginTop: 4,
                  marginLeft: -4,
                  zIndex: 1,
                }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 10.5, color: "rgba(255,255,255,0.5)", fontFamily: "Inter, sans-serif", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600 }}>
                  {e.date}
                </div>
                <div style={{ fontSize: 13, color: e.muted ? "rgba(255,255,255,0.6)" : "#FFFFFF", fontFamily: e.italic ? "'Instrument Serif', serif" : "Inter, sans-serif", fontWeight: e.italic ? 400 : 500, fontStyle: e.italic ? "italic" : "normal" }}>
                  {e.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const VISUALS = [ClusterSelector, OwnershipMatrix, PermanenceVisual];

export default function WhatSupercoreIs() {
  const ref = useReveal();
  const [active, setActive] = useState(0);
  const ActiveVisual = VISUALS[active];
  const t = tabs[active];

  return (
    <section
      id="how-it-works"
      data-testid="section-what-supercore-is"
      className="sc-section sc-on-dark"
      style={{
        background:
          "radial-gradient(ellipse at 80% 20%, rgba(218,255,107,0.08) 0%, rgba(10,22,40,0) 45%), radial-gradient(ellipse at 20% 80%, rgba(37,99,235,0.08) 0%, rgba(10,22,40,0) 50%), #0A1628",
        position: "relative",
      }}
    >
      <div className="sc-container">
        {/* Header */}
        <div ref={ref} className="sc-reveal" style={{ maxWidth: 760, marginBottom: 56 }}>
          <div className="sc-eyebrow" style={{ marginBottom: 18, color: "#DAFF6B" }}>
            What Supercore Is
          </div>
          <h2
            className="font-serif-display"
            style={{
              fontSize: "clamp(40px, 5.4vw, 72px)",
              color: "#FFFFFF",
              margin: 0,
              lineHeight: 1.04,
              fontWeight: 700,
              letterSpacing: "-0.035em",
            }}
          >
            Three things, and{" "}
            <em
              style={{
                fontFamily: "'Instrument Serif', serif",
                color: "#DAFF6B",
                fontStyle: "italic",
                fontWeight: 400,
                letterSpacing: "-0.01em",
              }}
            >
              only three
            </em>
            .
          </h2>
        </div>

        {/* Tab navigation */}
        <div
          data-testid="supercore-tabs"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 0,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            marginBottom: 56,
          }}
          className="sc-supercore-tabnav"
        >
          {tabs.map((tab, i) => {
            const isActive = active === i;
            return (
              <button
                key={tab.n}
                type="button"
                data-testid={`supercore-tab-${i}`}
                onClick={() => setActive(i)}
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: "28px 24px",
                  textAlign: "left",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 16,
                  borderTop: isActive
                    ? "2px solid #DAFF6B"
                    : "2px solid transparent",
                  marginTop: -1,
                  transition: "background-color 200ms ease, opacity 200ms ease",
                  opacity: isActive ? 1 : 0.55,
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.opacity = "0.85";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.opacity = "0.55";
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    color: isActive ? "#DAFF6B" : "rgba(255,255,255,0.5)",
                    fontFamily: "Inter, sans-serif",
                    flexShrink: 0,
                    marginTop: 4,
                  }}
                >
                  {tab.n}
                </span>
                <span
                  style={{
                    fontSize: 17,
                    fontWeight: 600,
                    color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.85)",
                    fontFamily: "Inter, sans-serif",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.3,
                  }}
                >
                  {tab.short}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab content */}
        <div
          key={active}
          data-testid={`supercore-panel-${active}`}
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
            gap: 80,
            alignItems: "start",
            animation: "scFadeIn 400ms ease",
          }}
          className="sc-supercore-panel"
        >
          {/* LEFT — text */}
          <div>
            <div
              className="font-sans-ui"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#DAFF6B",
                fontWeight: 700,
                marginBottom: 24,
              }}
            >
              <span style={{ width: 28, height: 1, background: "#DAFF6B" }} />
              {t.n} — {t.eyebrow}
            </div>
            <h3
              className="font-serif-display"
              style={{
                fontSize: "clamp(30px, 3.6vw, 48px)",
                color: "#FFFFFF",
                margin: 0,
                lineHeight: 1.08,
                fontWeight: 700,
                letterSpacing: "-0.025em",
              }}
            >
              {t.title}
            </h3>
            <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 18 }}>
              {t.body.map((p, i) => (
                <p
                  key={i}
                  className="font-sans-ui"
                  style={{
                    fontSize: 17,
                    lineHeight: 1.65,
                    color: "rgba(255,255,255,0.78)",
                    margin: 0,
                    fontWeight: 400,
                  }}
                >
                  {p}
                </p>
              ))}
            </div>
            {t.closer && (
              <p
                style={{
                  marginTop: 32,
                  paddingTop: 24,
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: 22,
                  fontStyle: "italic",
                  color: "#DAFF6B",
                  margin: "32px 0 0",
                  lineHeight: 1.4,
                }}
              >
                {t.closer}
              </p>
            )}
          </div>

          {/* RIGHT — visual */}
          <div>
            <ActiveVisual />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scFadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .sc-supercore-tabnav {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
          .sc-supercore-tabnav button {
            border-top: 1px solid rgba(255,255,255,0.1) !important;
          }
          .sc-supercore-panel {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
