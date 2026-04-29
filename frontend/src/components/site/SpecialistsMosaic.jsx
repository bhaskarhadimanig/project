import useReveal from "../../hooks/useReveal";

const tiles = [
  {
    img: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=900&q=80",
    role: "Functional Medicine GP",
    location: "Mumbai",
    span: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?auto=format&fit=crop&w=1200&q=80",
    role: "Hormonal & Skin Cluster",
    location: "Bengaluru",
    span: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80",
    role: "Movement & Recovery",
    location: "Delhi",
    span: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80",
    role: "Metabolic Specialist",
    location: "Chennai",
    span: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=80",
    role: "Aging Biology Lead",
    location: "Hyderabad",
    span: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&w=900&q=80",
    role: "Sleep & Circadian",
    location: "Pune",
    span: 1,
  },
];

export default function SpecialistsMosaic() {
  const ref = useReveal();
  return (
    <section
      data-testid="section-specialists-mosaic"
      className="sc-section"
      style={{ backgroundColor: "#0D0D0D" }}
    >
      <div className="sc-container">
        <div
          ref={ref}
          className="sc-reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
            gap: 64,
            alignItems: "end",
            marginBottom: 56,
          }}
        >
          <div>
            <div className="sc-eyebrow" style={{ marginBottom: 16 }}>
              The Founding Cohort
            </div>
            <h2
              className="font-serif-display"
              style={{
                fontSize: "clamp(32px, 5vw, 52px)",
                color: "#F5F0E8",
                margin: 0,
                lineHeight: 1.1,
                fontWeight: 500,
                letterSpacing: "-0.015em",
              }}
            >
              The first names being{" "}
              <em style={{ color: "#C9A96E", fontStyle: "italic" }}>
                etched in
              </em>
              .
            </h2>
          </div>
          <p
            className="font-sans-ui"
            style={{
              fontSize: 17,
              lineHeight: 1.75,
              color: "rgba(245,240,232,0.7)",
              margin: 0,
              maxWidth: 520,
            }}
          >
            Specialists across India are joining as founding practitioners —
            each bringing the cluster expertise their patients have always
            needed, now finally hosted on infrastructure that respects it.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
          }}
          className="sc-mosaic"
        >
          {tiles.map((t, i) => (
            <a
              key={i}
              href="#apply"
              data-testid={`mosaic-tile-${i}`}
              className="sc-photo"
              style={{
                gridColumn: `span ${t.span}`,
                aspectRatio: t.span === 2 ? "8/5" : "4/5",
                backgroundImage: `url(${t.img})`,
                position: "relative",
                textDecoration: "none",
                transition: "transform 400ms ease",
                display: "block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div className="sc-photo-overlay" />
              <div
                style={{
                  position: "absolute",
                  left: 20,
                  bottom: 20,
                  right: 20,
                  zIndex: 2,
                }}
              >
                <div
                  className="font-sans-ui"
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#C9A96E",
                    fontWeight: 600,
                    marginBottom: 8,
                  }}
                >
                  {t.location}
                </div>
                <div
                  className="font-serif-display"
                  style={{
                    fontSize: 18,
                    color: "#F5F0E8",
                    lineHeight: 1.3,
                    fontWeight: 500,
                  }}
                >
                  {t.role}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div
          style={{
            marginTop: 48,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 24,
            flexWrap: "wrap",
            paddingTop: 32,
            borderTop: "1px solid #2A2A2A",
          }}
        >
          <p
            className="font-sans-ui"
            style={{
              fontSize: 14,
              color: "rgba(245,240,232,0.55)",
              margin: 0,
              fontStyle: "italic",
              maxWidth: 600,
              lineHeight: 1.6,
            }}
          >
            Tiles are illustrative of cluster types and cities in the founding
            wave. Specialist names are credentialed and surfaced after
            onboarding.
          </p>
          <a href="#apply" data-testid="mosaic-cta" className="sc-btn sc-btn-sm">
            Become a founding specialist →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          [data-testid="section-specialists-mosaic"] .sc-reveal {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          [data-testid="section-specialists-mosaic"] .sc-mosaic {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          [data-testid="section-specialists-mosaic"] .sc-mosaic .sc-photo {
            grid-column: span 1 !important;
            aspect-ratio: 4/5 !important;
          }
        }
      `}</style>
    </section>
  );
}
