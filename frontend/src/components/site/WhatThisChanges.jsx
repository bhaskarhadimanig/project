import useReveal from "../../hooks/useReveal";

const points = [
  {
    n: "01",
    eyebrow: "Discovery",
    lead: "Your depth becomes visible.",
    body: "The patients who need exactly what you do — multi-system, protocol-driven, outcome-tracked — can now find you. Not through word of mouth. Through a platform that surfaces your cluster expertise to the right person at the right moment.",
    img: "/generated/depth-visible.png",
    alt: "Specialist discovery dashboard showing cluster-matched profiles with match scores",
  },
  {
    n: "02",
    eyebrow: "Economics",
    lead: "Your programs command what they're worth.",
    body: "A structured 8–12 week longevity program is a fundamentally different offering from an episodic consult. Specialists on Supercore charge ₹25,000–₹60,000 for programs previously billed at ₹1,500 a visit — because the structure, the tracking, and the measurable outcome justify it.",
    img: "/generated/program-value.png",
    alt: "Program economics dashboard comparing episodic visit pricing vs 12-week program pricing",
  },
  {
    n: "03",
    eyebrow: "Head start",
    lead: "You don't start from zero.",
    body: "Joining Supercore comes with frameworks — longevity program creation guides, functional medicine foundations, cluster-specific protocol resources. Whether you've been running structured programs for years or formalizing your approach for the first time, you have a head start.",
    img: "/generated/head-start.png",
    alt: "Founder resource library dashboard with program playbooks and protocol guides",
  },
];

export default function WhatThisChanges() {
  const ref = useReveal();
  return (
    <section
      id="what-this-changes"
      data-testid="section-what-this-changes"
      className="sc-section sc-on-dark"
      style={{
        background:
          "radial-gradient(ellipse at 20% 10%, rgba(37,99,235,0.07) 0%, rgba(10,22,40,0) 50%), #0A1628",
        position: "relative",
      }}
    >
      <div className="sc-container">
        <div
          className="sc-wtc-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.9fr) minmax(0, 1.1fr)",
            gap: 96,
            alignItems: "start",
          }}
        >
          {/* LEFT — sticky title + subtitle */}
          <div className="sc-wtc-sticky" style={{ position: "sticky", top: 120 }}>
            <div
              ref={ref}
              className="sc-reveal"
              style={{ maxWidth: 520 }}
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
                  fontSize: "clamp(40px, 5.2vw, 68px)",
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
                  marginTop: 28,
                  fontSize: 18,
                  lineHeight: 1.65,
                  color: "rgba(255,255,255,0.7)",
                  fontWeight: 400,
                  maxWidth: 460,
                }}
              >
                Three quiet shifts that change the economics, the visibility,
                and the starting point of how you practice.
              </p>
              <div
                style={{
                  marginTop: 40,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.45)",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                }}
              >
                <span
                  style={{
                    width: 28,
                    height: 1,
                    background: "rgba(218,255,107,0.6)",
                  }}
                />
                Three shifts
              </div>
            </div>
          </div>

          {/* RIGHT — scrollable stack */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 120,
            }}
            data-testid="wtc-stack"
          >
            {points.map((p, i) => (
              <WtcItem key={p.n} item={p} index={i} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .sc-wtc-grid {
            grid-template-columns: 1fr !important;
            gap: 64px !important;
          }
          .sc-wtc-sticky {
            position: static !important;
            top: auto !important;
          }
        }
        @media (max-width: 640px) {
          .sc-wtc-item-head {
            font-size: 28px !important;
          }
        }
      `}</style>
    </section>
  );
}

function WtcItem({ item, index }) {
  const ref = useReveal();
  return (
    <article
      ref={ref}
      className="sc-reveal"
      data-testid={`change-point-${index}`}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 28,
      }}
    >
      {/* Image first */}
      <div
        style={{
          position: "relative",
          borderRadius: 18,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(255,255,255,0.02)",
          boxShadow:
            "0 30px 80px -20px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.02) inset",
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
          gap: 14,
          fontSize: 11,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#DAFF6B",
          fontFamily: "Inter, sans-serif",
          fontWeight: 700,
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
        className="font-serif-display sc-wtc-item-head"
        style={{
          fontSize: "clamp(28px, 2.8vw, 38px)",
          color: "#FFFFFF",
          margin: 0,
          lineHeight: 1.15,
          fontWeight: 700,
          letterSpacing: "-0.025em",
        }}
      >
        {item.lead}
      </h3>

      {/* Body */}
      <p
        className="font-sans-ui"
        style={{
          fontSize: 17,
          color: "rgba(255,255,255,0.72)",
          lineHeight: 1.7,
          margin: 0,
          fontWeight: 400,
          maxWidth: 620,
        }}
      >
        {item.body}
      </p>
    </article>
  );
}
