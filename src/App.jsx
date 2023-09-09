import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Router>
      <div className="bg-[#FFFFDD]">
        <Navbar />
        <Routes>
          <Route path="my-test/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
