import useReveal from "../../hooks/useReveal";

const APPLY_URL = "#apply";

export default function PatientView() {
  const ref = useReveal();
  return (
    <section
      data-testid="section-patient-placeholder"
      style={{
        minHeight: "calc(100vh - 116px)",
        backgroundColor: "#0D0D0D",
        display: "flex",
        alignItems: "center",
        paddingTop: 140,
        paddingBottom: 120,
      }}
    >
      <div className="sc-container" style={{ width: "100%" }}>
        <div
          ref={ref}
          className="sc-reveal"
          style={{
            maxWidth: 720,
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
          }}
        >
          <div className="sc-eyebrow" style={{ marginBottom: 24 }}>
            For Patients — Coming Soon
          </div>

          <h1
            className="font-serif-display"
            style={{
              color: "#F5F0E8",
              fontSize: "clamp(40px, 6vw, 72px)",
              lineHeight: 1.12,
              margin: 0,
              fontWeight: 500,
              letterSpacing: "-0.015em",
            }}
          >
            A new way to{" "}
            <em style={{ color: "#C9A96E", fontStyle: "italic" }}>
              measure
            </em>{" "}
            and lengthen your healthspan.
          </h1>

          <p
            className="font-sans-ui"
            style={{
              fontSize: 18,
              color: "rgba(245,240,232,0.72)",
              lineHeight: 1.75,
              marginTop: 28,
              marginBottom: 0,
              fontWeight: 400,
            }}
          >
            Your longevity score, your biological timeline, and a curated
            network of specialist physicians — built around the clusters that
            shape how you age. The patient experience is launching with our
            founding cohort.
          </p>

          <div
            style={{
              marginTop: 48,
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href={APPLY_URL}
              data-testid="patient-cta-waitlist"
              className="sc-btn"
            >
              Join the Waitlist
            </a>
          </div>

          <p
            className="font-sans-ui"
            style={{
              fontSize: 13,
              color: "rgba(245,240,232,0.4)",
              marginTop: 56,
              fontStyle: "italic",
              lineHeight: 1.7,
            }}
          >
            Looking for the doctor view? Use the audience switcher above.
          </p>
        </div>
      </div>
    </section>
  );
}
