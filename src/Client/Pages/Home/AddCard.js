import React from "react";
import Test from "../../Components/logo/logo.png";

const AddCard = () => {
  return (
    <div className="md:h-32 md:w-32 w-16 h-16  rounded-full flex justify-center items-center">
      <img
        className="md:h-32 md:w-32 w-16 h-16 rounded-full flex justify-center items-center"
        src={Test}
        alt=""
      />
    </div>
  );
};

export default AddCard;
