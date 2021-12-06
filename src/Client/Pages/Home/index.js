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

export default function Home() {
  const dispatch = useDispatch();
  const { salons, salonLoading } = useSelector((state) => state.salon);
  const { locations } = useSelector((state) => state.location);
  const { types, subTypes } = useSelector((state) => state.type);

  const [searchKey, setSearchKey] = useState("");
  const [searchKeyTwo, setSearchKeyTwo] = useState("");
  const [searchKeyThree, setSearchKeyThree] = useState("");
  const [searchKeyThreeNew, setSearchKeyThreeNew] = useState("");

  const [isClearable] = useState(true);

  useEffect(() => {
    dispatch(getAllSalons());
  }, [dispatch]);

  const optionArray = [];

  useEffect(() => {
    dispatch(getLocations());
    dispatch(getTypes());
    dispatch(getSubTypes());
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

  const handleChangeSubType = (selectedOption) => {
    setSearchKeyThreeNew({ selectedOption });
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

  useEffect(() => {
    let sstype = [];
    subTypes &&
      searchKeyTwo &&
      searchKeyTwo.selectedOption &&
      searchKeyTwo.selectedOption.value &&
      subTypes.map((s) => {
        if (
          searchKeyTwo.selectedOption.value &&
          s.subMain === searchKeyTwo.selectedOption.value
        ) {
          sstype.push(s.subType);
        }
      });
    setSearchKeyThree(sstype);
  }, [searchKeyTwo, subTypes]);

  const subTypeArray = [];

  searchKeyThree &&
    searchKeyThree.map((st) => subTypeArray.push({ value: st, label: st }));

  console.log("KEY 3", searchKeyThreeNew);
  console.log("KEY 2", searchKeyTwo);
  console.log("KEY 1", searchKey);

  return (
    <Container className="h-screen">
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
            <div className="md:pb-4">
              <div className="md:border-r border-gray-200 h-full px-4 ">
                <label className="AF text-gray-500 mt-8 md:mt-0 ">
                  Select your sub type
                </label>
                <Select
                  className="md:mt-4 sm:mt-2"
                  options={subTypeArray}
                  defaultInputValue=""
                  isClearable={isClearable}
                  onChange={handleChangeSubType}
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
                  ? (!searchKey || searchKey.selectedOption === null) &&
                    (!searchKeyTwo || searchKeyTwo.selectedOption === null) &&
                    (!searchKeyThreeNew ||
                      searchKeyThreeNew.selectedOption === null) &&
                    salons.map(
                      (salon) =>
                        salon.active === 1 && (
                          <ServiceCard key={salon._id} salon={salon} />
                        )
                    )
                  : "Loading"}

                {salons &&
                  !salonLoading &&
                  searchKey &&
                  searchKey.selectedOption &&
                  searchKey.selectedOption.value &&
                  (!searchKeyTwo || searchKeyTwo.selectedOption === null) &&
                  (!searchKeyThreeNew ||
                    searchKeyThreeNew.selectedOption === null) &&
                  salons
                    .filter(
                      (salon) =>
                        salon.location
                          .toLowerCase()
                          .indexOf(
                            searchKey.selectedOption.value.toLowerCase()
                          ) >= 0
                    )
                    .map(
                      (salon) =>
                        salon.active === 1 && (
                          <ServiceCard key={salon._id} salon={salon} />
                        )
                    )}

                {salons &&
                  !salonLoading &&
                  searchKeyTwo &&
                  searchKeyTwo.selectedOption &&
                  searchKeyTwo.selectedOption.value &&
                  (!searchKey || searchKey.selectedOption === null) &&
                  (!searchKeyThreeNew ||
                    searchKeyThreeNew.selectedOption === null) &&
                  salons
                    .filter(
                      (salon) =>
                        salon.salonType
                          .toLowerCase()
                          .indexOf(
                            searchKeyTwo.selectedOption.value.toLowerCase()
                          ) >= 0
                    )
                    .map(
                      (salon) =>
                        salon.active === 1 && (
                          <ServiceCard key={salon._id} salon={salon} />
                        )
                    )}

                {salons &&
                  !salonLoading &&
                  searchKeyTwo &&
                  searchKeyTwo.selectedOption &&
                  searchKeyTwo.selectedOption.value &&
                  searchKeyThreeNew &&
                  searchKeyThreeNew.selectedOption &&
                  searchKeyThreeNew.selectedOption.value &&
                  (!searchKey || searchKey.selectedOption === null) &&
                  salons
                    .filter(
                      (salon) =>
                        salon.salonType
                          .toLowerCase()
                          .indexOf(
                            searchKeyTwo.selectedOption.value.toLowerCase()
                          ) >= 0 &&
                        salon.salonSubType
                          .toLowerCase()
                          .indexOf(
                            searchKeyThreeNew.selectedOption.value.toLowerCase()
                          ) >= 0
                    )
                    .map(
                      (salon) =>
                        salon.active === 1 && (
                          <ServiceCard key={salon._id} salon={salon} />
                        )
                    )}

                {salons &&
                  !salonLoading &&
                  searchKeyTwo &&
                  searchKeyTwo.selectedOption &&
                  searchKeyTwo.selectedOption.value &&
                  searchKey &&
                  searchKey.selectedOption &&
                  searchKey.selectedOption.value &&
                  (!searchKeyThreeNew ||
                    searchKeyThreeNew.selectedOption === null) &&
                  salons
                    .filter(
                      (salon) =>
                        salon.salonType
                          .toLowerCase()
                          .indexOf(
                            searchKeyTwo.selectedOption.value.toLowerCase()
                          ) >= 0 &&
                        salon.location
                          .toLowerCase()
                          .indexOf(
                            searchKey.selectedOption.value.toLowerCase()
                          ) >= 0
                    )
                    .map(
                      (salon) =>
                        salon.active === 1 && (
                          <ServiceCard key={salon._id} salon={salon} />
                        )
                    )}

                {salons &&
                  !salonLoading &&
                  searchKeyTwo &&
                  searchKeyTwo.selectedOption &&
                  searchKeyTwo.selectedOption.value &&
                  searchKey &&
                  searchKey.selectedOption &&
                  searchKey.selectedOption.value &&
                  searchKeyThreeNew &&
                  searchKeyThreeNew.selectedOption &&
                  searchKeyThreeNew.selectedOption.value &&
                  salons
                    .filter(
                      (salon) =>
                        salon.salonType
                          .toLowerCase()
                          .indexOf(
                            searchKeyTwo.selectedOption.value.toLowerCase()
                          ) >= 0 &&
                        salon.location
                          .toLowerCase()
                          .indexOf(
                            searchKey.selectedOption.value.toLowerCase()
                          ) >= 0 &&
                        salon.salonSubType
                          .toLowerCase()
                          .indexOf(
                            searchKeyThreeNew.selectedOption.value.toLowerCase()
                          ) >= 0
                    )
                    .map(
                      (salon) =>
                        salon.active === 1 && (
                          <ServiceCard key={salon._id} salon={salon} />
                        )
                    )}
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
