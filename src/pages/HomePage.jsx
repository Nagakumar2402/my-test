import React from "react";
import HeroBanner from "../components/HeroOne";
import Faq from "../components/Fqa";
import Pricing from "../components/Pricing";
import FooterOne from "../components/Footer";
import Events from "../components/Events";




const HomePage = () => {
  return (
    <>
      <HeroBanner />
     <Events/>
      <Pricing />
      <Faq />
      <FooterOne />
    </>
  );
};
export default HomePage;
