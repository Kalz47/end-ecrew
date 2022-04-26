import axios from "axios";
import React, { useEffect, useState } from "react";
import { PORT } from "../../actions/types";
import Tab from "./AdminHome/Tab";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { getSingleSalon } from "../../actions/salon";
import { useParams } from "react-router-dom";
export default function SalonEdit() {
  const dispatch = useDispatch();
  const { salon, salonLoading } = useSelector((state) => state.salon);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getSingleSalon(id));
  }, []);

  //Add business
  const [business, setBusiness] = useState({
    name: "",
    contactNo: "",
    description: "",
    address: "",
    grade: "",
    type: "",
    subType: "",
    service: false,
    parking: false,
    card: false,
    delivery: false,
    verified: false,
  });
  const [image, setImage] = useState("");

  const [types, setTypes] = useState([]);
  const [subTypes, setSubTypes] = useState([]);
  const {
    name,
    contactNo,
    description,
    address,
    grade,
    type,
    subType,
    parking,
    card,
    service,
    delivery,
    verified,
  } = business;

  useEffect(() => {
    if (salon) {
      setBusiness({
        name: salon.name,
        contactNo: salon.contact,
        description: salon.description,
        address: salon.address,
        grade: salon.grade,
        type: salon.salonType,
        subType: salon.salonSubType,
        service: salon.ac,
        parking: salon.parking,
        card: salon.card,
        delivery: salon.wifi,
        verified: salon.verified,
      });
    }
  }, [salon]);

  const handleOnChange = (e) => {
    setBusiness({ ...business, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const getTypes = async () => {
      const res = await axios.get(PORT + "/type");
      setTypes(res.data);
    };
    getTypes();
  }, []);

  useEffect(() => {
    const getSubTypes = async () => {
      let val;
      for (let i = 0; i < types.length; i++) {
        if (type === types[i].sType) {
          val = types[i]._id;
          console.log(val);
        }
      }
      const res = await axios.get(PORT + `/subType/${val}`);
      console.log(res);
      setSubTypes(res.data);
    };
    if (type) getSubTypes();
  }, [type]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name) {
      toast.error("Business name required");
      return;
    }
    if (!contactNo) {
      toast.error("Business contact number required");
      return;
    }
    if (!address) {
      toast.error("Business address required");
      return;
    }
    if (!type) {
      toast.error("Business type required");
      return;
    }
    if (!subType) {
      toast.error("Business sub type required");
      return;
    }

    let data = new FormData();
    data.append("name", name);
    data.append("salonType", type);

    data.append("grade", grade);

    data.append("contact", contactNo);
    data.append("parking", parking);
    data.append("ac", service);
    data.append("wifi", delivery);
    data.append("card", card);
    data.append("address", address);
    data.append("description", description);
    data.append("salonSubType", subType);
    data.append("verified", verified);

    image && data.append("image", image);

    try {
      const res = await axios.put(PORT + `/salon/${id}`, data);
      console.log(res);
      toast.success("Business updated");
    } catch (error) {
      toast.error("Business updating fail");

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
      <div className="h-16 bg-blue-800 AF  flex items-center justify-center text-white text-2xl">
        Admin Panel
      </div>

      {/* Add business */}
      <div>
        <div className="  AF  flex items-center justify-center text-blue-800 text-2xl mt-4 mb-4">
          Edit Business
        </div>

        <form action="#" method="POST" onSubmit={handleSubmit}>
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Business name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleOnChange}
                    className="mt-1 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 border rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Business contact no
                  </label>
                  <input
                    type="text"
                    name="contactNo"
                    value={contactNo}
                    onChange={handleOnChange}
                    className="mt-1 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 border rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="email-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Business description
                  </label>
                  <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={handleOnChange}
                    className="mt-1 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 border rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="email-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Business address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={address}
                    onChange={handleOnChange}
                    className="mt-1 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 border rounded-md"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="email-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Business grade
                  </label>
                  <input
                    type="text"
                    name="grade"
                    value={grade}
                    onChange={handleOnChange}
                    className="mt-1 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 border rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3" />

                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Type
                  </label>
                  <select
                    value={type}
                    onChange={(e) =>
                      setBusiness({ ...business, type: e.target.value })
                    }
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>Select type</option>
                    {types.map((type) => (
                      <option value={type.sType} key={type._id}>
                        {type.sType}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Sub type
                  </label>
                  <select
                    value={subType}
                    onChange={(e) =>
                      setBusiness({ ...business, subType: e.target.value })
                    }
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>Select sub type</option>
                    {subTypes.map((subType) => (
                      <option value={subType.subType} key={subType._id}>
                        {subType.subType}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Check boxes */}
                <label className="inline-flex items-center mt-3">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600"
                    onChange={(e) =>
                      setBusiness({ ...business, service: e.target.checked })
                    }
                  />
                  <span className="ml-2 text-gray-700">24 Service</span>
                </label>
                <label className="inline-flex items-center mt-3">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600"
                    onChange={(e) =>
                      setBusiness({ ...business, parking: e.target.checked })
                    }
                  />
                  <span className="ml-2 text-gray-700">Parking</span>
                </label>
                <label className="inline-flex items-center mt-3">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600"
                    onChange={(e) =>
                      setBusiness({ ...business, card: e.target.checked })
                    }
                  />
                  <span className="ml-2 text-gray-700">Card</span>
                </label>
                <label className="inline-flex items-center mt-3">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600"
                    onChange={(e) =>
                      setBusiness({ ...business, delivery: e.target.checked })
                    }
                  />
                  <span className="ml-2 text-gray-700">Delivery</span>
                </label>

                <label className="inline-flex items-center mt-3">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600"
                    onChange={(e) =>
                      setBusiness({ ...business, verified: e.target.checked })
                    }
                  />
                  <span className="ml-2 text-gray-700">Verified</span>
                </label>

                {/*File add */}

                <div>
                  <label
                    className="
             w-48
             flex flex-col
             items-center
             px-4
             py-2
             text-center
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
                    {/* <i className="fa fa-cloud-upload-alt fa-3x"></i> */}
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
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                update
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
