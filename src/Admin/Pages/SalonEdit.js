import React from "react";

export default function SalonEdit() {
  return (
    <div className="md:grid md:grid-cols-3">
      <div className="col-start-2 col-span-1 md:p-8 p-2">
        <div className="text-gray-800 text-center AF text-3xl my-4">
          EDIT Form
        </div>
        <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1 mt-6">
          <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
            <p>
              <label for="username" className="bg-white text-gray-600 px-1">
                SALON NAME
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

        <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1 mt-6">
          <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
            <p>
              <label for="username" className="bg-white text-gray-600 px-1">
                LOCATION
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

        <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1 mt-6">
          <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
            <p>
              <label for="username" className="bg-white text-gray-600 px-1">
                Grade
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

        <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1 mt-6">
          <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
            <p>
              <label for="username" className="bg-white text-gray-600 px-1">
                CONTACT
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

        <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1 mt-6">
          <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
            <p>
              <label for="username" className="bg-white text-gray-600 px-1">
                CLOSE TIME
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

        <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1 mt-6">
          <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
            <p>
              <label for="username" className="bg-white text-gray-600 px-1">
                OPEN TIME
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

        <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1 my-6">
          <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
            <p>
              <label for="username" className="bg-white text-gray-600 px-1">
                SALON TYPE
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
        <div className="flex justify-center my-6">
          <div>
            <button class="bg-green-700 hover:bg-green-600 text-white font-bold py-1 px-2 rounded inline-flex items-center mx-8">
              <i className="fas fa-check fill-current w-4 h-4 mr-2"></i>
              <span className="font-normal">Submit</span>
            </button>
          </div>
          <div>
            <button class="bg-red-700 hover:bg-red-600 text-white font-bold py-1 px-2 rounded inline-flex items-center">
              <i className="far fa-window-close fill-current w-4 h-4 mr-2"></i>
              <span className="font-normal">Cancel</span>
            </button>
          </div>
        </div>
      </div>
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
