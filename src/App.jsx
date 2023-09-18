import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Location from "./pages/Location";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import icon from "./assets/images/whatsApp.jpeg";
import mp3 from "./assets/whatsapp-notification.mp3";
import Loader from "./components/Loader";
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
      {loader ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Routes location={location} key={location.pathname}>
            <Route path="my-test/" element={<HomePage />} />
            <Route path="my-test/about" element={<About />} />
            <Route path="my-test/location" element={<Location />} />
            <Route path="my-test/contact" element={<Contact />} />
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
