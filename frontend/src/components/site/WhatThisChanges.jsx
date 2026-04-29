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
            gridTemplateColumns: "minmax(0, 2fr) minmax(0, 3fr)",
            gap: 80,
            alignItems: "start",
          }}
        >
          <h2
            className="font-serif-display"
            style={{
              fontSize: "clamp(28px, 4.5vw, 44px)",
              color: "#F5F0E8",
              margin: 0,
              maxWidth: 320,
              lineHeight: 1.2,
              fontWeight: 500,
              letterSpacing: "-0.01em",
            }}
          >
            The same clinical work. Seen differently.
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            {points.map((p, i) => (
              <div key={i} data-testid={`change-point-${i}`}>
                <p
                  className="font-sans-ui"
                  style={{
                    fontSize: 18,
                    color: "#F5F0E8",
                    fontWeight: 600,
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ color: "#C9A96E", marginRight: 8 }}>—</span>
                  {p.lead}
                </p>
                <p
                  className="font-sans-ui"
                  style={{
                    fontSize: 17,
                    color: "rgba(245,240,232,0.72)",
                    lineHeight: 1.75,
                    marginTop: 10,
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
        @media (max-width: 900px) {
          [data-testid="section-what-this-changes"] .sc-reveal {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
