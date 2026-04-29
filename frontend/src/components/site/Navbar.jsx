import { useEffect, useState } from "react";

const APPLY_URL = "#apply"; // placeholder — to be replaced by user

const DOCTOR_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Founding Network", href: "#founding-network" },
  { label: "FAQ", href: "#faq" },
  { label: "Apply", href: APPLY_URL },
];

const PATIENT_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Your Longevity Score", href: "#score" },
  { label: "Find a Specialist", href: "#find" },
  { label: "Programs", href: "#programs" },
  { label: "Get Started", href: "#start" },
];

export default function Navbar({ audience, setAudience }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = audience === "doctors" ? DOCTOR_LINKS : PATIENT_LINKS;

  return (
    <header
      data-testid="site-navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background-color 300ms ease, border-color 300ms ease",
        backgroundColor: scrolled ? "#15243C" : "transparent",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.1)"
          : "1px solid transparent",
      }}
    >
      {/* Top bar */}
      <div
        className="sc-container"
        style={{
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          position: "relative",
        }}
      >
        <a
          href="#top"
          data-testid="nav-wordmark"
          className="font-serif-display"
          style={{
            fontSize: 18,
            color: "#FFFFFF",
            textDecoration: "none",
            letterSpacing: "-0.005em",
          }}
        >
          Supercore Longevity
        </a>

        <div
          className="sc-pill"
          data-testid="audience-switcher"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <button
            type="button"
            data-testid="audience-doctors-btn"
            className={audience === "doctors" ? "active" : ""}
            onClick={() => setAudience("doctors")}
          >
            For Doctors
          </button>
          <button
            type="button"
            data-testid="audience-patients-btn"
            className={audience === "patients" ? "active" : ""}
            onClick={() => setAudience("patients")}
          >
            For Patients
          </button>
        </div>

        <span aria-hidden style={{ width: 1 }} />
      </div>

      {/* Secondary nav */}
      <nav
        data-testid="secondary-nav"
        style={{
          height: 44,
          backgroundColor: "#15243C",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div
          className="sc-container sc-no-scrollbar"
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            gap: 40,
            overflowX: "auto",
          }}
        >
          {links.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              data-testid={`secondary-nav-link-${i}`}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 13,
                color: i === 0 ? "#DAFF6B" : "rgba(255,255,255,0.65)",
                textDecoration: "none",
                whiteSpace: "nowrap",
                transition: "color 200ms ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color =
                  i === 0 ? "#DAFF6B" : "rgba(255,255,255,0.65)")
              }
            >
              {l.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
