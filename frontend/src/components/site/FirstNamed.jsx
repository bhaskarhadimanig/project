import useReveal from "../../hooks/useReveal";

const paragraphs = [
  "Longevity medicine in India is at an inflection point — about the same place functional medicine was in the US fifteen years ago. The specialists who plant their flag now will be the names the next generation of doctors refers to.",
  "For the first time, your depth is visible to the right patient — searchable, credentialed, with your protocols and outcomes shown the way they deserve to be shown. Most specialists have never had this. They've had a clinic address and word-of-mouth. They've never had a public-facing record of the rigour of their work.",
  "Supercore is a curated network, not a marketplace. You're not bidding for consults. You're hosting your specialised longevity programs — on infrastructure that respects how you work.",
];

export default function FirstNamed() {
  const ref = useReveal();
  return (
    <section
      id="founding-network"
      data-testid="section-first-named"
      className="sc-section"
      style={{ backgroundColor: "#141414" }}
    >
      <div className="sc-container">
        <div
          ref={ref}
          className="sc-stagger"
          style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}
        >
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className="font-sans-ui"
              style={{
                fontSize: 18,
                color: "rgba(245,240,232,0.78)",
                lineHeight: 1.8,
                margin: i === 0 ? "0" : "32px 0 0",
                fontWeight: 400,
              }}
            >
              {p}
            </p>
          ))}

          <p
            className="font-serif-display"
            style={{
              fontSize: "clamp(28px, 4vw, 38px)",
              fontStyle: "italic",
              color: "#C9A96E",
              marginTop: 56,
              marginBottom: 0,
              lineHeight: 1.4,
              fontWeight: 400,
            }}
          >
            First-wave moves don't come around twice.
          </p>
        </div>
      </div>
    </section>
  );
}
