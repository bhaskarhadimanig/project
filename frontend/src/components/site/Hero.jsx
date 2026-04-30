import useReveal from "../../hooks/useReveal";

const APPLY_URL = "#apply";
// Premium dark editorial portrait — confident, contemplative
const DOCTOR_IMG =
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1100&q=90";

/**
 * Tablet/phone-style device mockup with doctor portrait inside
 * and a floating "Active Program" card overlapping bottom-right.
 */
function DeviceMockup() {
  return (
    <div
      data-testid="hero-device-mockup"
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 384,
        margin: "0 auto",
        aspectRatio: "9 / 13",
      }}
    >
      {/* Ambient orange glow behind device */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: "-20%",
          background:
            "radial-gradient(ellipse at center, rgba(218,255,107,0.32) 0%, rgba(218,255,107,0.10) 35%, rgba(15,14,12,0) 60%)",
          filter: "blur(20px)",
          zIndex: 0,
        }}
      />

      {/* Device frame */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 36,
          padding: 2,
          background:
            "linear-gradient(160deg, rgba(218,255,107,0.55) 0%, rgba(218,255,107,0.12) 35%, rgba(255,138,92,0.4) 70%, rgba(218,255,107,0.18) 100%)",
          boxShadow:
            "0 40px 100px rgba(0,0,0,0.55), 0 0 0 1px rgba(218,255,107,0.08)",
          zIndex: 1,
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            borderRadius: 34,
            background: "#0A1628",
            overflow: "hidden",
          }}
        >
          {/* Doctor portrait */}
          <img
            src={DOCTOR_IMG}
            alt="Founding specialist on Supercore"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 30%",
              filter: "saturate(1.05) contrast(1.05)",
            }}
          />

          {/* Tonal overlay */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(10,9,8,0.5) 0%, rgba(10,9,8,0.1) 30%, rgba(10,9,8,0.55) 100%)",
            }}
          />

          {/* Top label */}
          <div
            style={{
              position: "absolute",
              top: 22,
              left: 22,
              display: "flex",
              alignItems: "center",
              gap: 10,
              zIndex: 2,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#DAFF6B",
                boxShadow: "0 0 12px rgba(218,255,107,0.9)",
              }}
            />
            <span
              className="font-sans-ui"
              style={{
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#DAFF6B",
                fontWeight: 700,
              }}
            >
              Supercore
            </span>
          </div>

          {/* Bottom-left identity badge on portrait */}
          <div
            style={{
              position: "absolute",
              left: 22,
              bottom: 22,
              right: 200,
              zIndex: 2,
            }}
          >
            <div
              className="font-sans-ui"
              style={{
                fontSize: 10,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.65)",
                fontWeight: 600,
                marginBottom: 6,
              }}
            >
              Founding Specialist
            </div>
            <div
              className="font-serif-display"
              style={{
                fontSize: 20,
                color: "#FFFFFF",
                lineHeight: 1.2,
                fontWeight: 500,
                letterSpacing: "-0.01em",
              }}
            >
              Dr. Arjun Shah
            </div>
            <div
              className="font-sans-ui"
              style={{
                fontSize: 11,
                color: "rgba(255,255,255,0.55)",
                marginTop: 4,
                letterSpacing: "0.04em",
              }}
            >
              Functional Medicine · Mumbai
            </div>
          </div>
        </div>
      </div>

      {/* Floating "Active Program" card — smaller, repositioned to not overlap face */}
      <div
        data-testid="program-card-floating"
        style={{
          position: "absolute",
          right: "-14%",
          bottom: "-6%",
          width: "58%",
          maxWidth: 224,
          background: "#15243C",
          border: "1px solid rgba(218,255,107,0.32)",
          borderRadius: 18,
          padding: 18,
          boxShadow:
            "0 24px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(218,255,107,0.05)",
          zIndex: 3,
          backdropFilter: "blur(8px)",
          transform: "rotate(2deg)",
        }}
      >
        <div
          className="font-sans-ui"
          style={{
            fontSize: 9,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#DAFF6B",
            fontWeight: 700,
            marginBottom: 10,
          }}
        >
          Active Program
        </div>
        <div
          className="font-serif-display"
          style={{
            fontSize: 18,
            color: "#FFFFFF",
            lineHeight: 1.2,
            margin: 0,
            fontWeight: 500,
            letterSpacing: "-0.01em",
          }}
        >
          Core Longevity
          <br />
          Protocol
        </div>

        <div
          style={{
            marginTop: 12,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            className="font-sans-ui"
            style={{
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: "0.16em",
              color: "#DAFF6B",
              border: "1px solid rgba(218,255,107,0.5)",
              borderRadius: 5,
              padding: "4px 7px",
            }}
          >
            12 WEEKS
          </span>
          <span
            className="font-sans-ui"
            style={{
              fontSize: 11,
              color: "rgba(255,255,255,0.78)",
              fontWeight: 500,
            }}
          >
            Dr. Arjun Shah
          </span>
        </div>

        <div
          className="font-sans-ui"
          style={{
            marginTop: 14,
            fontSize: 8.5,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.5)",
            fontWeight: 600,
          }}
        >
          Cluster Score · 12W trajectory
        </div>

        {/* Mini chart */}
        <svg
          viewBox="0 0 220 70"
          width="100%"
          height="48"
          style={{ marginTop: 6, display: "block" }}
        >
          <defs>
            <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#DAFF6B" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#DAFF6B" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line
            x1="0"
            y1="14"
            x2="220"
            y2="14"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="1"
            strokeDasharray="3 4"
          />
          <text
            x="218"
            y="11"
            textAnchor="end"
            fontSize="8"
            fill="rgba(255,255,255,0.55)"
            fontFamily="Inter, sans-serif"
            letterSpacing="1.2"
          >
            TARGET
          </text>
          <path
            d="M0,62 C40,58 70,52 100,42 S160,24 220,18 L220,70 L0,70 Z"
            fill="url(#chartFill)"
          />
          <path
            d="M0,62 C40,58 70,52 100,42 S160,24 220,18"
            stroke="#DAFF6B"
            strokeWidth="1.6"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="220" cy="18" r="3" fill="#DAFF6B" />
        </svg>

        <div
          style={{
            marginTop: 10,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            className="font-sans-ui"
            style={{
              fontSize: 10,
              color: "#7AD896",
              fontWeight: 600,
              letterSpacing: "0.04em",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#7AD896",
                boxShadow: "0 0 8px rgba(122,216,150,0.6)",
              }}
            />
            On Track
          </div>
          <div
            className="font-sans-ui"
            style={{
              fontSize: 10,
              color: "rgba(255,255,255,0.6)",
              fontWeight: 500,
            }}
          >
            Week 7 of 12
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const ref = useReveal();
  return (
    <section
      id="top"
      data-testid="section-hero"
      className="sc-on-dark"
      style={{
        minHeight: "100vh",
        position: "relative",
        backgroundColor: "#0A1628",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        paddingTop: 140,
        paddingBottom: 100,
      }}
    >
      {/* Atmospheric glows */}
      <div className="sc-hero-glow" />

      <div
        className="sc-container"
        style={{ width: "100%", position: "relative", zIndex: 3 }}
      >
        <div
          ref={ref}
          className="sc-reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.05fr) minmax(0, 1fr)",
            gap: 80,
            alignItems: "center",
          }}
          data-testid="hero-grid"
        >
          {/* LEFT — content */}
          <div style={{ maxWidth: 640 }}>
            <h1
              className="font-serif-display"
              style={{
                color: "#FFFFFF",
              fontSize: "clamp(27px, 4vw, 51px)",
                lineHeight: 1.04,
                margin: 0,
                fontWeight: 500,
                letterSpacing: "-0.025em",
              }}
            >
              Longevity medicine
              <br />
              is being built{" "}
              <em
                style={{
                  color: "#DAFF6B",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                right now
              </em>
              .
              <br />
              By specialists like you.
            </h1>

            <p
              className="font-sans-ui"
              style={{
                fontSize: 19,
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.65,
                maxWidth: 540,
                marginTop: 32,
                marginBottom: 0,
                fontWeight: 400,
              }}
            >
              The infrastructure to practise it — and prove it — hasn't existed.
              Until now.
            </p>

            <div
              style={{
                marginTop: 40,
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <a href={APPLY_URL} data-testid="hero-cta-apply" className="sc-btn-yellow">
                Join the Founding Network
              </a>
            </div>
          </div>

          {/* RIGHT — device mockup */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <DeviceMockup />
          </div>
        </div>
      </div>

      {/* Attribution */}
      <div
        className="font-sans-ui"
        style={{
          position: "absolute",
          bottom: 28,
          left: 80,
          right: 80,
          fontSize: 15,
          color: "rgba(255,255,255,0.65)",
          maxWidth: 760,
          lineHeight: 1.55,
          zIndex: 3,
          letterSpacing: "0.01em",
          fontWeight: 400,
        }}
      >
        Shaped through conversations with functional medicine and longevity
        practitioners across India, Europe, and the US.
      </div>

      <style>{`
        @media (max-width: 1000px) {
          [data-testid="hero-grid"] {
            grid-template-columns: 1fr !important;
            gap: 64px !important;
          }
          [data-testid="hero-device-mockup"] {
            max-width: 380px !important;
          }
        }
        @media (max-width: 768px) {
          [data-testid="section-hero"] {
            padding-top: 120px !important;
            padding-bottom: 80px !important;
          }
        }
      `}</style>
    </section>
  );
}
