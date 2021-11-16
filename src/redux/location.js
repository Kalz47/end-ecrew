/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import {
  GET_LOCATIONS_SUCCESS,
  GET_LOCATIONS_FAIL,
  ADD_LOCATION_FAIL,
} from "../actions/types";
import { ADD_LOCATION_SUCCESS } from "../actions/types";

const initialState = {
  locations: [],
  locationsLoading: true,
  locationError: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_LOCATIONS_SUCCESS:
      return {
        locations: payload,
        locationLoading: false,
        locationError: null,
      };
    case GET_LOCATIONS_FAIL:
      return {
        locationError: payload,
        locationLoading: false,
      };
    case ADD_LOCATION_SUCCESS:
      return {
        locationError: payload,
        locationLoading: false,
      };
    case ADD_LOCATION_FAIL:
      return {
        locationError: payload,
        locationLoading: false,
      };

    default:
      return state;
  }
}
