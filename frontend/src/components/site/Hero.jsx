import useReveal from "../../hooks/useReveal";

const APPLY_URL = "#apply";

export default function Hero() {
  const ref = useReveal();
  return (
    <section
      id="top"
      data-testid="section-hero"
      style={{
        minHeight: "100vh",
        backgroundColor: "#0D0D0D",
        position: "relative",
        display: "flex",
        alignItems: "center",
        paddingTop: 140,
        paddingBottom: 120,
      }}
    >
      <div className="sc-container" style={{ width: "100%" }}>
        <div ref={ref} className="sc-reveal" style={{ maxWidth: 720 }}>
          <h1
            className="font-serif-display"
            style={{
              color: "#F5F0E8",
              fontSize: "clamp(44px, 7vw, 80px)",
              lineHeight: 1.1,
              margin: 0,
              fontWeight: 500,
              letterSpacing: "-0.015em",
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
              fontSize: 18,
              color: "rgba(245,240,232,0.72)",
              lineHeight: 1.7,
              maxWidth: 520,
              marginTop: 28,
              marginBottom: 0,
              fontWeight: 400,
            }}
          >
            The infrastructure to practise it — and prove it — hasn't existed.
            Until now.
          </p>

          <div style={{ marginTop: 40 }}>
            <a
              href={APPLY_URL}
              data-testid="hero-cta-apply"
              className="sc-btn"
            >
              Join the Founding Network
            </a>
          </div>
        </div>
      </div>

      <div
        className="font-sans-ui"
        style={{
          position: "absolute",
          bottom: 32,
          left: 80,
          right: 80,
          fontSize: 12,
          color: "rgba(245,240,232,0.35)",
          maxWidth: 700,
          lineHeight: 1.6,
        }}
      >
        Shaped through conversations with functional medicine and longevity
        practitioners across India, Europe, and the US.
      </div>
    </section>
  );
}
