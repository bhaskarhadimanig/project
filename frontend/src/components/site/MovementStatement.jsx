import useReveal from "../../hooks/useReveal";

const APPLY_URL = "#apply";

const lines = [
  { text: "India has over 2 million practitioners.", italic: false },
  {
    text: "Almost none of them practise with a longevity architecture.",
    italic: false,
  },
  {
    text: "Not because they lack the depth — many already have it.",
    italic: false,
  },
  { text: "Because no one built the system that lets them.", italic: false },
  { text: "With Supercore Longevity, that changes.", italic: true },
];

export default function MovementStatement() {
  const ref = useReveal({ threshold: 0.2 });
  return (
    <section
      id="apply"
      data-testid="section-movement"
      style={{
        minHeight: "100vh",
        backgroundColor: "#0F0E0C",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 0",
      }}
    >
      <div
        className="sc-container"
        style={{ width: "100%", textAlign: "center" }}
      >
        <div ref={ref} className="sc-stagger">
          {lines.map((l, i) => (
            <p
              key={i}
              className="font-serif-display"
              style={{
                fontSize: "clamp(28px, 4.4vw, 52px)",
                color: l.italic ? "#D87047" : "#F4ECE0",
                fontStyle: l.italic ? "italic" : "normal",
                lineHeight: 1.5,
                margin: i === 0 ? 0 : "16px 0 0",
                fontWeight: 500,
                letterSpacing: "-0.01em",
                maxWidth: 1080,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              {l.text}
            </p>
          ))}
        </div>

        <div style={{ marginTop: 56 }}>
          <a
            href={APPLY_URL}
            data-testid="movement-cta-apply"
            className="sc-btn"
          >
            Join the Founding Network
          </a>
        </div>
      </div>
    </section>
  );
}
