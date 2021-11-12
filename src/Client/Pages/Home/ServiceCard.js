/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import Parking from "../../Components/logo/parking.png";
import AirCond from "../../Components/logo/air-conditioner.png";
import Card from "../../Components/logo/credit-card.png";

import { PORT } from "../../../actions/types";

export default function ServiceCard({ salon }) {
  const [image, setImage] = useState("");

  useEffect(() => {
    setImage(`${PORT}/salon/image/${salon._id}`);
  }, [salon._id]);
  return (
    <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
      <div className="w-full md:w-2/5 h-80">
        {image ? (
          <img
            className="object-center object-cover w-full h-full"
            src={image}
            alt="photo"
          />
        ) : (
          "No Image"
        )}
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
          <div className="text-gray-500 pl-2 AF">
            Contact : <a href={`tel:${salon.contact}`}>{salon.contact}</a>{" "}
          </div>
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
              <img className="w-6 h-6" alt="AirCond" src={AirCond} />
            </div>
          ) : (
            ""
          )}
          {salon.parking ? (
            <div>
              {" "}
              <img className="w-6 h-6" alt="Parking" src={Parking} />
            </div>
          ) : (
            ""
          )}
          {salon.card ? (
            <div>
              {" "}
              <img className="w-6 h-6" alt="Card" src={Card} />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
