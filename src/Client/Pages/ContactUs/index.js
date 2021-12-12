/* eslint-disable react/style-prop-object */
import React, { useState } from "react";
import Iframe from "react-iframe";
import { Link } from "react-router-dom";

export default function ContactUs() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  let data = { email, message };
  const ButtonMailto = ({ mailto, label }) => {
    return (
      <Link
        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        to="#"
        onClick={(e) => {
          window.location = mailto;
          e.preventDefault();
        }}
      >
        {label}
      </Link>
    );
  };

  console.log("uuuu", data);
  return (
    <div>
      <section class="text-gray-600 body-font relative">
        <div class="absolute inset-0 bg-pink-300">
          <Iframe
            width="100%"
            height="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4047271.3007788!2d78.46167936282086!3d7.851731431154796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593cf65a1e9d%3A0xe13da4b400e2d38c!2sSri%20Lanka!5e0!3m2!1sen!2slk!4v1639286930811!5m2!1sen!2slk"
            style="filter: grayscale(1) contrast(1.2) opacity(0.4);"
          ></Iframe>
        </div>
        <div class="container px-5 py-24 mx-auto flex">
          <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
              Contact Us
            </h2>
            <p class="leading-relaxed mb-5 text-gray-600">
              Our team is here to help with any queries or doubts you may have.
              Just call us or email us and we’ll be right with you{" "}
            </p>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                class="w-full bg-white rounded-full border border-gray-300 focus:border-sitetheme-blue focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                class="w-full bg-white rounded border border-gray-300 focus:border-sitetheme-blue focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            {/* <button class="text-white bg-blue-800 border-2 border-blue-800 py-2 px-6 focus:outline-none hover:bg-white hover-text-sitetheme-blue text-lg rounded-full hover:text-blue-800 ">
              Button
            </button> */}
            <div className="mb-6 text-center">
              <ButtonMailto
                label="Submit"
                mailto={`mailto:ecrewdigital@gmail.com?body=${JSON.stringify(
                  data,
                  null,
                  4
                )}`}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
