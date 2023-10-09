import React, { useEffect, useState } from "react";

import { Route, Routes, useLocation } from "react-router-dom";
import { Loader, Navbar } from "./components/index";
import HomePage from "./pages/HomePage";
import Location from "./pages/Location";

import About from "./pages/About";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import icon from "./assets/images/whatsApp.jpeg";
import mp3 from "./assets/whatsapp-notification.mp3";
import { AnimatePresence } from "framer-motion";
import Trams from "./components/Trams";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const location = useLocation();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    AOS.init({
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      animatedClassName: "aos-animate",
      disable: false,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);
  return (
    <AnimatePresence mode="wait">
      <div className=" max-w-screen">
        <Navbar />
        {loader ? (
          <Loader />
        ) : (
          <>
            <Routes location={location} key={location.pathname}>
              <Route path="my-test/" element={<HomePage />} />
              <Route path="my-test/about" element={<About />} />
              <Route path="my-test/location" element={<Location />} />
              <Route path="my-test/trams" element={<Trams />} />
            </Routes>

            <FloatingWhatsApp
              phoneNumber="+919971371115"
              accountName="Zootopia - The Funyard"
              allowEsc
              allowClickAway
              notification
              notificationSoundSrc={mp3}
              notificationSound={true}
              avatar={icon}
            />
          </>
        )}
      </div>
    </AnimatePresence>
  );
};

export default App;
