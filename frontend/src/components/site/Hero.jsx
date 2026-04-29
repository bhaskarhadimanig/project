import useReveal from "../../hooks/useReveal";

const APPLY_URL = "#apply";
// Warm-toned editorial portrait — the visual anchor of the page
const HERO_BG =
  "https://images.unsplash.com/photo-1517451330947-7809dead78d5?auto=format&fit=crop&w=2400&q=85";

export default function Hero() {
  const ref = useReveal();
  return (
    <section
      id="top"
      data-testid="section-hero"
      style={{
        minHeight: "100vh",
        position: "relative",
        backgroundColor: "#0F0E0C",
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-end",
        paddingTop: 140,
        paddingBottom: 80,
      }}
    >
      {/* Full-bleed hero image */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          zIndex: 0,
        }}
      />
      {/* Warm tonal overlay — terracotta/peach wash */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(15,14,12,0.55) 0%, rgba(15,14,12,0.35) 35%, rgba(15,14,12,0.85) 100%), radial-gradient(ellipse at 75% 40%, rgba(216,112,71,0.42) 0%, rgba(216,112,71,0.15) 35%, rgba(15,14,12,0) 65%)",
          zIndex: 1,
        }}
      />
      <div
        aria-hidden
        className="sc-grain"
        style={{ position: "absolute", inset: 0, zIndex: 2 }}
      />

      {/* Content */}
      <div
        className="sc-container"
        style={{ width: "100%", position: "relative", zIndex: 3 }}
      >
        <div ref={ref} className="sc-reveal" style={{ maxWidth: 920 }}>
          <div style={{ marginBottom: 32 }}>
            <span className="sc-tag" data-testid="hero-tag">
              <span className="dot" />
              Founding Network — Now Inviting Specialists
            </span>
          </div>

          <h1
            className="font-serif-display"
            style={{
              color: "#F4ECE0",
              fontSize: "clamp(44px, 8.4vw, 108px)",
              lineHeight: 1.02,
              margin: 0,
              fontWeight: 500,
              letterSpacing: "-0.025em",
            }}
          >
            Longevity medicine
            <br />
            is being built{" "}
            <em
              style={{
                color: "#F2A57E",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              right now
            </em>
            .
            <br />
            By specialists like you.
          </h1>

          <p
            className="font-sans-ui"
            style={{
              fontSize: 20,
              color: "rgba(244,236,224,0.82)",
              lineHeight: 1.6,
              maxWidth: 620,
              marginTop: 36,
              marginBottom: 0,
              fontWeight: 400,
            }}
          >
            The infrastructure to practise it — and prove it — hasn't existed.
            Until now.
          </p>

          <div
            style={{
              marginTop: 44,
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
              className="sc-btn-ghost"
            >
              See how it works
            </a>
          </div>

          {/* Inline credibility — quietly anchored at bottom-left of hero */}
          <div
            style={{
              marginTop: 80,
              display: "flex",
              gap: 56,
              flexWrap: "wrap",
              alignItems: "flex-end",
            }}
          >
            {[
              { num: "24", label: "Health clusters" },
              { num: "3", label: "Cluster layers" },
              { num: "12wk", label: "Program format" },
              { num: "₹25–60k", label: "Per program" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  className="font-serif-display"
                  style={{
                    fontSize: "clamp(28px, 3.4vw, 40px)",
                    color: "#F4ECE0",
                    lineHeight: 1,
                    fontWeight: 500,
                    letterSpacing: "-0.015em",
                  }}
                >
                  {s.num}
                </div>
                <div
                  className="font-sans-ui"
                  style={{
                    fontSize: 12,
                    color: "rgba(244,236,224,0.6)",
                    marginTop: 10,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Attribution caption */}
      <div
        className="font-sans-ui"
        style={{
          position: "absolute",
          bottom: 28,
          right: 80,
          fontSize: 11,
          color: "rgba(244,236,224,0.4)",
          maxWidth: 380,
          lineHeight: 1.6,
          zIndex: 3,
          textAlign: "right",
          letterSpacing: "0.04em",
        }}
      >
        Shaped through conversations with functional medicine and longevity
        practitioners across India, Europe, and the US.
      </div>

      <style>{`
        @media (max-width: 768px) {
          [data-testid="section-hero"] {
            padding-top: 110px !important;
            padding-bottom: 64px !important;
          }
        }
      `}</style>
    </section>
  );
}
