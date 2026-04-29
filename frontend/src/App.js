import { useState } from "react";
import "@/App.css";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import QuietFrustration from "@/components/site/QuietFrustration";
import WhatSupercoreIs from "@/components/site/WhatSupercoreIs";
import WhatThisChanges from "@/components/site/WhatThisChanges";
import Clusters from "@/components/site/Clusters";
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
          <QuietFrustration />
          <WhatSupercoreIs />
          <WhatThisChanges />
          <Clusters />
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
