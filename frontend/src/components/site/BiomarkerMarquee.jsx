import useReveal from "../../hooks/useReveal";

/**
 * Scrolling marquee of cluster names and biomarker phrases.
 * Visual energy break between sections.
 */
const items = [
  { label: "Cluster", text: "Gut & Microbiome" },
  { label: "Cluster", text: "Metabolic Stability" },
  { label: "Cluster", text: "Hormonal Balance" },
  { label: "Marker", text: "ApoB · hsCRP · Fasting Insulin" },
  { label: "Cluster", text: "Cognitive Focus" },
  { label: "Cluster", text: "Sleep & Circadian" },
  { label: "Marker", text: "HRV · VO₂ Max · Pace of Aging" },
  { label: "Cluster", text: "Aging Biology" },
  { label: "Cluster", text: "Cardiovascular Foundation" },
  { label: "Marker", text: "Lp(a) · HOMA-IR · Free T3" },
];

export default function BiomarkerMarquee() {
  const ref = useReveal();
  const all = [...items, ...items]; // duplicate for seamless loop

  return (
    <div
      ref={ref}
      data-testid="biomarker-marquee"
      className="sc-reveal"
      style={{ backgroundColor: "#0D0D0D" }}
    >
      <div className="sc-marquee">
        <div className="sc-marquee-track">
          {all.map((it, i) => (
            <span key={i} className="sc-marquee-item">
              <span className="accent">{it.label}</span>
              {it.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
