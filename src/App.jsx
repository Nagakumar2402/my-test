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
      duration: 1000,
      disable: "mobile",

      easing: "ease-in-out",
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
