import {
  Layers,
  Activity,
  LineChart,
  Stethoscope,
  TestTube,
  Dna,
  Sparkles,
  CircleDot,
} from "lucide-react";

const items = [
  { icon: Layers, text: "24 Biological Clusters Mapped" },
  { icon: Activity, text: "Longevity Programs" },
  { icon: LineChart, text: "Biological Age, Measured & Moving" },
  { icon: Stethoscope, text: "Built With Longevity Practitioners" },
  { icon: TestTube, text: "300+ Biomarkers Analysed" },
  { icon: Dna, text: "Functional Medicine" },
  { icon: Sparkles, text: "Pioneers in Longevity" },
  { icon: CircleDot, text: "Core, Amplifier & Condition Clusters" },
];

export default function HeroMarquee() {
  // Duplicate the list so the loop is seamless
  const all = [...items, ...items];

  return (
    <div
      data-testid="hero-marquee"
      style={{
        backgroundColor: "#0A1628",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "20px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* edge fade masks */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 2,
          background:
            "linear-gradient(90deg, #0A1628 0%, rgba(10,9,8,0) 8%, rgba(10,9,8,0) 92%, #0A1628 100%)",
        }}
      />

      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "sc-hero-scroll 50s linear infinite",
          willChange: "transform",
        }}
      >
        {all.map((it, i) => {
          const Icon = it.icon;
          return (
            <div
              key={i}
              data-testid={`hero-marquee-item-${i % items.length}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "0 32px",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              <Icon
                size={18}
                strokeWidth={1.6}
                style={{
                  color: "#DAFF6B",
                  flexShrink: 0,
                }}
              />
              <span
                className="font-sans-ui"
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                {it.text}
              </span>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes sc-hero-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          [data-testid="hero-marquee"] > div:last-of-type {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
