import useReveal from "../../hooks/useReveal";

const cards = [
  {
    img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1100&q=80",
    eyebrow: "Week 0 — Baseline",
    title: "Cluster scores, biology baseline, and goals.",
    body: "Your patient lands on a structured intake — cluster activations, biomarker capture, and lifestyle inputs that frame the program ahead.",
  },
  {
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1100&q=80",
    eyebrow: "Weeks 1–11 — Protocol",
    title: "Your protocol runs the program.",
    body: "Visits, prescriptions, supplements, lifestyle directives — all the work you already do, finally captured in one place. Your medicine, fully attributed to you.",
  },
  {
    img: "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?auto=format&fit=crop&w=1100&q=80",
    eyebrow: "Week 12 — Outcome",
    title: "A measurable shift, on a permanent timeline.",
    body: "Cluster score movement, an updated longevity score, and a permanent line on the patient's biological timeline — dated, attributed, scored.",
  },
];

export default function ProgramShowcase() {
  const ref = useReveal();

  return (
    <section
      data-testid="section-program-showcase"
      className="sc-section sc-light"
      style={{ position: "relative" }}
    >
      <div className="sc-container">
        <div
          ref={ref}
          className="sc-reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.2fr)",
            gap: 64,
            alignItems: "end",
            marginBottom: 64,
          }}
        >
          <div>
            <div className="sc-eyebrow" style={{ marginBottom: 16 }}>
              Inside a Supercore Program
            </div>
            <h2
              className="font-serif-display"
              style={{
                fontSize: "clamp(32px, 5vw, 52px)",
                margin: 0,
                lineHeight: 1.1,
                fontWeight: 500,
                letterSpacing: "-0.015em",
              }}
            >
              Twelve weeks. <em style={{ fontStyle: "italic" }}>Three</em>{" "}
              moments that change everything for the patient.
            </h2>
          </div>
          <p
            className="font-sans-ui"
            style={{
              fontSize: 18,
              lineHeight: 1.7,
              color: "rgba(13,13,13,0.65)",
              margin: 0,
              maxWidth: 520,
              fontWeight: 400,
            }}
          >
            Every program on Supercore follows the cadence longevity work
            actually demands — a measurable baseline, a structured arc, and a
            permanent record at the end.
          </p>
        </div>

        <div
          className="sc-stagger"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 32,
          }}
          ref={(el) => {
            // ensure stagger triggers
            if (el && !el.dataset.bound) {
              el.dataset.bound = "1";
              const io = new IntersectionObserver(
                (entries) => {
                  entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                      entry.target.classList.add("is-visible");
                      io.unobserve(entry.target);
                    }
                  });
                },
                { threshold: 0.15 }
              );
              io.observe(el);
            }
          }}
        >
          {cards.map((c, i) => (
            <article
              key={i}
              data-testid={`program-card-${i}`}
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(13,13,13,0.08)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  aspectRatio: "4 / 3",
                  backgroundImage: `url(${c.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div style={{ padding: "28px 28px 32px" }}>
                <div
                  className="font-sans-ui"
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#8C6F3F",
                    fontWeight: 600,
                    marginBottom: 14,
                  }}
                >
                  {c.eyebrow}
                </div>
                <h3
                  className="font-serif-display"
                  style={{
                    fontSize: 22,
                    margin: 0,
                    lineHeight: 1.3,
                    fontWeight: 500,
                    letterSpacing: "-0.005em",
                  }}
                >
                  {c.title}
                </h3>
                <p
                  className="font-sans-ui"
                  style={{
                    fontSize: 15,
                    lineHeight: 1.65,
                    color: "rgba(13,13,13,0.65)",
                    marginTop: 14,
                    marginBottom: 0,
                  }}
                >
                  {c.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
