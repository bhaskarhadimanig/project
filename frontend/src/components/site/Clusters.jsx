import useReveal from "../../hooks/useReveal";

const groups = [
  {
    label: "Amplifiers",
    desc: "What patients feel and want to optimise",
    chips: [
      "Cognitive Focus",
      "Gut & Microbiome",
      "Skin & Aesthetic Health",
      "Body Composition",
      "Energy & Recovery",
      "Movement Efficiency",
      "Hormonal Balance",
    ],
  },
  {
    label: "Core Systems",
    desc: "What drives the aging trajectory",
    chips: [
      "Metabolic Stability",
      "Cardiovascular Foundation",
      "Immune & Inflammation",
      "Aging Biology",
      "Sleep & Circadian",
      "Cognitive Baseline",
      "Structural Integrity",
      "Behavioural & Emotional",
      "Environmental Load",
    ],
  },
  {
    label: "Condition-Based",
    desc: "Activated when clinical risk appears",
    chips: [
      "Cardio-Metabolic Disease",
      "Autoimmune & Inflammatory",
      "Neurodegenerative",
      "Endocrine & Hormonal",
      "GI Disease",
      "Oncology Risk",
      "Clinical Sleep Disorders",
      "Musculoskeletal Degeneration",
    ],
  },
];

export default function Clusters() {
  const ref = useReveal();
  return (
    <section
      id="clusters"
      data-testid="section-clusters"
      className="sc-section"
      style={{ backgroundColor: "#0F0E0C" }}
    >
      <div className="sc-container">
        <div ref={ref} className="sc-reveal">
          <div className="sc-eyebrow" style={{ marginBottom: 16 }}>
            Your Clusters
          </div>
          <h2
            className="font-serif-display"
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              color: "#F4ECE0",
              margin: 0,
              lineHeight: 1.15,
              fontWeight: 500,
              letterSpacing: "-0.01em",
              maxWidth: 820,
            }}
          >
            You probably already practise some of these.
          </h2>
          <p
            className="font-sans-ui"
            style={{
              fontSize: 18,
              color: "rgba(245,240,232,0.65)",
              marginTop: 16,
              marginBottom: 0,
              lineHeight: 1.6,
              maxWidth: 720,
            }}
          >
            24 clusters. Three layers. You take the ones that match the work
            you already do.
          </p>

          <div
            style={{
              marginTop: 64,
              display: "flex",
              flexDirection: "column",
              gap: 56,
            }}
          >
            {groups.map((g) => (
              <div key={g.label} data-testid={`cluster-group-${g.label}`}>
                <div className="sc-eyebrow">{g.label}</div>
                <div
                  className="font-sans-ui"
                  style={{
                    fontSize: 14,
                    color: "rgba(245,240,232,0.5)",
                    marginTop: 4,
                    marginBottom: 20,
                    fontWeight: 400,
                  }}
                >
                  {g.desc}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 8,
                  }}
                >
                  {g.chips.map((c) => (
                    <span
                      key={c}
                      className="sc-chip"
                      data-testid={`cluster-chip-${c}`}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p
            className="font-sans-ui"
            style={{
              fontSize: 14,
              fontStyle: "italic",
              color: "rgba(245,240,232,0.45)",
              textAlign: "center",
              marginTop: 56,
              marginBottom: 0,
              lineHeight: 1.7,
              maxWidth: 720,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Your program lives inside the clusters you select. Patients with
            active matching clusters are surfaced to you. Your work is scored
            where it belongs — in your own domain.
          </p>
        </div>
      </div>
    </section>
  );
}
