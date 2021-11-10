import { TimePicker } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLocations, getSingleSalon, getTypes } from "../../actions/salon";

import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { PORT } from "../../actions/types";

export default function SalonEdit(props) {
  const navigate = useNavigate();

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleSalon(id));
    dispatch(getLocations());
    dispatch(getTypes());
  }, [dispatch, id]);

  const { locations } = useSelector((state) => state.location);
  const { types } = useSelector((state) => state.type);
  const { salon, salonLoading } = useSelector((state) => state.salon);

  const [name, setName] = useState();
  const [location, setLocation] = useState("");
  const [salonType, setSalonType] = useState("");
  const [contact, setContact] = useState("");

  const [openTime, setOpen] = useState("");
  const [grade, setGrade] = useState("");

  const [closeTime, setClose] = useState("");
  const [wifi, setWifi] = useState(false);
  const [parking, setParking] = useState(false);
  const [ac, setAc] = useState(false);
  const [card, setCard] = useState(false);

  const [image, setImage] = useState("");

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

    try {
      const res = axios.put(`${PORT}/salon/${id}`, data);
      console.log(res);
      navigate("/adminHome");
    } catch (error) {
      console.log("Put error", error);
    }
  };

  useEffect(() => {
    if (salon && !salonLoading) {
      setName(salon.name);
      setContact(salon.contact);
      setGrade(salon.grade);
      setLocation(salon.location);
      setSalonType(salon.salonType);
      setOpen(salon.openTime);
      setClose(salon.closeTime);
      setAc(salon.ac);
      setWifi(salon.wifi);
      setParking(salon.parking);
      setCard(salon.card);
    }
  }, [salon, salonLoading, id]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6">
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
                  <label for="username" className="bg-white text-gray-600 px-1">
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
                  <label for="username" className="bg-white text-gray-600 px-1">
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
                defaultValue={openTime && openTime}
                format="HH:mm"
                onChange={(time, timeString) => setOpen(timeString)}
              />
            </div>
            <div>
              <label for="name" className="bg-white text-gray-600 px-1">
                Close Time{" "}
              </label>{" "}
              <TimePicker
                defaultValue={openTime && openTime}
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
                checked={ac}
              />
              <span className="ml-2 text-gray-700">A/C</span>
            </label>
            <label className="inline-flex items-center mt-3">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
                onChange={(e) => setParking(e.target.checked)}
                checked={parking}
              />
              <span className="ml-2 text-gray-700">Parking</span>
            </label>
            <label className="inline-flex items-center mt-3">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
                onChange={(e) => setWifi(e.target.checked)}
                checked={wifi}
              />
              <span className="ml-2 text-gray-700">Wifi</span>
            </label>
            <label className="inline-flex items-center mt-3">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
                onChange={(e) => setCard(e.target.checked)}
                checked={card}
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
  );
}

// ac: false
// card: false
// closeTime: "16:08"==>>
// contact: "0987654321">>
// grade: "Silver"==>>
// location: "Dehiwala">>
// name: "Test3" >>
// openTime: "14:08">>
// parking: true
// salonType: "Beautyaa">>
// wifi: fals
