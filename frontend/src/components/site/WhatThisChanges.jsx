import useReveal from "../../hooks/useReveal";

const points = [
  {
    lead: "Your depth becomes visible.",
    body: "The patients who need exactly what you do — multi-system, protocol-driven, outcome-tracked — can now find you. Not through word of mouth. Through a platform that surfaces your cluster expertise to the right person at the right moment.",
  },
  {
    lead: "Your programs command what they're worth.",
    body: "A structured 8–12 week longevity program is a fundamentally different offering from an episodic consult. Specialists on Supercore charge ₹25,000–₹60,000 for programs previously billed at ₹1,500 a visit — because the structure, the tracking, and the measurable outcome justify it.",
  },
  {
    lead: "You don't start from zero.",
    body: "Joining Supercore comes with frameworks — longevity program creation guides, functional medicine foundations, cluster-specific protocol resources. Whether you've been running structured programs for years or formalizing your approach for the first time, you have a head start.",
  },
];

export default function WhatThisChanges() {
  const ref = useReveal();
  return (
    <section
      data-testid="section-what-this-changes"
      className="sc-section sc-on-dark"
      style={{ backgroundColor: "#0A1628" }}
    >
      <div className="sc-container">
        <div
          ref={ref}
          className="sc-reveal"
          style={{ maxWidth: 1080, margin: "0 auto" }}
        >
          <div
            style={{
              textAlign: "center",
              maxWidth: 720,
              margin: "0 auto 80px",
            }}
          >
            <div className="sc-eyebrow" style={{ marginBottom: 20 }}>
              What This Changes
            </div>
            <h2
              className="font-serif-display"
              style={{
                fontSize: "clamp(36px, 5.4vw, 64px)",
                color: "#FFFFFF",
                margin: 0,
                lineHeight: 1.05,
                fontWeight: 500,
                letterSpacing: "-0.025em",
              }}
            >
              The same clinical work.{" "}
              <em
                style={{ color: "#DAFF6B", fontStyle: "italic" }}
              >
                Seen differently.
              </em>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gap: 0,
            }}
          >
            {points.map((p, i) => (
              <div
                key={i}
                data-testid={`change-point-${i}`}
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px minmax(0, 1fr) minmax(0, 2fr)",
                  gap: 48,
                  padding: "44px 0",
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                  borderBottom:
                    i === points.length - 1
                      ? "1px solid rgba(255,255,255,0.1)"
                      : "none",
                  alignItems: "start",
                }}
                className="sc-change-row"
              >
                <div
                  className="font-serif-display"
                  style={{
                    fontSize: 56,
                    color: "#DAFF6B",
                    lineHeight: 1,
                    fontWeight: 500,
                    letterSpacing: "-0.02em",
                  }}
                >
                  0{i + 1}
                </div>
                <h3
                  className="font-serif-display"
                  style={{
                    fontSize: 28,
                    color: "#FFFFFF",
                    margin: 0,
                    lineHeight: 1.2,
                    fontWeight: 500,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.lead}
                </h3>
                <p
                  className="font-sans-ui"
                  style={{
                    fontSize: 17,
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.75,
                    margin: 0,
                    fontWeight: 400,
                  }}
                >
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .sc-change-row {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
