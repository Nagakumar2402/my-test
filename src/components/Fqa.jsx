import React, { useState } from "react";
import { IoChevronDown, IoChevronUp } from "../assets/Icons/index";
import faq from "../utils/fqa";

export const Faq = () => {
  const [expanded, setExpanded] = useState([]);

  const toggleFaq = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <section className="max-w-full px-2 py-10 mx-auto md:px-0 bg-green-50">
      <div className="max-w-2xl mx-auto lg:text-center">
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
          Frequently Asked Questions
        </h2>
        <p className="max-w-xl mt-4 text-base leading-relaxed text-gray-600 lg:mx-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
          assumenda
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
      <p className="mt-6 text-center text-gray-600 textbase">
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
