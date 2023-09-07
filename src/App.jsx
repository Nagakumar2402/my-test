import React from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroOne";

import Service from "./components/Service";
import About from "./components/About";
import { Faq } from "./components/Fqa";
import { Pricing } from "./components/Pricing";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <Service />
      <About />
      <Faq />
      <Pricing />
    </div>
  );
};

export default App;
