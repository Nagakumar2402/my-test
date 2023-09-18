import { motion } from "framer-motion";
import React from "react";
import homeVariants from "../utils/homeVariant";
const Location = () => {
  return (
    <motion.div
      variants={homeVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="relative w-full h-[calc(100vh_-_160px)] mt-28"
    >
      <iframe
        className="absolute w-full h-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.1501360953766!2d77.11891027555484!3d28.41472629393807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d21085fde7471%3A0x762426fce95dbd34!2sZootopia-The%20Funyard!5e0!3m2!1sen!2sin!4v1694936118709!5m2!1sen!2sin"
        width="600"
        height="450"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="Zootopia - The Funyard"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>

      <iframe></iframe>
    </motion.div>
  );
};

export default Location;
