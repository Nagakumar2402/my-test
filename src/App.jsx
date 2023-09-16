import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Location from "./components/Location";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import icon from "./assets/images/whatsApp.jpeg";



const App = () => {
  const [isWhatsappOpen, setIsWhatsappOpen] = React.useState(true);
  const location = useLocation();
  return (
    <div className=" max-w-screen">
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path="my-test/" element={<HomePage />} />
        <Route path="my-test/about" element={<About />} />
        <Route path="my-test/location" element={<Location />} />
        <Route path="my-test/contact" element={<Contact />} />
      </Routes>
      {
        isWhatsappOpen && <FloatingWhatsApp
        phoneNumber="9032161244"
        accountName="Zootopia - The Funyard"
        allowEsc
        allowClickAway
        notification
        notificationSound
        avatar={icon}
        onSubmit={() => setIsWhatsappOpen(false)}
        
        />
      }
     
    </div>
  );
};

export default App;
