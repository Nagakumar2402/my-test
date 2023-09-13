import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Location from "./components/Location";
import Contact from "./pages/Contact";
import About from "./pages/About";

const App = () => {
  const location = useLocation();
  return (
    <div>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path="my-test/" element={<HomePage />} />
        <Route path="my-test/about" element={<About />} />
        <Route path="my-test/location" element={<Location />} />
        <Route path="my-test/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
