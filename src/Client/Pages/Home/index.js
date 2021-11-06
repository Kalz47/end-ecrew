import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { Scrollbars } from "react-custom-scrollbars";
import Container from "../../Components/Container";
import Category from "./Category";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { getAllSalons } from "../../../actions/salon";

export default function Home() {
  const dispatch = useDispatch();
  const [isClearable] = useState(true);

  useEffect(() => {
    dispatch(getAllSalons());
  }, [dispatch]);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <Container>
      <div className="bg-gray-50 ">
        <div className="md:grid md:grid-cols-5 h-full ">
          <div className="md:py-8 ">
            <div className="md:border-r border-gray-200 h-full px-4 ">
              <label className="AF text-gray-500 mt-8 md:mt-0 ">
                Select your location
              </label>
              <Select
                className="md:mt-4 sm:mt-2"
                options={options}
                defaultValue={"Select your location"}
                isClearable={isClearable}
              />
            </div>
          </div>
          <div className="md:col-span-3 mt-10">
            <Scrollbars style={{ height: 700 }}>
              <div className="space-y-4 px-4">
                <Category />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
              </div>
            </Scrollbars>
          </div>
          <div className="md:p-8 ">
            <div className="md:border-l border-gray-200 h-full">hi</div>
          </div>{" "}
        </div>
      </div>
    </Container>
  );
}
