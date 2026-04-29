import useReveal from "../../hooks/useReveal";

const APPLY_URL = "#apply";
const HERO_IMG =
  "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=1200&q=80";

export default function Hero() {
  const ref = useReveal();
  return (
    <section
      id="top"
      data-testid="section-hero"
      className="sc-grain"
      style={{
        minHeight: "100vh",
        backgroundColor: "#0D0D0D",
        position: "relative",
        display: "flex",
        alignItems: "center",
        paddingTop: 140,
        paddingBottom: 80,
        overflow: "hidden",
      }}
    >
      <div className="sc-hero-glow" />

      <div
        className="sc-container"
        style={{ width: "100%", position: "relative", zIndex: 2 }}
      >
        <div
          ref={ref}
          className="sc-reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.25fr) minmax(0, 1fr)",
            gap: 64,
            alignItems: "center",
          }}
        >
          {/* Left content */}
          <div style={{ maxWidth: 720 }}>
            <div style={{ marginBottom: 28 }}>
              <span className="sc-tag" data-testid="hero-tag">
                <span className="dot" />
                Founding Network — Now Inviting Specialists
              </span>
            </div>

            <h1
              className="font-serif-display"
              style={{
                color: "#F5F0E8",
                fontSize: "clamp(40px, 6.6vw, 78px)",
                lineHeight: 1.08,
                margin: 0,
                fontWeight: 500,
                letterSpacing: "-0.02em",
              }}
            >
              Longevity medicine is being built{" "}
              <em style={{ color: "#C9A96E", fontStyle: "italic" }}>
                right now
              </em>
              . By specialists like you.
            </h1>

            <p
              className="font-sans-ui"
              style={{
                fontSize: 19,
                color: "rgba(245,240,232,0.72)",
                lineHeight: 1.7,
                maxWidth: 540,
                marginTop: 28,
                marginBottom: 0,
                fontWeight: 400,
              }}
            >
              The infrastructure to practise it — and prove it — hasn't existed.
              Until now.
            </p>

            <div
              style={{
                marginTop: 40,
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <a href={APPLY_URL} data-testid="hero-cta-apply" className="sc-btn">
                Join the Founding Network
              </a>
              <a
                href="#how-it-works"
                data-testid="hero-cta-secondary"
                className="font-sans-ui"
                style={{
                  fontSize: 14,
                  color: "rgba(245,240,232,0.7)",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                  transition: "color 200ms ease",
                  borderBottom: "1px solid rgba(245,240,232,0.25)",
                  paddingBottom: 4,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A96E")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(245,240,232,0.7)")
                }
              >
                See how it works →
              </a>
            </div>

            {/* Inline credibility row */}
            <div
              style={{
                marginTop: 56,
                display: "flex",
                gap: 40,
                flexWrap: "wrap",
                paddingTop: 28,
                borderTop: "1px solid rgba(245,240,232,0.08)",
              }}
            >
              {[
                { num: "24", label: "Health clusters" },
                { num: "3", label: "Cluster layers" },
                { num: "12wk", label: "Program format" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="font-serif-display"
                    style={{
                      fontSize: 32,
                      color: "#F5F0E8",
                      lineHeight: 1,
                      fontWeight: 500,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    className="font-sans-ui"
                    style={{
                      fontSize: 12,
                      color: "rgba(245,240,232,0.5)",
                      marginTop: 8,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div
            data-testid="hero-visual"
            style={{
              position: "relative",
              aspectRatio: "4 / 5",
              minHeight: 480,
              border: "1px solid #2A2A2A",
              backgroundImage: `url(${HERO_IMG})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow:
                "0 30px 80px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(201, 169, 110, 0.08)",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(13,13,13,0.05) 30%, rgba(13,13,13,0.85) 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 24,
                bottom: 24,
                right: 24,
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <div
                className="font-sans-ui"
                style={{
                  fontSize: 11,
                  color: "#C9A96E",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                A Founding Specialist · Bengaluru
              </div>
              <div
                className="font-serif-display"
                style={{
                  fontSize: 20,
                  color: "#F5F0E8",
                  fontStyle: "italic",
                  lineHeight: 1.4,
                  fontWeight: 400,
                }}
              >
                "I've been practising this medicine for eleven years. I just
                never had a place to host it."
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="font-sans-ui"
        style={{
          position: "absolute",
          bottom: 28,
          left: 80,
          right: 80,
          fontSize: 12,
          color: "rgba(245,240,232,0.32)",
          maxWidth: 700,
          lineHeight: 1.6,
          zIndex: 2,
        }}
      >
        Shaped through conversations with functional medicine and longevity
        practitioners across India, Europe, and the US.
      </div>

      <style>{`
        @media (max-width: 1000px) {
          [data-testid="section-hero"] .sc-reveal {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          [data-testid="hero-visual"] {
            min-height: 380px !important;
          }
        }
        @media (max-width: 768px) {
          [data-testid="section-hero"] {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
