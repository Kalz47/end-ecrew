import { combineReducers } from "redux";
import salon from "./salon";
import location from "./location";
import type from "./type";

const rootReducer = combineReducers({ salon, location, type });

export default rootReducer;
