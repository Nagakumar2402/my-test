import React, { useState } from "react";
import { IoChevronDown, IoChevronUp } from "../assets/Icons/index";
import faq from "../utils/fqa";
const Faq = () => {
  const [expanded, setExpanded] = useState([]);

  const toggleFaq = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <section className="max-w-full px-2 py-20 mx-auto md:px-0 bg-[#F0F0F0]  ">
      <div className="max-w-2xl mx-auto lg:text-center">
        <h2 className="text-3xl font-bold text-gray-700 sm:text-4xl lg:text-5xl">
          Frequently Asked Questions
        </h2>
        <p className="max-w-xl mt-4 text-base leading-normal text-gray-600 lg:mx-auto">
          Here's a list of frequently asked questions (FAQs)
        </p>
      </div>

      <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
        {faq.map((q, i) => (
          <div
            key={i}
            className="transition-all duration-200 border border-gray-400 rounded-md cursor-pointer"
          >
            <button
              type="button"
              className="flex items-start justify-between w-full px-4 py-5 sm:p-6 md:items-center"
              onClick={() => toggleFaq(i)}
            >
              <span className="flex text-lg font-semibold text-black text-start">
                {q.question}
              </span>
              {expanded[i] ? (
                <IoChevronUp className="w-5 h-5 text-gray-500 md:block" />
              ) : (
                <IoChevronDown className="w-5 h-5 text-gray-500 md:block" />
              )}
            </button>
            {expanded[i] && (
              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p className="text-gray-500">{q.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="mt-6 text-base text-center text-gray-600">
        Can&apos;t find what you&apos;re looking for?{" "}
        <a
          href="#"
          title=""
          className="font-semibold text-black hover:underline"
        >
          Contact our support
        </a>
      </p>
    </section>
  );
};

export default Faq;
