import useReveal from "../../hooks/useReveal";

const BANNER = "/generated/first-named-portrait.png";

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
      className="sc-light"
      style={{ paddingBottom: 120 }}
    >
      {/* Full-width banner image at top */}
      <div
        data-testid="first-named-banner"
        className="sc-on-dark"
        style={{
          height: "60vh",
          minHeight: 420,
          backgroundImage: `url(${BANNER})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(15,14,12,0.78) 0%, rgba(15,14,12,0.5) 60%, rgba(15,14,12,0.2) 100%)",
          }}
        />
        <div
          className="sc-container"
          style={{ position: "relative", zIndex: 2, width: "100%" }}
        >
          <div ref={ref} className="sc-reveal" style={{ maxWidth: 720 }}>
            <div
              className="sc-eyebrow"
              style={{ marginBottom: 20, color: "#DAFF6B" }}
            >
              Be Among the First Named
            </div>
            <h2
              className="font-serif-display"
              style={{
                fontSize: "clamp(38px, 5.4vw, 72px)",
                color: "#FFFFFF",
                margin: 0,
                lineHeight: 1.04,
                fontWeight: 700,
                letterSpacing: "-0.035em",
                maxWidth: 820,
              }}
            >
              This is where the next era of medicine{" "}
              <em
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  color: "#DAFF6B",
                  fontStyle: "italic",
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                }}
              >
                gets its names
              </em>
              .
            </h2>
          </div>
        </div>
      </div>

      {/* Body content on cream */}
      <div className="sc-container" style={{ marginTop: 96 }}>
        <div
          className="sc-stagger"
          ref={(el) => {
            if (el && !el.dataset.bound) {
              el.dataset.bound = "1";
              const io = new IntersectionObserver(
                (entries) => {
                  entries.forEach((e) => {
                    if (e.isIntersecting) {
                      e.target.classList.add("is-visible");
                      io.unobserve(e.target);
                    }
                  });
                },
                { threshold: 0.15 }
              );
              io.observe(el);
            }
          }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 48,
          }}
        >
          {paragraphs.map((p, i) => (
            <div key={i} data-testid={`first-named-para-${i}`}>
              <div
                className="font-serif-display"
                style={{
                  fontSize: 36,
                  color: "#DAFF6B",
                  lineHeight: 1,
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  marginBottom: 20,
                }}
              >
                0{i + 1}
              </div>
              <p
                className="font-sans-ui"
                style={{
                  fontSize: 16,
                  color: "rgba(10,22,40,0.78)",
                  lineHeight: 1.75,
                  margin: 0,
                  fontWeight: 400,
                }}
              >
                {p}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 80,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <a
            href="#apply"
            data-testid="first-named-cta"
            className="sc-btn"
          >
            Apply to the Founding Network
          </a>
        </div>
      </div>
    </section>
  );
}
