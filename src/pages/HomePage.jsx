import React from "react";
import HeroBanner from "../components/HeroOne";
import Service from "../components/Service";
import About from "../components/About";
import Faq from "../components/Fqa";
import Location from "../components/Location";
import Pricing from "../components/Pricing";
import FooterOne from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <Service />
      <Pricing />
      <Location />
      <About />
      <Faq />
      <FooterOne />
    </>
  );
};
export default HomePage;
