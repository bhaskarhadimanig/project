import useReveal from "../../hooks/useReveal";

const APPLY_URL = "#apply";

export default function MovementStatement() {
  const ref = useReveal({ threshold: 0.15 });

  return (
    <section
      id="apply"
      data-testid="section-movement"
      style={{
        position: "relative",
        background: "#0A1628",
        padding: "120px 0 140px",
      }}
    >
      <div className="sc-container" style={{ position: "relative" }}>
        <article
          ref={ref}
          className="sc-reveal sc-letter-card"
          data-testid="movement-letter"
          style={{
            position: "relative",
            borderRadius: 24,
            overflow: "hidden",
            background:
              "linear-gradient(135deg, #E5EBF7 0%, #B8D0F2 45%, #8FB5EE 100%)",
            color: "#0A1628",
            padding: "92px clamp(40px, 7vw, 120px) 80px",
            boxShadow:
              "0 60px 140px -40px rgba(37,99,235,0.55), 0 0 0 1px rgba(255,255,255,0.06) inset",
          }}
        >
          {/* Subtle top-left brand mark / eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 64,
              fontFamily: "Inter, sans-serif",
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 700,
              color: "rgba(10,22,40,0.55)",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 999,
                background: "#0A1628",
                boxShadow: "0 0 0 4px rgba(218,255,107,0.45)",
              }}
              aria-hidden="true"
            />
            A Letter to the Founding Practitioners
          </div>

          {/* Body — flowing letter copy */}
          <div
            className="font-serif-display"
            style={{
              fontSize: "clamp(19px, 1.9vw, 30px)",
              lineHeight: 1.5,
              color: "#0A1628",
              fontWeight: 500,
              letterSpacing: "-0.018em",
              maxWidth: 1100,
            }}
          >
            <p style={{ margin: 0 }}>
              India has over 2 million practitioners. Almost none of them
              practise with a longevity architecture — not because they lack
              the depth. Many already have it. No one ever built the system
              that lets them.
            </p>
            <p style={{ margin: "28px 0 0" }}>
              Supercore is that system. Built with practitioners, not around
              them. Your protocols stay yours. Your medicine stays yours. Your
              work, finally, stays{" "}
              <em
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                visible
              </em>
              .
            </p>
            <p
              data-testid="movement-highlight"
              className="sc-letter-closer"
              style={{
                margin: "40px 0 0",
                fontFamily: "'Instrument Serif', serif",
                fontStyle: "italic",
                fontSize: "clamp(27px, 2.9vw, 45px)",
                lineHeight: 1.15,
                fontWeight: 400,
                color: "#0A1628",
                letterSpacing: "-0.02em",
              }}
            >
              The first 50 names will define the next decade of longevity
              medicine in India.
            </p>
            <p
              style={{
                margin: "32px 0 0",
                fontSize: "clamp(16px, 1.3vw, 19px)",
                fontWeight: 500,
              }}
            >
              To your work,
            </p>
          </div>

          {/* Signature */}
          <div style={{ marginTop: 72 }}>
            <div
              className="sc-signature"
              data-testid="movement-signature"
              style={{
                fontFamily: "'Italianno', 'Instrument Serif', cursive",
                fontSize: "clamp(36px, 3.4vw, 52px)",
                color: "#0A1628",
                fontWeight: 400,
                lineHeight: 1,
                letterSpacing: "0.005em",
                transform: "rotate(-1.5deg)",
                transformOrigin: "left bottom",
                display: "inline-block",
              }}
            >
              The Supercore Team
            </div>
            <div
              style={{
                marginTop: 22,
                fontFamily: "Inter, sans-serif",
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(10,22,40,0.6)",
                fontWeight: 700,
              }}
            >
              Founders &middot; Supercore Longevity
            </div>
          </div>

          {/* CTA row */}
          <div
            style={{
              marginTop: 72,
              paddingTop: 36,
              borderTop: "1px solid rgba(10,22,40,0.18)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 28,
            }}
          >
            <a
              href={APPLY_URL}
              data-testid="movement-cta-apply"
              className="sc-letter-cta"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 14,
                padding: "20px 30px",
                borderRadius: 999,
                background: "#0A1628",
                color: "#FFFFFF",
                fontFamily: "Inter, sans-serif",
                fontSize: 15,
                fontWeight: 700,
                textDecoration: "none",
                letterSpacing: "-0.005em",
                transition:
                  "transform 300ms cubic-bezier(.2,.8,.2,1), box-shadow 300ms ease, background-color 300ms ease",
                boxShadow: "0 18px 40px -12px rgba(10,22,40,0.45)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 26px 60px -12px rgba(10,22,40,0.55)";
                e.currentTarget.style.backgroundColor = "#0F1E36";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 18px 40px -12px rgba(10,22,40,0.45)";
                e.currentTarget.style.backgroundColor = "#0A1628";
              }}
            >
              Join the Founding Network
              <span
                aria-hidden="true"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 26,
                  height: 26,
                  borderRadius: 999,
                  background: "#DAFF6B",
                  color: "#0A1628",
                  fontSize: 13,
                  fontWeight: 800,
                }}
              >
                →
              </span>
            </a>

            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(10,22,40,0.55)",
                fontWeight: 700,
              }}
            >
              Limited &middot; 50 Founding Seats
            </span>
          </div>
        </article>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .sc-letter-card {
            padding: 64px 30px 56px !important;
            border-radius: 18px !important;
          }
          .sc-letter-closer {
            line-height: 1.18 !important;
          }
        }
      `}</style>
    </section>
  );
}
