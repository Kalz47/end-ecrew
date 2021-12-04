import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  PORT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
} from "./types";
import axios from "axios";

export const loginUser = (data) => async (dispatch, history) => {
  const res = await axios.post(`${PORT}/login`, data);
  console.log(res.data);

  try {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    // history.push("/adminHome");
    localStorage.setItem("token", res.data.token);
    res.data.user.role === 1 && localStorage.setItem("role", 1);
  } catch (error) {
    dispatch({
      type: LOGIN_ERROR,
      payload: res.data,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGOUT_SUCCESS,
    });
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  } catch (error) {
    dispatch({
      type: LOGOUT_ERROR,
      payload: error,
    });
  }
};
