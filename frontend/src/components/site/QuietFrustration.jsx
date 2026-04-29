import useReveal from "../../hooks/useReveal";

const blocks = [
  "Your best 12-week patient came back two years later, and nothing of what worked the first time was anywhere on record.",
  "The colleague who refers you cases sends six WhatsApp screenshots and a PDF.",
  "Your most rigorous clinical work — the multi-system, multi-month, slow-and-careful kind — is the least visible thing about your practice.",
];

export default function QuietFrustration() {
  const ref = useReveal();
  return (
    <section
      data-testid="section-quiet-frustration"
      className="sc-section"
      style={{ backgroundColor: "#0D0D0D" }}
    >
      <div className="sc-container">
        <div
          ref={ref}
          className="sc-stagger"
          style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}
        >
          {blocks.map((b, i) => (
            <p
              key={i}
              className="font-sans-ui"
              style={{
                fontSize: 22,
                lineHeight: 1.85,
                color: "rgba(245,240,232,0.85)",
                margin: i === 0 ? "0" : "40px 0 0",
                fontWeight: 300,
              }}
            >
              {b}
            </p>
          ))}

          <hr className="sc-divider" />

          <p
            className="font-serif-display"
            style={{
              fontSize: 24,
              fontStyle: "italic",
              color: "#F5F0E8",
              margin: 0,
              lineHeight: 1.5,
              fontWeight: 400,
            }}
          >
            There's no infrastructure built for the way you actually practise.
            So we built one.
          </p>
        </div>
      </div>
    </section>
  );
}
