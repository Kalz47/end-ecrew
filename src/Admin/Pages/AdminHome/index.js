import React, { useEffect, useState } from "react";
import { TimePicker } from "antd";
import moment from "moment";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllSalons, getLocations } from "../../../actions/salon";

export default function AdminHome() {
  const [tab, setTab] = useState(0);
  const dispatch = useDispatch();
  const { salons, salonLoading } = useSelector((state) => state.salon);

  useEffect(() => {
    dispatch(getAllSalons());
  }, [dispatch]);

  console.log(salons, "admin form");

  return (
    <>
      <div className="flex justify-center flex-row space-x-4">
        <button
          onClick={() => setTab(0)}
          className="py-2  px-6 border border-blue-500 hover:bg-blue-600 hover:text-white text-blue-500 rounded-md mt-4"
        >
          Add Salon
        </button>
        <button
          onClick={() => setTab(1)}
          className="py-2  px-6 border border-blue-500 hover:bg-blue-600 hover:text-white text-blue-500 rounded-md mt-4"
        >
          Add Location
        </button>
      </div>
      <div className={`${tab === 0 ? "block" : "hidden"}`}>
        <form className="bg-white shadow rounded-lg p-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
              <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                <p>
                  <label for="name" className="bg-white text-gray-600 px-1">
                    Salon name *
                  </label>
                </p>
              </div>
              <p>
                <input
                  id="name"
                  autocomplete="false"
                  tabindex="0"
                  type="text"
                  className="py-1 px-1 text-gray-900 outline-none block h-full w-full"
                />
              </p>
            </div>
            <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
              <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                <p>
                  <label for="lastname" className="bg-white text-gray-600 px-1">
                    Contact No *
                  </label>
                </p>
              </div>
              <p>
                <input
                  id="lastname"
                  autocomplete="false"
                  tabindex="0"
                  type="text"
                  className="py-1 px-1 outline-none block h-full w-full"
                />
              </p>
            </div>
            <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
              <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                <p>
                  <label for="username" className="bg-white text-gray-600 px-1">
                    Grade *
                  </label>
                </p>
              </div>
              <p>
                <input
                  id="username"
                  autocomplete="false"
                  tabindex="0"
                  type="text"
                  className="py-1 px-1 outline-none block h-full w-full"
                />
              </p>
            </div>
            <div className="inline-block relative w-64">
              <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>
                  Really long option that will likely overlap the chevron
                </option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div>
              <label
                className="
                w-64
                flex flex-col
                items-center
                px-4
                py-6
                bg-white
                rounded-md
                shadow-md
                tracking-wide
                uppercase
                border border-blue
                cursor-pointer
                hover:bg-purple-600 hover:text-white
                text-purple-600
                ease-linear
                transition-all
                duration-150
            "
              >
                <i className="fa fa-cloud-upload-alt fa-3x"></i>
                <span className="mt-2 text-base leading-normal">
                  Select a file
                </span>
                <input type="file" className="hidden" />
              </label>
            </div>
            <div className="flex flex-row space-x-8">
              <div>
                <label for="name" className="bg-white text-gray-600 px-1">
                  Open Time{" "}
                </label>{" "}
                <TimePicker
                  defaultValue={moment("12:08", "HH:mm")}
                  format="HH:mm"
                />
              </div>
              <div>
                <label for="name" className="bg-white text-gray-600 px-1">
                  Close Time{" "}
                </label>{" "}
                <TimePicker
                  defaultValue={moment("12:08", "HH:mm")}
                  format="HH:mm"
                />
              </div>
            </div>
            <div className="space-x-20">
              <label className="inline-flex items-center mt-3">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-600"
                />
                <span className="ml-2 text-gray-700">A/C</span>
              </label>
              <label className="inline-flex items-center mt-3">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-600"
                />
                <span className="ml-2 text-gray-700">Parking</span>
              </label>
              <label className="inline-flex items-center mt-3">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-600"
                />
                <span className="ml-2 text-gray-700">Wifi</span>
              </label>
            </div>
          </div>
          <div className="border-t mt-6 pt-3">
            <button className="rounded text-gray-100 px-3 py-1 bg-blue-500 hover:shadow-inner hover:bg-blue-700 transition-all duration-300">
              Save
            </button>
          </div>
        </form>
      </div>
      <div className={`p-10 ${tab === 1 ? "block" : "hidden"}`}>
        <form>
          <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1 w-40">
            <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
              <p>
                <label for="name" className="bg-white text-gray-600 px-1">
                  Location *
                </label>
              </p>
            </div>
            <p>
              <input
                id="name"
                autocomplete="false"
                tabindex="0"
                type="text"
                className="py-1 px-1 text-gray-900 outline-none block h-full w-full"
              />
            </p>
          </div>
          <div className="border-t mt-6 pt-3">
            <button className="rounded text-gray-100 px-3 py-1 bg-blue-500 hover:shadow-inner hover:bg-blue-700 transition-all duration-300">
              Save
            </button>
          </div>{" "}
        </form>
      </div>
      <div className="md:grid md:grid-cols-2">
        <div className="p-4 w-full">
          <label for="name" className="bg-white text-gray-600 ml-16">
            Salon List{" "}
          </label>{" "}
          <table className="table-auto w-full my-6">
            <thead>
              <tr>
                <th className="w-1/5 text-center text-gray-600 AF">
                  Salon name
                </th>
                <th className="w-1/5 text-center text-gray-600 AF">Location</th>
                <th className="w-1/5 text-center text-gray-600 AF">
                  Salon Type
                </th>
                <th className="w-1/5 text-center text-gray-600 AF">Edit</th>
                <th className="w-1/5 text-center text-gray-600 AF">Delete</th>
              </tr>
            </thead>
            <tbody>
              {salons && !salonLoading
                ? salons.map((salon) => (
                    <>
                      <tr className="">
                        <td className="text-center text-gray-600 AF">
                          {salon.name}
                        </td>
                        <td className="text-center text-gray-600 AF">
                          {salon.location}
                        </td>
                        <td className="text-center text-gray-600 AF">
                          {salon.salonType}
                        </td>
                        <td className="text-center">
                          <button class="bg-yellow-700 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded inline-flex items-center">
                            <i className="fas fa-edit fill-current w-4 h-4 mr-2"></i>
                            <span className="font-normal">Edit</span>
                          </button>
                        </td>
                        <td className="text-center py-1">
                          <button class="bg-red-700 hover:bg-red-600 text-white font-bold py-1 px-2 rounded inline-flex items-center">
                            <i className="far fa-trash-alt fill-current w-4 h-4 mr-2"></i>
                            <span className="font-normal">Delete</span>
                          </button>
                        </td>
                      </tr>{" "}
                    </>
                  ))
                : "Loading"}
            </tbody>
          </table>
        </div>
        <div>dffdf</div>
      </div>
    </>
  );
}
