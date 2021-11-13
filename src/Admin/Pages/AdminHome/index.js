import React, { useEffect, useState } from "react";
import { TimePicker } from "antd";
import moment from "moment";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllSalons } from "../../../actions/salon";
import { addSalon, addNewLocation } from "../../../actions/salon";
import { getLocations, getTypes, addSalonType } from "../../../actions/salon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { PORT } from "../../../actions/types";

export default function AdminHome() {
  const [tab, setTab] = useState(0);
  const dispatch = useDispatch();
  const { salons, salonLoading } = useSelector((state) => state.salon);

  useEffect(() => {
    dispatch(getAllSalons());
  }, [dispatch]);

  console.log(salons, "admin form");

  useEffect(() => {
    dispatch(getLocations());
    dispatch(getTypes());
  }, [dispatch]);

  const { addSalonSuc, error } = useSelector((state) => state.salon);
  const { locations, locationsLoading, locationError } = useSelector(
    (state) => state.location
  );
  const { types, typeLoading, typeError } = useSelector((state) => state.type);

  const [name, setName] = useState("");
  const [location, setLocation] = useState(
    locations && !locationsLoading ? locations[0].name : ""
  );
  const [salonType, setSalonType] = useState(
    types && !typeLoading ? types[0].name : ""
  );
  const [contact, setContact] = useState("");

  const [openTime, setOpen] = useState("");
  const [grade, setGrade] = useState("");

  const [closeTime, setClose] = useState("");
  const [wifi, setWifi] = useState(false);
  const [parking, setParking] = useState(false);
  const [ac, setAc] = useState(false);
  const [card, setCard] = useState(false);

  const [image, setImage] = useState("");
  const [addLocation, setAddLocation] = useState("");
  const [sType, setSType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = new FormData();
    data.append("name", name);
    data.append("location", location);
    data.append("salonType", salonType);

    data.append("grade", grade);

    data.append("contact", contact);
    data.append("openTime", openTime);
    data.append("closeTime", closeTime);
    data.append("parking", parking);
    data.append("ac", ac);
    data.append("wifi", wifi);
    data.append("card", card);

    image && data.append("image", image);

    dispatch(addSalon(data));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    } else if (addSalonSuc) {
      toast.success(addSalonSuc);
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }
  }, [error, addSalonSuc]);

  const handleLocationSubmit = (e) => {
    e.preventDefault();

    const data = { addLocation };
    dispatch(addNewLocation(data));
  };

  const handleTypeSubmit = (e) => {
    e.preventDefault();

    const data = { sType };
    dispatch(addSalonType(data));
    setTimeout(() => {
      window.location.reload();
    });
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${PORT}/salon/${id}`);
      toast.success(res);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {error && <h1 className="text-red-500 text-center">{error}</h1>}
      {locationError && (
        <h1 className="text-red-500 text-center">{locationError}</h1>
      )}
      {typeError && (
        <h1 className="text-red-500 text-center">{locationError}</h1>
      )}

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
        <button
          onClick={() => setTab(2)}
          className="py-2  px-6 border border-blue-500 hover:bg-blue-600 hover:text-white text-blue-500 rounded-md mt-4"
        >
          Add Salon Type
        </button>
      </div>
      <div className={`${tab === 0 ? "block" : "hidden"}`}>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow rounded-lg p-6"
        >
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
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  name="contact"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
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
                  name="grade"
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="py-1 px-1 outline-none block h-full w-full"
                />
              </p>
            </div>
            <div className="space-x-8">
              <div className="inline-block relative w-64">
                <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                  <p>
                    <label
                      for="username"
                      className="bg-white text-gray-600 px-1"
                    >
                      Location *
                    </label>
                  </p>
                </div>
                <select
                  onChange={(e) => setLocation(e.target.value)}
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                >
                  {locations &&
                    locations.map((location) => (
                      <option key={location._id} value={location.name}>
                        {location.name}
                      </option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
              </div>
              {/* Set Type */}
              <div className="inline-block relative w-64">
                <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                  <p>
                    <label
                      for="username"
                      className="bg-white text-gray-600 px-1"
                    >
                      Type *
                    </label>
                  </p>
                </div>
                <select
                  onChange={(e) => setSalonType(e.target.value)}
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                >
                  {types &&
                    types.map((type) => (
                      <option key={type._id} value={type.sType}>
                        {type.sType}
                      </option>
                    ))}
                </select>
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
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => setImage(e.target.files[0])}
                />
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
                  onChange={(time, timeString) => setOpen(timeString)}
                />
              </div>
              <div>
                <label for="name" className="bg-white text-gray-600 px-1">
                  Close Time{" "}
                </label>{" "}
                <TimePicker
                  defaultValue={moment("12:08", "HH:mm")}
                  format="HH:mm"
                  onChange={(time, timeString) => setClose(timeString)}
                />
              </div>
            </div>
            <div className="space-x-20">
              <label className="inline-flex items-center mt-3">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-600"
                  onChange={(e) => setAc(e.target.checked)}
                />
                <span className="ml-2 text-gray-700">A/C</span>
              </label>
              <label className="inline-flex items-center mt-3">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-600"
                  onChange={(e) => setParking(e.target.checked)}
                />
                <span className="ml-2 text-gray-700">Parking</span>
              </label>
              <label className="inline-flex items-center mt-3">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-600"
                  onChange={(e) => setWifi(e.target.checked)}
                />
                <span className="ml-2 text-gray-700">Wifi</span>
              </label>
              <label className="inline-flex items-center mt-3">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-600"
                  onChange={(e) => setCard(e.target.checked)}
                />
                <span className="ml-2 text-gray-700">Card</span>
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
        <form onSubmit={handleLocationSubmit}>
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
                value={addLocation}
                onChange={(e) => setAddLocation(e.target.value)}
              />
            </p>
          </div>
          <div className="border-t mt-6 pt-3">
            <button
              // onChange={handleSubmit}
              className="rounded text-gray-100 px-3 py-1 bg-blue-500 hover:shadow-inner hover:bg-blue-700 transition-all duration-300"
            >
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
                <th className="w-1/5 text-center text-gray-600 AF">Active</th>
                <th className="w-1/5 text-center text-gray-600 AF">Deactive</th>
              </tr>
            </thead>
            <tbody>
              {salonLoading && "There is no more salons"}
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
                          <Link to={`/adminEdit/${salon._id}`}>
                            <button class="bg-yellow-700 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded inline-flex items-center">
                              <i className="fas fa-edit fill-current w-4 h-4 mr-2"></i>
                              <span className="font-normal">Edit</span>
                            </button>
                          </Link>
                        </td>
                        <td className="text-center py-1">
                          <button
                            onClick={() => handleDelete(salon._id)}
                            className="bg-red-700 hover:bg-red-600 text-white font-bold py-1 px-2 rounded inline-flex items-center"
                          >
                            <i className="far fa-trash-alt fill-current w-4 h-4 mr-2"></i>
                            <span className="font-normal">Delete</span>
                          </button>
                        </td>
                        <td className="text-center py-1">
                          <button class="bg-green-700 hover:bg-green-600 text-white font-bold py-1 px-2 rounded inline-flex items-center">
                            <i className="far fa-trash-alt fill-current w-4 h-4 mr-2"></i>
                            <span className="font-normal">Active</span>
                          </button>
                        </td>
                        <td className="text-center py-1">
                          <button class="bg-red-700 hover:bg-red-600 text-white font-bold py-1 px-2 rounded inline-flex items-center">
                            <i className="far fa-trash-alt fill-current w-4 h-4 mr-2"></i>
                            <span className="font-normal">Deactive</span>
                          </button>
                        </td>
                      </tr>{" "}
                    </>
                  ))
                : "Loading"}
            </tbody>
          </table>
        </div>
        <div></div>
      </div>

      <div className={`p-10 ${tab === 2 ? "block" : "hidden"}`}>
        <form onSubmit={handleTypeSubmit}>
          <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1 w-40">
            <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
              <p>
                <label for="name" className="bg-white text-gray-600 px-1">
                  Salon Type *
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
                value={sType}
                onChange={(e) => setSType(e.target.value)}
              />
            </p>
          </div>
          <div className="border-t mt-6 pt-3">
            <button
              // onChange={handleSubmit}
              className="rounded text-gray-100 px-3 py-1 bg-blue-500 hover:shadow-inner hover:bg-blue-700 transition-all duration-300"
            >
              Save
            </button>
          </div>{" "}
        </form>
      </div>
    </>
  );
}
