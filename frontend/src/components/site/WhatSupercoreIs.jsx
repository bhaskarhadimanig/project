import useReveal from "../../hooks/useReveal";

const cols = [
  {
    n: "01",
    title: "Your specialty has a home here.",
    body: "Health on Supercore is organised into clusters — gut, metabolic, hormonal, sleep, inflammation, cognitive, and more. You don't have to become a 'longevity doctor.' You select the clusters you already practise in. Your work plugs into the larger biological picture without expanding your scope. The architecture meets you where you already are.",
  },
  {
    n: "02",
    title: "Your medicine stays your medicine.",
    body: "Every program, protocol, care plan, and clinical decision you make on Supercore is yours. We don't write prescriptions. We don't review your protocols. We don't own your patients. We host the rails — you run the medicine.",
  },
  {
    n: "03",
    title: "Your work doesn't disappear anymore.",
    body: "When you finish a 12-week protocol on Supercore, your patient walks away with three things that stay forever: a measurable shift in their cluster score, a movement in their overall longevity score, and a permanent line on their biological timeline — dated, attributed, scored. Five years from now, your work is still there. Still visible. Still counting.",
  },
];

export default function WhatSupercoreIs() {
  const ref = useReveal();
  return (
    <section
      id="how-it-works"
      data-testid="section-what-supercore-is"
      className="sc-section"
      style={{
        backgroundColor: "#141414",
        borderTop: "1px solid #C9A96E",
      }}
    >
      <div className="sc-container">
        <div ref={ref} className="sc-reveal">
          <div className="sc-eyebrow" style={{ marginBottom: 16 }}>
            What Supercore Is
          </div>
          <h2
            className="font-serif-display"
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              color: "#F5F0E8",
              margin: 0,
              lineHeight: 1.15,
              fontWeight: 500,
              letterSpacing: "-0.01em",
            }}
          >
            Three things, and only three.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 48,
              marginTop: 64,
            }}
          >
            {cols.map((c) => (
              <div key={c.n} data-testid={`pillar-${c.n}`}>
                <div
                  className="font-sans-ui"
                  style={{
                    fontSize: 13,
                    color: "#C9A96E",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  {c.n}
                </div>
                <h3
                  className="font-serif-display"
                  style={{
                    fontSize: 26,
                    color: "#F5F0E8",
                    marginTop: 16,
                    marginBottom: 16,
                    lineHeight: 1.25,
                    fontWeight: 500,
                    letterSpacing: "-0.005em",
                  }}
                >
                  {c.title}
                </h3>
                <p
                  className="font-sans-ui"
                  style={{
                    fontSize: 17,
                    color: "rgba(245,240,232,0.72)",
                    lineHeight: 1.75,
                    margin: 0,
                    fontWeight: 400,
                  }}
                >
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
