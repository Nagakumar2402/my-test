import React from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroOne";

import Service from "./components/Service";
import About from "./components/About";
import { Faq } from "./components/Fqa";
import { Location } from "./components/Location";
import { Pricing } from "./components/Pricing";
import { FooterOne } from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <Service />
      <About />
      <Pricing />
      <Faq />
      <Location />
      <FooterOne />
    </div>
  );
};

export default App;
