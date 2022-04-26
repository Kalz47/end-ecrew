import React from "react";

export default function Tab({ name, onClick }) {
  return (
    <div
      onClick={onClick}
      className="hover:bg-blue-800 text-blue-800 border-blue-200 hover:text-gray-50 cursor-pointer  h-12  w-48 border rounded-xl text-xl AF flex items-center justify-center   text-center"
    >
      {name}
    </div>
  );
}
