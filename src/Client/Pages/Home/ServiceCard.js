/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import Parking from "../../Components/logo/ParkingNew.png";
import AirCond from "../../Components/logo/24-hours.png";
import Card from "../../Components/logo/credit-card.png";
// import Delivery from "../../Components/logo/Delivery.png";

import { PORT } from "../../../actions/types";

export default function ServiceCard({ salon }) {
  const [image, setImage] = useState("");

  useEffect(() => {
    setImage(`${PORT}/salon/image/${salon._id}`);
  }, [salon._id]);
  return (
    <div className="w-full md:h-auto h-56 bg-white rounded-lg sahdow-lg overflow-hidden flex flex-row">
      <div className="w-2/5 h-full">
        <img
          className="object-center object-cover w-full h-full"
          src={image}
          alt="photo"
        />
      </div>
      <div className="w-full md:w-3/5 text-left p-2 md:p-4 md:space-y-2">
        {salon.location ? (
          <>
            <div className="flex md:flex-col flex-row h-10 md:h-auto">
              <p className="md:text-3xl text-lg font-bold AF text-blue-colour-dark">
                {salon.name}
                {salon.grade ? (
                  <>
                    <span className="md:text-3xl text-lg text-gray-500">
                      {" "}
                      |{" "}
                    </span>
                    <span className="text-gray-500 md:text-xl text-sm">
                      {/* Grade {salon.grade} */}
                    </span>
                  </>
                ) : (
                  ""
                )}
              </p>

              <p className="md:text-base text-xs text-gray-400 font-normal AF mt-2 md:mt-0 md:pl-0 pl-2">
                {salon.location}
              </p>
            </div>
          </>
        ) : (
          ""
        )}
        {salon.openTime ? (
          <>
            {" "}
            <div className="flex flex-row ...">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="md:h-6 md:w-6 h-4 w-4 mt-1 md:mt-0 text-gray-500"
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
          </>
        ) : (
          ""
        )}
        {salon.closeTime ? (
          <>
            <div class="flex flex-row ...">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="md:h-6 md:w-6 h-4 w-4 mt-1 md:mt-0 text-gray-500"
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
          </>
        ) : (
          ""
        )}
        {salon.contact ? (
          <>
            <div className="flex flex-row ...">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="md:h-6 md:w-6 h-4 w-4 mt-1 md:mt-0 text-gray-500"
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
          </>
        ) : (
          ""
        )}
        {salon.address ? (
          <div className="flex flex-row ...">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="md:h-6 md:w-6 h-4 w-4 mt-1 md:mt-0 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div className="text-gray-500 pl-2 AF">
              Address : {salon.address}
            </div>
          </div>
        ) : (
          ""
        )}
        {salon.verified && (
          <div className="AF font-semibold bg-green-500 w-16 text-center text-sm text-white rounded-lg mt-2">
            <div>Verified</div>
          </div>
        )}
        <div className="flex justify-start space-x-4 pt-2">
          {salon.wifi ? (
            <div className="AF font-semibold bg-green-500 w-16 text-center text-sm text-white rounded-lg mt-2">
              <div>Delivery</div>
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
          {salon.card && (
            <div>
              {" "}
              <img className="w-6 h-6" alt="Parking" src={Card} />
            </div>
          )}
        </div>
        <div className="text-gray-500 pl-2 AF">{salon.description}</div>{" "}
      </div>
    </div>
  );
}
