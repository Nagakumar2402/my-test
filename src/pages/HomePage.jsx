import React from "react";
import HeroBanner from "../components/HeroOne";
import Faq from "../components/Fqa";
import Pricing from "../components/Pricing";
import FooterOne from "../components/Footer";
import Events from "../components/Events";
import homeVariants from "../utils/homeVariant";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.div
      variants={homeVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <HeroBanner />
      <Events />
      <Pricing />
      <Faq />
      <FooterOne />
    </motion.div>
  );
};
export default HomePage;
