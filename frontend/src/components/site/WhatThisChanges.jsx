import useReveal from "../../hooks/useReveal";

const points = [
  {
    lead: "Your depth becomes visible.",
    body: "The patients who need exactly what you do — multi-system, protocol-driven, outcome-tracked — can now find you. Not through word of mouth. Through a platform that surfaces your cluster expertise to the right person at the right moment.",
  },
  {
    lead: "Your programs command what they're worth.",
    body: "A structured 8–12 week longevity program is a fundamentally different offering from an episodic consult. Specialists on Supercore charge ₹25,000–₹60,000 for programs that were previously billed at ₹1,500 a visit — because the structure, the tracking, and the measurable outcome justify it.",
  },
  {
    lead: "You don't start from zero.",
    body: "Joining Supercore comes with frameworks — longevity program creation guides, functional medicine foundations, cluster-specific protocol resources. Whether you've been running structured programs for years or formalizing your approach for the first time, you have a head start.",
  },
];

const PHOTO =
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1100&q=80";

export default function WhatThisChanges() {
  const ref = useReveal();
  return (
    <section
      data-testid="section-what-this-changes"
      className="sc-section"
      style={{ backgroundColor: "#0D0D0D" }}
    >
      <div className="sc-container">
        <div
          ref={ref}
          className="sc-reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 5fr) minmax(0, 7fr)",
            gap: 80,
            alignItems: "start",
          }}
        >
          {/* Left: header + photo card */}
          <div>
            <div className="sc-eyebrow" style={{ marginBottom: 16 }}>
              What This Changes
            </div>
            <h2
              className="font-serif-display"
              style={{
                fontSize: "clamp(28px, 4.5vw, 44px)",
                color: "#F5F0E8",
                margin: 0,
                lineHeight: 1.15,
                fontWeight: 500,
                letterSpacing: "-0.01em",
              }}
            >
              The same clinical work.{" "}
              <em style={{ color: "#C9A96E", fontStyle: "italic" }}>
                Seen differently.
              </em>
            </h2>

            <div
              style={{
                marginTop: 40,
                position: "relative",
                aspectRatio: "4 / 5",
                border: "1px solid #2A2A2A",
                backgroundImage: `url(${PHOTO})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(13,13,13,0.1) 30%, rgba(13,13,13,0.92) 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 24,
                  left: 24,
                  right: 24,
                }}
              >
                <div
                  className="font-sans-ui"
                  style={{
                    fontSize: 11,
                    color: "#C9A96E",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    marginBottom: 10,
                  }}
                >
                  Field note
                </div>
                <div
                  className="font-serif-display"
                  style={{
                    fontSize: 18,
                    color: "#F5F0E8",
                    fontStyle: "italic",
                    lineHeight: 1.45,
                    fontWeight: 400,
                  }}
                >
                  "The structure I'd been carrying in my head for a decade —
                  finally somewhere outside of it."
                </div>
              </div>
            </div>
          </div>

          {/* Right: three points */}
          <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
            {points.map((p, i) => (
              <div key={i} data-testid={`change-point-${i}`}>
                <div
                  className="font-sans-ui"
                  style={{
                    fontSize: 11,
                    color: "rgba(245,240,232,0.4)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: 12,
                    fontWeight: 500,
                  }}
                >
                  0{i + 1}
                </div>
                <h3
                  className="font-serif-display"
                  style={{
                    fontSize: 28,
                    color: "#F5F0E8",
                    margin: 0,
                    lineHeight: 1.25,
                    fontWeight: 500,
                    letterSpacing: "-0.005em",
                  }}
                >
                  <span style={{ color: "#C9A96E", marginRight: 12 }}>—</span>
                  {p.lead}
                </h3>
                <p
                  className="font-sans-ui"
                  style={{
                    fontSize: 17,
                    color: "rgba(245,240,232,0.72)",
                    lineHeight: 1.75,
                    marginTop: 14,
                    marginBottom: 0,
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
        @media (max-width: 1000px) {
          [data-testid="section-what-this-changes"] .sc-reveal {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
