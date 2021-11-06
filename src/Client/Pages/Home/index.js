import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { Scrollbars } from "react-custom-scrollbars";
import Container from "../../Components/Container";
import Category from "./Category";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { getAllSalons, getLocations } from "../../../actions/salon";

export default function Home() {
  const dispatch = useDispatch();
  const { salons, salonLoading } = useSelector((state) => state.salon);
  const { locations } = useSelector((state) => state.location);
  const [searchKey, setSearchKey] = useState("");

  const [isClearable] = useState(true);

  useEffect(() => {
    dispatch(getAllSalons());
  }, [dispatch]);

  const optionArray = [];

  useEffect(() => {
    dispatch(getLocations());
  }, [dispatch]);

  locations &&
    locations.map((location) =>
      optionArray.push({ value: location.name, label: location.name })
    );

  const handleChange = (selectedOption) => {
    setSearchKey({ selectedOption });
  };

  // console.log("Locations", searchKey);

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
                options={optionArray}
                defaultInputValue=""
                isClearable={isClearable}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="md:col-span-3 mt-10">
            <Scrollbars style={{ height: 700 }}>
              <div className="space-y-4 px-4">
                <Category />
                {salons && !salonLoading
                  ? searchKey === "" || searchKey.selectedOption === null
                    ? salons.map((salon) => <ServiceCard salon={salon} />)
                    : salons
                        .filter(
                          (salon) =>
                            salon.location
                              .toLowerCase()
                              .indexOf(
                                searchKey.selectedOption.value.toLowerCase()
                              ) >= 0
                        )
                        .map((salon) => <ServiceCard />)
                  : "Loading"}
              </div>
            </Scrollbars>
          </div>
          <div className="md:py-8 ">
            <div className="md:border-l border-gray-200 h-full">hi</div>
          </div>{" "}
        </div>
      </div>
    </Container>
  );
}
