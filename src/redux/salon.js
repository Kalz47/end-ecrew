/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import {
  GET_ALL_SALONS_SUCCESS,
  GET_SALON_ERROR,
  ADD_SALON_SUCCESS,
  ADD_SALON_FAIL,
  GET_ALL_SALONS_ERROR,
} from "../actions/types";
import { GET_SALON_SUCCESS } from "../actions/types";

const initialState = {
  salons: [],
  salonLoading: true,
  error: null,
  addSalonSuc: null,
  salon: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_SALONS_SUCCESS:
      return {
        salons: payload,
        salonLoading: false,
        error: null,
      };
    case GET_ALL_SALONS_ERROR:
      return {
        error: payload,
        salonLoading: false,
      };
    case GET_SALON_SUCCESS:
      return {
        salon: payload,
        salonLoading: false,
      };
    case GET_SALON_ERROR:
      return {
        error: payload,
        salonLoading: false,
      };
    case ADD_SALON_SUCCESS:
      return {
        addSalonSuc: payload,
        error: null,
      };
    case ADD_SALON_FAIL:
      return {
        error: payload,
      };
    default:
      return state;
  }
}
