import useReveal from "../../hooks/useReveal";

const tiles = [
  {
    img: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1400&q=85",
    role: "Functional Medicine GP",
    location: "Mumbai",
    cluster: "Multi-cluster",
  },
  {
    img: "https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?auto=format&fit=crop&w=1400&q=85",
    role: "Hormonal & Skin Specialist",
    location: "Bengaluru",
    cluster: "Hormonal · Skin",
  },
  {
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1400&q=85",
    role: "Movement & Recovery",
    location: "Delhi",
    cluster: "Movement · Recovery",
  },
  {
    img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1400&q=85",
    role: "Metabolic Specialist",
    location: "Chennai",
    cluster: "Metabolic Stability",
  },
  {
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1400&q=85",
    role: "Aging Biology Lead",
    location: "Hyderabad",
    cluster: "Aging · Cognitive",
  },
  {
    img: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&w=1400&q=85",
    role: "Sleep & Circadian",
    location: "Pune",
    cluster: "Sleep · Circadian",
  },
];

export default function SpecialistsMosaic() {
  const ref = useReveal();
  return (
    <section
      data-testid="section-specialists-mosaic"
      className="sc-section sc-on-dark"
      style={{ backgroundColor: "#0A1628" }}
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
            marginBottom: 64,
          }}
          data-testid="mosaic-header"
        >
          <div>
            <div className="sc-eyebrow" style={{ marginBottom: 20 }}>
              The Founding Cohort
            </div>
            <h2
              className="font-serif-display"
              style={{
                fontSize: "clamp(38px, 5.4vw, 68px)",
                color: "#FFFFFF",
                margin: 0,
                lineHeight: 1.05,
                fontWeight: 500,
                letterSpacing: "-0.025em",
              }}
            >
              The first names being{" "}
              <em style={{ color: "#DAFF6B", fontStyle: "italic" }}>
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
              color: "rgba(255,255,255,0.7)",
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
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
          }}
          className="sc-mosaic-grid"
        >
          {tiles.map((t, i) => (
            <a
              key={i}
              href="#apply"
              data-testid={`mosaic-tile-${i}`}
              className="sc-photo"
              style={{
                aspectRatio: "4/5",
                backgroundImage: `url(${t.img})`,
                position: "relative",
                textDecoration: "none",
                transition: "transform 500ms ease",
                display: "block",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(15,14,12,0) 30%, rgba(15,14,12,0.92) 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: 22,
                  bottom: 22,
                  right: 22,
                  zIndex: 2,
                }}
              >
                <div
                  className="font-sans-ui"
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#DAFF6B",
                    fontWeight: 600,
                    marginBottom: 10,
                  }}
                >
                  {t.location} · {t.cluster}
                </div>
                <div
                  className="font-serif-display"
                  style={{
                    fontSize: 24,
                    color: "#FFFFFF",
                    lineHeight: 1.2,
                    fontWeight: 500,
                    letterSpacing: "-0.005em",
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
            marginTop: 56,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 24,
            flexWrap: "wrap",
            paddingTop: 32,
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <p
            className="font-sans-ui"
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.45)",
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
          [data-testid="mosaic-header"] {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .sc-mosaic-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 560px) {
          .sc-mosaic-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
