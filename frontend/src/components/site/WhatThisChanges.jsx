import useReveal from "../../hooks/useReveal";

const points = [
  {
    n: "01",
    eyebrow: "Discovery",
    lead: "Your depth becomes visible.",
    body: "The patients who need exactly what you do can now find you — through a platform that surfaces your expertise to the right person at the right moment.",
    img: "/generated/depth-visible.png",
    alt: "Specialist match interface — selected cluster tag connecting to three specialist names",
  },
  {
    n: "02",
    eyebrow: "Economics",
    lead: "Your programs command what they're worth.",
    body: "A 12-week longevity program is a fundamentally different offering from a consult. Specialists on Supercore charge ₹25,000–₹60,000 — because structured outcomes justify it.",
    img: "/generated/program-value.png",
    alt: "Program price tag composition — ₹45,000 with 12-week core longevity protocol label and progress bar",
  },
  {
    n: "03",
    eyebrow: "Head start",
    lead: "You don't start from zero.",
    body: "Longevity program guides, functional medicine foundations, cluster protocol frameworks. Everything you need to build and run — delivered on joining.",
    img: "/generated/head-start.png",
    alt: "Founder resource library — three stacked rows: Program Guide, Functional Medicine Foundations, Cluster Protocol Frameworks",
  },
];

export default function WhatThisChanges() {
  const ref = useReveal();
  return (
    <section
      id="what-this-changes"
      data-testid="section-what-this-changes"
      className="sc-on-dark"
      style={{
        background:
          "radial-gradient(ellipse at 20% 10%, rgba(37,99,235,0.07) 0%, rgba(10,22,40,0) 50%), #0A1628",
        position: "relative",
        padding: "0 0 120px",
      }}
    >
      <div className="sc-container">
        {/* Divider between Section 4 and Section 5 — gethealthspan-style hairline */}
        <div
          data-testid="section-divider"
          aria-hidden="true"
          style={{
            height: 1,
            width: "100%",
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0) 100%)",
            margin: "0 0 120px",
          }}
        />

        {/* Header — flat, centered-left, no sticky */}
        <div
          ref={ref}
          className="sc-reveal"
          style={{ maxWidth: 820, marginBottom: 80 }}
          data-testid="wtc-header"
        >
          <div
            className="sc-eyebrow"
            style={{ marginBottom: 22, color: "#DAFF6B" }}
          >
            What This Changes
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
            The same clinical work.{" "}
            <em
              style={{
                fontFamily: "'Instrument Serif', serif",
                color: "#DAFF6B",
                fontStyle: "italic",
                fontWeight: 400,
                letterSpacing: "-0.01em",
              }}
            >
              Seen differently.
            </em>
          </h2>
          <p
            className="font-sans-ui"
            style={{
              marginTop: 26,
              fontSize: 18,
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.7)",
              fontWeight: 400,
              maxWidth: 640,
            }}
          >
            Three quiet shifts that change the economics, the visibility, and
            the starting point of how you practice.
          </p>
        </div>

        {/* 3-column flat grid — no scroll, no sticky */}
        <div
          className="sc-wtc-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 40,
            alignItems: "start",
          }}
          data-testid="wtc-grid"
        >
          {points.map((p, i) => (
            <WtcCard key={p.n} item={p} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1080px) {
          .sc-wtc-grid {
            grid-template-columns: 1fr !important;
            gap: 56px !important;
          }
        }
      `}</style>
    </section>
  );
}

function WtcCard({ item, index }) {
  const ref = useReveal();
  return (
    <article
      ref={ref}
      className="sc-reveal"
      data-testid={`change-point-${index}`}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 24,
      }}
    >
      {/* UI mockup image */}
      <div
        style={{
          position: "relative",
          borderRadius: 16,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(255,255,255,0.02)",
          boxShadow:
            "0 24px 60px -18px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.02) inset",
        }}
      >
        <img
          src={item.img}
          alt={item.alt}
          loading="lazy"
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            aspectRatio: "16 / 10",
            objectFit: "cover",
          }}
          data-testid={`change-image-${index}`}
        />
      </div>

      {/* Meta row */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 12,
          fontSize: 11,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#DAFF6B",
          fontFamily: "Inter, sans-serif",
          fontWeight: 700,
          marginTop: 8,
        }}
      >
        <span>{item.n}</span>
        <span
          style={{
            width: 20,
            height: 1,
            background: "rgba(218,255,107,0.55)",
          }}
        />
        <span style={{ color: "rgba(255,255,255,0.6)" }}>{item.eyebrow}</span>
      </div>

      {/* Heading */}
      <h3
        className="font-serif-display"
        style={{
          fontSize: "clamp(22px, 1.75vw, 28px)",
          color: "#FFFFFF",
          margin: 0,
          lineHeight: 1.2,
          fontWeight: 700,
          letterSpacing: "-0.02em",
        }}
      >
        {item.lead}
      </h3>

      {/* Body */}
      <p
        className="font-sans-ui"
        style={{
          fontSize: 15,
          color: "rgba(255,255,255,0.72)",
          lineHeight: 1.7,
          margin: 0,
          fontWeight: 400,
        }}
      >
        {item.body}
      </p>
    </article>
  );
}
