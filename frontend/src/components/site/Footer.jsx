const PRIMARY = [
  { label: "Apply", href: "#apply" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const DOCTOR_LEGAL = [
  "Privacy Policy",
  "Terms of Service",
  "Specialist Guidelines & Code of Practice",
  "Cancellation & Refunds",
];

const PATIENT_LEGAL = [
  "Privacy Policy",
  "Terms of Service",
  "Patient Rights",
  "Contact",
];

export default function Footer({ audience }) {
  const legal = audience === "doctors" ? DOCTOR_LEGAL : PATIENT_LEGAL;

  return (
    <footer
      data-testid="site-footer"
      style={{
        backgroundColor: "#0A1628",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        padding: "64px 0",
      }}
    >
      <div className="sc-container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <div
            className="font-serif-display"
            style={{ fontSize: 16, color: "#FFFFFF" }}
          >
            Supercore Longevity
          </div>
          <div
            style={{
              display: "flex",
              gap: 32,
              flexWrap: "wrap",
            }}
          >
            {PRIMARY.map((l) => (
              <a
                key={l.label}
                href={l.href}
                data-testid={`footer-primary-${l.label}`}
                className="font-sans-ui"
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.6)",
                  textDecoration: "none",
                  transition: "color 200ms ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#DAFF6B")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.6)")
                }
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: 48,
            paddingTop: 32,
            borderTop: "1px solid #1F2E47",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
          }}
        >
          <div
            data-testid="footer-legal-row"
            style={{
              display: "flex",
              gap: 24,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {legal.map((l) => (
              <a
                key={l}
                href="#"
                className="font-sans-ui"
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.45)",
                  textDecoration: "none",
                  transition: "color 200ms ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#DAFF6B")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.45)")
                }
              >
                {l}
              </a>
            ))}
          </div>
          <div
            className="font-sans-ui"
            style={{
              fontSize: 12,
              color: "rgba(255,255,255,0.25)",
            }}
          >
            supercorelongevity.com
          </div>
        </div>
      </div>
    </footer>
  );
}
