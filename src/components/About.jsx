import React from "react";
import Details from "./Details";

const About = () => {
  return (
    <div className="w-full max-w-full px-10 py-5 mx-auto space-y-4 font-bold lg:px-20 lg:pt-20">
      <h1 className="text-4xl font-extrabold leading-[50px] tracking-widest text-[#016A70] font-Oswald ">
        About Us
      </h1>

      <Details />
    </div>
  );
};

export default About;
