import { useState } from "react";
import "@/App.css";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import FoundingStats from "@/components/site/FoundingStats";
import QuietFrustration from "@/components/site/QuietFrustration";
import WhatSupercoreIs from "@/components/site/WhatSupercoreIs";
import WhatThisChanges from "@/components/site/WhatThisChanges";
import BiomarkerMarquee from "@/components/site/BiomarkerMarquee";
import Clusters from "@/components/site/Clusters";
import ProgramShowcase from "@/components/site/ProgramShowcase";
import SpecialistsMosaic from "@/components/site/SpecialistsMosaic";
import FirstNamed from "@/components/site/FirstNamed";
import MovementStatement from "@/components/site/MovementStatement";
import Footer from "@/components/site/Footer";
import PatientView from "@/components/site/PatientView";

function App() {
  const [audience, setAudience] = useState("doctors");

  return (
    <div className="App" data-testid="app-root">
      <Navbar audience={audience} setAudience={setAudience} />

      {audience === "doctors" ? (
        <main data-testid="doctor-page">
          <Hero />
          <FoundingStats />
          <QuietFrustration />
          <WhatSupercoreIs />
          <WhatThisChanges />
          <BiomarkerMarquee />
          <Clusters />
          <ProgramShowcase />
          <SpecialistsMosaic />
          <FirstNamed />
          <MovementStatement />
        </main>
      ) : (
        <main data-testid="patient-page">
          <PatientView />
        </main>
      )}

      <Footer audience={audience} />
    </div>
  );
}

export default App;
