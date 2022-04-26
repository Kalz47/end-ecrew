import axios from "axios";
import React, { useEffect, useState } from "react";
import { PORT } from "../../../actions/types";
import Tab from "./Tab";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllSalons } from "../../../actions/salon";
import { Link } from "react-router-dom";
import { logout } from "../../../actions/auth";

const AdminHome = () => {
  //common
  const dispatch = useDispatch();
  const { salons, salonLoading } = useSelector((state) => state.salon);
  useEffect(() => {
    dispatch(getAllSalons());
  }, []);

  const [tabs, setTabs] = useState({
    tab1: true,
    tab2: false,
    tab3: false,
    tab4: false,
  });

  const { tab1, tab2, tab3, tab4 } = tabs;

  const handleTab1 = () => {
    setTabs({ ...tabs, tab1: true, tab2: false, tab3: false, tab4: false });
  };
  const handleTab2 = () => {
    setTabs({ ...tabs, tab1: false, tab2: true, tab3: false, tab4: false });
  };
  const handleTab3 = () => {
    setTabs({ ...tabs, tab1: false, tab2: false, tab3: true, tab4: false });
  };
  const handleTab4 = () => {
    setTabs({ ...tabs, tab1: false, tab2: false, tab3: false, tab4: true });
    handleLogout();
  };
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const getTypes = async () => {
      const res = await axios.get(PORT + "/type");
      setTypes(res.data);
    };
    getTypes();
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

  const handleOnChange = (e) => {
    setBusiness({ ...business, [e.target.name]: e.target.value });
  };

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
      const res = await axios.post(PORT + "/salon", data);
      console.log(res);
      toast.success("Business added");
    } catch (error) {
      toast.error("Business adding fail");

      console.log(error);
    }
  };

  //Edit, Delete, Active, Deactivate business

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${PORT}/salon/${id}`);
      toast.success(res);
      dispatch(getAllSalons());
      toast.success("Business deleted");
    } catch (error) {
      console.log(error);
      toast.success("Business deleting error");
    }
  };

  const handleActivate = async (id) => {
    await axios.put(`${PORT}/salon/active/${id}`);
    dispatch(getAllSalons());
    toast.success("Business activated");
  };
  const handleDeactivate = async (id) => {
    await axios.put(`${PORT}/salon/deactivate/${id}`);
    dispatch(getAllSalons());
    toast.success("Business deactivated");
  };

  //Add type

  const [addType, setAddType] = useState("");

  const handleAddType = (e) => {
    setAddType(e.target.value);
  };

  const handleAddTypeSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!addType) {
        toast.error("Add type is empty");
        return;
      }
      const data = { sType: addType };
      const res = await axios.post(PORT + "/type", data);
      if (res.status === 200) {
        toast.success("Type added successful");
        setAddType("");
      } else {
        toast.error("Type adding fail");
      }
    } catch (error) {
      toast.error("Type adding fail");
    }
  };

  //Add sub type
  const [addSubType, setAddSubType] = useState("");
  const [mainType, setMainType] = useState("");

  const handleAddSubTypeSubmit = async (e) => {
    e.preventDefault();
    let val;
    for (let i = 0; i < types.length; i++) {
      if (mainType === types[i].sType) {
        val = types[i]._id;
      }
    }

    try {
      const res = await axios.post(PORT + "/subType", {
        subMain: val,
        subType: addSubType,
      });
      if (res.status === 200) {
        toast.success("Sub type added successful");
      } else {
        toast.error("Sub type adding fail");
      }
    } catch (error) {
      toast.error("Sub type adding fail");
    }
  };

  const handleLogout = () => {
    dispatch(logout());
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

      <div className="h-16 mt-4 flex flex-row justify-around">
        <Tab name="Add Business" onClick={handleTab1} />
        <Tab name="Add Type" onClick={handleTab2} />
        <Tab name="Add Sub Type" onClick={handleTab3} />
        <Tab name="Logout" onClick={handleTab4} />
      </div>

      {/* Add business */}
      {tab1 && (
        <div>
          <div className="  AF  flex items-center justify-center text-blue-800 text-2xl mt-4 mb-4">
            Add Business
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
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
      {/* All business */}
      {tab1 && (
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
                  <th className="w-1/5 text-center text-gray-600 AF">
                    Location
                  </th>
                  <th className="w-1/5 text-center text-gray-600 AF">
                    Salon Type
                  </th>
                  <th className="w-1/5 text-center text-gray-600 AF">Edit</th>
                  <th className="w-1/5 text-center text-gray-600 AF">Delete</th>
                  <th className="w-1/5 text-center text-gray-600 AF">Active</th>
                  <th className="w-1/5 text-center text-gray-600 AF">
                    Deactive
                  </th>
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
                            {salon.active === 0 && (
                              <button
                                class="bg-green-700 hover:bg-green-600 text-white font-bold py-1 px-2 rounded inline-flex items-center"
                                onClick={() => handleActivate(salon._id)}
                              >
                                <span className="font-normal">Active</span>
                              </button>
                            )}
                          </td>
                          <td className="text-center py-1">
                            {salon.active === 1 && (
                              <button
                                class="bg-red-700 hover:bg-red-600 text-white font-bold py-1 px-2 rounded inline-flex items-center"
                                onClick={() => handleDeactivate(salon._id)}
                              >
                                <span className="font-normal">Deactive</span>
                              </button>
                            )}
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
      )}

      {tab2 && (
        <div>
          <div className="  AF  flex items-center justify-center text-blue-800 text-2xl mt-4 mb-4">
            Add type
          </div>
          <form onSubmit={handleAddTypeSubmit}>
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Type name
                    </label>
                    <input
                      type="text"
                      name="addType"
                      value={addType}
                      onChange={handleAddType}
                      className="mt-1 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 border rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-left sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {tab3 && (
        <div>
          <div className="  AF  flex items-center justify-center text-blue-800 text-2xl mt-4 mb-4">
            Add sub type
          </div>

          <form action="#" onSubmit={handleAddSubTypeSubmit}>
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Type
                    </label>
                    <select
                      value={mainType}
                      onChange={(e) => setMainType(e.target.value)}
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
                  <div className="col-span-6 sm:col-span-3" />

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Sub type
                    </label>
                    <input
                      type="text"
                      name="addSubType"
                      value={addSubType}
                      onChange={(e) => setAddSubType(e.target.value)}
                      className="mt-1 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 border rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-left sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AdminHome;
