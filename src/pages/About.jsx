import React from "react";
import { motion } from "framer-motion";
import homeVariants from "../utils/homeVariant";

const About = () => {
  return (
    <motion.div
      variants={homeVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="relative w-screen mx-auto text-gray-100 bg-gray-800 md:h-screen"
    >
      <div className="w-full px-10 py-20 mx-auto space-y-4 font-bold md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 lg:px-20 lg:py-20">
        <h1 className="text-4xl pt-14   font-extrabold leading-[50px] tracking-widest text-[#016A70] font-ComicSans ">
          About Us
        </h1>

        <section className="px-2 py-16 mx-auto rounded-md shadow-2xl md:px-4 green-top">
          <div className="max-w-4xl mx-auto ">
            <div className="flex flex-col items-center justify-center md:flex-row md:space-x-14">
              <div className="relative flex-shrink-0 w-48 h-72">
                <img
                  className="relative object-cover w-48 h-48 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                  alt=""
                />
              </div>

              <div className="px-3 mt-4 md:px-5 md:mt-0">
                <blockquote>
                  <p className="h-full font-medium text-justify font-ComicSans">
                    <span className="text-3xl font-bold text-black">"</span> Our
                    featured individual is a true advocate for work-life
                    balance, excelling as a homemaker and devoted mother of two.
                    In her leisure time, she's an avid nature explorer, a
                    green-thumbed gardener, and a skilled baker. Her educational
                    journey includes a B.Com, M.Com, and a Postgraduate Diploma
                    in Travel and Tourism. <br /> <br />
                    With a rich 16-year career spanning entrepreneurship and
                    startups, she's co-owner of Thakran Farms in Pataudi,
                    Haryana, offering unique and memorable experiences in a
                    natural setting. Additionally, her achievements include
                    national-level recognition as a football player.
                    <br /> <br /> This individual's life story is a testament to
                    the pursuit of excellence, the beauty of balancing family
                    and career, and the joy of connecting with nature.
                    <span className="block text-3xl font-bold text-black ">
                      "
                    </span>
                  </p>
                </blockquote>
                <p className="text-xl font-semibold mt-7">Madhulika Singh</p>
                <p className="mt-1 text-base ">
                  Founder of- Zootopia - The Funyard
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default About;
