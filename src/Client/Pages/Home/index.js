import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { Scrollbars } from "react-custom-scrollbars";
import Container from "../../Components/Container";
import Category from "./Category";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { getAllSalons, getLocations, getTypes } from "../../../actions/salon";
import ServiceImage from "../../Components/logo/salon-working-01.png";

export default function Home() {
  const dispatch = useDispatch();
  const { salons, salonLoading } = useSelector((state) => state.salon);
  const { locations } = useSelector((state) => state.location);
  const { types } = useSelector((state) => state.type);

  const [searchKey, setSearchKey] = useState("");
  const [searchKeyTwo, setSearchKeyTwo] = useState("");
  // const [searchKeyThree, setSearchKeyThree] = useState("");

  const [isClearable] = useState(true);

  useEffect(() => {
    dispatch(getAllSalons());
  }, [dispatch]);

  const optionArray = [];

  useEffect(() => {
    dispatch(getLocations());
    dispatch(getTypes());
  }, [dispatch]);

  locations &&
    locations.map((location) =>
      optionArray.push({ value: location.name, label: location.name })
    );

  const handleChange = (selectedOption) => {
    setSearchKey({ selectedOption });
  };

  const handleChangeType = (selectedOption) => {
    setSearchKeyTwo({ selectedOption });
  };
  const typeArray = [];

  types &&
    types.map((type) =>
      typeArray.push({ value: type.sType, label: type.sType })
    );

  // const gradeArray = [
  //   {
  //     label: "Silver",
  //     value: "Silver",
  //   },
  //   {
  //     label: "Gold",
  //     value: "Gold",
  //   },
  //   {
  //     label: "Platinum",
  //     value: "Platinum",
  //   },
  // ];

  // const handleChangeGrade = (selectedOption) => {
  //   setSearchKeyThree({ selectedOption });
  // };

  return (
    <Container>
      <div className="bg-gray-50 ">
        <div className="md:grid md:grid-cols-5 h-full ">
          <div className>
            <div className="md:pt-8 md:pb-4">
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
            <div className="md:pb-4">
              <div className="md:border-r border-gray-200 h-full px-4 ">
                <label className="AF text-gray-500 mt-8 md:mt-0 ">
                  Select your type
                </label>
                <Select
                  className="md:mt-4 sm:mt-2"
                  options={typeArray}
                  defaultInputValue=""
                  isClearable={isClearable}
                  onChange={handleChangeType}
                />
              </div>
            </div>
            {/* <div className="">
              <div className="md:border-r border-gray-200 h-full px-4 ">
                <label className="AF text-gray-500 mt-8 md:mt-0 ">
                  Select your type
                </label>
                <Select
                  className="md:mt-4 sm:mt-2"
                  options={gradeArray}
                  defaultInputValue=""
                  isClearable={isClearable}
                  onChange={handleChangeGrade}
                />
              </div>
            </div> */}
          </div>
          <div className="md:col-span-3 mt-10">
            <Scrollbars style={{ height: 700 }}>
              <div className="space-y-4 px-4">
                <Category />
                {salons && !salonLoading
                  ? searchKey &&
                    searchKey.selectedOption &&
                    searchKey.selectedOption.value
                    ? salons
                        .filter(
                          (salon) =>
                            salon.location
                              .toLowerCase()
                              .indexOf(
                                searchKey.selectedOption.value.toLowerCase()
                              ) >= 0
                        )
                        .map((salon) => (
                          <ServiceCard key={salon._id} salon={salon} />
                        ))
                    : searchKeyTwo &&
                      searchKeyTwo.selectedOption &&
                      searchKeyTwo.selectedOption.value
                    ? salons
                        .filter(
                          (salon) =>
                            salon.salonType
                              .toLowerCase()
                              .indexOf(
                                searchKeyTwo.selectedOption.value.toLowerCase()
                              ) >= 0
                        )
                        .map((salon) => (
                          <ServiceCard key={salon._id} salon={salon} />
                        ))
                    : salons.map((salon) => (
                        <ServiceCard key={salon._id} salon={salon} />
                      ))
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
