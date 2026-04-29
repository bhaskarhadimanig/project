import useReveal from "../../hooks/useReveal";

const BG =
  "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?auto=format&fit=crop&w=2400&q=85";

/**
 * Full-bleed cinematic banner with a single anchoring quote.
 * Provides visual rhythm between text-heavy sections.
 */
export default function CinematicBanner() {
  const ref = useReveal();
  return (
    <section
      data-testid="section-cinematic-banner"
      style={{
        position: "relative",
        minHeight: "75vh",
        backgroundColor: "#0F0E0C",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        padding: "120px 0",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(15,14,12,0.85) 0%, rgba(15,14,12,0.6) 50%, rgba(15,14,12,0.4) 100%)",
          zIndex: 1,
        }}
      />

      <div
        className="sc-container"
        style={{ position: "relative", zIndex: 2, width: "100%" }}
      >
        <div ref={ref} className="sc-reveal" style={{ maxWidth: 820 }}>
          <div className="sc-eyebrow" style={{ marginBottom: 24 }}>
            The Quiet Frustration
          </div>
          <p
            className="font-serif-display"
            style={{
              fontSize: "clamp(32px, 4.6vw, 56px)",
              color: "#F4ECE0",
              fontStyle: "italic",
              lineHeight: 1.2,
              margin: 0,
              fontWeight: 400,
              letterSpacing: "-0.015em",
            }}
          >
            "Your most rigorous clinical work — the multi-system, multi-month,
            slow-and-careful kind — is the{" "}
            <span style={{ color: "#F2A57E" }}>least visible</span> thing about
            your practice."
          </p>
          <div
            className="font-sans-ui"
            style={{
              fontSize: 13,
              color: "rgba(244,236,224,0.55)",
              marginTop: 32,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            — Functional Medicine Specialist · Bengaluru
          </div>
        </div>
      </div>
    </section>
  );
}
