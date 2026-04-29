import useReveal from "../../hooks/useReveal";

const cards = [
  {
    n: "01",
    title: "Records that quietly vanish.",
    body: "Your best 12-week patient came back two years later, and nothing of what worked the first time was anywhere on record. The protocol, the markers, the slow win — gone with the visit.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=88",
  },
  {
    n: "02",
    title: "Referrals in fragments.",
    body: "The colleague who refers you cases sends six WhatsApp screenshots and a PDF. You stitch a story together from photographs of paper. Every time.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=88",
  },
  {
    n: "03",
    title: "The rigour goes unseen.",
    body: "Your most rigorous clinical work — the multi-system, multi-month, slow-and-careful kind — is the least visible thing about your practice. Nobody outside the room knows what you actually do.",
    img: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1400&q=88",
  },
];

export default function QuietFrustration() {
  const ref = useReveal();
  return (
    <section
      data-testid="section-quiet-frustration"
      className="sc-light"
      style={{ paddingTop: 140, paddingBottom: 160 }}
    >
      <div className="sc-container">
        {/* Section header */}
        <div
          ref={ref}
          className="sc-reveal"
          style={{
            maxWidth: 760,
            margin: "0 auto 80px",
            textAlign: "center",
          }}
        >
          <div className="sc-eyebrow" style={{ marginBottom: 18 }}>
            The Quiet Frustration
          </div>
          <h2
            className="font-serif-display"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              margin: 0,
              lineHeight: 1.12,
              fontWeight: 500,
              letterSpacing: "-0.02em",
              color: "#1A1612",
            }}
          >
            Three patterns every specialist already knows.
          </h2>
          <p
            className="font-sans-ui"
            style={{
              fontSize: 17,
              color: "rgba(26,22,18,0.6)",
              lineHeight: 1.7,
              margin: "20px auto 0",
              maxWidth: 600,
              fontWeight: 400,
            }}
          >
            Years of careful clinical work, scattered across a practice that was
            never built to hold it.
          </p>
        </div>

        {/* Stacking cards */}
        <div
          data-testid="frustration-cards"
          style={{ position: "relative" }}
        >
          {cards.map((c, i) => (
            <div
              key={c.n}
              data-testid={`frustration-wrapper-${i}`}
              style={{
                paddingBottom: i < cards.length - 1 ? "32vh" : 0,
              }}
            >
              <article
                data-testid={`frustration-card-${i}`}
                style={{
                  position: "sticky",
                  top: 124 + i * 14,
                  zIndex: 10 + i,
                  background: "#FFFFFF",
                  border: "1px solid rgba(26,22,18,0.06)",
                  borderRadius: 28,
                  overflow: "hidden",
                  display: "grid",
                  gridTemplateColumns: "minmax(0, 1.05fr) minmax(0, 1fr)",
                  minHeight: 460,
                  boxShadow:
                    "0 30px 80px -20px rgba(26,22,18,0.18), 0 0 0 1px rgba(26,22,18,0.03)",
                }}
                className="sc-frust-card"
              >
                {/* LEFT — content */}
                <div
                  style={{
                    padding: "56px 56px 52px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: 32,
                  }}
                  className="sc-frust-card-text"
                >
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
                        color: "#FF5C28",
                        fontWeight: 700,
                        marginBottom: 28,
                      }}
                    >
                      <span
                        style={{
                          width: 28,
                          height: 1,
                          background: "#FF5C28",
                        }}
                      />
                      {c.n}
                    </div>
                    <h3
                      className="font-serif-display"
                      style={{
                        fontSize: "clamp(28px, 3vw, 40px)",
                        lineHeight: 1.12,
                        margin: 0,
                        fontWeight: 500,
                        letterSpacing: "-0.018em",
                        color: "#1A1612",
                      }}
                    >
                      {c.title}
                    </h3>
                  </div>
                  <p
                    className="font-sans-ui"
                    style={{
                      fontSize: 17,
                      lineHeight: 1.7,
                      color: "rgba(26,22,18,0.68)",
                      margin: 0,
                      fontWeight: 400,
                      maxWidth: 480,
                    }}
                  >
                    {c.body}
                  </p>
                </div>

                {/* RIGHT — image */}
                <div
                  className="sc-frust-card-img"
                  style={{
                    backgroundImage: `url(${c.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: 460,
                  }}
                />
              </article>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <div
          style={{
            maxWidth: 720,
            margin: "120px auto 0",
            textAlign: "center",
          }}
        >
          <p
            className="font-serif-display"
            style={{
              fontSize: "clamp(24px, 2.6vw, 32px)",
              fontStyle: "italic",
              color: "#1A1612",
              margin: 0,
              lineHeight: 1.4,
              fontWeight: 400,
              letterSpacing: "-0.005em",
            }}
          >
            There's no infrastructure built for the way you actually practise.{" "}
            <span style={{ color: "#FF5C28" }}>So we built one.</span>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .sc-frust-card {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
          .sc-frust-card-text {
            padding: 40px 32px !important;
            gap: 24px !important;
          }
          .sc-frust-card-img {
            min-height: 280px !important;
            order: -1;
          }
          [data-testid="frustration-wrapper-0"],
          [data-testid="frustration-wrapper-1"] {
            padding-bottom: 24px !important;
          }
          [data-testid="frustration-card-0"],
          [data-testid="frustration-card-1"],
          [data-testid="frustration-card-2"] {
            position: static !important;
          }
        }
      `}</style>
    </section>
  );
}
