/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import {
  GET_TYPES_SUCCESS,
  GET_TYPES_FAIL,
  ADD_TYPE_FAIL,
  GET_SUB_TYPES_FAIL,
} from "../actions/types";
import { ADD_TYPE_SUCCESS } from "../actions/types";
import { GET_SUB_TYPES_SUCCESS } from "../actions/types";
import { ADD_SUB_TYPE_SUCCESS } from "../actions/types";

const initialState = {
  types: [],
  typeLoading: true,
  typeError: null,
  subTypes: [],
  subTypeError: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_TYPES_SUCCESS:
      return {
        types: payload,
        typeLoading: false,
        typeError: null,
      };
    case GET_TYPES_FAIL:
      return {
        typeError: payload,
        typeLoading: false,
      };
    case ADD_TYPE_SUCCESS:
      return {
        typeError: payload,
        typeLoading: false,
      };
    case ADD_TYPE_FAIL:
      return {
        typeError: payload,
        typeLoading: false,
      };
    case GET_SUB_TYPES_SUCCESS:
      return {
        ...state,
        subTypes: payload,
        subTypeError: null,
        typeLoading: false,
      };
    case GET_SUB_TYPES_FAIL:
      return {
        subTypeError: payload,
        typeLoading: false,
      };
    case ADD_SUB_TYPE_SUCCESS:
      return {
        subTypeError: null,
        typeLoading: false,
      };

    default:
      return state;
  }
}
