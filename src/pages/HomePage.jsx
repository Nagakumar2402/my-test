import React, { useEffect } from "react";
import {
  HeroBanner,
  Faq,
  Pricing,
  FooterOne,
  Events,
  Entry,
} from "../components/index";
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
      <Entry />
      <Events />
      <Pricing />
      <Faq />
      <FooterOne />
    </motion.div>
  );
};
export default HomePage;
