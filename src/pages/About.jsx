import React from "react";
import monkey from "../assets/images/monkey.png";

const About = () => {
  return (
    <div className="relative w-screen h-screen mx-auto overflow-hidden ">
      <div
      className="w-full px-10 py-24 mx-auto space-y-4 font-bold md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 lg:px-20 lg:py-20"
    >
      <h1 className="text-4xl pt-14   font-extrabold leading-[50px] tracking-widest text-[#016A70] font-ComicSans ">
        About Us
      </h1>
     
      <section className="px-2 py-16 mx-auto rounded-md shadow-2xl md:px-4 green-top">
      
      <div className="max-w-4xl mx-auto ">
        <div className="flex flex-col items-center justify-center md:flex-row md:space-x-14">
          <div className="relative flex-shrink-0 w-48 h-72">
            <img
              className="relative object-cover w-48 h-48 rounded-full"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </div>
          
          

          <div className="px-3 mt-4 md:px-5 md:mt-0">
            
            <blockquote>
              <p className="h-full font-medium text-justify text-gray-500 font-ComicSans">
                <span className="text-3xl font-bold text-black">"</span> Our
                featured individual is a true advocate for work-life balance,
                excelling as a homemaker and devoted mother of two. In her
                leisure time, she's an avid nature explorer, a green-thumbed
                gardener, and a skilled baker. Her educational journey includes
                a B.Com, M.Com, and a Postgraduate Diploma in Travel and
                Tourism. <br /> <br />
                With a rich 16-year career spanning entrepreneurship and
                startups, she's co-owner of Thakran Farms in Pataudi, Haryana,
                offering unique and memorable experiences in a natural setting.
                Additionally, her achievements include national-level
                recognition as a football player.
                <br /> <br /> This individual's life story is a testament to the
                pursuit of excellence, the beauty of balancing family and
                career, and the joy of connecting with nature.
                <span className="block text-3xl font-bold text-black ">"</span>
              </p>
            </blockquote>
            <p className="text-xl font-semibold text-black mt-7">
              Madhulika Singh
            </p>
            <p className="mt-1 text-base text-gray-500">
              Managing Director - Zootopia - The Funyard
            </p>
          </div>
       
        </div>
      
      </div>
      
    </section>
  
    <div className="fixed hidden top-20 -z-10 -right-28 md:block">
        <img src={monkey} alt="monkey" />
      </div>
    </div>
  
    </div>
  );
};

export default About;
