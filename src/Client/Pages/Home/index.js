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
import axios from "axios";
import {
  GET_ALL_SALONS_SUCCESS,
  PORT,
  SALON_LOADING_FALSE,
  SALON_LOADING_TRUE,
} from "../../../actions/types";
import Loading from "../../Components/logo/Loading.jpeg";

export default function Home() {
  const dispatch = useDispatch();
  const { salons, salonLoading } = useSelector((state) => state.salon);
  const { locations } = useSelector((state) => state.location);
  const { types, subTypes } = useSelector((state) => state.type);

  const [show, setShow] = useState(false);
  const [typeKey, setTypeKey] = useState("");
  const [typeKeyName, setTypeKeyName] = useState("");
  const [subTypeKey, setSubTypeKey] = useState("");
  const [s1, setS1] = useState("");
  const [s2, setS2] = useState("");

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

  useEffect(() => {
    setSubTypeKey("");
  }, [typeKeyName]);

  useEffect(() => {
    const getSalonsByQuery = async () => {
      dispatch({ type: SALON_LOADING_TRUE });
      let s1 = "";
      let s2 = "";
      if (typeKeyName) {
        if (typeKeyName.includes(" ")) {
          let newS1 = typeKeyName.split(" ");
          let trimS1 = [];
          for (let i = 0; i < newS1.length; i++) {
            trimS1.push(newS1[i].trim());
          }

          s1 = trimS1.join("%");
          console.log(s1);
        } else {
          s1 = typeKeyName;
        }
      }

      if (subTypeKey) {
        if (subTypeKey.includes(" ")) {
          let newS2 = subTypeKey.split(" ");
          let trimS2 = [];
          for (let i = 0; i < newS2.length; i++) {
            trimS2.push(newS2[i].trim());
          }

          s2 = trimS2.join("%");
          console.log(s2);
        } else {
          s2 = subTypeKey;
        }
      }

      console.log("s2==>", s2);
      const res = await axios.get(
        `${PORT}/salon?salonType=${s1}&salonSubType=${s2}`
      );
      dispatch({
        type: GET_ALL_SALONS_SUCCESS,
        payload: res.data,
      });
      dispatch({ type: SALON_LOADING_FALSE });

      console.log("salons ====>", res);
    };
    if (typeKeyName) {
      setTimeout(() => {
        getSalonsByQuery();
      }, 10);
    }
  }, [typeKeyName, subTypeKey]);

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
                    onClick={(e) => {
                      setTypeKey(type._id);
                      setTypeKeyName(type.sType);
                    }}
                    className="border rounded-lg p-3 font-sans AF text-md text-center cursor-pointer font-black hover:bg-blue-800 hover:text-white hover:text-lg"
                  >
                    {type.sType}
                  </div>
                </div>
              ))}
            </div>
            <div className="px-16">
              <button
                className="bg-blue-800 px-4 py-2 mt-4 rounded-full flex justify-center w-full AF text-md text-white"
                onClick={handleShow}
              >
                {show ? "Hide" : "Filters"}
              </button>
            </div>
            <div
              className={`md:border-r border-gray-200 h-full px-4 ${
                show ? "block" : "hidden"
              } sm:hidden`}
            >
              {types.map((type) => (
                <div className="pb-4 mt-4">
                  <div
                    onClick={(e) => {
                      setTypeKey(type._id);
                      setTypeKeyName(type.sType);
                    }}
                    className="border rounded-lg p-3 font-sans AF text-md text-center cursor-pointer font-black hover:bg-blue-800 hover:text-white hover:text-lg"
                  >
                    {type.sType}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-3 mt-10">
            <div className={`${show ? "block" : "hidden"} md:block`}>
              <div className="mb-4 px-4 flex justify-center md:space-x-4 flex-col md:flex-row w-full items-center space-y-4 md:space-y-0">
                {subTypes &&
                  subTypes.length > 0 &&
                  subTypes.map((subType) => (
                    <div
                      onClick={(e) => setSubTypeKey(subType.subType)}
                      className="border rounded-full w-48 h-6 flex justify-center items-center flex-col border-blue-400 AF hover:bg-blue-800 hover:text-white"
                    >
                      {subType.subType}
                    </div>
                  ))}
              </div>
            </div>
            <Scrollbars style={{ height: 700 }}>
              <div className="space-y-4 px-4">
                <Category />
                {!salonLoading ? (
                  salons.map(
                    (salon) =>
                      salon.active === 1 && (
                        <ServiceCard key={salon._id} salon={salon} />
                      )
                  )
                ) : (
                  <div
                    className="sm:loading bg-gray-100 opacity-90"
                    style={{ backgroundImage: `url(${Loading})` }}
                  ></div>
                )}
              </div>
            </Scrollbars>
          </div>
          <div className="md:py-8 ">
            <div className="md:border-l border-gray-200 h-full  ">
              {" "}
              <img alt="meaningfull" className="pt-44" src={ServiceImage} />
            </div>
          </div>{" "}
        </div>
      </div>
    </Container>
  );
}
