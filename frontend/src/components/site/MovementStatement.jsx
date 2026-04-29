import useReveal from "../../hooks/useReveal";

const APPLY_URL = "#apply";

export default function MovementStatement() {
  const refLeft = useReveal({ threshold: 0.15 });
  const refRight = useReveal({ threshold: 0.2 });

  return (
    <section
      id="apply"
      data-testid="section-movement"
      className="sc-on-dark"
      style={{
        position: "relative",
        background:
          "radial-gradient(ellipse at 80% 30%, rgba(218,255,107,0.10) 0%, rgba(10,22,40,0) 55%), radial-gradient(ellipse at 15% 80%, rgba(37,99,235,0.12) 0%, rgba(10,22,40,0) 55%), #0A1628",
        padding: "140px 0 160px",
        overflow: "hidden",
      }}
    >
      {/* faint grain / noise overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.25,
          mixBlendMode: "overlay",
          background:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
        }}
      />

      <div className="sc-container" style={{ position: "relative" }}>
        <div
          className="sc-movement-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
            gap: 96,
            alignItems: "center",
          }}
        >
          {/* LEFT — tilted founder's note card */}
          <div
            ref={refLeft}
            className="sc-reveal sc-movement-left"
            style={{ perspective: 1600 }}
            data-testid="movement-letter"
          >
            <article
              className="sc-letter-card"
              style={{
                position: "relative",
                background:
                  "linear-gradient(180deg, #FDFBF4 0%, #F7F2E6 100%)",
                color: "#0A1628",
                padding: "56px 56px 48px",
                borderRadius: 10,
                boxShadow:
                  "0 40px 100px -30px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04), 0 30px 60px -25px rgba(37,99,235,0.25)",
                transform: "rotate(-2.2deg) rotateY(4deg)",
                transformOrigin: "center",
                transition: "transform 600ms cubic-bezier(.2,.8,.2,1)",
                maxWidth: 560,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "rotate(-1.4deg) rotateY(2deg) translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "rotate(-2.2deg) rotateY(4deg)";
              }}
            >
              {/* Top lime accent bar */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 6,
                  background:
                    "linear-gradient(90deg, #DAFF6B 0%, #DAFF6B 70%, rgba(218,255,107,0.3) 100%)",
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              />

              {/* Meta header row */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 36,
                  fontFamily: "Inter, sans-serif",
                  fontSize: 10,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  color: "rgba(10,22,40,0.55)",
                }}
              >
                <span>A Letter · Founding Practitioners</span>
                <span
                  style={{
                    display: "inline-block",
                    width: 6,
                    height: 6,
                    borderRadius: 999,
                    background: "#DAFF6B",
                    boxShadow: "0 0 0 3px rgba(218,255,107,0.25)",
                  }}
                />
              </div>

              {/* Body copy — the 5 movement lines as flowing letter */}
              <div
                className="font-serif-display"
                style={{
                  fontSize: 20,
                  lineHeight: 1.55,
                  color: "#0A1628",
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                }}
              >
                <p style={{ margin: 0 }}>India has over 2 million practitioners.</p>
                <p style={{ margin: "14px 0 0" }}>
                  Almost none of them practise with a longevity architecture —
                  not because they lack the depth. Many already have it.
                </p>
                <p style={{ margin: "14px 0 0" }}>
                  No one built the system that lets them.
                </p>
                <p
                  style={{
                    margin: "22px 0 0",
                    fontFamily: "'Instrument Serif', serif",
                    fontStyle: "italic",
                    fontSize: 26,
                    color: "#0A1628",
                    fontWeight: 400,
                  }}
                >
                  So we did.
                </p>
              </div>

              {/* Signature block */}
              <div style={{ marginTop: 44 }}>
                <div
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontStyle: "italic",
                    fontSize: 30,
                    color: "#0A1628",
                    fontWeight: 400,
                    lineHeight: 1,
                    letterSpacing: "-0.01em",
                  }}
                >
                  — The Supercore Team
                </div>
                <div
                  style={{
                    marginTop: 14,
                    fontFamily: "Inter, sans-serif",
                    fontSize: 11,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(10,22,40,0.5)",
                    fontWeight: 700,
                  }}
                >
                  Founders · Supercore Longevity
                </div>
              </div>

              {/* Bottom meta strip */}
              <div
                style={{
                  marginTop: 44,
                  paddingTop: 20,
                  borderTop: "1px solid rgba(10,22,40,0.1)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 10.5,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(10,22,40,0.45)",
                  fontWeight: 700,
                }}
              >
                <span>Supercore · 2026</span>
                <span>For Founding Practitioners</span>
              </div>
            </article>
          </div>

          {/* RIGHT — impact headline + CTA */}
          <div ref={refRight} className="sc-reveal" data-testid="movement-cta">
            <div
              className="sc-eyebrow"
              style={{
                marginBottom: 26,
                color: "#DAFF6B",
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <span
                style={{ width: 28, height: 1, background: "#DAFF6B" }}
                aria-hidden="true"
              />
              The Movement
            </div>

            <h2
              className="font-serif-display"
              style={{
                fontSize: "clamp(42px, 5.6vw, 82px)",
                color: "#FFFFFF",
                margin: 0,
                lineHeight: 1.0,
                fontWeight: 700,
                letterSpacing: "-0.04em",
              }}
            >
              With Supercore,
            </h2>

            {/* Highlighted last line */}
            <h2
              className="font-serif-display sc-hl-line"
              style={{
                fontSize: "clamp(42px, 5.6vw, 82px)",
                margin: "4px 0 0",
                lineHeight: 1.0,
                fontWeight: 400,
                letterSpacing: "-0.03em",
                fontFamily: "'Instrument Serif', serif",
                fontStyle: "italic",
                color: "#0A1628",
                display: "inline-block",
                position: "relative",
                padding: "4px 18px 8px",
                background: "#DAFF6B",
                boxShadow: "0 0 0 1px rgba(218,255,107,0.4), 0 20px 50px -10px rgba(218,255,107,0.35)",
                borderRadius: 4,
              }}
              data-testid="movement-highlight"
            >
              that changes.
            </h2>

            <p
              className="font-sans-ui"
              style={{
                marginTop: 40,
                fontSize: 18,
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.72)",
                maxWidth: 500,
                fontWeight: 400,
              }}
            >
              Five specialists per cluster. A closed founding cohort.
              Applications reviewed in the order received — and only until
              every cluster is seated.
            </p>

            <div style={{ marginTop: 44, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 24 }}>
              <a
                href={APPLY_URL}
                data-testid="movement-cta-apply"
                className="sc-movement-pill"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "22px 34px",
                  borderRadius: 999,
                  background: "#DAFF6B",
                  color: "#0A1628",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 16,
                  fontWeight: 700,
                  letterSpacing: "-0.005em",
                  textDecoration: "none",
                  transition: "transform 300ms cubic-bezier(.2,.8,.2,1), box-shadow 300ms ease",
                  boxShadow: "0 20px 50px -10px rgba(218,255,107,0.45)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow =
                    "0 30px 70px -10px rgba(218,255,107,0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 50px -10px rgba(218,255,107,0.45)";
                }}
              >
                Join the Founding Network
                <span
                  aria-hidden="true"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 28,
                    height: 28,
                    borderRadius: 999,
                    background: "#0A1628",
                    color: "#DAFF6B",
                    fontSize: 14,
                  }}
                >
                  →
                </span>
              </a>

              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.5)",
                  fontWeight: 700,
                }}
              >
                Limited · 50 seats
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .sc-movement-grid {
            grid-template-columns: 1fr !important;
            gap: 72px !important;
          }
          .sc-movement-left {
            display: flex;
            justify-content: center;
          }
          .sc-letter-card {
            transform: rotate(-1.2deg) !important;
          }
        }
        @media (max-width: 640px) {
          .sc-letter-card {
            padding: 40px 30px 34px !important;
          }
        }
      `}</style>
    </section>
  );
}
