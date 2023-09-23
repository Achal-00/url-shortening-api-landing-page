import React from "react";
import LandingSection from "./LandingSection/LandingSection";
import MainSection from "./MainSection.jsx/MainSection";
import BoostSection from "./BoostSection/BoostSection";
import Footer from "./Footer/Footer";

export default function App() {
  return (
    <div className="font-custom-font-family">
      <LandingSection />
      <MainSection />
      <BoostSection />
      <Footer />
    </div>
  );
}
