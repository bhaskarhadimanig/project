import useReveal from "../../hooks/useReveal";

const stats = [
  {
    num: "70+",
    label: "years",
    body: "Combined clinical experience behind the platform's design. Built with practitioners, not around them.",
  },
  {
    num: "24",
    label: "clusters",
    body: "Mapped across three biological layers — the most comprehensive longevity architecture available to specialists today.",
  },
  {
    num: "IP",
    sup: "filed",
    label: "proprietary",
    body: "The scoring methodology and biological timeline are proprietary. Your work runs on infrastructure that's built to last.",
  },
  {
    num: "First 50",
    label: "founding cohort",
    body: "Founding access is limited to five specialists per cluster — ensuring depth without competition.",
  },
];

export default function FoundingStats() {
  const ref = useReveal();
  return (
    <section
      data-testid="section-founding-stats"
      className="sc-light"
      style={{
        paddingTop: 104,
        paddingBottom: 104,
        borderTop: "1px solid rgba(10,22,40,0.06)",
        borderBottom: "1px solid rgba(10,22,40,0.06)",
      }}
    >
      <div className="sc-container">
        <div
          ref={ref}
          className="sc-reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 0,
            alignItems: "stretch",
          }}
          data-testid="founding-stats-grid"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              data-testid={`stat-${i}`}
              style={{
                padding: i === 0 ? "0 40px 0 0" : "0 40px",
                borderLeft:
                  i === 0 ? "none" : "1px solid rgba(10,22,40,0.12)",
                display: "flex",
                flexDirection: "column",
                gap: 28,
              }}
              className="sc-stat-col"
            >
              <div>
                <div
                  className="sc-stat-num"
                  style={{ display: "flex", alignItems: "flex-start" }}
                >
                  <span>{s.num}</span>
                  {s.sup && (
                    <span
                      style={{
                        fontSize: "0.32em",
                        marginLeft: 4,
                        marginTop: "0.4em",
                        letterSpacing: "-0.02em",
                        fontWeight: 600,
                      }}
                    >
                      {s.sup}
                    </span>
                  )}
                </div>
                <div
                  className="font-sans-ui"
                  style={{
                    fontSize: 14,
                    color: "rgba(10,22,40,0.75)",
                    marginTop: 18,
                    fontWeight: 500,
                    letterSpacing: "0",
                    textTransform: "lowercase",
                  }}
                >
                  {s.label}
                </div>
              </div>
              <p
                className="font-sans-ui"
                style={{
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: "rgba(10,22,40,0.55)",
                  margin: 0,
                  fontWeight: 400,
                }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          [data-testid="founding-stats-grid"] {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 48px 0 !important;
          }
          .sc-stat-col:nth-child(1),
          .sc-stat-col:nth-child(3) {
            border-left: none !important;
            padding-left: 0 !important;
          }
          .sc-stat-col:nth-child(2),
          .sc-stat-col:nth-child(4) {
            padding-right: 0 !important;
          }
        }
        @media (max-width: 560px) {
          [data-testid="founding-stats-grid"] {
            grid-template-columns: 1fr !important;
          }
          .sc-stat-col {
            border-left: none !important;
            padding: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
