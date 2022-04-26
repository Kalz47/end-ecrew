/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { Scrollbars } from "react-custom-scrollbars";
import Container from "../../Components/Container";
import Category from "./Category";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllSalons,
  getLocations,
  getSubTypes,
  getTypes,
} from "../../../actions/salon";
import ServiceImage from "../../Components/logo/salon-working-01.png";
import Typed from "react-typed";
import AddCard from "./AddCard";

export default function Home() {
  const dispatch = useDispatch();
  const { salons, salonLoading } = useSelector((state) => state.salon);
  const { locations } = useSelector((state) => state.location);
  const { types, subTypes } = useSelector((state) => state.type);

  const [show, setShow] = useState(false);
  const [typeKey, setTypeKey] = useState("");
  const [subTypeKey, setSubTypeKey] = useState("");

  useEffect(() => {
    dispatch(getAllSalons());
  }, [dispatch]);

  const optionArray = [];

  useEffect(() => {
    dispatch(getLocations());
    dispatch(getTypes());
  }, [dispatch]);

  useEffect(() => {
    if (typeKey) dispatch(getSubTypes(typeKey));
  }, [typeKey]);

  const handleShow = () => {
    setShow(!show);
  };

  console.log("Types", typeKey);

  return (
    <Container className="h-screen">
      <div className="bg-gray-50 ">
        <div className="flex justify-center text-lg AF text-gray-600 font-bold">
          <Typed
            strings={[
              "Engage with customers for free on EC today and Get discovered by millions of people ready to buy, visit and hire.",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </div>
        <div className="md:grid md:grid-cols-5 h-full">
          <div className="">
            <div className="md:border-r border-gray-200 h-full px-4 hidden sm:block">
              {types.map((type) => (
                <div className="pb-4">
                  <div
                    onClick={(e) => setTypeKey(type._id)}
                    className="border rounded-lg p-3 font-sans AF text-md text-center text-center cursor-pointer font-black hover:bg-blue-800 hover:text-white hover:text-lg"
                  >
                    {type.sType}
                  </div>
                </div>
              ))}
            </div>
            <button onClick={handleShow}>{show ? "hide" : "show"}</button>
            <div
              className={`md:border-r border-gray-200 h-full px-4 ${
                show ? "block" : "hidden"
              } sm:hidden`}
            >
              {types.map((type) => (
                <div className="pb-4">
                  <div
                    onClick={(e) => setTypeKey(type._id)}
                    className="border rounded-lg p-3 font-sans AF text-md text-center cursor-pointer font-black hover:bg-blue-800 hover:text-white hover:text-lg"
                  >
                    {type.sType}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-3 mt-10">
            <div className="mb-4 px-4 flex justify-center space-x-4">
              {subTypes &&
                subTypes.length > 0 &&
                subTypes.map((subType) => (
                  <div
                    onClick={(e) => setSubTypeKey(subType.subType)}
                    className="border rounded-full w-48 flex justify-center items-center border-blue-400 AF hover:bg-blue-800 hover:text-white"
                  >
                    {subType.subType}
                  </div>
                ))}
            </div>
            <Scrollbars style={{ height: 700 }}>
              <div className="space-y-4 px-4">
                <Category />
                {!salonLoading
                  ? salons.map(
                      (salon) =>
                        salon.active === 1 && (
                          <ServiceCard key={salon._id} salon={salon} />
                        )
                    )
                  : "Loading"}
              </div>
            </Scrollbars>
          </div>
          <div className="md:py-8 ">
            <div className="md:border-l border-gray-200 h-full">
              {" "}
              <img alt="meaningfull" className="pt-44" src={ServiceImage} />
            </div>
          </div>{" "}
        </div>
      </div>
    </Container>
  );
}
