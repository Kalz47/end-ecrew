import React, { useState } from "react";

export default function AdminHome() {
  const [tab, setTab] = useState(0);

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
        <form class="bg-white shadow rounded-lg p-6">
          <div class="grid lg:grid-cols-2 gap-6">
            <div class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
              <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                <p>
                  <label for="name" class="bg-white text-gray-600 px-1">
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
                  class="py-1 px-1 text-gray-900 outline-none block h-full w-full"
                />
              </p>
            </div>
            <div class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
              <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                <p>
                  <label for="lastname" class="bg-white text-gray-600 px-1">
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
                  class="py-1 px-1 outline-none block h-full w-full"
                />
              </p>
            </div>
            <div class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
              <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                <p>
                  <label for="username" class="bg-white text-gray-600 px-1">
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
                  class="py-1 px-1 outline-none block h-full w-full"
                />
              </p>
            </div>

            <div class="inline-block relative w-64">
              <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>
                  Really long option that will likely overlap the chevron
                </option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div>
              <label
                class="
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
                <i class="fa fa-cloud-upload-alt fa-3x"></i>
                <span class="mt-2 text-base leading-normal">Select a file</span>
                <input type="file" class="hidden" />
              </label>
            </div>
            <div className="space-x-20">
              <label class="inline-flex items-center mt-3">
                <input
                  type="checkbox"
                  class="form-checkbox h-5 w-5 text-gray-600"
                />
                <span class="ml-2 text-gray-700">A/C</span>
              </label>
              <label class="inline-flex items-center mt-3">
                <input
                  type="checkbox"
                  class="form-checkbox h-5 w-5 text-gray-600"
                />
                <span class="ml-2 text-gray-700">Parking</span>
              </label>
              <label class="inline-flex items-center mt-3">
                <input
                  type="checkbox"
                  class="form-checkbox h-5 w-5 text-gray-600"
                />
                <span class="ml-2 text-gray-700">Wifi</span>
              </label>
            </div>
          </div>
          <div class="border-t mt-6 pt-3">
            <button class="rounded text-gray-100 px-3 py-1 bg-blue-500 hover:shadow-inner hover:bg-blue-700 transition-all duration-300">
              Save
            </button>
          </div>
        </form>
      </div>
      <div className={`p-10 ${tab === 1 ? "block" : "hidden"}`}>
        <form>
          <div class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1 w-40">
            <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
              <p>
                <label for="name" class="bg-white text-gray-600 px-1">
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
                class="py-1 px-1 text-gray-900 outline-none block h-full w-full"
              />
            </p>
          </div>
          <div class="border-t mt-6 pt-3">
            <button class="rounded text-gray-100 px-3 py-1 bg-blue-500 hover:shadow-inner hover:bg-blue-700 transition-all duration-300">
              Save
            </button>
          </div>{" "}
        </form>
      </div>
    </>
  );
}
