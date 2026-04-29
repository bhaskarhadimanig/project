import useReveal from "../../hooks/useReveal";

/**
 * Stat band — light cream credibility strip after hero.
 * Big serif numbers, small labels, terracotta accent.
 */
const stats = [
  { num: "24", label: "Health clusters", note: "across 3 biological layers" },
  { num: "12-week", label: "Program format", note: "structured, outcome-tracked" },
  { num: "Pan-India", label: "Founding cohort", note: "now onboarding" },
];

export default function FoundingStats() {
  const ref = useReveal();
  return (
    <section
      data-testid="section-founding-stats"
      className="sc-light"
      style={{
        paddingTop: 72,
        paddingBottom: 72,
        borderTop: "1px solid rgba(26,22,18,0.06)",
        borderBottom: "1px solid rgba(26,22,18,0.06)",
      }}
    >
      <div className="sc-container">
        <div
          ref={ref}
          className="sc-reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 48,
            alignItems: "start",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              data-testid={`stat-${i}`}
              style={{
                paddingLeft: i === 0 ? 0 : 32,
                borderLeft:
                  i === 0 ? "none" : "1px solid rgba(26,22,18,0.1)",
              }}
            >
              <div className="sc-stat-num accent">{s.num}</div>
              <div
                className="font-sans-ui"
                style={{
                  fontSize: 14,
                  color: "rgba(26,22,18,0.85)",
                  marginTop: 16,
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                }}
              >
                {s.label}
              </div>
              <div
                className="font-sans-ui"
                style={{
                  fontSize: 13,
                  color: "rgba(26,22,18,0.55)",
                  marginTop: 4,
                  fontWeight: 400,
                }}
              >
                {s.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
