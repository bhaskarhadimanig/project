import useReveal from "../../hooks/useReveal";

const cols = [
  {
    n: "01",
    img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1100&q=85",
    title: "Your specialty has a home here.",
    body: "Health on Supercore is organised into clusters — gut, metabolic, hormonal, sleep, inflammation, cognitive, and more. You don't have to become a 'longevity doctor.' You select the clusters you already practise in. Your work plugs into the larger biological picture — without expanding your scope.",
  },
  {
    n: "02",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1100&q=85",
    title: "Your medicine stays your medicine.",
    body: "Every program, protocol, care plan, and clinical decision you make on Supercore is yours. We don't write prescriptions. We don't review your protocols. We don't own your patients. We host the rails — you run the medicine.",
  },
  {
    n: "03",
    img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1100&q=85",
    title: "Your work doesn't disappear anymore.",
    body: "When you finish a 12-week protocol, your patient walks away with three things that stay forever: a measurable shift in their cluster score, a movement in their overall longevity score, and a permanent line on their biological timeline — dated, attributed, scored.",
  },
];

export default function WhatSupercoreIs() {
  const ref = useReveal();
  return (
    <section
      id="how-it-works"
      data-testid="section-what-supercore-is"
      className="sc-section sc-light"
    >
      <div className="sc-container">
        <div
          ref={ref}
          className="sc-reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.1fr)",
            gap: 64,
            alignItems: "end",
            marginBottom: 80,
          }}
        >
          <div>
            <div className="sc-eyebrow" style={{ marginBottom: 20 }}>
              What Supercore Is
            </div>
            <h2
              className="font-serif-display"
              style={{
                fontSize: "clamp(40px, 6vw, 80px)",
                margin: 0,
                lineHeight: 1.02,
                fontWeight: 500,
                letterSpacing: "-0.025em",
              }}
            >
              Three things,
              <br />
              and{" "}
              <em
                className="italic-emphasis"
                style={{ fontStyle: "italic" }}
              >
                only three
              </em>
              .
            </h2>
          </div>
          <p
            className="font-sans-ui"
            style={{
              fontSize: 18,
              lineHeight: 1.7,
              color: "rgba(10,22,40,0.65)",
              margin: 0,
              maxWidth: 520,
              fontWeight: 400,
            }}
          >
            Supercore is built around a small, deliberate set of promises to
            specialist physicians. Everything else flows from these.
          </p>
        </div>

        <div
          className="sc-stagger"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 28,
          }}
        >
          {cols.map((c) => (
            <article
              key={c.n}
              data-testid={`pillar-${c.n}`}
              className="sc-feature-card"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div
                style={{
                  aspectRatio: "5 / 4",
                  backgroundImage: `url(${c.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                }}
              >
                <span
                  className="font-sans-ui"
                  style={{
                    position: "absolute",
                    top: 20,
                    left: 22,
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    color: "#FFF7EE",
                    background: "#0A1628",
                    padding: "6px 12px",
                    borderRadius: 999,
                  }}
                >
                  {c.n}
                </span>
              </div>
              <div
                style={{
                  padding: "32px 32px 36px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  flex: 1,
                }}
              >
                <h3
                  className="font-serif-display"
                  style={{
                    fontSize: 26,
                    margin: 0,
                    lineHeight: 1.2,
                    fontWeight: 500,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {c.title}
                </h3>
                <p
                  className="font-sans-ui"
                  style={{
                    fontSize: 15,
                    color: "rgba(10,22,40,0.65)",
                    lineHeight: 1.7,
                    margin: 0,
                    fontWeight: 400,
                  }}
                >
                  {c.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
