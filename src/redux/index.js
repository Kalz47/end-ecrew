import { combineReducers } from "redux";
import salon from "./salon";
import location from "./location";

const rootReducer = combineReducers({ salon, location });

export default rootReducer;
