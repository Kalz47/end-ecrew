import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Join() {
  const [data, setData] = useState({
    name: "",
    location: "",
    contactNo: "",
    description: "",
  });

  const { name, location, contactNo, description } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

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

  return (
    <div>
      <div className="font-mono py-4">
        <div className="container mx-auto">
          <div className="flex justify-center px-6 my-12">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              <div
                className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                // style="background-image: url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')"
              ></div>
              <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                <h3 className="pt-4 text-2xl text-center">Join with us</h3>
                <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                  <div className="mb-4 md:mr-2 ">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      for="firstName"
                    >
                      Salon Name{" "}
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      name="name"
                      value={name}
                      placeholder="Full Name"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4 md:mr-2 ">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      for="firstName"
                    >
                      Location{" "}
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      name="location"
                      value={location}
                      placeholder="Location"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4 md:mr-2 ">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      for="firstName"
                    >
                      Contact Number{" "}
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      name="contactNo"
                      value={contactNo}
                      placeholder="Contact Number"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4 md:mr-2 ">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      for="firstName"
                    >
                      Description{" "}
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      placeholder="Description"
                      name="description"
                      value={description}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-6 text-center">
                    <ButtonMailto
                      label="Send Email"
                      mailto={`mailto:kalanaheshan47@gmail.com?body=${JSON.stringify(
                        data,
                        null,
                        4
                      )}`}
                    />
                  </div>
                  <hr className="mb-6 border-t" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//name location contact number decription
