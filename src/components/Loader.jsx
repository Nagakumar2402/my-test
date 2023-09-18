import React from "react";
import loader from "../assets/images/loader/fox.gif";
const Loader = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen relatives">
      <div className="absolute z-10 flex flex-col items-center justify-center">
        <img src={loader} alt="loader" className="w-40" />
        <span class="loader">Zootopia - The Funyard</span>
      </div>
    </div>
  );
};

export default Loader;
