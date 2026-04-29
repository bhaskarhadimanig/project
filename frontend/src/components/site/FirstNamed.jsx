import useReveal from "../../hooks/useReveal";

const paragraphs = [
  "Longevity medicine in India is at an inflection point — about the same place functional medicine was in the US fifteen years ago. The specialists who plant their flag now will be the names the next generation of doctors refers to.",
  "For the first time, your depth is visible to the right patient — searchable, credentialed, with your protocols and outcomes shown the way they deserve to be shown. Most specialists have never had this. They've had a clinic address and word-of-mouth. They've never had a public-facing record of the rigour of their work.",
  "Supercore is a curated network, not a marketplace. You're not bidding for consults. You're hosting your specialised longevity programs — on infrastructure that respects how you work.",
];

const BG =
  "https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&w=1800&q=80";

export default function FirstNamed() {
  const ref = useReveal();
  return (
    <section
      id="founding-network"
      data-testid="section-first-named"
      className="sc-section sc-grain"
      style={{
        backgroundColor: "#141414",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Atmosphere image — very subtle */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.18,
          filter: "saturate(1.05)",
          zIndex: 0,
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(20,20,20,0.92) 0%, rgba(20,20,20,0.78) 50%, rgba(20,20,20,0.95) 100%)",
          zIndex: 1,
        }}
      />

      <div
        className="sc-container"
        style={{ position: "relative", zIndex: 2 }}
      >
        <div
          ref={ref}
          className="sc-stagger"
          style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}
        >
          <div className="sc-eyebrow" style={{ marginBottom: 24 }}>
            Be Among the First Named
          </div>
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className="font-sans-ui"
              style={{
                fontSize: 18,
                color: "rgba(245,240,232,0.82)",
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
              fontSize: "clamp(28px, 4.4vw, 42px)",
              fontStyle: "italic",
              color: "#C9A96E",
              marginTop: 64,
              marginBottom: 0,
              lineHeight: 1.35,
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            First-wave moves don't come around twice.
          </p>
        </div>
      </div>
    </section>
  );
}
