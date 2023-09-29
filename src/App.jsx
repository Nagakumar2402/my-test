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

const App = () => {
  const location = useLocation();
  const [loader, setLoader] = useState(true);

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
            </Routes>

            <FloatingWhatsApp
              phoneNumber="+919971371115"
              accountName="Zootopia - The Funyard"
              allowEsc
              allowClickAway
              notification
              notificationSoundSrc={mp3}
              avatar={icon}
            />
          </>
        )}
      </div>
    </AnimatePresence>
  );
};

export default App;
