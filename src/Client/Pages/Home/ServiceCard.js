/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Parking from "../../Components/logo/parking.png";
import AirCond from "../../Components/logo/air-conditioner.png";

export default function ServiceCard({ salon }) {
  console.log(salon);
  return (
    <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
      <div className="w-full md:w-2/5 h-80">
        <img
          className="object-center object-cover w-full h-full"
          src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
          alt="photo"
        />
      </div>
      <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
        <p className="text-3xl  font-bold AF text-blue-colour-dark">
          {salon.name}
          {salon.grade ? (
            <>
              <span className="text-3xl text-gray-500"> | </span>
              <span className="text-gray-500 text-xl">Grade </span>
              {salon.grade}
            </>
          ) : (
            ""
          )}
        </p>
        <p className="text-base text-gray-400 font-normal AF">
          {salon.location}
        </p>

        <div class="flex flex-row ...">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>{" "}
          <div className="text-gray-500 pl-2 AF">
            Open Time : {salon.openTime}
          </div>
        </div>
        <div class="flex flex-row ...">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>{" "}
          <div className="text-gray-500 pl-2 AF">
            Close Time : {salon.closeTime}
          </div>
        </div>
        <div class="flex flex-row ...">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <div className="text-gray-500 pl-2 AF">Contact : {salon.contact}</div>
        </div>

        {/* sdsd */}

        <div className="flex justify-start space-x-4 pt-3">
          {salon.wifi ? (
            <div className="text-blue-colour-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                />
              </svg>
            </div>
          ) : (
            ""
          )}

          {salon.ac ? (
            <div>
              {" "}
              <img className="w-6 h-6" src={AirCond} />
            </div>
          ) : (
            ""
          )}
          {salon.parking ? (
            <div>
              {" "}
              <img className="w-6 h-6" src={Parking} />
            </div>
          ) : (
            ""
          )}
          {/* 
          <a href="#" className="text-gray-500 hover:text-gray-600">
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a> */}
        </div>
      </div>
    </div>
  );
}
