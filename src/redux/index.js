import { combineReducers } from "redux";
import salon from "./salon";
import location from "./location";
import type from "./type";
import auth from "./auth";

const rootReducer = combineReducers({ salon, location, type, auth });

export default rootReducer;
