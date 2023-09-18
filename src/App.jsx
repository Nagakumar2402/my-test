import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";

const App = () => {
  const location = useLocation();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="my-test/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
