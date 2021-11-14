/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  user: null,
  userLoading: true,
  authError: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        authLoading: false,
        user: payload,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        authLoading: false,
        user: null,
        authError: payload,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        authLoading: false,
        user: null,
      };
    case LOGOUT_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        authLoading: false,
        authError: payload,
      };
    default:
      return state;
  }
}
