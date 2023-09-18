import React, { useState } from "react";
import { motion } from "framer-motion";
import homeVariants from "../utils/homeVariant";
import {useNavigate} from "react-router-dom"

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [verification, setVerification] = useState({
    verified: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, message } = formData;
    

    if (isValidEmail(email)) {
      setVerification({
        verified: true,
        message: "Verification successful. Sending message...",
      });

      const number = "+919971371115";
      const whatsappMessage = `https://wa.me/${number}?text=Hello, I am ${fullName}!%0AEmail: ${email}%0A${message}`;
      navigate("/");
      window.open(whatsappMessage, "_blank");

      setFormData({
        fullName: "",
        email: "",
        message: "",
      });
    } else {
      setVerification({
        verified: false,
        message: "Verification failed. Please enter a valid email address.",
      });
    }
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  return (
    <motion.section
      variants={homeVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="grid w-screen lg:h-screen py-10 lg:py-6 bg-gray-800 place-items-center text-gray-50"
    >
      <div className="grid grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="py-24 md:py-0 md:px-6">
          <h1 className="text-4xl font-bold">Get in touch</h1>
          <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
          <div className="space-y-4">
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>
                Zootopia- The Funyard <br />
                Near Duke Horse Riding <br /> Opposite Urban Akhara Sector 58{" "}
                <br />
                Gurgaon, Haryana
              </span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span>123456789</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>contact@business.com</span>
            </p>
          </div>
        </div>
        <form
          noValidate=""
          className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
          onSubmit={handleSubmit}
        >
          <label className="block">
            <span className="mb-1">Full name</span>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Leroy Jenkins"
              className="block w-full bg-gray-800 rounded-md shadow-sm focus:ring focus:ri"
            />
          </label>
          <label className="block">
            <span className="mb-1">Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="zHt1d@example.com"
              className="block w-full bg-gray-800 rounded-md shadow-sm focus:ring focus:ri"
            />
          </label>
          <label className="block">
            <span className="mb-1">Message</span>
            <textarea
              rows="3"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="block w-full bg-gray-800 rounded-md focus:ring focus:ri"
            ></textarea>
          </label>
          <button
            type="submit"
            className="inline-flex items-center self-center justify-center w-full px-8 py-2 text-lg text-gray-900 bg-teal-400 rounded focus:ring hover:ring focus:ri hover:ri"
          >
            Submit
            <svg
              className="flex-shrink-0 w-4 h-4 ml-3 transition-transform duration-500 ease-in"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"></path>
            </svg>
          </button>
          {verification.message && (
            <p
              className={
                verification.verified
                  ? "text-green-500"
                  : "text-red-500 w-60 text-center mx-auto"
              }
            >
              {verification.message}
            </p>
          )}
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;