import { useState } from "react";
import "@/App.css";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import BiomarkerMarquee from "@/components/site/BiomarkerMarquee";
import QuietFrustration from "@/components/site/QuietFrustration";
import WhatSupercoreIs from "@/components/site/WhatSupercoreIs";
import WhatThisChanges from "@/components/site/WhatThisChanges";
import ProgramShowcase from "@/components/site/ProgramShowcase";
import Clusters from "@/components/site/Clusters";
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
          <BiomarkerMarquee />
          <QuietFrustration />
          <WhatSupercoreIs />
          <WhatThisChanges />
          <ProgramShowcase />
          <Clusters />
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
