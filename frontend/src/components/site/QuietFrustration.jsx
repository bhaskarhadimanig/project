import useReveal from "../../hooks/useReveal";

const blocks = [
  "Your best 12-week patient came back two years later, and nothing of what worked the first time was anywhere on record.",
  "The colleague who refers you cases sends six WhatsApp screenshots and a PDF.",
];

export default function QuietFrustration() {
  const ref = useReveal();
  return (
    <section
      data-testid="section-quiet-frustration"
      className="sc-section"
      style={{ backgroundColor: "#0F0E0C" }}
    >
      <div className="sc-container">
        <div
          ref={ref}
          className="sc-stagger"
          style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}
        >
          <div
            className="sc-eyebrow"
            style={{ marginBottom: 32, color: "#D87047" }}
          >
            The Quiet Frustration
          </div>

          {blocks.map((b, i) => (
            <p
              key={i}
              className="font-sans-ui"
              style={{
                fontSize: 24,
                lineHeight: 1.7,
                color: "rgba(244,236,224,0.88)",
                margin: i === 0 ? "0" : "44px 0 0",
                fontWeight: 300,
                letterSpacing: "-0.005em",
              }}
            >
              {b}
            </p>
          ))}

          <hr className="sc-divider" />

          <p
            className="font-serif-display"
            style={{
              fontSize: "clamp(24px, 3vw, 32px)",
              fontStyle: "italic",
              color: "#F4ECE0",
              margin: 0,
              lineHeight: 1.4,
              fontWeight: 400,
            }}
          >
            There's no infrastructure built for the way you actually practise.
            <br />
            <span style={{ color: "#F2A57E" }}>So we built one.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
